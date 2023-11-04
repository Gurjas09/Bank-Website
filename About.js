import React from 'react'
import Layout from '../components/layout/Layout'
import '../styles/Astyle.css';


const About = () => {
  return (
    <Layout>
      <div className="about-us">
      <h1 className="about-us__title">About Our Bank</h1>
      <p className="about-us__text">We are a leading financial institution, committed to providing top-notch banking services to our customers.</p>
      <p className="about-us__text">Founded on the principles of trust and reliability, we have built a reputation as a bank that truly cares about the financial well-being of our clients.</p>
      <p className="about-us__text">With a wide range of products and services, including checking and savings accounts, loans, investments and insurance, we are here to help our customers achieve their financial goals.</p>
      <p className="about-us__text">At our bank, you will find a team of knowledgeable and friendly professionals who are always available to answer any questions you may have and provide guidance when you need it.</p>
      <p className="about-us__text">Join us today and see why we are the trusted choice for so many customers when it comes to their banking needs.</p>
    </div>
    </Layout>
  )
}

export default About
