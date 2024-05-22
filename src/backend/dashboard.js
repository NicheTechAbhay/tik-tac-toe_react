import { supabase } from "./db";
async function orgDashboardCounts(org_id) {
  try {
    //   let org_id = 14; // Set the organization ID

    // Count records in the 'org_users' table for the given org_id
    const { count: userCount, error: userError } = await supabase
      .from("org_users")
      .select("*", { count: "exact" })
      .eq("org_id", org_id);

    // Count records in the 'entitlements_package' table for the given org_id
    const { count: entitlementCount, error: entitlementError } = await supabase
      .from("entitlements_package")
      .select("*", { count: "exact" })
      .eq("org_id", org_id);

    // Count records in the 'sites_detail' table for the given org_id
    const { count: sitesDetailCount, error: siteError } = await supabase
      .from("sites_detail")
      .select("*", { count: "exact" })
      .eq("org_id", org_id);

    // Check for any errors during the count operations
    if (userError || entitlementError || siteError) {
      console.error(
        "Error counting records:",
        userError?.message,
        entitlementError?.message,
        siteError?.message
      );
      return {
        errorCode: 1,
        userCount: null,
        entitlementCount: null,
        sitesDetailCount: null,
      }; // Return error code and null counts
    }

    // If fetch was successful, log the counts and return them
    console.log("Total users counted:", userCount);
    console.log("Total entitlements counted:", entitlementCount);
    console.log("Total sites details counted:", sitesDetailCount);
    return {
      errorCode: 0,
      userCount,
      entitlementCount,
      sitesDetailCount,
    }; // Return success code and counts
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error counting records:", error.message);
    return {
      errorCode: 1,
      userCount: null,
      entitlementCount: null,
      sitesDetailCount: null,
    }; // Return a general error code and null counts
  }
}

async function orgUserList(org_id) {
  try {
    // let org_id = 14; // Set the organization ID

    // Fetch the list of users in the 'org_users' table for the given org_id
    const { data: orgUsers, error: orgUsersError } = await supabase
      .from('org_users')
      .select('*')
      .eq('org_id', org_id);

    // Check for any errors during the fetch operation
    if (orgUsersError) {
      console.error("Error fetching organization users list:", orgUsersError.message);
      return {
        errorCode: 1, 
        userList: null
      }; // Return error code and null list
    }

    // Extract user_ids and role_ids from orgUsers for batch fetching
    let userIds = orgUsers.map(orgUser => orgUser.user_id);
    let roleIds = orgUsers.map(orgUser => orgUser.role_id);

    // Fetch all users details in one query
    const { data: users, error: usersError } = await supabase
      .from('users')
      .select('*')
      .in('id', userIds);

    // Check for any errors during the fetch operation
    if (usersError) {
      console.error("Error fetching users details:", usersError.message);
      return {
        errorCode: 1, 
        userList: null
      }; // Return error code and null list
    }

    // Fetch all roles in one query
    const { data: userRoles, error: userRolesError } = await supabase
      .from('user_role')
      .select('*')
      .in('id', roleIds);

    // Check for any errors during the fetch operation
    if (userRolesError) {
      console.error("Error fetching user roles:", userRolesError.message);
      return {
        errorCode: 1, 
        userList: null
      }; // Return error code and null list
    }

    // Create a map of role_id to role for quick lookup
    let roleMap = {};
    userRoles.forEach(role => {
      roleMap[role.id] = role.name;
    });

    // Merge user details with their roles
    let userList = users.map(user => {
      let orgUser = orgUsers.find(orgUser => orgUser.user_id === user.id);
      return {
        ...user,
        role_id: orgUser.role_id, // Include role_id in the user details
        role: roleMap[orgUser.role_id] // Attach role using role_id
      };
    });

    // Log the detailed user list and return it
    console.log("Organization users list with details:", userList);
    return {
      errorCode: 0, 
      userList
    }; // Return success code and detailed user list

  } catch (error) {
    // Handle any unexpected errors
    console.error("Error fetching user list:", error.message);
    return {
      errorCode: 1, 
      userList: null
    }; // Return a general error code and null list
  }
}
async function orgEntitlementList(org_id) {
    try {
      // Fetch the list of entitlements in the 'entitlements_package' table for the given org_id
      const { data: entitlements, error: entitlementsError } = await supabase
        .from("entitlements_package")
        .select("*")
        .eq("org_id", org_id);
  
      // Check for any errors during the fetch operation
      if (entitlementsError) {
        console.error("Error fetching entitlements list:", entitlementsError.message);
        return {
          errorCode: 1,
          entitlementList: null,
        }; // Return error code and null list
      }
  
      // Initialize an array to hold detailed entitlement information
      let entitlementList = [];
  
      // Iterate over each entitlement in the entitlements list
      for (let entitlement of entitlements) {
        // Fetch the entitlement name details
        const { data: entitlementName, error: entitlementNameError } = await supabase
          .from("entitlements_name")
          .select("*")
          .eq("id", entitlement.entitlement_name_id)
          .single(); // Assuming entitlement_name_id is a unique key and we want a single record
  
        // Fetch the entitlement value details
        const { data: entitlementValue, error: entitlementValueError } = await supabase
          .from("entitlements_values")
          .select("value_number")
          .eq("id", entitlement.entitlement_value_id)
          .single(); // Assuming entitlement_value_id is a unique key and we want a single record
  
        // Check for errors during the fetch operations
        if (entitlementNameError || entitlementValueError) {
          console.error(
            "Error fetching entitlement details for entitlement_id:",
            entitlement.id,
            entitlementNameError?.message || entitlementValueError?.message
          );
          continue; // Skip this entitlement and continue with the next one
        }
  
        // Combine the fetched details into a single object
        const detailedEntitlement = {
          ...entitlement,
          entitlementName: entitlementName.name, // Assuming 'name' field exists in 'entitlements_name' table
          entitlementValue: entitlementValue.value_number, // Assuming 'value_number' field exists in 'entitlements_values' table
        };
  
        // Add the detailed entitlement information to the entitlementList
        entitlementList.push(detailedEntitlement);
      }
  
      // Log the detailed entitlement list and return it
      console.log("Organization entitlements list with details:", entitlementList);
      return {
        errorCode: 0,
        entitlementList,
      }; // Return success code and detailed entitlement list
  
    } catch (error) {
      // Handle any unexpected errors
      console.error("Error fetching entitlement list:", error.message);
      return {
        errorCode: 1,
        entitlementList: null,
      }; // Return a general error code and null list
    }
  }

export { orgDashboardCounts, orgUserList ,orgEntitlementList};