import React from 'react'
import web from "./backpack.svg"
import Common from "./Common";

const TravelHome = () => {
  return (
    <>
    <div>
    <Common
      name="Get Set Travel " 
      imgsrc={web.src} 
      visit="/service" 
      btname="Get Started" 
      />
    
    </div>
    
    </>
  )
}

export default TravelHome
