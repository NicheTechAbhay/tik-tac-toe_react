import { supabase } from "./db";


async function stateList(country_id) {
    try {
      // Validate the country_id
      if (!country_id) {
        return {
          errorCode: 1,
          message: "Invalid country_id provided",
          data: null,
        };
      }
  
      // Fetch all records from the 'state' table where country_id matches
      const { data: states, error } = await supabase
        .from('state')
        .select('*')
        .eq('country_id', country_id);
  
      // Check for any errors during the fetch operation
      if (error) {
        console.error("Error fetching state details:", error.message);
        return {
          errorCode: 1,
          message: "Error fetching state details",
          data: null,
        };
      } else {
        console.log("State details fetched successfully:", states);
        return {
          errorCode: 0,
          message: "State details fetched successfully",
          data: states,
        };
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error("Unexpected error fetching state details:", error.message);
      return {
        errorCode: 1,
        message: "Unexpected error fetching state details",
        data: null,
      };
    }
  }
  
  export {stateList};