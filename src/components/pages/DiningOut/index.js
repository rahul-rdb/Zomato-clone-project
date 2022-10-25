import React from "react";
import collectionsData from "./data/collectionsData";
import diningData from "./data/diningData";
import Collections from "./diningComponents/Collections";
import "./diningOut.css";
import Slider from "react-slick";
import NextArrowCollection from "../../common/animation/NextArrowCollection";
import PrevArrowCollection from "../../common/animation/PrevArrowCollection";
import DiningCardScroll from "./diningComponents/DiningCardScroll";
import Filters from "../Common/Filters";
import filterData2 from "./data/filterData2";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrowCollection />,
  prevArrow: <PrevArrowCollection />,
};

function DiningOut() {
  const collectionItems = collectionsData.map((collection) => (
    <Collections {...collection} key={collection.id} />
  ));

  const diningCards = diningData.map((diningCard) => (
    <DiningCardScroll {...diningCard} key={diningCard.info.resId} />
  ));

  return (
    <>
      <div className="bg-inactive">
        <div className="collections-wrapper max-width">
          <div className="cheader-wrapper">
            <div className="citem-heading">Collections</div>
            <div className="citem-subheading">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Mumbai, based on trends
            </div>
          </div>
          <Slider {...settings}>{collectionItems}</Slider>
        </div>
      </div>

      <div className="max-width">
        <Filters filterList={filterData2} />
      </div>
      
      <div className="card-scroll-wrapper max-width">
        <div className="card-dining-header">
          Best Dining Restaurants near you in Mumbai
        </div>
        <div className="card-display flex">{diningCards}</div>
      </div>
    </>
  );
}

export default DiningOut;
