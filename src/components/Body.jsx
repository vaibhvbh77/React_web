import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const filteredRestaurantHandler = (e) => {
    setSearch(e.target.value);
    const newRestaurant = restaurant.filter((curr) =>
      curr.data.name.toLowerCase().includes(search.toLowerCase())
    );

    setfilteredRestaurant(newRestaurant);
  };
  const searchSubmitHandler = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
    const newRestaurant = restaurant.filter((curr) => {
      return curr.data.name.includes(search.toLowerCase());
    });
    setfilteredRestaurant(newRestaurant);
  };

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8136466&lng=75.76440269999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setLoading(false);
  }

  return (
    <>
      <div className="search-box">
        <input
          type="search"
          placeholder="Enter your restaurant"
          onChange={filteredRestaurantHandler}
          value={search}
        />
        <button onClick={searchSubmitHandler}>Search</button>
      </div>

      {isLoading ? (
        <Shimmer />
      ) : (
        filteredRestaurant.map((curr) => {
          return (
            <Link to={"/restaurant/" + curr.data.id}>
              <div className="card">
                <RestaurantCard data={curr} key={curr.data.id} />
              </div>
            </Link>
          );
        })
      )}
    </>
  );
};

export default Body;
