import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar () {
return (
    <>
        <nav className="navbar">
            <div className="nav-icon">
            <Link to="/" className="navbar-logo"><img className="lumen-icon" src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png" alt="lumen icon"/></Link>
            </div>
            <div className="nav-items">
                <div><Link to="/">Home</Link></div>
                <div>Create</div>
                <div>Pricing</div>
                <div>Enterprise</div>
                <div>Case Study</div>
                <div>Learn</div>
                <div><button><Link to="/login">Login</Link></button></div>
                <div><button><Link to="/signup">Sign up</Link></button></div>
            </div>
        </nav>
    </>
)
}

export default Navbar;