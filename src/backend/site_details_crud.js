import { supabase } from "./db";


async function addSites(data) {
    try {
      // let data = {
      //   org_id: 14,
      //   name: "Apple Inc New",
      //   type_id: 1,
      //   address1: "Hills Inc",
      //   address2: "Address 2",
      //   city: "City 1",
      //   pin_code: "12345",
      //   about_site: "Description 1",
      //   status: "Y",
      //   country_id: 1,
      //   state_id: 4,
      // };
  
      // Check for duplicate site names in the organization
      const { data: existingSite, error: duplicateCheckError } = await supabase
        .from("sites_detail")
        .select('id')
        .eq('org_id', data.org_id)
        .eq('name', data.name)
        .single(); // Assuming a single record is expected
  
      // If a duplicate is found, return an error
      if (existingSite) {
        console.error("Duplicate site name found within the organization.");
        return {
          errorCode: 1,
          message: "Duplicate site name",
          data: null,
        };
      }
  
      // Check for errors during the duplicate check
      if (duplicateCheckError && duplicateCheckError.code !== 'PGRST116') { // PGRST116: No rows found
        console.error("Error checking for duplicate site name:", duplicateCheckError.message);
        return {
          errorCode: 1,
          message: "Error checking for duplicate site name",
          data: null,
        };
      }
  
      // Insert new site details if no duplicate is found
      const { data: siteDetails, error: insertError } = await supabase
        .from("sites_detail")
        .insert([
          {
            org_id: data.org_id,
            name: data.name,
            type_id: data.type_id,
            address1: data.address1,
            address2: data.address2,
            city: data.city,
            pin_code: data.pin_code,
            about_site: data.about_site,
            country_id: data.country_id,
            state_id: data.state_id,
            status: data.status,
          },
        ])
        .select();
  
      // Check for errors during the insert operation
      if (insertError) {
        console.error("Error inserting site details:", insertError.message);
        return {
          errorCode: 1,
          message: "Error inserting site details",
          data: null,
        };
      } else {
        console.log("Site details inserted successfully:", siteDetails);
        return {
          errorCode: 0,
          message: "Site details inserted successfully",
          data: siteDetails,
        };
      }
    } catch (error) {
      console.error("Unexpected error:", error.message);
      return {
        errorCode: 1,
        message: "Unexpected error",
        data: null,
      };
    }
  }
  
  async function updateSite(siteId, updateData) {
    try {
      // Validate the input
      if (!siteId || !updateData) {
        console.error('Invalid input: site ID and update data cannot be null');
        return { errorCode: 1, message: "Invalid input", data: null };
      }
  
      // Update site details
      const { data: updatedSite, error: updateError } = await supabase
        .from("sites_detail")
        .update(updateData)
        .eq('id', siteId)
        .select();
  
      // Check for errors during the update operation
      if (updateError) {
        console.error("Error updating site details:", updateError.message);
        return {
          errorCode: 1,
          message: "Error updating site details",
          data: null,
        };
      } else {
        console.log("Site details updated successfully:", updatedSite);
        return {
          errorCode: 0,
          message: "Site details updated successfully",
          data: updatedSite,
        };
      }
    } catch (error) {
      console.error("Unexpected error:", error.message);
      return {
        errorCode: 1,
        message: "Unexpected error",
        data: null,
      };
    }
  }
  async function deleteSite(siteId) {
    try {
      // Validate the input
      if (!siteId) {
        console.error('Invalid input: site ID cannot be null');
        return { errorCode: 1, message: "Invalid input", data: null };
      }
  
      // Start a transaction
      const { data: deleteUsers, error: deleteUsersError } = await supabase
        .from("site_users")
        .delete()
        .eq('site_id', siteId)
        .select();
  
      // Check for errors during the delete operation for site_users
      if (deleteUsersError) {
        console.error("Error deleting users from site_users table:", deleteUsersError.message);
        return {
          errorCode: 1,
          message: "Error deleting users from site_users table",
          data: null,
        };
      }
  
      // Delete site details
      const { data: deletedSite, error: deleteSiteError } = await supabase
        .from("sites_detail")
        .delete()
        .eq('id', siteId)
        .select();
  
      // Check for errors during the delete operation for sites_detail
      if (deleteSiteError) {
        console.error("Error deleting site details:", deleteSiteError.message);
        return {
          errorCode: 1,
          message: "Error deleting site details",
          data: null,
        };
      } else {
        console.log("Site details and associated users deleted successfully:", { deletedSite, deleteUsers });
        return {
          errorCode: 0,
          message: "Site details and associated users deleted successfully",
          data: { deletedSite, deleteUsers },
        };
      }
    } catch (error) {
      console.error("Unexpected error:", error.message);
      return {
        errorCode: 1,
        message: "Unexpected error",
        data: null,
      };
    }
  }
  
  export {addSites,updateSite,deleteSite};