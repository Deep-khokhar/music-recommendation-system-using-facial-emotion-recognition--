import React from "react";
import "../CSS/Signin.css";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="bg-img">
      <div className="content">
        <header>Login Form</header>
        <form action="#">
          <div className="field">
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
          <div className="pass">
            <Link to="/">Forgot Password?</Link>
          </div>
          {/* <div className="field">
        <input type="submit" defaultValue="LOGIN" />
      </div> */}
          <div className=" btn w-100 ">
            <Link to="/">
              <button type="submit" className="w-100">Submit</button>
            </Link>
          </div>
          
        </form>

        <div className="signup">
          Don't have account?
          <Link className="signup" to="/logup">Signup Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
