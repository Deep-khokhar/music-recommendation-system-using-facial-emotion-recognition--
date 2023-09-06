import React, { useEffect, useState } from "react";
import "../CSS/Signin.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loadUser, loginUser } from "../actions/User";
import { useDispatch, useSelector } from "react-redux";
function Signin() {
  const { error, message, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = async (e) => {
    e.preventDefault();
    await dispatch(loginUser(email, password));
    dispatch(loadUser());
  };
  useEffect(() => {
    if (error !== "Please login first") {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [error, message, isAuthenticated, dispatch, navigate]);
  return (
    <div className="bg-img">
      <div className="content">
        <header>Login Form</header>
        <form onSubmit={loginHandler}>
          <div className="field">
            <span className="fa fa-user" />
            <input
              type="text"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="field space">
            <span className="fa fa-lock" />
            <input
              type="password"
              className="pass-key"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {/* <Link to="/"> */}
            <button type="submit" className="w-100">
              Submit
            </button>
            {/* </Link> */}
          </div>
        </form>

        <div className="signup">
          Don't have account?
          <Link className="signup" to="/logup">
            Signup Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
