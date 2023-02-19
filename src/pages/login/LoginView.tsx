import React from 'react'


const LoginView = () => {
  return (
    <div className='login'>
      <p>Login</p>
      <div className="login_email">
        <input type="text" placeholder='Email' />
      </div>
      <div className="login_password">
      <input type="password" placeholder='Password' />
      </div>
      <button className="login_button"><p>Login</p></button>

      <button className="login_exit">x</button>
    </div>
  )
}

export default LoginView