import {supabase} from './db';



// Function for logging in
async function Login(email, password) {
    try {
      // Fetch organization details
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
  
      if (error) {
        if (error.message === "Invalid login credentials") {
          console.error("Invalid login credentials");
          return { errorCode: 1, message: error.message };
        } else {
          console.error("Error signing in:", error.message);
          return { errorCode: 1, message: error.message };
        }
      } else {
        console.log("User signed in successfully:", data.user);
        return { errorCode: 0, data: data };
      }
    } catch (error) {
      console.error(
        "Error fetching organization and site details:",
        error.message
      );
      return { errorCode: -1, data: null }; // Return a general error code
    }
  }

export { Login };


