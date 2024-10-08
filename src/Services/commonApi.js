// import axios
import axios from 'axios'
// api fetching configuration => get , post put , delete

    // register =>method post , url :localhost:3000/api/register data :email , username password
export const commonAPI= async(httpMethod,url,reqBody,reqHeader)=>{
    let reqConfig ={
        method: httpMethod ,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{
            "Content-Type " :"application/json"
        }
    }



return await axios(reqConfig).then((response)=>{
    return response
})
.catch((error)=>{
    return error
})
}