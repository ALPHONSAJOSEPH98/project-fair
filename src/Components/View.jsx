import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
function View() {
  return (
    <div>
        <div className="row">
            <div className="col-10 container shadow border mt-4 mb-4 ">
             <div className="row d-flex  ">
                <div className="col-6 ">
                    <h6 className='mt-2 fs-4'>Project Name</h6>
                </div>
                <div className="col-6 fs-2 text-end ">
                 <FaRegEdit className='ms-1 text-info '/>
                 <GoLinkExternal className='ms-2 text-success' />
                 <AiFillGithub className='ms-2' />
                 <RiDeleteBin6Line className='ms-2 text-danger' />
                </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default View