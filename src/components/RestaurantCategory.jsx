import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}

      <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-gray-600 text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer transition duration-300 ease-in-out transform">
            <FontAwesomeIcon
              icon={faAngleDown}
              className="w-4 h-4 text-gray-700"
            />
          </span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>

      {/* Accordian Body */}
    </div>
  );
};

export default RestaurantCategory;
