import React from 'react';
import '../CSS/Navbar.css'
import Logo from '../Images/LOGO.png'
import { Link } from 'react-router-dom';

export default function Header(props) {
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
                                <li className="nav-item text-white"><Link to="/" alt="" className={`nav-link  text-${props.hover}  fs-5`} aria-current="page">Home</Link></li>
                                <li className="nav-item "><Link to="/" alt="" className="nav-link text-black fs-5">About-Us</Link></li>
                                <li className="nav-item"><Link to="/" alt="" className="nav-link text-black fs-5">Music</Link></li>
                                <li className="nav-item"><Link to="/login" alt="" className={`nav-link text-${props.hover1}  fs-5`}>Log-In</Link></li>
                                <li className="nav-item"><Link to="/logup" alt="" className={`nav-link text-${props.hover2}  fs-5`}>Sign-Up</Link></li>
                            </ul>
                        </div>
                    </header> 
                    
                </div>
            </div>

        </>
    )
}
