import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='right'>
            <img src="/images/19b4a21a2ea11479e31cb9eba5a906d0.png" alt="logo" />
<h3>We are committed to fulfilling your traveling dreams.</h3>
<h4 style={{fontSize: '30px', color: 'rgb(4, 98, 185)'}}><i class="fab fa-facebook-square"></i> <i class="fab fa-instagram"></i> <i class="fab fa-linkedin"></i> <i class="fab fa-twitter-square"></i></h4>
            </div>
            <div className='menu'>
               <a href="/" className='active'>Home</a>
               <a href="/">Flights</a>
               <a href="/">Hotels</a>
               <a href="/">Save</a>
               <a href="/">Travel Plans</a>
               <a href="/">Travel Extras</a>
               <a href="/">Covid-19 Tests</a>
               <a href="/">Contact Us</a>
            </div>
        </div>
    )
}

export default Footer
