import "./Footer.css"
export default function Footer() {
    return (
        <div className="footer">
            <div className="left-footer">
                <img className="footer-img" src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-white.png" alt="footerimg"/>
                <div>
                Lumen5 combines powerful <br/>A.I. with a simple drag-and-<br/>drop interface to help you <br/>create professional video <br/>content in minutes.
                </div>
            </div>
            <div className="right-footer">
                <div className="col1">
                    <div className="first-ele">EXPLORE</div>
                    <div className="second-eles">
                        <a href="#">About</a>
                        <a href="#">Feature</a>
                        <a href="#">Career</a>
                        <a href="#">LinkedIn</a>
                        <a href="#">Support</a>
                        <a href="#">Community group</a>
                    </div>
                </div>
                <div className="col2">
                    <div className="first-ele">VIDEO TOOLS</div>
                    <div className="second-eles">
                        <a href="#">Add text to Video</a>
                        <a href="#">Cut Video</a>
                        <a href="#">Merge Video</a>
                        <a href="#">Compress Video</a>
                        <a href="#">Resize Video</a>
                        <a href="#">See all</a>
                    </div>
                </div>
                <div className="col3">
                    <div className="first-ele">VIDEO CREATORS</div>
                    <div className="second-eles">
                        <a href="#">Video Editor</a>
                        <a href="#">Photo Video Maker</a>
                        <a href="#">Facebook Video Maker</a>
                        <a href="#">Youtube Intro Maker</a>
                        <a href="#">Instagram Video Maker</a>
                        <a href="#">See all</a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}