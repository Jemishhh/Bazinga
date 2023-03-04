import React from 'react'
import './general.css'
import logo from "./logo.svg"

const Navbar = () => {
  return (
    <>
    <div>
      <header>
      <div className="overlay" data-overlay></div>

    
     
      <div className="header-bottom">
      <div className="container">
      <a href="#" class="logo">
          <img src={logo} alt="Tourly logo"/>
        </a>

        <ul className="social-list">

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
          </li>

        </ul>

        <nav className="navbar" data-navbar>

          <div className="navbar-top">

            <a href="#" className="logo">
              <img src=".images/logo-blue.svg" alt="Tourly logo"/>
            </a>

            <button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>

          </div>

          <ul className="navbar-list">

            <li>
              <a href="#home" className="navbar-link" data-nav-link>home</a>
            </li>

            <li>
              <a href="#" className="navbar-link" data-nav-link>about us</a>
            </li>

            <li>
              <a href="#destination" className="navbar-link" data-nav-link>destination</a>
            </li>

            <li>
              <a href="#package" className="navbar-link" data-nav-link>packages</a>
            </li>

            <li>
              <a href="#gallery" className="navbar-link" data-nav-link>gallery</a>
            </li>

            <li>
              <a href="#contact" className="navbar-link" data-nav-link>contact us</a>
            </li>

          </ul>

        </nav>

        <button className="btn btn-primary">Book Now</button>

      </div>
    </div>

   


      </header>
    </div>

 



      
    </>
  )
}

export default Navbar
