import React from 'react'
import "../header/loginheader.css"

const LoginPageHeader = () => {
  return (
    <div className = "login-header"> 
      
      <div className='logo'>
        speko
      </div>
      
      <div className='public-discussion'>
        Go to Public Discussion

        <img src="/images/message-icon.png" alt="" className='message' />

      </div>
    </div>
  )
}

export default LoginPageHeader