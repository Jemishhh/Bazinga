
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
import Profdisplay from './Profile/Profdisplay'


// import {Route, Switch, Redirect} from "react-router-dom";


function App() {
  return (
    <>
    {/* <Navbar /> */}
        <Routes>
        <Route exact path="/users/:id" element={<Profdisplay />}></Route>
        {/* <Route exact path="/" element={<Landing />}></Route> */}
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/travel" element={<MainImage/>} ></Route>
        <Route exact path="/find" element={<Landing />}></Route>
        <Route exact path="/profile/:id" element={<Profile />}></Route>
        </Routes>



   


  
      {/* <Footer /> */}
       
    </>
    
     
  );
}

export default App;
