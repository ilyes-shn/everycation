import React, { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="nav">
      <img src="/images/19b4a21a2ea11479e31cb9eba5a906d0.png" alt="logo" />
      <div className="menu">
        <a href="/" className="active">
          Home
        </a>
        <a href="/">Flights</a>
        <a href="/">Hotels</a>
        <a href="/">Save</a>
        <a href="/">Travel Plans</a>
        <a href="/">Travel Extras</a>
        <a href="/">Covid-19 Tests</a>
        <a href="/">Contact Us</a>
        <i onClick={() => setOpen(true)} class="fas fa-bars" />
      </div>
      {open && (
        <div className="mobileNav">
          <i onClick={() => setOpen(false)} class="fas fa-times" />
          <a href="/">Home</a>
          <a href="/">Flights</a>
          <a href="/">Hotels</a>
          <a href="/">Save</a>
          <a href="/">Travel Plans</a>
          <a href="/">Travel Extras</a>
          <a href="/">Covid-19 Tests</a>
          <a href="/">Contact Us</a>
        </div>
      )}
    </div>
  );
};

export default Nav;
