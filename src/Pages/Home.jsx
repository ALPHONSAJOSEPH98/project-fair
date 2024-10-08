import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
import { getHomeProjectsApi } from '../Services/Allapis'


function Home() {
  let token = sessionStorage.getItem("token")
  const [projects, setProjects] = useState([])
  const getHomeProjects =  async()=>{
    
    try{
      const homeProjects = await getHomeProjectsApi()
    console.log(homeProjects.data);
    if(homeProjects.status==200){
      setProjects(homeProjects.data)
    }
    }
    catch(error){
      console.log(error);
      
    }
   }
    
   useEffect(()=>{
    getHomeProjects()
  },[])

  return (
    <div>
        <div className='d-flex mt-5 justify-content-around ms-5' >
            <div className='col-4' >
               <h3>Project Fair</h3> 
               <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, culpa accusamus? Voluptas vel totam ipsa, vitae iste, accusantium dolorem hic aliquid inventore consectetur beatae rerum, modi id nobis officiis sint!</p>
            </div>
            <div className='col-6 ms-2 '>
             <img className='w-75 ' src="https://www.ntaskmanager.com/wp-content/uploads/2020/02/What-is-a-Project-1-scaled.jpg" alt="" />
            </div>
        </div>
         {
          token ? 
          <div className='text-center mt-5 '>
            <Link to={'/dashboard'} >
            <button className='btn btn-outline-info'> View Dashboard</button>
            </Link>
            
         </div>
         :
         <div className='text-center mt-5 '>
            <Link to={'/login'} >
            <button className='btn btn-info'> Get Started</button>
            </Link>
            
         </div>
         }

         <div>
           
         </div>
   
         <div>
          <h2 className='text-center mt-4'>Explore Our Project</h2>
          <div className=" row">
            {
              projects.length>0? projects.map(item=>(
                <div className='col'>
                  <ProjectCard projects={item} />
                </div>
              ))
              :
              <p>cant fetch data</p>
            }
          </div>
          
             <div className='text-center mt-4 mb-3'>
            <Link to={'/Projects'}>
            <button className='btn btn-outline-info mt-4'>View all projects</button>
            </Link>
           </div>
         
          
       
         </div>
          
    </div>
  )
}

export default Home