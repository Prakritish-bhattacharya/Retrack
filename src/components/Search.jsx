import React from "react";
import { SEARCH_FOR_RESTAURANTS } from "../utils/Web-constants";

const Search = () => {
  return (
    <div className="mt-10 max-w-2xl">
      <div className="bg-white p-2 rounded-2xl shadow-lg shadow-gray-100 border border-gray-100 flex items-center">
        <span className="text-xl px-3">🔍</span>

        <input
          className="flex-1 outline-none px-2 py-3 text-gray-700 placeholder-gray-400"
          placeholder={SEARCH_FOR_RESTAURANTS}
          type="text"
        />

        <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
