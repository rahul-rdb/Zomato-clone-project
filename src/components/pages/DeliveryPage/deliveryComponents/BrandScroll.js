import React from "react";
import "../deliveryPage.css";

function BrandScroll(props) {
  return (
    <div className="item-box flex flex-col absolute-center">
      <div className="brand-image">
        <div
          className="image-wrapper"
          style={{ backgroundImage:`url(${props.brandImage})` }}
        ></div>
      </div>
      <div className="brand-name">{props.brandName}</div>
      <div className="brand-min">{props.min}</div>
    </div>
  );
}

export default BrandScroll;
