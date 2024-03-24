import { CDN_URL } from "../utils/constants";
import { StarIcon } from "@heroicons/react/outline";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[240px] rounded-lg  bg-gray-100 hover:bg-gray-300 shadow-xl ">
      <img
        className="rounded-lg w-150 h-auto"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-1 text-xl text-center mr-2">{name}</h3>{" "}
      <div className="flex items-center justify-center">
        <StarIcon className="w-6 h-6 text-yellow-500" />
        <h4 className="py-1 text-xl text-center">{avgRating}</h4>
      </div>
      <p className="py-1 text-sm text-center">{cuisines.join(", ")}</p>
      <h4 className="py-1 text-xl text-center ml-2">{sla?.slaString}</h4>{" "}
      <h4 className="py-1 text-xl text-center">{costForTwo}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-slate-700 text-slate-200 m-1 p-1 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
