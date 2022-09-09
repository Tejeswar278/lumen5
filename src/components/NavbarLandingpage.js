import * as React from "react";
import { Link } from "react-router-dom";
import "./NavbarLandingpage.css";
import { FaAngleDown } from "react-icons/fa";

function NavbarLandingpage() {
  window.onscroll = function(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("lumenIcon").style.width = "70%";
        document.getElementById("lumenIcon").style.marginLeft = "40px"
    }
    else if(document.body.scroll) {
      document.getElementById("lumenIcon").style.width = "100%";
      document.getElementById("lumenIcon").style.marginLeft = "0px"
    }
}
  return (
    <>
<nav className="navbarLanding">
        <div className="nav-l-icon">
          <Link to="/" className="navbar-logo">
            <img
              className="lumen-l-icon"
              id="lumenIcon"
              src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png"
              alt="lumen icon"
            />
          </Link>
        </div>
        <div className="landing-nav-items">
          <div>
            <Link className="pricing" to="/pricing">
              Pricing
            </Link>
          </div>
          <div>
            <Link className="enterprise" to="/enterprise">
              Enterprise
            </Link>
          </div>
          <div>
            <Link className="casestudy" to="/casestudy">
              Case studies
            </Link>
          </div>
          <div className="learn">
            <div>
              <Link className="create" to="/">
                Learn
              </Link>
            </div>
            <FaAngleDown className="downarr" />
          </div>
          <div className="subtn">
              <Link className="sulink" to="/signin">
                Login
              </Link>
          </div>
          <div className="subtn">
              <Link className="sulink2" to="/signup">
                Sign up
              </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarLandingpage;
