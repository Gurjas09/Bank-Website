import React from 'react'
import Layout from '../components/layout/Layout';
import '../styles/Rstyle.css'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <Layout>
      <div className="register" style={{color:'lightseagreen'}}>
        <h1>Registeraiton page</h1>
        <div className="regForm">
        <form action="">
          <div>
            <label htmlFor="username">Full Name </label>
            <input type="text" autoComplete='off' name='username' id='username'/>
          </div>
            <br />
          <div>
            <label htmlFor="email">Email </label>
            <input type="text" autoComplete='off' name='email' id='email'/>
          </div>
            <br />
          <div>
            <label htmlFor="password">Password </label>
            <input type="password" autoComplete='off' name='password' id='password'/>
          </div>
            <br />
          <div>
            <label htmlFor="confirmPassword">Confirm Password </label>
            <input type="password" autoComplete='off' name='confirmPassword' id='confirmPassword'/>
          </div>
              <br />
              <input type="radio" /> I agree with the 
              <Link to='/TandC'>
              <a href="TandC"> terms & conditions</a>
              </Link>
              <br />
              <Link to='/home'>
          <button type='submit'>Register Now</button>
             </Link>
          <p>Already have an Account?</p>
          <Link to ='/sign_in'>
          <a href="sign_in">Login in</a>
          </Link>
          
        </form>
        </div>
      </div>
    </Layout>
  )
}

export default Register
