import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Enterprise from './components/Enterprise';
import Casestudy from './components/Casestudy';
import { Publish } from './components/Publish';
import {Template} from "./components/Template"

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/publish" exact element={<Publish/>}></Route>
          <Route path="/pricing" exact element={<Pricing/>}></Route>
          <Route path="/template" exact element={<Template/>}></Route>
          <Route path="/enterprise" exact element={<Enterprise/>}></Route>
          <Route path="/casestudy" exact element={<Casestudy/>}></Route>
          <Route path="/login" exact element={<Login/>}></Route>
          <Route path="/signup" exact element={<SignUp/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}   

export default App;
