import { NavLink } from "react-router-dom";
import FooterContainer from "./footer";

export default function Login(){
    return(
        <>
            <div className="registration-section">
                <p className="registraion-header"> Registration Form </p>
                <div className="registration-container">
                    <div className="registration-label">
                        <label htmlFor="name"> Name </label>
                        <label htmlFor="password"> Surname </label>
                    </div>
                    <div className="registration-input">
                        <input type="text"id="name" placeholder="Name" />
                        <input type="password" id="password" placeholder="Password" />
                    </div>
                </div>
                <button className="registration-button"> Submit</button>
                <p className="registration-link"> Not an account? 
                <NavLink className="registration-linked" to="/registration"> Registration Here </NavLink></p>
            </div>
            <FooterContainer />
        </>
    );
}