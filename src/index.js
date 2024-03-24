import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Contact from "./components/Contact";
import AppLayout from "./App";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shimmer from "./components/Shimmer";

const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        exact: true,
        element: <Body />,
      },
      {
        path: "/about",
        exact: true,
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        exact: true,
        element: <Contact />,
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
