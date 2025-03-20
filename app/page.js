"use client";

import { useState } from "react";

export default function Home() {
  const [address, setAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [pageSize, setPageSize] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [listings, setListings] = useState([]);
  const [csvBlob, setCsvBlob] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setListings([]);
    setCsvBlob(null);

    try {
      const response = await fetch("/api/fetchListings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ address, latitude, longitude, pageSize }),
      });

      if (response.ok) {
        const { listings: fetchedListings } = await response.json();

        // Add Hotel Link to each listing
        const updatedListings = fetchedListings.map((listing) => {
          const pageName = listing["Page Name"] || "N/A";
          const hotelLink =
            pageName !== "N/A"
              ? `https://www.booking.com/hotel/in/${pageName}`
              : "N/A";
          return {
            ...listing,
            "Hotel Link": hotelLink,
          };
        });

        // Create a CSV from the updated listings
        const headers = [
          "Listing ID",
          "Listing Title",
          "Page Name",
          "Amount Per Stay",
          "Hotel Link",
        ];
        const csvRows = [
          headers.join(","), // Header row
          ...updatedListings.map((listing) =>
            headers
              .map((header) => {
                // Convert value to string and handle undefined/null
                const value = listing[header] ?? "N/A"; // Fallback to "N/A" if undefined or null
                const stringValue = String(value); // Convert to string
                // Escape commas in the values to prevent CSV issues
                return stringValue.includes(",")
                  ? `"${stringValue}"`
                  : stringValue;
              })
              .join(",")
          ),
        ];
        const csvText = csvRows.join("\n");
        const newBlob = new Blob([csvText], { type: "text/csv" });

        setCsvBlob(newBlob); // Store the CSV blob for download
        setListings(updatedListings); // Store the updated listings for display
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "An error occurred");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (csvBlob) {
      const url = window.URL.createObjectURL(csvBlob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "listings.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Fetch Listings
          </h1>
          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="e.g., Bangalore"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Latitude
              </label>
              <input
                type="number"
                step="any"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="e.g., 12.9716"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Longitude
              </label>
              <input
                type="number"
                step="any"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="e.g., 77.5946"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Page Size
              </label>
              <input
                type="number"
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="e.g., 50"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 rounded-md text-white transition duration-200 ${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  Fetching...
                </span>
              ) : (
                "Fetch Listings"
              )}
            </button>
          </form>
        </div>

        {/* Listings Section */}
        {listings.length > 0 && (
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Listings ({listings.length})
              </h2>
              <button
                onClick={handleDownload}
                disabled={!csvBlob}
                className={`py-2 px-4 rounded-md text-white transition duration-200 ${
                  !csvBlob
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                }`}
              >
                Download CSV
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((listing, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {listing["Listing Title"]}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Listing ID:</span>{" "}
                    {listing["Listing ID"]}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Page Name:</span>{" "}
                    {listing["Page Name"]}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Amount Per Stay:</span>{" "}
                    {listing["Amount Per Stay"]}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Hotel Link:</span>{" "}
                    {listing["Hotel Link"] !== "N/A" ? (
                      <a
                        href={listing["Hotel Link"]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View Hotel
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
