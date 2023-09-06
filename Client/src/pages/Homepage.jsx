import React from "react";
import Navbar from "../component/Header";
import Banner2 from "../Images/Banner2.png";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <>
      <div>
        <Navbar />
        <div className="row ">
          <div className="col-7 mt-4 d-flex justify-content-center">
            <img src={Banner2} alt="" height={600} />
          </div>
          <div className="col-5 mt-5">
            <div className="row " style={{ marginTop: "60px" }}>
              <h1
                className="text-white"
                style={{
                  letterSpacing: "8px",
                  textAlign: "center",
                  fontSize: "60px",
                }}
              >
                EMOTION
              </h1>
              <br />
              <h2
                style={{
                  letterSpacing: "15px",
                  textAlign: "center",
                  color: "#f5eeed",
                  fontSize: "55px",
                }}
              >
                DETECTION
              </h2>
              <hr
                style={{
                  border: "2px solid white",
                  width: "75%",
                  marginLeft: "11%",
                }}
              />
            </div>

            <div className="row m-3">
              <h5>
                <p className="text-white" style={{ textAlign: "justify" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                  animi in molestias tempore, facere ducimus voluptates
                  laboriosam exercitationem placeat esse saepe explicabo
                  pariatur, sint ex? Fuga provident aut accusamus minus.
                </p>
              </h5>
            </div>
            <div className="row m-3 mt-5 my-text">
              <div className=" btn w-100 text-end">
                <Link to="/Detectface">
                  {" "}
                  <button className="">Scan Your Face Here</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
