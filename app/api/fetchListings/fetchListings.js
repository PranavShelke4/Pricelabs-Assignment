import axios from "axios";
import { headers } from "./headers";
import { query } from "./query";

const url = "https://www.booking.com/dml/graphql";

export const fetchListings = async (variables) => {
  console.log("Sending API request to Booking.com...");
  try {
    const response = await axios.post(
      url,
      {
        operationName: "FullSearch",
        query,
        variables,
      },
      { headers }
    );
    console.log("API response received:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching listings:",
      error.message,
      error.response?.data
    );
    throw new Error("Error fetching listings: " + error.message);
  }
};