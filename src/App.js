import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import SignUp from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import Pricing from './components/Pricing';
import Enterprise from './components/Enterprise';
import Casestudy from './components/Casestudy';

function App() {
  return (
    <div className="App">
     <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/pricing" exact element={<Pricing/>}></Route>
          <Route path="/enterprise" exact element={<Enterprise/>}></Route>
          <Route path="/casestudy" exact element={<Casestudy/>}></Route>
          <Route path="/login" exact element={<Login/>}></Route>
          <Route path="/signup" exact element={<SignUp/>}></Route>
        </Routes>
        <Footer></Footer>
        <Copyright></Copyright>
      </Router>
    </div>
  );
}   

export default App;
