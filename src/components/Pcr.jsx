import React from "react";

const Ticket = ({price, title, sub}) => (
  <div className="ticket">
    <div className="head">
      <h5>{title}</h5>
      <h6>{sub}</h6>
    </div>
    <div className="body">
        <h4>{price}</h4>
        <i class="fas fa-plane plane"></i>
      <div>
      <i class="far fa-check-circle"></i>
        <h5>
          We aim to provide results in {"<"} 24 hours from booking sample lab
        </h5>
      </div>
      <div>
      <i class="far fa-check-circle"></i>
        <h5>Rapid result and cetificate download from online dashboard</h5>
      </div>
      <div>
      <i class="far fa-check-circle"></i>
        <h5>Optional swab drop-in to lab</h5>
      </div>
      <div>
      <i class="far fa-check-circle"></i>
        <h5>Free pre-paid return labels</h5>
      </div>
      <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSeK0KQ1dgIEli_Nl6EPso7U5nhaQ7d_8ixUEDR2-HbZTiKksQ/viewform"><button>BOOK NOW <i class="fas fa-chevron-circle-right"></i></button></a>
      <i class="far fa-comment-alt msg"/>
    </div>
    
  </div>
);

const Pcr = () => {
  return (
    <div className="pcr">
      <h1>Book Your COVID-19 PCR Test With Us</h1>
      <div className="options">
      <div className="two">
          <Ticket price='£90' title='DAY 2 AND DAY 8 PCR (UNVACCINATED)' sub='2 x HOME SAMPLE TEST KITS' />
        </div>
        <div className="two">
          <Ticket price='£45' title='DAY 2 PCR (VACCINATED)' sub='1 x HOME SAMPLE TEST KITS' />
        </div>
        <div className="two">
          <Ticket price='NGN 50,400' title='HOME SAMPLE COLLECTION FIT TO FLY PCR TEST' />
        </div>
      </div>
    </div>
  );
};

export default Pcr;
