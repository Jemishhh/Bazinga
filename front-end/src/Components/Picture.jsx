import React from 'react'
import pic1 from '../Images/gallery-1.jpg'
import pic2 from '../Images/gallery-2.jpg'
import pic3 from '../Images/gallery-3.jpg'
import pic4 from '../Images/gallery-4.jpg'
import pic5 from '../Images/gallery-5.jpg'

const Picture = () => {
  return (
    <>
    <div>
      
     
        <div className="container">

          <p className="section-subtitle">Photo Gallery</p>

          <h2 className="h2 section-title">Photo's From Travellers</h2>

          <p className="section-text">
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
            Sit ornare
            mollitia tenetur, aptent.
          </p>

          <ul className="gallery-list">

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src={pic1} alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src={pic2} alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src={pic3} alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src={pic4} alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src={pic5} alt="Gallery image"/>
              </figure>
            </li>

          </ul>

        </div>
   

    </div>

   
   </>
  )
}

export default Picture
