import { ITEM_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12 ">
            <div className="py-2">
              <span className="text-gray-600 text-lg font-bold">
                {item.card.info.name}
              </span>
              <span className="text-gray-600 text-lg font-bold">
                &nbsp; - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <span className="text-gray-600 text-xs ">
              {item.card.info.description}
            </span>
          </div>

          <div className="w-3/12 p-4 relative">
            <div className="absolute inset-x-0 bottom-0 flex justify-center">
              <button className="p-3 bg-white hover:bg-gray-200 shadow-lg m-auto mx-16 rounded-lg">
                Add
              </button>
            </div>
            <img
              className="rounded-lg w-full h-auto object-cover"
              src={ITEM_URL + item.card.info.imageId}
              alt="res-logo"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
