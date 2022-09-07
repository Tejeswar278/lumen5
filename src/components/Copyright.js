import "./Copyright.css";

export default function Copyright() {
    return (
        <div className="copy-container">
            <div>
            Copyright © 2022 Lumen5
            </div>
            <div>
                <a className="terms" href="#">Terms of use</a> {"&"} <a className="terms" href="#">Privacy Policy</a>
            </div>
        </div>
    )
}