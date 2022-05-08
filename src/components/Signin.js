import React, { useState } from "react";
import img from "./lumen.png";
import { Button1 } from "./Button1";
import img1 from "./lumenlogo.png";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const Signin = () => {
    var arr = JSON.parse(localStorage.getItem("datas")) || [];

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function authorisation() {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].email === email && arr[i].password === password) {
                navigate("/template");
            } else {
                alert("Incorrect Email or Password");
            }
        }
    }

    const navigate = useNavigate();

    return (
        <div className="cont">
            <div className="sidepart">
                <img className="ss" src={img} alt="" />
            </div>
            <div className="details">
                <img className="logo" src={img1} alt="" />
                <h1>Welcome back!</h1>
                <br></br>
                <p>WORK EMAIL</p>
                <input
                    type="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    className="credentials"
                />
                <br></br>
                <br></br>
                <p>PASSWORD</p>
                <input
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    className="credentials"
                />
                <p className="forgot">Forgot Password ?</p>
                <Button1
                    id="normal"
                    onClick={() => {
                        authorisation();
                    }}
                >
                    Login
                </Button1>
                <p className="ac">
                    Need a Lumen5 account?{" "}
                    <span
                        className="supage"
                        onClick={() => {
                            navigate("/signup");
                        }}
                    >
                        Create an account
                    </span>
                </p>
                <footer className="foot">© 2022 Lumen5</footer>
            </div>
        </div>
    );
};

export { Signin };
