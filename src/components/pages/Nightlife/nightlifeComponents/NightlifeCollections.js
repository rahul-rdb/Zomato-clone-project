import React from 'react'

function NightlifeCollections(props) {
  return (
    <div className="citem-box">
    <div
      className="citem-image"
      style={{ backgroundImage: `url(${props.itemImage})` }}
    >
      <div className="citem-name flex">{props.itemName}</div>
      <div className="citem-places flex">{props.itemPlaces} ▸</div>
    </div>
  </div>
  )
}

export default NightlifeCollections;

