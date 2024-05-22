import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://emsjiuztcinhapaurcrl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtc2ppdXp0Y2luaGFwYXVyY3JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0ODc1MTUsImV4cCI6MjAzMDA2MzUxNX0.79_004dmDW8KA-wXxBD2EP3iwNUu_FhCvumdN4jiCWk';
export const supabase = createClient(supabaseUrl, supabaseKey);
console.log("connected");

export default supabase




// import axios from 'axios';

// // Define your API endpoint
// const API_BASE_URL = 'https://emsjiuztcinhapaurcrl.supabase.co/rest/v1/';

// // Create an instance of Axios with default configuration
// const axiosInstance = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtc2ppdXp0Y2luaGFwYXVyY3JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0ODc1MTUsImV4cCI6MjAzMDA2MzUxNX0.79_004dmDW8KA-wXxBD2EP3iwNUu_FhCvumdN4jiCWk', // Replace 'YOUR_AUTH_TOKEN' with your actual authorization token
//     'Apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVtc2ppdXp0Y2luaGFwYXVyY3JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0ODc1MTUsImV4cCI6MjAzMDA2MzUxNX0.79_004dmDW8KA-wXxBD2EP3iwNUu_FhCvumdN4jiCWk' // Replace 'YOUR_API_KEY' with your actual API key
//   }
// });

// export  {axiosInstance}
