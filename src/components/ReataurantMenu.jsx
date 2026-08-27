import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCategory from "./MenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resInfo, setResInfo] = useState(null);
  const [menuCategories, setMenuCategories] = useState([]);
  const [loading, setLoading] = useState(true);

const fetchRestaurantMenu = async () => {
  try {
    setLoading(true);

    const data = await fetch(
      `https://namastedev.com/api/v1/listRestaurantMenu/${resId}`
    );

    const json = await data.json();

    console.log("Restaurant API:", json);

    const cards = json?.data?.cards || [];

    // =========================
    // Restaurant information
    // =========================

    const restaurantInfoCard = cards.find(
      (card) => card?.card?.card?.info
    );

    const restaurantInfo =
      restaurantInfoCard?.card?.card?.info;

    console.log("Restaurant Info:", restaurantInfo);

    // =========================
    // Menu information
    // =========================

    const groupedCard = cards.find(
      (card) => card?.groupedCard
    )?.groupedCard;

    const regularCards =
      groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    console.log("Regular Cards:", regularCards);

    // =========================
    // Menu categories
    // =========================

    const categories = regularCards.filter(
      (card) =>
        card?.card?.card?.itemCards?.length > 0
    );

    console.log("Menu Categories:", categories);

    setResInfo(restaurantInfo);
    setMenuCategories(categories);

  } catch (error) {
    console.error(
      "Failed to fetch restaurant menu:",
      error
    );
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchRestaurantMenu();
  }, [resId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-orange-100 border-t-orange-500 rounded-full animate-spin mx-auto" />

          <p className="mt-4 text-gray-500 font-medium">
            Preparing your menu...
          </p>
        </div>
      </div>
    );
  }

  if (!resInfo) {
    return (
      <div className="min-h-screen bg-[#fafafa] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl">🍽️</div>

          <h1 className="mt-5 text-2xl font-bold text-gray-900">
            Restaurant not found
          </h1>

          <p className="mt-2 text-gray-500">
            We couldn't load this restaurant.
          </p>
        </div>
      </div>
    );
  }

  const restaurantImage = resInfo.cloudinaryImageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${resInfo.cloudinaryImageId}`
    : null;

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* ================= RESTAURANT HERO ================= */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 pt-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <span>Home</span>
          <span>/</span>
          <span>Restaurants</span>
          <span>/</span>
          <span className="text-gray-700 font-semibold">{resInfo.name}</span>
        </div>

        <div className="bg-white rounded-4xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Restaurant Image */}
          {restaurantImage && (
            <div className="h-64 md:h-80 overflow-hidden">
              <img
                src={restaurantImage}
                alt={resInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Restaurant Details */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <p className="text-orange-500 text-sm font-bold uppercase tracking-wider">
                  Restaurant
                </p>

                <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">
                  {resInfo.name}
                </h1>

                <p className="mt-3 text-gray-500">
                  {resInfo.cuisines?.join(" • ")}
                </p>
              </div>

              {/* Rating */}
              <div className="bg-green-50 border border-green-100 rounded-2xl px-5 py-4 min-w-32.5">
                <div className="text-green-700 text-lg font-extrabold">
                  ★ {resInfo.avgRating}
                </div>

                <p className="text-xs text-gray-500 mt-1">
                  {resInfo.totalRatingsString}
                </p>
              </div>
            </div>

            {/* Info Row */}
            <div className="mt-7 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-orange-500">🕒</span>

                <span className="font-semibold text-gray-700">
                  {resInfo.sla?.slaString || "30-35 mins"}
                </span>
              </div>

              <div className="w-1 h-1 rounded-full bg-gray-300" />

              <div className="flex items-center gap-2">
                <span>💰</span>

                <span className="font-semibold text-gray-700">
                  {resInfo.costForTwoMessage}
                </span>
              </div>

              <div className="w-1 h-1 rounded-full bg-gray-300" />

              <div className="flex items-center gap-2 text-green-600">
                <span>●</span>

                <span className="font-semibold">Open now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MENU ================= */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 py-10">
        {/* Menu Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-orange-500 text-sm font-bold">EXPLORE</p>

            <h2 className="text-3xl font-extrabold text-gray-900 mt-1">
              Our Menu
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Delicious food, made for you.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600">
            🍴 {menuCategories.length} sections
          </div>
        </div>

        {/* Search */}
        <div className="sticky top-20 z-30 mb-7">
          <div className="bg-white border border-gray-100 shadow-md rounded-2xl px-5 py-3 flex items-center gap-3">
            <span className="text-xl">🔍</span>

            <input
              type="text"
              placeholder="Search dishes..."
              className="flex-1 outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Accordion Categories */}
        <div className="space-y-5">
          {menuCategories.map((category, index) => (
            <MenuCategory
              key={category?.card?.card?.title || index}
              category={category}
            />
          ))}
        </div>
      </section>

      {/* Floating Cart */}
      <button className="fixed bottom-6 right-6 z-50 bg-orange-500 text-white px-6 py-4 rounded-2xl shadow-xl shadow-orange-200 font-bold flex items-center gap-3 hover:bg-orange-600 hover:-translate-y-1 transition-all">
        <span className="text-xl">🛒</span>

        <span>View Cart</span>
      </button>
    </main>
  );
};

export default RestaurantMenu;
