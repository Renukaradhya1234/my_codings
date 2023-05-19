import { NavLink, Outlet } from "react-router-dom";
import FooterContainer from "./footer";

export default function Gallery(){
    return(
        <>
            <div className="gallery-container">
                <div className="gallery-container-header">
                    <p> our <span>gallery..</span></p>
                </div>
            </div>
            <nav className="gallery-nav-bar">
                <NavLink className="nav-bar" to="anniversary">Anniversary</NavLink>
                <NavLink className="nav-bar" to="birthday">Birthday Party</NavLink>
                <NavLink className="nav-bar" to="wedding">Wedding</NavLink>
                <NavLink className="nav-bar" to="otherevent">Other Event</NavLink>
            </nav>
            <Outlet />
            <FooterContainer />
        </>
    )
}