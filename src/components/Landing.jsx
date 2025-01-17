import React from "react";

function Landing({isMobile}) {
  return (
    <section className="landing">
      {isMobile ? <img
        className="header-bg"
        src="./images/mobile/image-header.jpg"
        alt=""
      /> : <img
        className="header-bg"
        src="./images/desktop/image-header.jpg"
        alt=""
      />}
      <div className="landing-content">
        {/* Header */}
        <div className="header">
          <div className="logo"><img src="./images/logo.svg" alt="logo-img" className="logo-img" /></div>
          {isMobile ? <div className="menu-icon">
            <img src="./images/icon-hamburger.svg" alt="" className="hamburger" />
          </div> : <div className="header-links">
            <a className="no-bg">About</a>
            <a className="no-bg">Services</a>
            <a className="no-bg">Projects</a>
            <a className="white-bg">CONTACT</a>
          </div>}
        </div>
        {/* Hero */}
        <div className="hero">
          <div className="hero-text">
            WE ARE CREATIVES
          </div>
          <div className="hero-arrow">
            <img src="./images/icon-arrow-down.svg" alt="arrow-down" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
