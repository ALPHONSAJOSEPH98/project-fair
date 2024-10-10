import React, { useContext } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { addProjectContextResponse } from '../ContextAPI/ContextShare';
import { getUserProjectsApi } from '../Services/Allapis';

function View() {
  const {addProjectRes ,setAddProjectRes}=useContext(addProjectContextResponse)
  const [projects, setProjects] = useState([])
  const getUserProjects =  async()=>{
    let token = sessionStorage.getItem('token')
   if(token){
    const reqHeader ={
      "Content-Type":"application/json",
      "Authorization":"Bearer " + token
    }
    try{
      const userProjects = await getUserProjectsApi(reqHeader)
    console.log(userProjects.data);
    if(userProjects.status==200){
      setProjects(userProjects.data)
    }
    }
    catch(error){
      console.log(error);
      
    }
   }
    
  }
  useEffect(()=>{
    getUserProjects()
  },[addProjectRes])
  
  return (
    <div>
        <div className="row">
            <div className="col-10 container shadow border mt-4 mb-4 ">
             <div className="row d-flex  ">
                {
                  projects.length>0 ? projects.map(item=>(
                    <div>
                      <div className="col-6 ">
                    <h6 className='mt-2 fs-4'>{projects.title}</h6>
                    <h6>{projects.language}</h6>
                </div>
                <div className="col-6 fs-2 text-end ">
                 <FaRegEdit className='ms-1 text-info '/>
                 <GoLinkExternal className='ms-2 text-success' />
                 <AiFillGithub className='ms-2' />
                 <RiDeleteBin6Line className='ms-2 text-danger' />
                </div>
                    </div>
                  )):
                  <p>no projects</p>
                }
             </div>
            </div>
        </div>
    </div>
  )
}

export default View