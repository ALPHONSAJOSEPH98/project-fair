import React from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Profile from '../Components/Profile'

function Dashboard() {
 
  return (
    <div>
      <div className="row">
        <h2>Welcome User</h2>
        <div className="col-8 container shadow mt-3 ">
         <div className="row mt-3 d-flex justify-content-around container">
          <div className="col">
            <h4>My projects</h4>
          </div>
          <div className="col">
            <Add/>
          </div>
         </div>
         <div className='col'>
         <View/>
         </div>
        </div>
        <div className="col-3 container  shadow">
          <Profile/>
        </div>
      </div>
     
    </div>
  )
}

export default Dashboard