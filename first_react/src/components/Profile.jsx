import React from 'react'
import '../styles/Profile.css' // import the stylesheet from the local styles folder
import Greeting from './Greeting' // import the Greeting component

const Profile = () => {

  return (
    <div className="profile-card">
        <img className="profile-img" src="https://static-www.adweek.com/wp-content/uploads/2023/01/WhatsApp-Avatar-Profile-Photo-Hero.png" alt="Profile picture" />
        <h2 className='name-text'>  Welcome to my profile page</h2>
        <Greeting />
        <p style={{color:"blueviolet"}}>This is our first functional component</p>
    </div>

  )
}

export default Profile //default export is used to export a single value from a module, and it can be imported with any name in another file