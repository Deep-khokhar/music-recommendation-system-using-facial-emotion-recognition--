import React, { useState } from "react";
import "../CSS/Navbar.css";
import Logo from "../Images/LOGO.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const [tab, setTab] = useState(window.location.pathname);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <>
      <div className="main bg-transparent">
        <div className="container ">
          <header className="d-flex py-3">
            <div className="me-auto">
              <img
                src={Logo}
                alt=""
                height={80}
                style={{ marginLeft: "40px" }}
              />
            </div>
            <div>
              <ul className="nav  text-white d-flex justify-content-center">
                <li className="nav-item text-white">
                  <Link
                    to="/"
                    onClick={() => setTab("/")}
                    alt=""
                    className={`nav-link fs-5 ${
                      tab === "/" ? "text-white" : "text-black"
                    }`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    to="/about"
                    onClick={() => setTab("/about")}
                    alt=""
                    // className="nav-link text-black fs-5"
                    className={`nav-link fs-5 ${
                      tab === "/about" ? "text-white" : "text-black"
                    }`}
                  >
                    About-Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/detectface"
                    onClick={() => setTab("/detectface")}
                    alt=""
                    // className={`nav-link ${tab}==="/detectface"?"text-white":"text-black"  fs-5`}
                    className={`nav-link fs-5 ${
                      tab === "/detectface" ? "text-white" : "text-black"
                    }`}
                  >
                    Music
                  </Link>
                </li>
                {!isAuthenticated && (
                  <li className="nav-item">
                    <Link
                      to="/login"
                      onClick={() => setTab("/login")}
                      alt=""
                      className={`nav-link fs-5 ${
                        tab === "/login" ? "text-white" : "text-black"
                      }`}
                    >
                      Log-In
                    </Link>
                  </li>
                )}
                {!isAuthenticated && (
                  <li className="nav-item">
                    <Link
                      to="/logup"
                      onClick={() => setTab("/logup")}
                      alt=""
                      className={`nav-link fs-5 ${
                        tab === "/logup" ? "text-white" : "text-black"
                      }`}
                    >
                      Sign-Up
                    </Link>
                  </li>
                )}
                {isAuthenticated && (
                  <li className="nav-item">
                    <Link
                      to="/"
                      onClick={() => setTab("/")}
                      alt=""
                      className={`nav-link fs-5 text-black`}
                      // className={`nav-link fs-5 ${
                      //   tab === "/" ? "text-white" : "text-black"
                      // }`}
                    >
                      {user.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </header>
        </div>
      </div>
    </>
  );
}
