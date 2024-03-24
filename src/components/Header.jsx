import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "About", to: "/about", current: false },
  { name: "Contact Us", to: "/contact", current: false },
  { name: "Cart", to: "/cart", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const online = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  //subscribing to redux store
  const cartItem = useSelector((store) => store.cart.cartItems);

  return (
    <>
      <div className="flex justify-between bg-gray-500 shadow-lg px-5 p-3">
        <div className="flex flex-shrink-0 items-center ">
          <Link to="/">
            <img className=" rounded-lg w-16 h-12" src={LOGO_URL} alt="logo" />
          </Link>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-1">
            <li className="px-3 py-2 text-sm font-medium text-gray-300 list-none leading-5">
              Online Status: {online ? "🔵" : "🔴"}
            </li>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-300 hover:bg-gray-700 hover:text-white
                 rounded-md px-3 py-2 text-sm font-medium"
              >
                {item.name === "Cart" ? (
                  <div className="flex items-center ">
                    <FontAwesomeIcon
                      icon={faBasketShopping}
                      className="w-6 h-6 text-white-700 mr-2"
                    />
                    <span className="text-gray-300 ">
                      ({cartItem.length} items)
                    </span>
                  </div>
                ) : (
                  item.name
                )}
              </Link>
            ))}{" "}
            <button
              onClick={() => {
                setBtnName(btnName === "Login" ? "Logout" : "Login");
                //   if the user clicks the "Login" button it will be changed to "Logout"
                //   and when the user clicks the "Logout" button it will be changed to "Login"
              }}
              className={classNames(
                "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3.5 text-sm font-medium "
              )}
            >
              {btnName}
            </button>
            <img
              className="rounded-full w-10 h-10 "
              src="120272918.png"
              alt="Avatar"
            ></img>
            <li className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md  text-sm font-medium list-none max-w-16  py-2 cursor-pointer">
              {loggedInUser}
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
