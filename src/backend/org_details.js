import { supabase } from "./db";
async function fetchOrganizationAndSiteDetails() {
  try {
    // Fetch organization details
    const { data: orgDetails, error: orgError } = await supabase
      .from("org_details")
      .select("*");

    if (orgError) {
      throw orgError;
    }

    // Fetch site details
    const { data: siteDetails, error: siteError } = await supabase
      .from("sites_detail")
      .select("*");

    if (siteError) {
      throw siteError;
    }

    // Count sites for each organization
    const orgsWithSitesCount = orgDetails.map((org) => {
      const sitesCountForOrg = siteDetails.filter(
        (site) => site.org_id === org.id
      ).length;
      return {
        errorcode: 0,
        org_id: org.id,
        org_name: org.name,
        sites_count: sitesCountForOrg,
      };
    });

    return orgsWithSitesCount;
  } catch (error) {
    console.error(
      "Error fetching organization and site details:",
      error.message
    );
    return null;
  }
}
async function organizationSidebarList(search) {
  try {
    // Fetch organization details
    let { data: org_details, error } = await supabase
      .from("org_details")
      .select("*").ilike("name", `%${search}%`);

    if (error) {
      console.error("Error fetching organization details:", error.message);
      return { errorCode: 1, data: null };
    } else {
      console.log("Organization details fetched successfully:", org_details);
      return { errorCode: 0, data: org_details };
    }
  } catch (error) {
    console.error("Error fetching organization details:", error.message);
    return { errorCode: 1, data: null }; // Return a general error code
  }
}
async function organizationSearch() {
  try {
    // Fetch organization details
    let search = "";
    let { data: org_details, error } = await supabase
      .from("org_details")
      .select("*")
      .ilike("name", `%${search}%`);

    if (error) {
      console.error("Error fetching organization details:", error.message);
      return { errorCode: 1, data: null };
    } else {
      console.log("Organization details fetched successfully:", org_details);
      return { errorCode: 0, data: org_details };
    }
  } catch (error) {
    console.error("Error fetching organization details:", error.message);
    return { errorCode: 1, data: null }; // Return a general error code
  }
}

async function fetchOrganizationTypes() {
  try {
    // Fetch organization types
    let { data: org_types, error } = await supabase
      .from("org_types")
      .select("*");

    if (error) {
      console.error("Error fetching organization types:", error.message);
      return { errorCode: 1, data: null };
    } else {
      console.log("Organization types fetched successfully:", org_types);
      return { errorCode: 0, data: org_types };
    }
  } catch (error) {
    console.error("Error fetching organization types:", error.message);
    return { errorCode: 1, data: null }; // Return a general error code
  }
}
async function addOrganization(data) {
  try {
    // Sample organization data
    // const data = {
    //   user_id: 1,
    //   user_role: 1,
    //   name: "Microsoft",
    //   description: "Create a software",
    //   type_id: 1,
    //   status: "Y",
    //   domain: ["microsoft.com", "micro.com"],
    // };

    // Fetch user role
    // let userRole =data.user_role;
    // let { data: user_role, userError } = await supabase
    // .from('user_role')
    // .select('name')
    // .eq('id', `%${userRole}%`)

    // if (userError) {
    //   console.error("Error fetching user role:", userError.message);
    //   return { errorCode: 1, data: null };
    // }

    // Check if user role is 'owner'
    // if (user_role.name === "owner") {
    // Insert organization details
    const { data: insertData, error } = await supabase
      .from("org_details")
      .insert([
        {
          name: data.name,
          description: data.description,
          type_id: data.type_id,
          status: data.status,
        },
      ])
      .select();

    if (error) {
      console.error("Error inserting organization details:", error.message);
      return { errorCode: 1, data: null };
    } else {
      console.log("Organization details inserted successfully:", insertData);

      // Insert domains
      const domainInsertResults = [];
      let org_id=insertData.id;
      for (const domain of data.domain) {
        const { data: insertDomain, error: domainError } = await supabase
          .from("domains")
          .insert([{ name: domain, org_id:org_id}])
          .select();

        if (domainError) {
          console.error("Error inserting domain:", domainError.message);
          domainInsertResults.push({ success: false, error: domainError });
        } else {
          domainInsertResults.push({ success: true, data: insertDomain });
        }
      }
      return { errorCode: 0, data: { insertData, domainInsertResults } };
    }
    // } else {
    //   console.error("User does not have permission to add organization");
    //   return { errorCode: 1, data: null };
    // }
  } catch (error) {
    console.error("Error adding organization:", error.message);
    return { errorCode: 1, data: null };
  }
}

async function updateOrganization(data) {
  try {
    // Fetch organization types
    // let data = {
    //   name: "Microsoft",
    //   description: "Create a software",
    //   type_id: "1",
    //   status: "Y",
    //   domain: ["soumiya@nichetech.com", "shruti@nichetech.com"],
    //   org_id: 12,
    // };

    const { data: updateData, error } = await supabase
      .from("org_details")
      .update({
        name: data.name,
        description: data.description,
        type_id: data.type_id,
        status: data.status,
      })
      .eq("id", data.org_id)
      .select();

    if (error) {
      console.error("Error fetching organization types:", error.message);
      return { errorCode: 1, data: null };
    } else {
      console.log("Organization types fetched successfully:", updateData);

      // Insert each domain into the 'domains' table
      const { errordomains } = await supabase
        .from("domains")
        .delete()
        .eq("org_id", updateData[0].id);
      console.log("errordomains", errordomains);
      const domainInsertResults = [];
      for (const domain of data.domain) {
        const { data: insertdomain, errordomain } = await supabase
          .from("domains")
          .insert([{ name: domain, org_id: updateData[0].id }]) // Assuming insertData is an array and we're taking the first element
          .select();
        if (errordomain) {
          console.error("Error inserting domain:", errordomain.message);
          // Handle the error if needed
          domainInsertResults.push({ success: false, error: errordomain });
        } else {
          domainInsertResults.push({ success: true, data: insertdomain });
        }
      }

      return { errorCode: 0, data: { updateData, domainInsertResults } };
    }
  } catch (error) {
    console.error("Error fetching organization types:", error.message);
    return { errorCode: 1, data: null }; // Return a general error code
  }
}
async function viewOrganization(org_id) {
  try {
    // Fetch organization details
    let { data: orgDetails, error } = await supabase
      .from("org_details")
      .select("*")
      .eq("id", org_id);

    if (error) {
      // If an error occurred during fetch
      console.error("Error fetching organization details:", error.message);
      return { errorCode: 1, data: null }; // Return error code and no data
    } else {
      // If fetch was successful
      console.log("Organization details fetched successfully:", orgDetails);
      return { errorCode: 0, data: orgDetails }; // Return success code and fetched data
    }
  } catch (error) {
    // If an unexpected error occurred
    console.error("Error fetching organization details:", error.message);
    return { errorCode: 1, data: null }; // Return a general error code and no data
  }
}
async function deleteOrganization(org_id) {
  try {
    // Set the organization ID to delete
    // Delete matching domains from 'domains' table
    const { error: domainError } = await supabase
      .from("domains")
      .delete()
      .eq("org_id", org_id);

    // Delete organization details from 'org_details' table
    const { error: orgError } = await supabase
      .from("org_details")
      .delete()
      .eq("id", org_id);

    if (orgError || domainError) {
      // If an error occurred during deletion
      console.error(
        "Error deleting organization:",
        orgError?.message || domainError?.message
      );
      return { errorCode: 1, data: null }; // Return error code and no data
    } else {
      // If deletion was successful
      console.log("Organization and matching domains deleted successfully");
      return { errorCode: 0, data: null }; // Return success code and no data
    }
  } catch (error) {
    // If an unexpected error occurred
    console.error("Error deleting organization:", error.message);
    return { errorCode: 1, data: null }; // Return a general error code and no data
  }
}
async function getUserRole() {
  try {
    // Fetch user roles
    const { data: userRoles, error } = await supabase
      .from("user_role")
      .select("*");

    if (error) {
      // If an error occurred during fetch
      console.error("Error fetching user roles:", error.message);
      return { errorCode: 1, data: null }; // Return error code and no data
    } else {
      // If fetch was successful
      console.log("User roles fetched successfully:", userRoles);
      return { errorCode: 0, data: userRoles }; // Return success code and fetched data
    }
  } catch (error) {
    // If an unexpected error occurred
    console.error("Error fetching user roles:", error.message);
    return { errorCode: 1, data: null }; // Return a general error code and no data
  }
}

export {
  fetchOrganizationAndSiteDetails,
  organizationSidebarList,
  organizationSearch,
  fetchOrganizationTypes,
  addOrganization,
  updateOrganization,
  viewOrganization,
  deleteOrganization,
  getUserRole,
};
