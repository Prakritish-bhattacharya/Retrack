import React from "react";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import {
  DISCOVER_THE_BEST_FOOD,
  EXPLORE_DELICIOUS_MEALS,
  HANDPICKED_RESTAURANTS_JUST_FOR_YOU,
  HUNGRY_We_HAVE_GOT_YOU_COVERED,
  NEAR_YOU,
  POPULAR_RESTAURANTS,
} from "../utils/Web-constants";
import ParticleBackground from "./ParticleBackground";

const Body = () => {
  return (
    <main className="relative bg-[#fafafa] min-h-screen overflow-hidden">
      {/* Interactive Particle Background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 pt-14 pb-10">
          <div className="max-w-3xl">
            <p className="text-orange-500 font-semibold mb-3">
              {HUNGRY_We_HAVE_GOT_YOU_COVERED}
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              {DISCOVER_THE_BEST_FOOD}

              <span className="text-orange-500">{NEAR_YOU}</span>
            </h1>

            <p className="mt-5 text-gray-500 text-lg max-w-2xl">
              {EXPLORE_DELICIOUS_MEALS}
            </p>
          </div>

          <Search />
        </section>

        {/* Restaurant Section */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <iv className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {POPULAR_RESTAURANTS}
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                {HANDPICKED_RESTAURANTS_JUST_FOR_YOU}
              </p>
            </div>

            <button className="text-orange-500 font-semibold text-sm hover:underline">
              View all →
            </button>
          </iv>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
            <RestaurantCard resName = "Khanki Magi" ratting = "40.5"/>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Body;
