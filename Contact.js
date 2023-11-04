import React from 'react';
import Layout from '../components/layout/Layout';
import '../styles/Cstyle.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
const Contact = () => {
  return (
    <Layout>
     <div className="ContactUs">
     <h1>Contact us</h1>
      <div className="location">
        <LocationOnIcon/>
        <a href="https://www.google.com/maps">
        <h2>Our Location</h2><br />
      <p>312th Avenue,Sun road Street,Navi Mumbai,India </p>
      </a>
      </div>

      <div className="email">
        <EmailIcon/>
        <a href="https:www.gmail.com ">
        <h2>Email Us</h2><br />
      <p>valuetrust@gmail.com</p>
      <p>valhelpline@gmail.com</p>
      </a>
      </div>
      <div className="call">
        <CallIcon/>
      <h2>Call Us</h2><br />
      <p>++1123345679 </p>
      <p>++2267584082</p>
      </div>

     </div>
    </Layout>
  )
}

export default Contact
