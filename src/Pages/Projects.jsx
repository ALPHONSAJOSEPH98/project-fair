import React, { useEffect, useState } from 'react'
import ProjectCard from '../Components/ProjectCard'
import { FaSearch } from "react-icons/fa";
import { getAllProjectsApi } from '../Services/Allapis';
function Projects() {
  const [projects, setProjects] = useState([])
  const getAllProjects =  async()=>{
    let token = sessionStorage.getItem('token')
   if(token){
    const reqHeader ={
      "Content-Type":"application/json",
      "Authorization":"Bearer " + token
    }
    try{
      const allProjects = await getAllProjectsApi(reqHeader)
    console.log(allProjects.data);
    if(allProjects.status==200){
      setProjects(allProjects.data)
    }
    }
    catch(error){
      console.log(error);
      
    }
   }
    
  }
  useEffect(()=>{
    getAllProjects()
  },[])
  return (
    <div>
       <h2 className='text-center mt-3'>All Projects</h2>
       <div className='w-100'>
       <div className='d-flex justify-content-center col-md-4 col-10 container '>
       <input type="text" className='form-control w-100  mt-3 ' placeholder='search by technology' /> 
       <FaSearch className='mt-4  fs-2  ' style={{marginLeft:"-40px"}} />
       </div>
       </div>
       
      <div className="row">
      {
        projects.length>0 ?projects.map(item=>(<div className=' col mt-5'>
          <ProjectCard projects={item}/>
        </div>)):
        <p>Cant fetch data</p>
      }
      </div>
    </div>
  )
}

export default Projects