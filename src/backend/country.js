import { supabase } from "./db";


async function countryList() {
    try {
      // Fetch all records from the 'country' table
      const { data: countries, error } = await supabase
        .from('country')
        .select('*');
  
      // Check for any errors during the fetch operation
      if (error) {
        console.error("Error fetching country details:", error.message);
        return {
          errorCode: 1,
          message: "Error fetching country details",
          data: null,
        };
      } else {
        console.log("Country details fetched successfully:", countries);
        return {
          errorCode: 0,
          message: "Country details fetched successfully",
          data: countries,
        };
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error("Unexpected error fetching country details:", error.message);
      return {
        errorCode: 1,
        message: "Unexpected error fetching country details",
        data: null,
      };
    }
  }
  export {countryList};