import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <h3>
        Tell us about all your travel aspirations, Bae-Cation to Work-Cation to
        Every type of VaCation, and leave the rest to us, We'll take the time to
        get to know you, so that we can start planning your next adventure!
      </h3>
      <div className="form">
        <div className="left">
          <div className="item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <h4
                style={{ color: "rgb(255, 208, 0)", fontFamily: "sans-serif" }}
              >
                Adress
              </h4>
              <h4>1A, Road 3, Ikota Villa, Estate, Lekki</h4>
            </div>
          </div>
          <div className="item">
            <i class="fas fa-envelope"></i>
            <div>
              <h4
                style={{ color: "rgb(255, 208, 0)", fontFamily: "sans-serif" }}
              >
                Email
              </h4>
              <h4>info@24travels.ng</h4>
            </div>
          </div>
          <div className="item">
            <i class="fas fa-phone"></i>
            <div>
              <h4
                style={{ color: "rgb(255, 208, 0)", fontFamily: "sans-serif" }}
              >
                Phone
              </h4>
              <h4>07044544455</h4>
            </div>
          </div>
        </div>
        <div className="right">
          <h2>Shoot Us a Message</h2>
          <br /><input type="text" placeholder='Full Name'/>
          <br /><input type="text" placeholder='Company'/>
          <br /><input type="text" placeholder='Email'/>
          <br /><input type="text" placeholder='Phone'/>
          <textarea type="text" placeholder='Type Your Message'/>
<br />
          <button>Send</button>
        </div>
      </div>
      <img src="/images/98fcc9329b5865b434c2156a986bb3ed.jpeg" alt="98fcc9329b5865b434c2156a986bb3ed.jpeg" />
    </div>
  );
};

export default Contact;
