import React from 'react'
import './login-signup.css'

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const loginsignup = () => {
  return (
    <div className='container'>
      <div className="header">
      <div className="text">sign up</div>
      <div className="underline"></div>
      </div>
      <div className="inputs">
      <div className="input">
        <img src={user_icon} alt=""/>
        <input type="text"/>
        </div>
        <div className="input">
        <img src={email_icon} alt=""/>
        <input type="email"/>
        </div>
        <div className="input">
        <img src={password_icon} alt=""/>
        <input type="password"/>
        </div>
      </div>
      <div className="forgot-password">Lost password? <span>click Here!</span></div>
      <div className="submit-container">
        <div className="submit">sign up</div>
        <div className="submit">login</div>
      </div>
      </div>

    

  )

}

    
