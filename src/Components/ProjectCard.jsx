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

function ProjectCard() {
  const [optSmModal, setOptSmModal] = useState(false);

  const toggleOpen = () => setOptSmModal(!optSmModal);
  return (
    <div className='container'>
     <Card onClick={toggleOpen} style={{ width: '20rem' }}>
     
        <Card.Img height={300} className='w-100 mt-4 container' variant="top" src="https://thumbs.dreamstime.com/z/thin-line-design-concept-project-website-banner-template-vector-illustration-creative-technical-process-preview-93300177.jpg" />
        <Card.Body>
        <Card.Title>project</Card.Title>
      </Card.Body>
    </Card>

    <MDBModal open={optSmModal} tabIndex='-1' onClose={() => setOptSmModal(false)}>
        <MDBModalDialog size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>project Name</MDBModalTitle>
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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quidem, hic explicabo nostrum, vel magnam facere quis doloremque necessitatibus non dolorum? Eaque enim perferendis consectetur provident adipisci odit dolor deserunt.
                </p>
                <h3>Technologies</h3>
                React
                 
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