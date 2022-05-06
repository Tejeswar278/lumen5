import { Link } from "react-router-dom"
import "./Publish.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Publish_Navbar = () => {
    return (
        <div className="nav">
            <nav className="publish_navbar">
                <div className="publish-nav-lefthalf">
                <Link to="/" className="publish-navbar-logo"><img className="publish-lumen-icon" src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png" alt="lumen icon"/></Link>
                </div>
                <div className="publish-nav-righthalf">
                    <div className="upgrade">
                        <button className="upgrade-btn1">UPGRADE</button>
                    </div>
                    <div className="notification-user">
                        <div className="notification"><i className="fa-solid fa-bell n-icon-color"></i></div>
                        <div className="user">user name</div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export const Publish = ()=> {
    return (
        <>
            <Publish_Navbar></Publish_Navbar>
            <div className="publish-body">
                <div className="left-body">
                    <div className="block">
                        <div className="div1">
                            <div>Upgrade to remove Lumen5 credit scene <i className="fa-solid fa-circle-question circle-color"></i></div>
                            <div><button className="upgrade-btn2">Upgrade</button></div>
                        </div>
                        <div className="div2"></div>
                        <div className="div3">00:00</div>
                        <div className="div4">
                            <div className="div4-1">Copy of Untitled video</div>
                            <div className="div4-2">
                                <div className="div4-2-1">
                                    <div className="div4-2-1-1">M</div>
                                    <div>
                                        <div className="div4-2-1-2">Muddada name</div>
                                        <div>Published on date</div>
                                    </div>
                                </div>
                                <div className="div4-2-2">
                                    <div><button className="upgrade-btn1">Edit video</button></div>
                                    <div className="div4-2-2-2"><button className="upgrade-btn2">Download</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="div5">
                            <div>
                                <FontAwesomeIcon icon="fa-solid fa-link-simple" />
                            </div>
                            <div>
                                <div>Anyone with the link<i className="fa-solid fa-link-simple"></i></div>
                                <div></div>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="right-body">
                    second half
                </div>
            </div>
        </>
    )
}