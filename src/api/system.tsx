import React from 'react';
import axios from 'axios';
 export const addService=async(newBusiness:any) => { 
    try {
        const resp = await axios.post('http://localhost:3333/system',newBusiness);
        console.log(resp.data);
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
};



