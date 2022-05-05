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
                    <div>About</div>
                    <div>Feature</div>
                    <div>Career</div>
                    <div>LinkedIn</div>
                    <div>Support</div>
                    <div>Community group</div>
                </div>
                <div className="col2">
                    <div className="first-ele">VIDEO TOOLS</div>
                    <div>Add text to Video</div>
                    <div>Cut Video</div>
                    <div>Merge Video</div>
                    <div>Compress Video</div>
                    <div>Resize Video</div>
                    <div>See all</div>
                </div>
                <div className="col3">
                    <div className="first-ele">VIDEO CREATORS</div>
                    <div>Video Editor</div>
                    <div>Photo Video Maker</div>
                    <div>Facebook Video Maker</div>
                    <div>Youtube Intro Maker</div>
                    <div>Instagram Video Maker</div>
                    <div>See all</div>
                </div>
                
            </div>
        </div>
    )
}