import React from 'react'
import Layout from '../components/layout/Layout';
import '../styles/acStyle.css'
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <Layout>
      <div className="account">
        <h3>Personal and Buisness Account</h3><br />
        <p>Our bank offers high-yield interest rates on savings and current accounts.
        We have a large network of ATMs for convenient access to your money.
        </p>
        <Link to='/account'>
        <button>Open Your Account</button>
        </Link>
      </div>

      <div className="homeLoan">
        <h3>Home Loan</h3><br />
        <p>Our bank offers low interest rates on home loans.
        Our loan process is streamlined and efficient, making it easy to get the financing you need.
        </p>
        <button>Apply for Home Loan</button>
      </div>

      <div className="eduLoan">
      <h3>Education Loan</h3><br />
        <p>Our bank offers affordable education loans with flexible repayment options.
        Our loan specialists have extensive knowledge of the education loan market and can help you find 
        the best option.
        </p>
        <button>Apply for Education Loan</button>
      </div>

      <div className="Insurance">
      <h3>Insurance Policies</h3><br />
        <p>Convenient and easy access to insurance services.
            Ability to bundle with other financial products.
          Trust in a well-established financial institution.
          Expert advice from trained bank representatives.
        </p>
        <button>Learn More</button>
      </div>

      <div className="onlineBank">
      <h3>Net Banking</h3><br />
        <p>Convenient and secure access to your account 24/7.
            Fast and easy bill payments.
            Quick transfer of funds to other bank accounts.
            Access to a range of financial products and services.
        </p>
        <button>Learn More</button>
      </div>

      <div className="InvestPlan">
      <h3>Investment Planning</h3><br />
        <p>Your bank and brokerage accounts are linked, making it easy to manage your finances 
          in one place.
         Banks are highly regulated, providing a level of security for your investments.
        </p>
        <button>Learn More</button>
      </div>
    </Layout>
  )
}

export default Service
