import React from 'react'

import '../App.css'
const RegisterPage = () => {
  return (
    <div className="App" >
           
            <form action="/home">
                <h2>CampusHQ</h2>
                <br></br>
                <h5>Create your personal account</h5>
                <br></br>
            
                <div>
                    <label>Full Name</label><br/>
                    <input type="text" name="first_name" required />
                </div>
                <p>
                    <label>Email</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <label>Confirm Password</label><br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <label>Contact Number</label><br/>
                    <input type="mobile" name="number" required />
                </p>
                <br />
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p><br />
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            
        </div>
  )
}

export default RegisterPage
