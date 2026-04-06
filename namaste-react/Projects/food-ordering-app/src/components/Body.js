import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants.js";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    const restaurants = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setListOfRestaurants(restaurants);
    setFilteredList(restaurants);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search Restaurant"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) => {
              return res?.info?.name
                ?.toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredList(filteredRestaurant);
          }}
        >
          Search
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            let filteredListWithRating = filteredList.filter((res) => {
              return res.info.avgRating >= 4.5;
            });
            setFilteredList(filteredListWithRating);
          }}
        >
          Top Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((res) => (
          <RestaurantCard key={res.info.id} restaurant={res.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
