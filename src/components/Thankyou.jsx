import "./thankyou.css";

export default function Thankyou() {
  return (
    // <>
    <div id="container">
      <center>
        <img
          width="200px"
          height="200px"
          src="https://w7.pngwing.com/pngs/264/251/png-transparent-check-mark-checkbox-computer-icons-resort-green-tick-icon-check-illustration-miscellaneous-angle-leaf.png"
          alt=""
        />
        <h1 style="color: #82C815;">Thank You For subscription!</h1>
        <h3>Your subscription has been done</h3>
        <h3>
          <a onclick="window.location.href='Thankyou.jsx'">Go Back</a>
        </h3>
      </center>
    </div>
    // </>
  );
}
