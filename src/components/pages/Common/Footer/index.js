import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer flex max-width">
        <div className="footer-logo-wrapper">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="footer-logo"
            className="footer-logo"
          />
        </div>
        <div className="footer-text">Cloned by RahulDB</div>
      </div>
    </div>
  );
}

export default Footer;
