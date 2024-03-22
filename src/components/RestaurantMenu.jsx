import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=Enter"
    );
    const json = await data.json();
    console.log(json.data.cards[0].card.card.info);
    setResInfo(json?.data?.cards[0]?.card?.card?.info);
  };

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <h2>{resInfo.areaName}</h2>
      <h2>{resInfo.cuisines}</h2>
      <h2>{resInfo.avgRating} rating</h2>
      <h2>{resInfo.costForTwoMessage}</h2>
      <h2>{resInfo.sla?.slaString}</h2>
      <h2>{resInfo.price}</h2>
    </div>
  );
};

export default RestaurantMenu;
