import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { GrProjects } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../Services/Allapis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';
function Auth({register}) {
  const [isLoggedIn , setisLoggedIn] = useState(false)
  const navigate = useNavigate()
  const [userData ,setUserData] = useState({
    username:"" ,
    email :"" ,
    password:"",
  })
  console.log(userData);
  
  const handleRegister = async()=>{
    const {username,email,password} = userData
    if(!username||!email||!password){
      toast.warn('Please fill the details', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
       
        });
    
    }
    else {
      const response = await registerAPI(userData)
      console.log(response)
      
     if(response.status==200){
      toast.success('register sucessfull', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        
        })
       setTimeout(()=>{ navigate('/login')},4000)
      // alert('register sucessfull')
     }
     else{
      // alert(response.response.data)
      toast.warn(response.response.data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",

        });
     }
      
    }
  }

  const handleLogin = async()=>{
    const {email,password} = userData
    if(!email||!password){
      toast.warn('Please fill the details', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
       
        });
    
    }
    else{
      const response = await loginAPI(userData)
      console.log(response);

      if(response.status==200){
        setisLoggedIn(true)
        toast.success('login sucessfull', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          
          })
          sessionStorage.setItem("user" ,JSON.stringify(response.data.user))
          sessionStorage.setItem("token" ,response.data.token)
         setTimeout(()=>{ navigate('/')},4000)
        
       }
       else{
        // alert(response.response.data)
        toast.warn(response.response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
  
          });
       }
        
      }
    
    
  }
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
           

                
               {
                register && 
                <FloatingLabel
                controlId="floatingInput"
                label="User Name"
                className="mb-3"
              >
                <Form.Control onChange={(e)=>{setUserData({...userData , username:e.target.value})}} type="text" placeholder="user name" />
              </FloatingLabel>
              
               }

                <FloatingLabel
              controlId="floatingInput"
                label="Email address"
               className="mb-3"
      >
        <Form.Control onChange={(e)=>{setUserData({...userData,email:e.target.value})}}  type="email" placeholder="name@example.com" />
      </FloatingLabel>
                     
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control onChange={(e)=>{setUserData({...userData , password:e.target.value})}} type="password" placeholder="Password" />
      </FloatingLabel>
      
      {
        register ?
        <div className='text-center'>
          <button onClick={handleRegister} className='btn btn-info  mt-3 mb-3'>Sign up</button> 
          <p>Already have account? <Link to={"/login"}>Login here...</Link></p>
        </div>
        
        :
        <div className='text-center '>
          <button onClick={handleLogin} className='btn btn-info  mt-3  mb-3'>Sign in  {isLoggedIn && <Spinner animation="border" variant="light" className='fs-5 mt-1' />} </button>
          <p>New to Here? <Link to={"/register"}>Register here...</Link></p>
        </div> 
      }
      
         
            </div>
            </div>
            
             
        </div>
        </div>
        <ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
 />
    </div>
  )
}

export default Auth