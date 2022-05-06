import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//     window.onclick = function(e) {
//         if (!e.target.matches('.dropbtn')) {
//         var myDropdown = document.getElementById("myDropdown");
//           if (myDropdown.classList.contains('show')) {
//             myDropdown.classList.remove('show');
//           }
//         }
//       }
//   }


 

function Navbar () {
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
        <nav className="navbar">
            <div className="nav-icon">
            <Link to="/" className="navbar-logo"><img className="lumen-icon" src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png" alt="lumen icon"/></Link>
            </div>
            <div className="nav-items">
                <div><Link to="/">Home</Link></div>
                {/* <div className='dropdown'>
                    <Button
                        id="basic-button"
                        
                        
                        color='sucess'
                        onClick={handleClick}
                    >
                        Create
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div> */}
                <div><Link to="/pricing">Pricing</Link></div>
                <div><Link to="/enterprise">Enterprise</Link></div>
                <div><Link to="/casestudy">Case studies</Link></div>
                <div>Learn</div>
                <div><button><Link to="/login">Login</Link></button></div>
                <div><button variant="outlined" className='signupbtn'><Link to="/signup">Sign up</Link></button></div>
            </div>
        </nav>
    </>
)
}

export default Navbar;