import React from "react";
import { APP_LOGO } from "../utils/Link-constants";
import {
  ABOUT_US,
  CART,
  CONTACT_US,
  DELICIOUS_MOMENTS,
  FOOD_APP_LOGO,
  FOODIE,
  HOME,
} from "../utils/Web-constants";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 rounded-2xl object-cover shadow-sm"
            alt={FOOD_APP_LOGO}
            src={APP_LOGO}
          />

          <div>
            <h1 className="text-xl font-extrabold text-gray-900">{FOODIE}</h1>
            <p className="text-xs text-gray-500">{DELICIOUS_MOMENTS}</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-semibold text-gray-600">
            <li className="hover:text-orange-500 cursor-pointer transition">
              {HOME}
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition">
              {ABOUT_US}
            </li>

            <li className="hover:text-orange-500 cursor-pointer transition">
              {CONTACT_US}
            </li>
          </ul>
        </nav>

        {/* Cart */}
        <button className="flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-orange-600 transition shadow-md shadow-orange-200">
          🛒
          <span>{CART}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
