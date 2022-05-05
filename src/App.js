
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import SignUp from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
        <Route path="/login" exact element={<Login/>}></Route>
        <Route path="/signup" exact element={<SignUp/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
