
import './App.css';
import Home from './Components/Home';
import MainImage from './Components/Navbar/MainImage';
// import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Navbar/Services';
import Landing from  "./Components/Landing"
import TravelHome from './Components/TravelHome';
import Footer from  "./Components/Footer"
import { Route, Router, Routes } from 'react-router-dom';
import Profile from './Profile/Profile';
import Community from './Components/Community';
import Recommend from './Components/Recommend';
import Request from './Components/Request';
import Login from './Login';
import Register from './Components/Register/Register';


// import {Route, Switch, Redirect} from "react-router-dom";


function App() {
  return (
    <>
    <Navbar />
        <Routes>
        
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/travel" element={<MainImage/>} ></Route>
        <Route exact path="/find" element={<Landing />}></Route>
        <Route exact path="/profile/:id" element={<Profile />}></Route>
        <Route exact path="/recommend" element={<Recommend />}></Route>.

        <Route exact path="/community" element={<Community />}></Route>
        <Route exact path="/request" element={<Request />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        </Routes>



   


  
      <Footer />
       
    </>
    
     
  );
}

export default App;
