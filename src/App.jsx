import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
// import createBrowserRouter for routing
import { createBrowserRouter, Outlet } from "react-router-dom";

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/ReataurantMenu";
import { useParams } from "react-router-dom";

const App = () => {
  // const resId = useParams()
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

// create App Routing
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body/>
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: 'restaurant-menu/:resId',
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error />,
  },
]);

export default App;
