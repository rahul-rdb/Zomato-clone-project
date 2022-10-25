import React from "react";
import nightlifeCollectionsData from "./data/nightlifeCollectionsData";
import nightlifeData from "./data/nightlifeData"
import NightlifeCollections from "./nightlifeComponents/NightlifeCollections";
import Slider from "react-slick";
import NextArrowCollection from "../../common/animation/NextArrowCollection";
import PrevArrowCollection from "../../common/animation/PrevArrowCollection";
import NightlifeCardScroll from "./nightlifeComponents/NightlifeCardScroll";
import Filters from "../Common/Filters";
import filterData3 from "./data/filterData3";

const settings = {
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrowCollection />,
  prevArrow: <PrevArrowCollection />,
};

function Nightlife() {
  const nightlifeItems = nightlifeCollectionsData.map((nightres) => (
    <NightlifeCollections {...nightres} key={nightres.id} />
  ));

  const nightlifeCards = nightlifeData.map((nightlifeCard) => (
    <NightlifeCardScroll {...nightlifeCard} key={nightlifeCard.info.resId} />
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
          <Slider {...settings}>{nightlifeItems}</Slider>
        </div>
      </div>

      <div className="max-width">
        <Filters filterList={filterData3} />
      </div>

      <div className="card-scroll-wrapper max-width">
        <div className="card-dining-header">Best Dining Restaurants near you in Mumbai</div>
        <div className="card-display flex">{nightlifeCards}</div>
      </div>
    </>
  );
}

export default Nightlife;
