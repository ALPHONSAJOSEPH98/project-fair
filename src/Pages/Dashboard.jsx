import React from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Profile from '../Components/Profile'

function Dashboard() {
  let user= JSON.parse(sessionStorage.getItem("user"))
  let username = user.username
  return (
    <div>
      <div className="row mb-5 pb-5">
        <h3 className='text-center pt-4 pb-3'>Welcome {username}</h3>
        <div className="col-8 container mt-3 ">
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