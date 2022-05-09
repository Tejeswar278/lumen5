import React, { useState } from "react";
import img from "../components/lumen.png";
import { Button1 } from "./Button1";
import img1 from "../components/lumenlogo.png";
import { useNavigate } from "react-router-dom";
import "./signin.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const savingData = () => {
    var datas = [];
    const data = {
      name: name,
      password: password,
      email: email,
    };

    if (name.length === 0 || password.length === 0 || email.length === 0) {
      alert("Input field cannot be empty!");
    } else if (password.length < 8) {
      alert("Minimum length of password should be eight characters");
    } else {
      datas.push(data);
      datas = datas.concat(JSON.parse(localStorage.getItem("datas") || "[]"));
      localStorage.setItem("datas", JSON.stringify(datas));
      navigate("/signin");
    }
  };

  return (
    <div className="cont">
      <div className="sidepart">
        <img className="ss" src={img} alt="" />
      </div>
      <div className="details">
        <img className="logo" src={img1} alt="" />
        <h1>Get started with a free account</h1>
        <br></br>
        <p>FULL NAME</p>
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="credentials"
        />
        <br></br>
        <br></br>
        <p>WORK EMAIL</p>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="credentials"
        />
        <p>PASSWORD</p>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="credentials"
        />
        <li>One lowercase character</li>
        <li>One uppercase character</li>
        <li>8 characters minimum</li>
        <li>Contains a number or symbol</li>
        <br></br>
        <Button1
          onClick={() => {
            savingData();
          }}
          id="normal"
        >
          Create account
        </Button1>
        <p className="ac">
          Already have a Lumen5 account?{" "}
          <span
            className="supage"
            onClick={() => {
              navigate("/signin");
            }}
          >
            Log in
          </span>
        </p>
        <footer className="foot">© 2022 Lumen5</footer>
      </div>
    </div>
  );
};

export { Signup };
