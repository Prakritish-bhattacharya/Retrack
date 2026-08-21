import React, { useEffect, useState } from "react";
import { FOOD_IMAGE } from "../utils/Link-constants";

const RestaurantCard = (props) => {
  const [fevaurite, setFevaurite] = useState();

  const handleClick = () => {
    setFevaurite(!fevaurite);
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={FOOD_IMAGE}
          alt="Meghana Foods"
        />

        {/* Discount */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-orange-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          {props.resData?.aggregatedDiscountInfoV3?.header}
        </div>

        {/* Favourite */}
        <button
          className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition  "
          onClick={handleClick}
          style={{
            backgroundColor: fevaurite ? "tomato" : "lightblue",
            
          }}>
          ♡
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-gray-900">
            {props.resData?.name}
          </h3>

          <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded-lg text-sm font-bold">
            ⭐ {props.resData?.avgRating}
          </div>
        </div>

        <p className="text-gray-500 text-sm mt-2">
          {props.resData?.cuisines[0] +
            " • " +
            props.resData?.cuisines[1] +
            " • " +
            props.resData?.cuisines[2]}
        </p>

        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            🕒 {props.resData?.sla?.slaString}
          </span>

          <span>•</span>

          <span>{props.resData?.costForTwo}</span>
        </div>

        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs font-medium text-gray-400">
            Free delivery
          </span>

          <button className="text-orange-500 font-bold text-sm hover:text-orange-600">
            View menu →
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
