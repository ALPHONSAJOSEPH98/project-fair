import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import { FaSearch } from "react-icons/fa";
function Projects() {
  return (
    <div>
       <h2 className='text-center mt-3'>All Projects</h2>
       <div className='w-100'>
       <div className='d-flex justify-content-center col-md-4 col-10 container '>
       <input type="text" className='form-control w-100  mt-3 ' placeholder='search by technology' /> 
       <FaSearch className='mt-4  fs-2  ' style={{marginLeft:"-40px"}} />
       </div>
       </div>
       
      <div className='mt-5'>
        <ProjectCard/>
      </div>
    </div>
  )
}

export default Projects