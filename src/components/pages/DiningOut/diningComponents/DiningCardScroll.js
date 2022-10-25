import React from "react";
import "../diningOut.css";

function DiningCardScroll(props) {
  const name = props.info?.name ?? "";
  const image = props.info?.image?.url;
  const rating = props.info?.rating?.rating_text;
  const address = props.info?.locality?.name;
  const cuisine = props.info?.cuisine?.map((dish, i, arr) => (
    <span>
      {dish.name}
      {i !== arr.length - 1 ? "," : "."}
    </span>
  ));
  const distance = props.distance ?? "";
  const orderPlaced = props.bottomContainers[0]?.text ?? "";
  const cost = props.info?.costText?.text ?? "";


  return (
    <div className="card-block max-width">
      <div className="card-container">
        <div className="card-image-container">
          <img src={image} alt="food" className="card-image" />
          <div className="card-distance">{distance}</div>
        </div>

        <div className="card-title-wrapper flex">
          <div className="card-title flex absolute-center">{name}</div>
          <div className="card-rating flex absolute-center">{rating} ✮</div>
        </div>

        <div className="card-foodtype-wrapper flex">
          <div className="card-foodtype flex">{cuisine}</div>
          <div className="card-cost flex absolute-center">{cost}</div>
        </div>

        <div className="card-dining-location flex">
          <div className="card-dining-address">{address}</div>
        </div>

        <div className="card-space" style={orderPlaced?{display:""}:{display:"none"}}></div>

        <div className="card-order-wrapper flex absolute-center" style={orderPlaced?{display:""}:{display:"none"}}>
          <img
            src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png"
            alt=""
            className="card-order-image2"
          />
          <div className="card-order-numbers flex absolute-center">
            {orderPlaced}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiningCardScroll;
