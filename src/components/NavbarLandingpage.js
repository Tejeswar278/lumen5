import * as React from 'react';
import { Link } from "react-router-dom";
import "./NavbarLandingpage.css";
import {FaAngleDown} from "react-icons/fa" 

function NavbarLandingpage () {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
return (
    <>
        <nav className="navbarLanding">
            <div className="nav-icon">
            <Link to="/" className="navbar-logo"><img className="lumen-icon" src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png" alt="lumen icon"/></Link>
            </div>
            <div className="landing-nav-items">
                {/* <div><Link className='home' to="/">Home</Link></div> */}
                {/* <div><Link className='publish' to="/publish">Publish</Link></div> */}
                <div></div>
                <div className='learn'>
                    <div><Link className='create' to="/">Create</Link></div><FaAngleDown className='downarr'/>
                </div>
                <div><Link className='pricing' to="/pricing">Pricing</Link></div>
                <div><Link className='enterprise' to="/enterprise">Enterprise</Link></div>
                <div><Link className='casestudy' to="/casestudy">Case studies</Link></div>
                <div className='learn'>
                    <div><Link className='create' to="/">Learn</Link></div><FaAngleDown className='downarr'/>
                </div>
                <div className='sibtn'><button className='signinbtn'><Link className='silink' to="/signin">Login</Link></button></div>
                <div className='subtn'><button className='signupbtn'><Link className='sulink' to="/signup">Sign up</Link></button></div>
            </div>
        </nav>
    </>
)
}

export default NavbarLandingpage;