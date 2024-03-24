import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <>
      <div className="flex justify-between bg-gray-500 shadow-lg px-2 ">
        <div className="flex flex-shrink-0 items-center ">
          <img className=" h-10 w-auto" src={LOGO_URL} alt="logo" />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-5">
            <li className="px-3 py-2 text-sm font-medium text-gray-300 list-none leading-5">
              Online Status: {online ? "✅" : "🔴"}
            </li>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-gray-300 hover:bg-gray-700 hover:text-white
                 rounded-md px-3 py-2 text-sm font-medium"
              >
                {item.name === "Cart" ? (
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="w-6 h-6 text-gray-700 mr-2"
                    />
                    <span className="text-gray-300">Cart</span>
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
                "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3.2 text-sm font-medium"
              )}
            >
              {btnName}
            </button>
            <img
              className="rounded-full w-10 h-10"
              src="120272918.png"
              alt="Avatar"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
