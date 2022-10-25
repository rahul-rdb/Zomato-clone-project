import React from "react";
import "./filters.css";

function Filters({ filterList }) {
  return (
    <div className="filter-wrapper flex">
      {filterList &&
        filterList.map((filter) => {
          return (
            <div className="filter-box flex absolute-center">
              <div className="filter-icon flex absolute-center">{filter.icon && filter.icon}</div>
              <div className="filter-title flex absolte-center">{filter.title && filter.title}</div>
            </div>
          );
        })}
    </div>
  );
}

export default Filters;
