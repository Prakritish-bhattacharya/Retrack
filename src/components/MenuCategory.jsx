import React, { useState } from "react";

const MenuCategory = ({ category }) => {
  const [isOpen, setIsOpen] = useState(true);

  const title =
    category?.card?.card?.title ||
    category?.card?.card?.header?.title ||
    "Menu";

  const itemCards = category?.card?.card?.itemCards || [];

  return (
    <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
      {/* Category Header */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>

          <span className="text-sm text-gray-400 font-medium">
            {itemCards.length} items
          </span>
        </div>

        <span
          className={`text-xl text-gray-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}>
          ⌄
        </span>
      </button>

      {/* Category Content */}
      {isOpen && (
        <div className="px-6 pb-4">
          {itemCards.map((item) => (
            <MenuItem key={item?.card?.info?.id} item={item?.card?.info} />
          ))}
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ item }) => {
  const imageId = item?.imageId;

  const imageUrl = imageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${imageId}`
    : null;

  return (
    <div className="py-6 border-t border-gray-100 first:border-t-0">
      <div className="flex items-center justify-between gap-6">
        {/* Item Details */}
        <div className="flex-1 min-w-0">
          {/* Veg / Non-Veg */}
          <div className="flex items-center gap-2 mb-2">
            {item?.isVeg === 1 ? (
              <span className="w-4 h-4 border-2 border-green-600 rounded-sm flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
              </span>
            ) : (
              <span className="w-4 h-4 border-2 border-red-500 rounded-sm flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
              </span>
            )}

            {item?.isBestseller && (
              <span className="text-xs font-bold text-orange-500">
                ★ Bestseller
              </span>
            )}
          </div>

          {/* Name */}
          <h3 className="text-lg font-bold text-gray-900">{item?.name}</h3>

          {/* Price */}
          <p className="mt-1 text-base font-semibold text-gray-800">
            ₹{Math.round((item?.price || item?.defaultPrice || 0) / 100)}
          </p>

          {/* Rating */}
          {item?.ratings?.aggregatedRating?.rating && (
            <div className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-green-700">
              ★ {item.ratings.aggregatedRating.rating}
              <span className="text-gray-400">
                ({item.ratings.aggregatedRating.ratingCountV2 || 0})
              </span>
            </div>
          )}

          {/* Description */}
          {item?.description && (
            <p className="mt-3 text-sm leading-6 text-gray-500 max-w-2xl line-clamp-2">
              {item.description}
            </p>
          )}
        </div>

        {/* Image + Add */}
        <div className="relative w-36 sm:w-40 shrink-0">
          <div className="w-full h-36 rounded-2xl overflow-hidden bg-gray-100">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={item?.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-4xl">
                🍽️
              </div>
            )}
          </div>

          <button className="absolute left-1/2 -translate-x-1/2 -bottom-4 bg-white border border-gray-200 text-green-600 font-extrabold px-8 py-2 rounded-xl shadow-lg hover:bg-green-50 transition">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
