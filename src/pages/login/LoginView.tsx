import React from 'react'
import { useNavigate } from 'react-router-dom';

interface LoginViewProps {
  setToggleLogin: (value: boolean) => void;
}


const LoginView = ({ setToggleLogin }:LoginViewProps) => {

  let navigate = useNavigate();

  // For now, clicking the Login button will navigate user to the MemberView
  function authenticateUser() {
    navigate('/member')
  }

  return (
    <div className='login'>
      
      <p>Login</p>
      
      <div className="login_email">
        <input type="text" placeholder='Email' />
      </div>
      
      <div className="login_password">
        <input type="password" placeholder='Password' />
      </div>
      
      <button className="login_button" onClick={() => authenticateUser()}><p>Login</p></button>

      <button className="login_exit" onClick={() => setToggleLogin(false)}>x</button>
    </div>
  )
}

export default LoginView