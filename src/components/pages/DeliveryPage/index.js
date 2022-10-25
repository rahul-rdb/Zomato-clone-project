import React from "react";
import itemsData from "./data/foodData";
import brands from "./data/brandData";
import cardD from "./data/cardData";
import FoodItem from "./deliveryComponents/FoodItem";
import BrandScroll from "./deliveryComponents/BrandScroll";
import "./deliveryPage.css";
import Slider from "react-slick";
import NextArrow from "../../common/animation/NextArrow";
import PrevArrow from "../../common/animation/PrevArrow";
import CardScroll from "./deliveryComponents/CardScroll";
import Filters from "../Common/Filters";
import filterData1 from "./data/filterData1";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function DeliveryPage() {
  const foodItems = itemsData.map((food) => (
    <FoodItem {...food} key={food.id} />
  ));

  const brandList = brands.map((brand) => (
    <BrandScroll {...brand} key={brand.id} />
  ));

  const cards = cardD.map((card) => (
    <CardScroll {...card} key={card.info.resId} />
  ));

  return (
    <>
      <div className="max-width">
        <Filters filterList={filterData1}/>
      </div>

      <div className="bg-inactive">
        <div className="delivery-wrapper max-width">
          <div className="item-wrapper">
            <div className="item-heading">Inspiration for your first order</div>
            <Slider {...settings}>{foodItems}</Slider>
          </div>
        </div>
      </div>

      <div className="delivery-wrapper max-width">
        <div className="item-wrapper">
          <div className="item-heading">Top brands for you</div>
          <Slider {...settings}>{brandList}</Slider>
        </div>
      </div>

      <div className="card-scroll-wrapper max-width">
        <div className="card-header">Delivery Restaurants in Mumbai</div>
        <div className="card-display flex">{cards}</div>
      </div>
    </>
  );
}

export default DeliveryPage;
