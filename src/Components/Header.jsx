import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import { GrProjects } from "react-icons/gr";

function Header() {
  return (
    <div>
      <MDBNavbar  className='bg-info'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src=''
              height='30'
              alt=''
              loading='lazy'
            />
            <h2 className='text-light'>
            <GrProjects /> Project Fair
            </h2>
           
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header