import logo from './rlogo.jpg'
import {Envelope, Telephone, House} from 'react-bootstrap-icons'
import { NavLink, useNavigate } from "react-router-dom";
import React from "react"

export default function Header(){
    const navigate = useNavigate()
    return(
        <>
            <div className="header-container">
                <div className="header-subcontainer1">
                    <div className="header-continer-subcontainer1">
                        <img src={logo} alt="logo" height="110px"/>
                    </div>
                </div>
                <div className="header-subcontainer">
                    <div className="header-container-subcontainer2">
                        <div className="header-container-phone">
                            <Telephone /> +91 9033336811
                        </div>
                        <div className="header-container-email">
                            <Envelope /> abc@gamil.com
                        </div>
                        <div className="header-container-sign">
                            <button onClick={()=> navigate('registration')}> sign-up </button> 
                        </div>
                        <div className="header-container-login">
                            <button onClick={()=> navigate('login')}> Login </button> 
                        </div>
                    </div>
                    <div className="header-container-subcontainer3">
                        <div className="header-container-subcontainer3-option">
                            <NavLink to="/home" className="notactive" > <House /> HOME </NavLink>
                        </div>
                        <div className="header-container-subcontainer3-option">
                            <NavLink to="/aboutus" className="notactive" >ABOUT US</NavLink>
                        </div>
                        {/* <div className="header-container-subcontainer3-option">
                            <NavLink to="/services" className="notactive" onClick={()=>setIsActive(!IsActive)}>SERVICES</NavLink>
                            {
                                IsActive && (  
                                                <div className="services-options" >
                                                    <NavLink to="/services/wedding"> Wedding </NavLink >
                                                    <NavLink to="/services/birthday"> Birthday Party</NavLink >
                                                    <NavLink to="/services/anniversary"> Anniversary </NavLink >
                                                    <NavLink to="/services/otherevent"> other event </NavLink >
                                                </div>
                                               
                                            )
                            }
                        </div> */}
                        <div className="header-container-subcontainer3-option">
                            <NavLink to="/gallery" className="notactive" >GALLERY</NavLink>
                        </div>
                        <div className="header-container-subcontainer3-option">
                            <NavLink to="/contactus" className="notactive" >  CONTACT US</NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./images/banner2.JPG" className="d-block w-100" alt="banner1" height="500px"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/banner3.jpg" className="d-block w-100" alt="banner2" height="500px"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/banner4.jpg" className="d-block w-100" alt="banner3" height="500px"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}