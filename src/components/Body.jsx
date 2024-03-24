import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const online = useOnlineStatus();
  if (!online) {
    return (
      <h1 className="online-status">
        Looks like you're offine!! Please check your internet connection
      </h1>
    );
  }
  //Conditional Rendering if Api is not available

  // will load shimmer component
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body dark:bg-slate-400 ">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            placeholder="Search Restaurants"
            className="border border-gray-300 rounded-md px-3 py-2 text-sm "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-5 py-2.5 font-medium bg-blue-500 hover:bg-blue-700 hover:text-white text-white rounded-lg text-sm"
            onClick={() => {
              let filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="m-8 item-center px-5 py-2.5 font-medium bg-blue-500 hover:bg-blue-700 hover:text-white text-white rounded-lg text-sm"
            onClick={() => {
              let filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.3
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap p-2 ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className=" hover:text-gray-500 block px-3 py-1 font-medium rounded-lg text-gray-700"
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
