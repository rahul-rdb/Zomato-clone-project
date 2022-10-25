import React from "react";
import "../deliveryPage.css";

function CardScroll(props) {
  const name = props.info?.name ?? "";
  const image = props.info?.image?.url;
  const rating = props.info?.rating?.rating_text;
  const cuisine = props.info?.cuisine?.map((dish, i, arr) => (
    <span>
      {dish.name}
      {i !== arr.length - 1 ? "," : "."}
    </span>
  ));
  const time = props.order?.deliveryTime ?? "";
  const offer1 = props.bulkOffers.length > 1 ? props.bulkOffers[0].text : null;
  const offer2 =
    props.bulkOffers.length > 1
      ? props.bulkOffers[1].text
      : props.bulkOffers.length === 1
      ? props.bulkOffers[0].text
      : null;
  const orderPlaced = props.bottomContainers[0]?.text ?? "";
  const cost = props.info?.costText?.text ?? "";

  return (
    <div className="card-block max-width">
      <div className="card-container">
        <div className="card-image-container">
          <img src={image} alt="food" className="card-image" />
          <div
            className="card-discount1 flex absolute-center"
            style={offer1 ? { width: "max-content" } : { padding: "0px" }}
          >
            {offer1}
          </div>
          <div className="card-discount2 flex absolute-center">{offer2}</div>
          <div className="card-minutes">{time}</div>
        </div>

        <div className="card-title-wrapper flex">
          <div className="card-title flex absolute-center">{name}</div>
          <div className="card-rating flex absolute-center">{rating} ✮</div>
        </div>

        <div className="card-foodtype-wrapper flex">
          <div className="card-foodtype flex">{cuisine}</div>
          <div className="card-cost flex absolute-center">₹{cost}</div>
        </div>

        <div className="card-space"></div>

        <div className="card-order-wrapper flex absolute-center">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png"
            alt=""
            className="card-order-image1"
          />
          <div className="card-order-numbers flex">{orderPlaced}</div>
          <img
            src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png"
            alt=""
            className="card-order-image2"
          />
        </div>
      </div>
    </div>
  );
}

export default CardScroll;
