import React, { useState } from "react";
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
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-3.5">
        <div className="flex items-center justify-between">
          {/* ================= LOGO ================= */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-orange-400/20 blur-md opacity-0 group-hover:opacity-100 transition duration-300" />

              <img
                className="relative w-11 h-11 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform duration-300"
                alt={FOOD_APP_LOGO}
                src={APP_LOGO}
              />
            </div>

            <div className="leading-none">
              <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
                {FOODIE}
              </h1>

              <p className="text-[11px] text-gray-400 font-medium mt-1 tracking-wide">
                {DELICIOUS_MOMENTS}
              </p>
            </div>
          </div>

          {/* ================= NAVIGATION ================= */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-2">
              <li>
               <Link to='/'> <button className="relative px-4 py-2 text-sm font-semibold text-orange-500 rounded-xl bg-orange-50">
                  {HOME}

                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500" />
                </button></Link>
              </li>

              <li>
                <Link to='/about'>
                  
                  <button className="px-4 py-2 text-sm font-semibold text-gray-500 rounded-xl hover:text-orange-500 hover:bg-orange-50 transition-all duration-200">
                    {ABOUT_US}
                  </button>
                </Link>
              </li>

              <li>
                <Link to='contact'><button className="px-4 py-2 text-sm font-semibold text-gray-500 rounded-xl hover:text-orange-500 hover:bg-orange-50 transition-all duration-200">
                  {CONTACT_US}
                </button></Link>
              </li>
            </ul>
          </nav>

          {/* ================= ACTIONS ================= */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <button className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-semibold text-sm hover:border-orange-200 hover:text-orange-500 hover:bg-orange-50 transition-all duration-200">
              <span className="text-lg">🛒</span>

              <span className="hidden sm:inline">{CART}</span>

              {/* Cart Badge */}
              <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white text-[10px] font-bold shadow-sm">
                0
              </span>
            </button>

            {/* Login / Logout */}
            <button
              onClick={() => {
                setIsLoggedIn((prev) => !prev);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                isLoggedIn
                  ? "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                  : "bg-orange-500 text-white shadow-md shadow-orange-200 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-200"
              }`}>
              <span>{isLoggedIn ? "👤" : "↪"}</span>

              <span>{isLoggedIn ? "Logout" : "Login"}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
