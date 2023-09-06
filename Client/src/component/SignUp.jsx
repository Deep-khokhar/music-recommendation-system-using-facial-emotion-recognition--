import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../actions/User";
import { toast } from "react-toastify";
import "../CSS/Signin.css";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, message, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(registerUser(name, email, password));
  };
  useEffect(() => {
    if (error === "Please login first") {
      dispatch({ type: "clearErrors" });
    } else if (error) {
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
  }, [error, message, dispatch, isAuthenticated, navigate]);
  return (
    <>
      <div className="bg-img">
        <div className="content">
          <header>SignUp Form</header>
          <form onSubmit={submitHandler}>
            <div className="field">
              <span className="fa fa-address-card" />
              <input
                type="text"
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="field space">
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
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className=" btn mr-4 space  " style={{ width: "100%" }}>
              {/* <Link to="/"> */}
              <button disabled={loading} type="submit " className="w-100">
                Create Account
              </button>
              {/* </Link> */}
            </div>
          </form>

          <div className="signup">
            Do you have account?
            <Link className="signup" to="/login">
              Login Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
