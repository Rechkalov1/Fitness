import React from "react";
import GitHub from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import linkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Instagram} alt="" />
          <img src={linkedIn} alt="" />
          <img src={GitHub} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
