import axios from 'axios';

const url = "http://localhost:5000"
export const register = async (formValue) => {

    if(Object.values(formValue).some(x => x === null || x === '')){
        return "Some information is missing";
    }

    try {
      // make axios post request
      const res = await axios({
        method: "post",
        url: `${url}/api/v1/register`,
        data: formValue,
        headers: { "Content-Type": "application/json" },
      });
      return res.data;
    } catch(error) {
      return {
        status: error.response.status,
        ...error.response.data
      }    
    }

  }


 export const login = async(formValue) => {

    if(Object.values(formValue).some(x => x === null || x === '')){
      return "Some information is missing";
    }

    try {
      // make axios post request
      const res = await axios({
        method: "post",
        url: `${url}/api/v1/login`,
        data: formValue,
        headers: { "Content-Type": "application/json" },
      });
      return res.data;
    } catch(error) {
        return {
          status: error.response.status,
          ...error.response.data
        }
        
    }
    
   
  }

  export const userInfo = async(token) => {

    if(token === undefined){
        return "Some information is missing";
    }
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url:`${url}/api/v1/user`,
        headers: { authorization: token },
      });
      return res.data;
    } catch(error) {
      return {
        status: error.response.status,
        ...error.response.data
      }
    }
    
   
  }



  export const getAvailableAttendanceList = async(token) => {

    if(token === undefined){
        return "Some information is missing";
    }
    try {
      // make axios post request
      const res = await axios({
        method: "get",
        url:`${url}/api/v1/user/attendance/list`,
        headers: { authorization: token },
      });
      return res.data;
    } catch(error) {
      return {
        status: error.response.status,
        ...error.response.data
      }
    }
    
   
  }

  export const postEventAttendances = async(file,EID,token) => {

    if(token === undefined){
        return "Some information is missing";
    }
    try {
      const formData = new FormData(); 

      // Update the formData object 
      formData.append( 
        "studentlist", 
        file
      ); 
      formData.append( 
        "EID", 
        EID
      ); 
      
      // make axios post request
      const res = await axios({
        method: "post",
        url:`${url}/api/v1/user/attendance`,
        data: formData,
        headers: { authorization: token },
      });
      return res.data;
    } catch(error) {
      return {
        status: error.response.status,
        ...error.response.data
      }
    }
    
   
  }

  export const addEvent = async(event,token) => {

    if(token === undefined){
        return "Some information is missing";
    }
    try {
      // make axios post request
      const res = await axios({
        method: "post",
        url:`${url}/api/v1/user/event`,
        data: event,
        headers: { authorization: token },
      });
      return res.data;
    } catch(error) {
      return {
        status: error.response.status,
        ...error.response.data
      }
    }
    
   
  }



