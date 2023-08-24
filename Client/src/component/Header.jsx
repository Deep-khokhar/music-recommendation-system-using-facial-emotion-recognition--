import React from 'react';
import '../CSS/Navbar.css'
import Logo from '../Images/LOGO.png'

export default function Header() {
    return (
        <>
            <div className="main bg-transparent">
                <div className="container ">
                    <header className="d-flex py-3">
                        <div className='me-auto'>
                        <img src={Logo} alt=""  height={80} style={{marginLeft:"40px"}}/>
                        </div>
                        <div>
                            <ul className="nav  text-white d-flex justify-content-center">
                                <li className="nav-item text-white"><a to="/" alt="" className="nav-link text-white fs-5" aria-current="page">Home</a></li>
                                <li className="nav-item "><a to="/" alt="" className="nav-link text-black fs-5">About-Us</a></li>
                                <li className="nav-item"><a to="/" alt="" className="nav-link text-black fs-5">Music</a></li>
                                <li className="nav-item"><a to="/" alt="" className="nav-link text-black fs-5">FAQs</a></li>
                                <li className="nav-item"><a to="/" alt="" className="nav-link text-black fs-5">About</a></li>
                            </ul>
                        </div>
                    </header> 
                </div>
            </div>

        </>
    )
}
