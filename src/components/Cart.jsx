import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

export default function Cart() {
  //subscribe to store
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems[0]);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="pointer-events-none  flex justify-center m-3">
      <div className="pointer-events-auto w-screen max-w-md">
        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
              <div className="text-lg font-medium text-gray-900">
                Shopping cart
              </div>
            </div>
            <div>
              <ItemList items={cartItems} />
            </div>

            <div className="mt-52 ml-36">
              <div className="flow-root">
                {cartItems.length === 0 && (
                  <h1 className="text-black-300">Cart is empty</h1>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>₹{cartItems[0].card?.info?.price / 100}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-4 flex flex-wrap justify-between ">
              <Link
                to={"/checkout"}
                className="rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </Link>
              <button
                className=" rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 ml-1"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{" "}
                <Link
                  to={"/"}
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
