import axios from "axios"

const baseUrl = "http://localhost:5000/fir-auth-6aadd/us-central1/app";

export const validateGoogleToken = async (token) => {
  try{
    const res = await axios.get(`${baseUrl}/api/users/loginvalidate`, {
      headers: {
        Authorization: "Bearer " + token
      }
    })

    return res.data;
  }catch(error){
    return null;
  }
}