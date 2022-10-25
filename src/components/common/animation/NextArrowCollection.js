import React from "react";

function NextArrowCollection(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        justifyContent:"center",
        alignItems:"center",
        width:"40px",
        height:"40px",
        borderRadius:"50%",
        position:"absolute",
        right:"10px",
        top:"165px",
        boxShadow: "rgb(0 0 0 / 20%) 0px 3px 5px -1px,rgb(0 0 0 / 14%) 0px 6px 10px 0px,rgb(0 0 0 / 12%) 0px 1px 18px 0px",
        background:"#9C9C9C",
        opacity:"0.6",
      }}
      onClick={onClick}
    />
  );
}

export default NextArrowCollection;
