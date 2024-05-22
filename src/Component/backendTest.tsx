import React, { useEffect  } from "react";
import {orgDashboardCounts} from '../backend/dashboard'
import {addOrganization} from '../backend/org_details'

const ApiTrial: React.FC = () => {
    const org_id = 14;

    useEffect(() => {

        const fetchData = async () => {
            try {
                // const data = await NAME_OF_API_FUNCTION(DATA -IF PRESENT - THEN PASSED HERE);
                const data = await orgDashboardCounts(org_id);

                if (data) {
                    console.log('DATA from API', data);//Console to check if api works

                } else {
                    console.log("ERRRRRRRRRRRRRR");
                }
            } catch (error: any) {
                console.error("Errorrrrrrrr", error.message);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {

        const fetchData = async () => {
          
          
        const data = {
          "user_id": 1,
          "user_role": 1,
          "name": "organizationName",
          "description": "message",
          "type_id": 1,
          "status": "Y",
          "domain":["dsa.ds","ddd.dd"],
        };
        
        try {
          const result = await addOrganization(data); 
          console.log(result);
          
          if(result.data != null)
            {
              
              console.log("Success" , result)
              
              
            }
        } catch (error) {
          console.error("API call failed:", error);
        }
          
        };
    
        fetchData();
      }, []);

      
    return (
        <>
            <h1>code running...</h1>
        </>
    );
};

export default ApiTrial;