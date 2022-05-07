import React from "react";
import { Link } from "react-router-dom";
import { Btn_For_navbar,Left_div_compo } from "./Button";
import "./Navbar_For_Template.css";

function Navbar () {
return (
    <>
        <nav className="navbar">
            <div className="flex">
                <div className="nav-icon">
                    <img className="lumen-icon" src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png" alt="lumen icon"/>
                </div>
                <div>
                    <Btn_For_navbar className="btnfornav">UPGRADE</Btn_For_navbar>
                </div>
            </div>
            
            <div className="nav-items">
                <div>Create</div>
                <div>Pricing</div>
                <div>Enterprise</div>
                <div>Case Study</div>
                <div>Learn</div>
            </div>
        </nav>
    </>
)
}

export default Navbar;