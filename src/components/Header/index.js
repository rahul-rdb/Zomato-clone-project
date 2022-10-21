import React from "react";
import "./header.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";

function Header() {
  return (
      <div className="header flex max-width">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="header-logo"
        />
        <div className="header-box flex">
          <div className="selectbox-wrapper flex absolute-center">
            <LocationOnIcon className="location-logo" />
            <input
              type="text"
              name="city"
              list="cityname"
              className="selectbox"
              placeholder="Mumbai"
            />
            <datalist id="cityname">
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Banglore">Banglore</option>
              <option value="chennai">Chennai</option>
            </datalist>
          </div>
          <div className="line">|</div>
          <div className="searchbox-wrapper flex flex absolute-center">
            <SearchIcon className="search-icon" />
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="searchbox"
              value=""
            />
          </div>
        </div>
        <div className="link">Log in</div>
        <div className="link">Sign up</div>
      </div>
  );
}

export default Header;
