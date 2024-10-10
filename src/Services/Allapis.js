import {serverURL} from "./serverUrl"
import { commonAPI } from "./commonApi"

export const registerAPI = async(user)=>{
    return await commonAPI('post',`${serverURL}/api/register`,user,"")
}
export const loginAPI = async(user)=>{
    return await commonAPI('post',`${serverURL}/api/login`,user,"")
}
// add projects
export const addProjectApi = async(project,reqHeader)=>{
    return await commonAPI('post',`${serverURL}/api/addProject`,project,reqHeader)
}
// get all user projects

export const getAllProjectsApi = async(reqHeader)=>{
    return await commonAPI('get' , `${serverURL}/api/getAllProjects` ,"" ,reqHeader)
}
// get userProjects 
export const getUserProjectsApi = async(reqHeader)=>{
    return await commonAPI('get' , `${serverURL}/api/getUserProjects` ,"" ,reqHeader)
}

export const getHomeProjectsApi = async()=>{
    return await commonAPI('get' , `${serverURL}/api/getHomeProject` ,"","" )
}
