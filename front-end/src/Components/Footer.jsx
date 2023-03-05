import React from 'react'
import pic1 from "../Images/logo.svg"
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <>
    <div>
    <footer class="footer">

<div class="footer-top">
  <div class="container">

    <div class="footer-brand">

      <a href="#" class="logo">
        <img src={pic1} alt="Tourly logo"/>
      </a>

      <p class="footer-text">
        Urna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, praesentium magna conubia
        at
        perferendis, pretium, aenean aut ultrices.
      </p>

    </div>

    <div class="footer-contact">

      <h4 class="contact-title">Contact Us</h4>

      <p class="contact-text">
        Feel free to contact and reach us !!
      </p>

      <ul>

        <li class="contact-item">
          <PhoneIcon/>

          <a href="tel:+01123456790" class="contact-link">8080702113</a>
        </li>

        <li class="contact-item">
          <EmailIcon/>

          <a href="mailto:info.tourly.com" class="contact-link">info.tourly.com</a>
        </li>

        <li class="contact-item">
        <LocationOnIcon/>
          <address>3146 Koontz, Mumbai</address>
        </li>

      </ul>

    </div>

    <div class="footer-form">

      <p class="form-text" style={{color:"white"}}>
        Subscribe our newsletter for more update & news !!
      </p>

      <form action="" class="form-wrapper">
        <input type="email" name="email" class="input-field" placeholder="Enter Your Email" required/>

        <button type="submit" class="btn btn-secondary">Subscribe</button>
      </form>

    </div>

  </div>
</div>

<div class="footer-bottom">
  <div class="container">

    <p class="copyright">
      &copy; 2022 <a href="">codewithsadee</a>. All rights reserved
    </p>

    <ul class="footer-bottom-list">

      <li>
        <a href="#" class="footer-bottom-link">Privacy Policy</a>
      </li>

      <li>
        <a href="#" class="footer-bottom-link">Term & Condition</a>
      </li>

      <li>
        <a href="#" class="footer-bottom-link">FAQ</a>
      </li>

    </ul>

  </div>
</div>

</footer>
    </div>
    </>
  )
}

export default Footer
