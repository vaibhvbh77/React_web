import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./assets/Constants";
import Shimmer from "./Shimmer";

const RestaurantDetails = (props) => {
  const prams = useParams();
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    getDetails();
  }, []);

  async function getDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=26.8136466&lng=75.76440269999999&menuId=" +
        prams.id
    );
    const json = await data.json();
    setRestaurantData(json.data);
    console.log(json);
  }
  return (
    <>
      {!restaurantData ? (
        <Shimmer />
      ) : (
        <>
          <h2>Welcome to the Details {restaurantData.name}</h2>
          <h2>With the ratings of {restaurantData.avgRating}</h2>
          <img src={IMG_CDN_URL + restaurantData.cloudinaryImageId} />
          <div className="menu">
            <div>
              <br />
              <br />
              <br />
              <h1>Menu List</h1>
              <ol>
                {Object.values(restaurantData.menu.items).map((curr) => {
                  return (
                    <li key={curr.id}>
                      <div>Item:{curr.name}</div>
                      <div>Price:{curr.price / 100}</div>
                    </li>
                  );
                })}
              </ol>
            </div>

            <h2>
              <br />

              <br></br>
              <br></br>
              <br></br>
            </h2>
          </div>
        </>
      )}
    </>
  );
};

export default RestaurantDetails;
