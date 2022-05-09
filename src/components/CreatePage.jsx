import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FaImages } from 'react-icons/fa';
import { FaMusic } from 'react-icons/fa';
import { FaTags } from 'react-icons/fa';
import { FaPager} from 'react-icons/fa';
import { FaLink} from 'react-icons/fa';
import {FaPlusCircle} from 'react-icons/fa';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export  const CreatePage = ()=>{
  const navigate = useNavigate();
  return (
    <>
    {/* Navbar of create page */}
    <div className="create-navbar">
    
        <div className="nav">
            <nav className="publish_navbar">
                <div className="publish-nav-lefthalf">
                <Link to="/" className="publish-navbar-logo"><img className="publish-lumen-icon" src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png" alt="lumen icon"/></Link>
                </div>
                <div className="publish-nav-righthalf">
                    <div className="upgrade">
                        <button className="upgrade-btn1" onClick={() => navigate('/publish')}>PUBLISH</button>
                    </div>
                    <div className="notification-user">
                        <div className="notification"><i className="fa-solid fa-bell n-icon-color"></i></div>
                        <div className="user">user name</div>
                    </div>
                </div>
            </nav>
        </div>
  

    </div> 

    {/* Main div of create page */}
    <div className="create-maindiv">

      {/* Create page side bar */}
      <div className="create-sidebar">
         <div className="create-sidecomp">
           <FaBars />
           <br></br>
           Story</div>
         <div className="create-sidecomp">
           <FaImages/>
           <br></br>
           Media</div>
         <div className="create-sidecomp">
           <FaMusic/>
           <br></br>
           Music</div>
         <div className="create-sidecomp">
           <FaTags/>
           <br></br>
           Style</div>
         <div className="create-sidecomp">
           <FaPager/>
           <br></br>
           Format</div>
      </div>

      {/* Create page middle div */}
      <div className="create-middlediv">
        <div className="create-middletop">
          <div className="create-middletopdiv">
          <FaLink />
            <input className="create-middleinput" placeholder="Place a URL to your blog/article"></input>
          </div>
          <button className="create-middlebutton">Import</button>
        </div>
        <div className="create-middlebottom">
          <p>Welcome to Lumen5!</p>
          
          <p>PREPARE YOUR SCRIPT</p>
          <p>Paste the URL from your article or blog in the field above or copy/paste text directly in this text box.</p>
          
          <p>BUILD YOUR VIDEO WITH SCENES</p>
          <p>Click the green (+)button or drag text and media into the editor to create new scenes.</p>
          
          <p>POPULATE YOUR SCENES WITH MEDIA</p>
          <p>Drag images and videos from the media tab on to your scenes. Upload your own or select from our stock media library</p>
          
          <p>Can't find the right image? No worries - we offer many scene designs that that convey your message with words and graphics only.</p>
        </div>
        <div>
          <button>Convert to video</button>
        </div>
      </div>

      {/* Create page last div */}
      <div className="create-lastdiv">
        <div className="create-lastrecord"></div>
        <div className="create-lastdivtop">

          <div className="create-lasticon"></div>
          <div className="create-lastdivimage">
            <img src="https://storage.googleapis.com/lumen5-prod-lottie/Tracer/Preview/Tracer_Thumbnail_4a.png" alt=""/>
          </div>
          <div className="create-lastbutton">
            <button>Preview</button>
            <button>+  6s  -</button>
            <button>Swap design</button>
            <button>Suffle colors</button>
          </div>

        </div>
        <div className="create-lastdivplus">
          <FaPlusCircle  className="create-circle"/>
        </div>
        <div className="create-lastdivouter"></div>
        <div className="create-lastdivbottom">

        </div>
      </div>

    </div>
    </>
  )
}