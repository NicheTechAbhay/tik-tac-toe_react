import { supabase } from "./db";

async function fetchSiteType() {
    try {
      // Fetch site types
      let { data: siteTypes, error } = await supabase
        .from("site_types")
        .select("*");
  
      // Check for errors during fetch
      if (error) {
        console.error("Error fetching site types:", error.message);
        // Return error response
        return {
          errorCode: 1,
          message: "Error fetching site types",
          data: null
        };
      } else {
        // Log successful fetch
        console.log("Site types fetched successfully:", siteTypes);
        // Return success response with fetched data
        return {
          errorCode: 0,
          message: "Site types fetched successfully",
          data: siteTypes
        };
      }
    } catch (error) {
      // Log unexpected errors
      console.error("Unexpected error fetching site types:", error.message);
      // Return error response for unexpected errors
      return {
        errorCode: 1,
        message: "Unexpected error fetching site types",
        data: null
      };
    }
  }
  export {fetchSiteType}