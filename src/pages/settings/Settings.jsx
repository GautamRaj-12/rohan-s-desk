import React from 'react'
import "./settings.css"
import profilePicture from "../../assets/profile-pic.png"

function settings() {
  return (
    <div className='settings container'>
      <div className="settingsTitle">
        <span className="settingsUpdateTitle">Update Your Account</span>

      </div>
      <form className='settingsForm'>
        <div className="profilePictureContainer">
          <div className="settingsPP">
            <img src={profilePicture} className="profilePicture" alt="" />
          </div>
          <label htmlFor="fileInput" className='form-label'>
            <i className="settingsPPIcon fa-solid fa-user"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} className='form-control' />
        </div>
        <div className="updateBox">
          <div className='mb-3'>
            <label className='form-label'>Username</label>
            <input type="text" placeholder="rohan" className='form-control' />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Email</label>
            <input type="email" placeholder="rohan@gmail.com" className='form-control' />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input type="password" className='form-control' />
          </div>
        </div>
        <button className="settingsSubmit btn btn-dark">Update</button>
        
          <div className="settingsDeleteTitle text-center">Delete Account</div>
        
      </form>

    </div>
  )
}

export default settings
