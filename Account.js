import React,{useState} from 'react'
import '../styles/formStyle.css';
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';

const Account = () => {

    const[user,setUser]=useState({
        name:"",lname:"",mnumber:"",email:"",dob:"",gender:"",fname:"",mname:"",
        occupation:"", account:"",amount:"",status:"",income:"",address:"",city:"",
        state:"",zipcode:"",country:""

    });
    let name,value;
    const handleInputs =(e)=> {
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value});      //Storing the entered data
    }

  return (
    <div>
        <Layout>
            <div className="accForm">
            <h1>Account Open Form</h1><br />
            <form action="" >
                <div>
                <label htmlFor="name">First Name</label>
                <input type="text" autoComplete='off'name='name' id='name'
                value={user.name}
                onChange={handleInputs}
                />
                </div>

                <div>
                <label htmlFor="lname">Last Name</label>
                <input type="text" autoComplete='off'name='lname' id='lname'
                value={user.lname}
                onChange={handleInputs}
                />
                </div>

                <div>
                <label htmlFor="mnumber">Mobile Number</label>
                <input type="text" autoComplete='off'name='mnumber' id='mnumber' 
                value={user.mnumber}
                onChange={handleInputs}
                />
                </div>

                <div>
                <label htmlFor="email">Email Address</label>
                <input type="email" autoComplete='off'name='email' id='email' 
                value={user.email}
                onChange={handleInputs}
                />
                </div>

                <div>
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" autoComplete='off'name='dob' id='dob'
                value={user.dob}
                onChange={handleInputs}               
                />
                </div>

                <div>
                <label htmlFor="gender">Gender</label>
               <select name="gender" id="gender"
               value={user.gender}
               onChange={handleInputs}
                >
                <option value="0">Male</option>
                <option value="1">Female</option>
               </select>  
                </div>

                <div>
                <label htmlFor="fname">Father's Name</label>
                <input type="text" autoComplete='off'name='fname' id='fname' 
                value={user.fname}
                onChange={handleInputs}
                />
                </div>

                <div>
                <label htmlFor="mname">Mother's Name</label>
                <input type="text" autoComplete='off'name='mname' id='mname'
                value={user.mname}
                onChange={handleInputs}
                />
                </div>

                <div>
                <label htmlFor="occupation">Occupation</label>
                <input type="text" autoComplete='off'name='occupation' id='occupation'
                value={user.occupation}
                onChange={handleInputs}
                />
                </div>

                <div>
                <label htmlFor="account">Account Type</label>
                    <select name="account" id="account"
                    value={user.account}
                    onChange={handleInputs}>
                <option value="0">Personal Account</option>
                <option value="1">Buisness Account</option>
                    </select>
                    
                </div>

                <div>
                <label htmlFor="amount">Enter the Deposit Amount</label>
                <input type="text" autoComplete='off'name='amount' id='amount' 
                value={user.amount}
                onChange={handleInputs}/>
                </div>

                <div>
                <label htmlFor="status">Maratial Status</label>
                    <select name="status" id="status"
                        value={user.status}
                        onChange={handleInputs}>
                <option value="0">Married</option>
                <option value="1">Unmarried</option>
                    </select>

                </div>

                <div>
                <label htmlFor="income">Monthly Income</label>
                <input type="text" autoComplete='off'name='income' id='income' 
                  value={user.income}
                  onChange={handleInputs}
                />
                </div>

                    <h2>Address</h2><br />
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="address" 
                        value={user.address}
                        onChange={handleInputs}/>
                    </div>

                    <div>
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" id="city"
                         value={user.city}
                         onChange={handleInputs}/>
                    </div>

                    <div>
                        <label htmlFor="state">State</label>
                        <input type="text" name="state" id="state"
                        value={user.state}
                        onChange={handleInputs} />
                    </div>

                    <div>
                        <label htmlFor="zipcode">ZIP Code</label>
                        <input type="text" name="zipcode" id="zipcode"
                        value={user.zipcode}
                        onChange={handleInputs}/>
                    </div>

                    <div>
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" id="country" 
                        value={user.country}
                        onChange={handleInputs}/>
                    </div>
                    <Link to='/home'>
                    <button>
                Open Account
               </button>
               </Link>
                </form>
               
            </div>
      </Layout>
    </div>
  )
}

export default Account
