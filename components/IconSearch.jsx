// IconSearch.js
import React from "react";

const IconSearch = ({ searchQuery, setSearchQuery }) => (
  <div className="relative lg:col-span-3 ">
    <input
      className="w-full h-full bg-neutral-800 border border-neutral-700 rounded-br-xl p-4 appearance-none"
      type="text"
      placeholder="Search icons..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />

    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
      <img src="/icons/website/magnifying-glass.svg" alt="" />
    </div>
  </div>
);

export default IconSearch;
