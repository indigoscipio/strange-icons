import React from "react";

const IconSize = ({ iconSize, setIconSize }) => (
  <div className="col-span-2 lg:col-span-3 flex items-center space-x-4 bg-neutral-800 p-4 rounded-br-xl border border-neutral-700">
    <div className="text-lg">↗</div>
    <label className="flex-1">
      <input
        type="range"
        value={iconSize}
        min="16"
        max="80"
        step="8"
        onChange={(e) => setIconSize(Number(e.target.value))}
        className="flex items-center appearance-none w-full h-0.5 bg-white outline-none cursor-pointer"
      />
    </label>
    <span>{iconSize}px</span>
  </div>
);

export default IconSize;
