import React from 'react'
// import Navbar from './Navbar/Navbar'
import Services from './Navbar/Services'
const Home = () => {
  return (
    <>
    <div>
       <section className="hero" id="home">
        <div className="container">

          <h2 className="h1 hero-title">Journey to explore world</h2>

          <p className="hero-text">
            Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit className corporis nostra rem quos
            voluptatibus habitant?
            Fames, vivamus minim nemo enim, gravida lobortis quasi, eum.
          </p>

          <div className="btn-group">
            <button className="btn btn-primary">Learn more</button>

            <button className="btn btn-secondary">Book now</button>
          </div>

        </div>
      </section>
    </div>
    
    <Services/>
    </>

  )
}

export default Home
