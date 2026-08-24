import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
// import createBrowserRouter for routing
import {createBrowserRouter} from 'react-router-dom'

import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

// create App Routing
export const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement: <Error/>
  },
  {
    path: '/about',
    element: <AboutUs/>
  },
  {
    path:'contact',
    element: <ContactUs/>
  }
])


export default App;
