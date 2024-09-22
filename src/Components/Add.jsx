import React, { useState } from 'react'
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

function Add() {
  const [optSmModal, setOptSmModal] = useState(false);

  const toggleOpen = () => setOptSmModal(!optSmModal);
  return (
    <div>
        <button onClick={toggleOpen} style={{float:"right"}} className='btn btn-dark'>
         Add
        </button>
        <MDBModal open={optSmModal} tabIndex='-1' onClose={() => setOptSmModal(false)}>
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
                    <input type="file" style={{display:"none"}} />
                    <img height={300} width={300} src="" alt="" />
                  </label>
                </div>
                <div className="col-6">
                <FloatingLabel
                 controlId="floatingInput"
                 label="Title"
                 className="mb-3">
          <Form.Control type="text" placeholder="Title" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Language">
          <Form.Control type="text" placeholder="Language" />
           </FloatingLabel> <br />
           <FloatingLabel
        controlId="floatingInput"
        label="Github"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Github" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Website">
        <Form.Control type="text" placeholder="Website" />
      </FloatingLabel> <br />
      <FloatingLabel controlId="floatingTextarea2" label="Overview">
        <Form.Control
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
                <button  className='btn btn-dark ps-4 pe-4  '>Add</button>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  )
}

export default Add