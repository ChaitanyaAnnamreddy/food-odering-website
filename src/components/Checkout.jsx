const Checkout = () => {
  return (
    <div className="pointer-events-none  flex justify-center m-3">
      <div className="pointer-events-auto w-screen max-w-md">
        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 ">
            <div className="flex items-start flex-wrap ">
              <div className="text-lg font-medium text-gray-900 ml-40 ">
                Checkout
              </div>

              <div className="ml-32 mb-48">
                <div className="m-20 ml-1"> Your order is Placed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
