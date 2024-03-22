import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from "./components/About";
import Contact from "./components/Contact";
import AppLayout from "./App";
import Error from "./components/Error";
import Body from "./components/Body";
import RestaurantMenu from './components/RestaurantMenu';
import { RouterProvider,createBrowserRouter } from "react-router-dom";

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
        element: <Body />
      },
      {
        path: "/about",
        exact: true,
        element: <About />
      },
      {
        path: "/contact",
        exact: true,
        element: <Contact />
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={appRouter} />

);


