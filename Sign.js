import React from 'react'
import Layout from '../components/layout/Layout';
import '../styles/Sstyle.css';
import { Link } from 'react-router-dom';

const Sign = () => {
  return (
    <div>
        <Layout>
      <div className="signIn" style={{color:'lightseagreen'}}>
      <h1>Login Page</h1>
      <div className="LoginForm">
        <form action="">
        <div>
            <label htmlFor="username">Username or Email </label>
            <input type="text" autoComplete='off' name='username' id='username'/>
          </div>
            <br />

          <div>
            <label htmlFor="email">Password </label>
            <input type="password" autoComplete='off' name='email' id='email'/>
          </div>
          <input type="radio" /> Remember Me 
          <br />
          <Link to='/forgot_pass'>
          <a href="forgotPass"> Forgot Password?</a>
          </Link>
          <br />
          <Link to='/home'>
          <button type='submit'>Login Now</button>
          </Link>
        </form>
      </div>
      </div>
      </Layout>
    </div>
  )
}

export default Sign
