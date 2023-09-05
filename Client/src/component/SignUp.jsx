import React from 'react'
import "../CSS/Signin.css";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
    <div className="bg-img">
      <div className="content">
        <header>SignUp Form</header>
        <form action="#">
          <div className="field">
            <span className="fa fa-address-card" />
            <input type="text" required="" placeholder="Name" />
          </div>
          <div className="field space">
            <span className="fa fa-user" />
            <input type="text" required="" placeholder="Email or Phone" />
          </div>
          <div className="field space">
            <span className="fa fa-lock" />
            <input
              type="password"
              className="pass-key"
              required=""
              placeholder="Password"
            />
            
          </div>
         
          <div className=" btn mr-4 space  " style={{width:"100%"}}>
            <Link to="/">
              <button type="submit " className="w-100">Create Account</button>
            </Link>
          </div>
          
        </form>

        <div className="signup">
          Do you have account?
          <Link className="signup" to="/login">Login Now</Link>
        </div>
      </div>
    </div>
    </>
  )
}
