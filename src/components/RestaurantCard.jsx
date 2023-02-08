import React from "react";
import { IMG_CDN_URL } from "./assets/Constants";

const RestaurantCard = (props) => {
  return (
    <div className="restaurantcard">
      <img
        src={IMG_CDN_URL + props.data.data.cloudinaryImageId}
        alt="rest image"
        className="imge"
      />
      <div className="container">
        <h1>{props.data.data.name}</h1>
        <p>With the ratings of {props.data.data.avgRating}</p>
        <p>cost for two: Rs {props.data.data.costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
