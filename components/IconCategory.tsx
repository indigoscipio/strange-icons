import React from "react";

const IconCategory = ({ selectedCategory, setSelectedCategory }) => (
  <div className="relative lg:col-span-3 ">
    <select
      className="w-full h-full bg-neutral-800 border border-neutral-700 rounded-br-xl p-4 block appearance-none"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option className="p-4" value="asklepios">
        🏥 Asklepios
      </option>
      <option value="freud">🧠 Freud</option>
      <option value="turing">✝ Turing</option>
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
      ⬇
    </div>
  </div>
);

export default IconCategory;
