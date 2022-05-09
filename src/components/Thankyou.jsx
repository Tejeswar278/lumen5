import "./thankyou.css";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";


export default function Thankyou() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <center>
        <img className="tyimg"
          src="https://yachtpon.com/wp-content/uploads/2019/03/5a142d709c.png"
          alt=""
        />
        <h1 className="tycl">Thank You For subscription!</h1>
        <h3 className="h1siva">Your Transaction has been done!</h3>
        <button className="tybtn" onClick={()=> {navigate("/template")}}>Go to template page</button>
      </center>
    </div>
  );
}
