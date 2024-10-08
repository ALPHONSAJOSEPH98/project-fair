import React, { useState } from 'react'
import { FiUpload } from "react-icons/fi";
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function Profile() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div >
        <div className="row">
            <div className="col d-flex justify-content-between ">
                <h5 className='text-center mt-3 '>Profile Update</h5>
                 <button  onClick={toggleOpen} className='border-0 p-0 bg-light  fs-3'><FiUpload className='text-info' /></button>
            </div>
            <MDBCollapse open={isOpen}>
            <div className='text-center pb-5 mt-3'>
            <label >
                <input type="file" style={{display:'none'}} />
                <img width={200} height={200} className='rounded-circle mb-4' src="https://th.bing.com/th/id/R.8e2c571ff125b3531705198a15d3103c?rik=gzhbzBpXBa%2bxMA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-big-image-png-2240.png&ehk=VeWsrun%2fvDy5QDv2Z6Xm8XnIMXyeaz2fhR3AgxlvxAc%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </label><br />
            <FloatingLabel
        controlId="floatingInput"
        label="Github"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Github" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Linkedin">
        <Form.Control type="text" placeholder="Linkedin" />
      </FloatingLabel> <br /> 
             <button className='btn btn-info '>Update</button> <br />
            </div>
            </MDBCollapse>
        </div>
        
    </div>
  )
}

export default Profile