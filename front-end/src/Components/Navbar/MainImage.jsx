import React from 'react'

const MainImage = () => {
  return (
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
         <section class="tour-search">
        <div class="container">

          <form action="" class="tour-search-form">

            <div class="input-wrapper">
              <label for="destination" class="input-label">Search Destination*</label>

              <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
                class="input-field"/>
            </div>

            <div class="input-wrapper">
              <label for="people" class="input-label">Pax Number*</label>

              <input type="number" name="people" id="people" required placeholder="No.of People" class="input-field"/>
            </div>

            <div class="input-wrapper">
              <label for="checkin" class="input-label">Checkin Date**</label>

              <input type="date" name="checkin" id="checkin" required class="input-field"/>
            </div>

            <div class="input-wrapper">
              <label for="checkout" class="input-label">Checkout Date*</label>

              <input type="date" name="checkout" id="checkout" required class="input-field"/>
            </div>

            <button type="submit" class="btn btn-secondary">Inquire now</button>

          </form>

        </div>
      </section>

    </div>
  )
}

export default MainImage
