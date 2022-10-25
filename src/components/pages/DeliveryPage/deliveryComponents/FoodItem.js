import React from "react";
import "../deliveryPage.css";


function FoodItem(props) {
  return (
    <div className="item-box flex flex-col absolute-center">
        <img src={props.itemImage} alt="food-item" className="item-image"/>
        <div className="item-name">{props.itemName}</div>
    </div>
  );
}

export default FoodItem;
