import React from "react";
const ShimmerCard = () => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
      {/* Image shimmer */}
      <div className="relative h-52 overflow-hidden bg-gray-200">
        <div className="absolute inset-0 shimmer" />
      </div>
      {/* Content */}
      <div className="p-5">
        {/* Restaurant name + rating */}
        <div className="flex items-start justify-between gap-3">
          <div className="h-5 w-40 rounded-lg bg-gray-200 shimmer" />
          <div className="h-7 w-14 rounded-lg bg-gray-200 shimmer" />
        </div>
        {/* Cuisines */}
        <div className="mt-3 h-4 w-52 rounded-md bg-gray-200 shimmer" />
        {/* Delivery + price */}
        <div className="flex items-center gap-4 mt-5">
          <div className="h-4 w-28 rounded-md bg-gray-200 shimmer" />
          <div className="h-4 w-20 rounded-md bg-gray-200 shimmer" />
        </div>
        {/* Bottom */}
        <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="h-3 w-24 rounded-md bg-gray-200 shimmer" />
          <div className="h-4 w-24 rounded-md bg-gray-200 shimmer" />
        </div>
      </div>
    </div>
  );
};
export default ShimmerCard;
