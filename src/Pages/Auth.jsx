import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { GrProjects } from "react-icons/gr";
import { Link } from 'react-router-dom';

function Auth({register}) {
  console.log(register);
  
  return (
    <div className='mb-5'>
        
        <div>
        <div className='card w-75 container mt-5 '>
            
            <div className='d-flex justify-content-evenly'>
            <div className='col-6'>
                <img height={300} className='w-75 container mb-5  mt-5' src="https://cyberpanel.net/wp-content/uploads/2024/01/Group-337.webp" alt="" />
            </div>
            <div className='w-50 mt-4'>
            <h3 className='text-center mt-2 mb-3'><GrProjects /> Project Fair</h3>
            <h6 className='text-center mt-2 mb-3'>Sign {register?"Up" : "In"}  </h6>
           

                <form >
               {
                register && 
                <FloatingLabel
                controlId="floatingInput"
                label="User Name"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="user name" />
              </FloatingLabel>
               }
                <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      
      {
        register ?
        <div className='text-center'>
          <button className='btn btn-dark  mt-3 mb-3'>Sign up</button> 
          <p>Already have account? <Link to={"/login"}>Login here...</Link></p>
        </div>
        
        :
        <div className='text-center '>
          <button className='btn btn-dark  mt-3 mb-3'>Sign in</button>
          <p>New to Here? <Link to={"/register"}>Register here...</Link></p>
        </div> 
      }
      
         
                </form>
            </div>
            </div>
            
             
        </div>
        </div>
    </div>
  )
}

export default Auth