import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody
} from 'mdb-react-ui-kit';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

function ProjectCard({projects}) {
  console.log(projects);
  
  const [optSmModal, setOptSmModal] = useState(false);

  const toggleOpen = () => setOptSmModal(!optSmModal);
  return (
    <div className='container'>
     <Card onClick={toggleOpen} style={{ width: '20rem' }}>
     
        <Card.Img height={300} className='w-100 mt-4 container' variant="top" src={projects.projectImage} />
        <Card.Body>
        <Card.Title>{projects.title}</Card.Title>
      </Card.Body>
    </Card>

    <MDBModal open={optSmModal} tabIndex='-1' onClose={() => setOptSmModal(false)}>
        <MDBModalDialog size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle></MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody >
              <div  className='d-flex'>
              <div className="col-6">
                <img height={400} width={300} src="" alt="" />
              </div>
              <div className="col-6">
                <h2>
                  Description
                </h2>
                <p>
                  {projects.overview}
                </p>
                <h3>Technologies</h3>
                {projects.language}
                 
              </div>
              </div>
              <hr />
                 <div className='text-end '>
                 <FaGithub className='fs-2 me-4' />
                 <FaLink className='fs-2 me-4' />
                 </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default ProjectCard