
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


// import {Route, Switch, Redirect} from "react-router-dom";


function App() {
  return (
    <>
    <Navbar />
        <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="/home" element={<MainImage/>} ></Route>
        <Route exact path="/find" element={<Landing />}></Route>
        </Routes>



   


  
      <Footer />
       
    </>
    
     
  );
}

export default App;
