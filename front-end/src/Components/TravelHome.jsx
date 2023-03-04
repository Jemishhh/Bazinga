import React from 'react'
import web from "./Images/logo.svg";
import Common from "./Common";

const TravelHome = () => {
  return (
    <>
    <div>
    <Common
      name="Grow your Business with " 
      imgsrc={web.src} 
      visit="/service" 
      btname="Get Started" 
      />
    
    </div>
    
    </>
  )
}

export default TravelHome
