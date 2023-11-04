import React from 'react'
import Layout from '../components/layout/Layout'
import '../styles/FPstyle.css';
import { Link } from '@mui/material';
const Fpass = () => {
  return (
    <div>
        <Layout>
      <div className="forgotPass" style={{color:'lightseagreen'}}>
        <h1>Forgot Password page</h1>
      <div className="recoverForm">
        <form action="">
        <div>
            <p>We will send verification code to your email or phone number to reset your password</p><br />
            <label htmlFor="username">Username/Email/Phone </label>
            <input type="text" autoComplete='off' name='username' id='username'/>
          </div>
            <br />

          <div>
            <label htmlFor="email">Password </label>
            <input type="password" autoComplete='off' name='email' id='email'/>
          </div>
          <Link to='/forgot_pass'>
          <button type='submit'>Submit</button>
          </Link>
      </form>
      </div>
      </div>
      </Layout>
    </div>
  )
}

export default Fpass
