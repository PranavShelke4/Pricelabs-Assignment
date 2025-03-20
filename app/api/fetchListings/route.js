import { NextResponse } from "next/server";
import { getVariables } from "./variables";
import { fetchListings } from "./fetchListings";

export async function POST(request) {
  try {
    // Parse the request body
    const { address, latitude, longitude, pageSize } = await request.json();
    console.log("Request body:", { address, latitude, longitude, pageSize });

    // Validate input
    if (!address || !latitude || !longitude || !pageSize) {
      console.log("Validation failed: Missing required parameters");
      return NextResponse.json(
        { message: "Missing required parameters" },
        { status: 400 }
      );
    }

    // Generate variables for the API request
    const variables = getVariables({ address, latitude, longitude, pageSize });

    // Fetch listings
    let data;
    try {
      data = await fetchListings(variables);
    } catch (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    // Parse listings
    console.log("Parsing API response...");
    if (
      !data ||
      !data.data ||
      !data.data.searchQueries ||
      !data.data.searchQueries.search ||
      !data.data.searchQueries.search.results
    ) {
      console.error("No listings found in the response:", data);
      return NextResponse.json(
        { message: "No listings found in the response" },
        { status: 500 }
      );
    }

    const results = data.data.searchQueries.search.results;

    console.log("Results:", results);

    const listings = results.map((result) => ({
      "Listing ID": result.basicPropertyData?.id || "N/A",
      "Listing Title": result.displayName?.text || "N/A",
      "Page Name": result.basicPropertyData?.pageName || "N/A",
      "Amount Per Stay":
        result.priceDisplayInfoIrene?.priceBeforeDiscount?.displayPrice
          ?.amountPerStay?.amount || "N/A",
    }));

    if (listings.length === 0) {
      console.error("No listings to return");
      return NextResponse.json(
        { message: "No listings found" },
        { status: 500 }
      );
    }

    console.log("Parsed listings:", listings);

    // Return the listings as a JSON response
    return NextResponse.json({ listings }, { status: 200 });
  } catch (error) {
    console.error("Unexpected error in API route:", error.message);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
