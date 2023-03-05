import React from 'react'
import Home from './Home'
import Services from './Navbar/Services'
import Picture from './Picture'

const Landing = () => {
  return (<>
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
            <button className="btn btn-primary" >Login</button>

            <button className="btn btn-secondary">Register</button>
          </div>

        </div>
      </section>
    </div>
   <div>
   <Services/>
   <Picture/>

      
    </div>
    </>
  )
}

export default Landing
