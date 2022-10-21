import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-wrapper">
    <nav className="max-width flex nav-main">
      <div className="nav-wrap">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${isActive ? "nav1Active" : "nav1Inactive"} img-container`
          }
        >
          <div className="navtitle">Delivery</div>
        </NavLink>
      </div>

      <div className="nav-wrap">
        <NavLink
          to="/dining-out"
          className={({ isActive }) =>
            `${isActive ? "nav2Active" : "nav2Inactive"} img-container`
          }
        >
          <div className="navtitle">Dining Out</div>
        </NavLink>
      </div>

      <div className="nav-wrap">
        <NavLink
          to="/nightlife"
          className={({ isActive }) =>
            `${isActive ? "nav3Active" : "nav3Inactive"} img-container`
          }
        >
          <div className="navtitle">Nightlife</div>
        </NavLink>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
