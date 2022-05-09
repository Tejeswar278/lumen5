//import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import Home from "./components/Home";
import {Pricingfn} from "./components/Pricing";
import Enterprise from "./components/Enterprise";
import Casestudy from "./components/Casestudy";
import { Publish } from "./components/Publish";
import { Template } from "./components/Template";
import "./components/CreatePage.css";
import { CreatePage } from "./components/CreatePage";
import Ypayment from "./components/ypayment";
import Thankyou from "./components/Thankyou"

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/publish" exact element={<Publish />}></Route>
        <Route path="/pricing" exact element={<Pricingfn />}></Route>
        <Route path="/template" exact element={<Template />}></Route>
        <Route path="/enterprise" exact element={<Enterprise />}></Route>
        <Route path="/casestudy" exact element={<Casestudy />}></Route>
        <Route path="/signin" exact element={<Signin />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
        <Route path="/createpage" exact element={<CreatePage />}></Route>
        <Route path="/ypayment" exact element={<Ypayment />}></Route>
        <Route path="/thankyou" exact element={<Thankyou />}></Route>
      </Routes>
    </div>
  );
}
