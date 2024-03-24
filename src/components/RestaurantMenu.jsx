import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, sla } =
    resInfo?.cards[0]?.card?.card?.info;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <header className="mb-4">
        <h1 className="text-2xl font-bold my-7">
          {name} - {avgRating + " rating"}
        </h1>
      </header>
      <section className="flex flex-col">
        <p className="text-gray-600 text-sm">Delivery Time - {sla.slaString}</p>
        <p className="text-gray-700 text-xl font-bold">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {/* category acordions*/}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </section>
    </div>
  );
};

export default RestaurantMenu;
