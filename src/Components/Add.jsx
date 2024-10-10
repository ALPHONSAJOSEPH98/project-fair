import React, { useContext, useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody
} from 'mdb-react-ui-kit';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import authimg from '../assets/authImage.png'
import {ToastContainer,  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addProjectApi } from '../Services/Allapis';
import { addProjectContextResponse } from '../ContextAPI/ContextShare';

function Add() {
   const {addProjectRes ,setAddProjectRes}=useContext(addProjectContextResponse)
  const [optSmModal, setOptSmModal] = useState(false);

  const toggleOpen = () => setOptSmModal(!optSmModal);
  // create project object details
  const [projectDetails , setprojectDetails] =useState({
    title :"" ,
    language :"" ,
    github :"" ,
    website :"",
    overview :"" ,
    projectImage:""

  })
  console.log(projectDetails);
  // image file status
const [imgFileStatus , setimgFileStatus]=useState(false)
// set image path (url creation)
const[preview , setpreview] = useState(authimg)
  useEffect(()=>{
if(projectDetails.projectImage.type ==='image/png' || projectDetails.projectImage.type==='image/jpeg' || projectDetails.projectImage.type==='image/jpg'){
  setimgFileStatus(true)
  // url creation using javascript createobjecturl method
  setpreview(URL.createObjectURL(projectDetails.projectImage))
}
else{
  setimgFileStatus(false)
}
  },[projectDetails.projectImage])

  const handleAdd = async()=>{
    console.log("inside add")
    const {title , language,github ,website ,overview,projectImage} =projectDetails
    if(!title||!language ||!github||!website||!overview||!projectImage){
      
      toast.warn('Please fill the details', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
       
        })
    }
    else{
      const reqBody = new FormData()
      reqBody.append("title" ,title)
      reqBody.append("language" ,language)
      reqBody.append("github" ,github)
      reqBody.append("website" ,website)
      reqBody.append("overview" ,overview)
      reqBody.append("projectImage" ,projectImage)
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader ={
          "content-type":"multipart/form-data" ,
          "Authorization":`Bearer ${token}`
        }
        try{
          //api calling
          const response =await addProjectApi(reqBody,reqHeader)
          console.log(response);
          if(response.status===200){
            setAddProjectRes(response.data)
            console.log(response.data);
            
            toast.success('Project added succesfully', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
             
              })
            toggleOpen()
            projectDetails({
              title :"" ,
              language :"" ,
              github :"" ,
              website :"",
              overview :"" ,
              projectImage:""
            })
          }
          else{
            toast.warn(response.response.data , {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
             
              })
            console.log(response.response.data);
            
          }

        }
        catch (error){
          console.log("error" +error);
          
        }
      }
    }
  }
  
  return (
    <div>
        <button onClick={toggleOpen} style={{float:"right"}} className='btn btn-info'>
         Add
        </button>
        <MDBModal open={optSmModal} tabIndex='-1' onClose={() => setOptSmModal(true)}>
        <MDBModalDialog size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                Add Project
              </MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody >
              <div className='d-flex'>
                <div className="col-6">
                  <label >
                    <input onChange={(e)=>{setprojectDetails({...projectDetails,projectImage:e.target.files[0]})}} type="file" style={{display:"none"}} />
                    <img height={300} width={300} className='rounded' src={preview} alt="" />
                  </label>
                  {
                    !imgFileStatus && <div className='w-75 text-center text-danger '>
                    only allowed the following file types .jpg , jpeg , .png
                  </div>
                   }
                </div>
                <div className="col-6">
                <FloatingLabel
                 controlId="floatingInput"
                 label="Title"
                 className="mb-3">
          <Form.Control onChange={(e)=>{setprojectDetails({...projectDetails,title:e.target.value })}} type="text" placeholder="Title" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Language">
          <Form.Control onChange={(e)=>{setprojectDetails({...projectDetails,language:e.target.value })}} type="text" placeholder="Language" />
           </FloatingLabel> <br />
           <FloatingLabel
        controlId="floatingInput"
        label="Github"
        className="mb-3"
      >
        <Form.Control onChange={(e)=>{setprojectDetails({...projectDetails,github:e.target.value })}} type="text" placeholder="Github" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Website">
        <Form.Control onChange={(e)=>{setprojectDetails({...projectDetails,website:e.target.value })}} type="text" placeholder="Website" />
      </FloatingLabel> <br />
      <FloatingLabel controlId="floatingTextarea2" label="Overview">
        <Form.Control 
        onChange={(e)=>{setprojectDetails({...projectDetails,overview:e.target.value })}}
          as="textarea"
          placeholder="Overview"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
                </div>
              </div>
              <hr />
              <div className='text-end '>
                <button  onClick={toggleOpen} className='btn btn-secondary ps-2 pe-2 me-2 '>Cancel</button>
                <button onClick={handleAdd}  className='btn btn-info ps-4 pe-4  '>Add</button>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

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

export default Add