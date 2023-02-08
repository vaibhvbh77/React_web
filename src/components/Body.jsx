import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8136466&lng=75.76440269999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setLoading(false);
  }

  return (
    <>
      {isLoading ? (
        <Shimmer />
      ) : (
        restaurant.map((curr) => {
          return (
            <div className="card">
              <RestaurantCard data={curr} key={curr.data.id} />
            </div>
          );
        })
      )}
    </>
  );
};

export default Body;
