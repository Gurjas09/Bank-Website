import React from 'react'
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import "../styles/HomeStyle.css";
import bg2 from '../Images/bg2.jpg';
import '../index.css';


const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="headerContainer">
          <br /><br />
          <h1>Welcome to Value Trust Bank</h1>
          <p>Increasing the Value and Trust of your life</p>
          <p>Join our community today for a safe future of you and your family members</p>
          <img src={bg2} alt="background" className='bg_image' ></img>
          <Link to='/register'>
          <button>
            Get Started
          </button>
          </Link>  
        </div>
      </div>
    </Layout>
  )
}

export default Home
