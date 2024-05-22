import { supabase } from "./db";

async function getSiteUserRole(user_id,site_id) {

     // Validate the input
     if (!user_id || !site_id) {
       console.error('Invalid input: user ID and site ID cannot be null');
       return { errorCode: 1, data: null };
     }
   
     try {
       // Fetch the user details from the 'site_users' table based on user ID and site ID
       const { data: siteUser, error: siteUserError } = await supabase
         .from('site_users')
         .select('role_id')
         .eq('site_id', site_id)
         .eq('user_id', user_id)
         .single(); // Assuming a single record is returned
   
       // Check for errors during the fetch operation
       if (siteUserError) {
         console.error('Error fetching user details from site:', siteUserError.message);
         return { errorCode: 1, data: null };
       }
   
       // Extract the role_id from the fetched data
       const role_id = siteUser.role_id;
   
       // Fetch the role details from the 'user_role' table based on role_id
       const { data: userRole, error: userRoleError } = await supabase
         .from('user_role')
         .select('*')
         .eq('id', role_id)
         .single(); // Assuming a single record is returned
   
       // Check for errors during the fetch operation
       if (userRoleError) {
         console.error('Error fetching user role details:', userRoleError.message);
         return { errorCode: 1, data: null };
       }
   
       // Log the user role details and return them
       console.log('User role details fetched successfully:', userRole);
       return { errorCode: 0, data: userRole };
   
     } catch (error) {
       // Log any unexpected errors
       console.error('Unexpected error fetching user role:', error);
       return { errorCode: -1, data: null };
     }
   }

// Function to add a user to sites based on email or name
async function addUserToSites(UserData) {
  // Validate the input
  if (!UserData.org_id) {
    console.error('Invalid input: org_id cannot be null or empty');
    return { errorCode: 1, data: null };
  }

  try {
    let users;
    let selectError;

    // Check if the email is provided and not empty
    if (UserData.email && UserData.email !== '') {
      // Select the user from the 'users' table using the email
      ({ data: users, error: selectError } = await supabase
        .from('users')
        .select('*')
        .eq('email', UserData.email));

      // Check for errors during the select operation
      if (selectError) {
        console.error('Error while selecting users by email:', selectError.message);
        return { errorCode: 1, data: null };
      }
    } 
    // If email is not provided, check if both firstname and lastname are provided
    else if (UserData.firstname && UserData.lastname) {
      // Select the user from the 'users' table using the firstname and lastname
      ({ data: users, error: selectError } = await supabase
        .from('users')
        .select('*')
        .eq('firstname', UserData.firstname)
        .eq('lastname', UserData.lastname));      
      
      // Check for errors during the select operation
      if (selectError) {
        console.error('Error while selecting users by name:', selectError.message);
        return { errorCode: 1, data: null };
      }
    } 
    // If neither email nor both firstname and lastname are provided
    else {
      console.error('Please provide either an email or both firstname and lastname');
      return { errorCode: 1, data: null };
    }

    // Check if no users were found
    if (!users || users.length === 0) {
      console.log('No such user found');
      return { errorCode: 1, data: null };
    } else {
      // Check if the user is part of the organization
      let { data: org_users, error: orgSelectError } = await supabase
        .from('org_users')
        .select('*')
        .eq('user_id', users[0].id)
        .eq('org_id', UserData.org_id);

      if (orgSelectError) {
        console.error('Error while selecting org_users:', orgSelectError.message);
        return { errorCode: 1, data: null };
      } else {
        if (org_users && org_users.length > 0) {
          // Check if the user is already part of the sites
          let { data: site_users, error: siteSelectError } = await supabase
            .from('site_users')
            .select('*')
            .eq('user_id', users[0].id);     
          
          if (siteSelectError) {
            console.error('Error while checking site users:', siteSelectError.message);
            return { errorCode: 1, data: null };
          } else {
            // If user is not in the sites, send an invitation
            if (!site_users || site_users.length === 0) {
              console.log('Send invitation email to user to join the sites');
              // Add email function here to send an invitation to the user
              // email logic goes here
              return { errorCode: 0, data: 'Invitation sent' };
            } else { 
              // If user is already in the sites
              console.log('User is already in the sites');
              return { errorCode: 0, data: 'User already in sites' };
            }
          }
        } else {
          console.log('User is not in the organization, please add this user to the organization first');
          return { errorCode: 1, data: null };
        }
      }
    }
  } catch (error) {
    // Log any unexpected errors
    console.error('Unexpected error during user addition:', error);
    return { errorCode: -1, data: null };
  }
}

// Function to update a user's role in the 'site_users' table
async function modifyUserOfSites(UserData) {
  // Validate inputs
  if (!UserData.user_id || !UserData.role_id) {
    console.error('Invalid input: user_id and role_id cannot be null');
    return { errorCode: 1, data: null };
  }

  try {
    // Update the role_id of the user in the 'site_users' table based on user_id
    const { data, error } = await supabase
      .from('site_users')
      .update({ role_id: UserData.role_id })
      .eq('user_id', UserData.user_id)
      .select();

    // Check for errors during the update operation
    if (error) {
      console.error('Error while updating user role:', error.message);
      return { errorCode: 1, data: null };
    } else {
      console.log('User role updated successfully:', data);
      return { errorCode: 0, data: data };
    }
  } catch (error) {
    // Log any unexpected errors
    console.error('Unexpected error during role update:', error);
    return { errorCode: -1, data: null };
  }
}

// Function to remove a user from the 'site_users' table based on user ID
async function removeUserFromSites(id) {
  // Validate the input
  if (!id) {
    console.error('Invalid input: user ID cannot be null or empty');
    return { errorCode: 1, data: null };
  }

  try {
    // Remove the user from the 'site_users' table based on user ID
    const { error } = await supabase
      .from('site_users')
      .delete()
      .eq('user_id', id);

    // Check for errors during the delete operation
    if (error) {
      console.error('Error while removing user from sites:', error.message);
      return { errorCode: 1, data: null };
    } else {
      console.log('User removed successfully from sites');
      return { errorCode: 0, data: 'User removed successfully' };
    }
  } catch (error) {
    // Log any unexpected errors
    console.error('Unexpected error during user removal:', error);
    return { errorCode: -1, data: null };
  }
}
   export {
    getSiteUserRole,
    addUserToSites,
    modifyUserOfSites,
    removeUserFromSites
  }