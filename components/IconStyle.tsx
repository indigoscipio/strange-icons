import React from "react";

const IconStyle = ({ selectedStyle, setSelectedStyle }) => (
  <div className="lg:col-span-2 flex gap-2">
    <label
      title="Monotone"
      htmlFor="monotone"
      className={`w-full text-center p-4 border border-neutral-700 rounded-br-xl cursor-pointer ${
        selectedStyle === "monotone" ? "bg-neutral-600" : "bg-neutral-800"
      }`}
    >
      <input
        className="appearance-none hidden"
        checked={selectedStyle === "monotone"}
        onChange={() => setSelectedStyle("monotone")}
        id="monotone"
        name="style"
        type="radio"
      />
      M
    </label>
    <label
      title="Duotone"
      htmlFor="duotone"
      className={`w-full text-center p-4 border border-neutral-700 rounded-br-xl cursor-pointer ${
        selectedStyle === "duotone" ? "bg-neutral-600" : "bg-neutral-800 "
      }`}
    >
      <input
        id="duotone"
        name="style"
        type="radio"
        checked={selectedStyle === "duotone"}
        onChange={() => setSelectedStyle("duotone")}
        className="appearance-none hidden"
      />
      D
    </label>
    <label
      htmlFor="solid"
      title="Solid"
      className={`w-full text-center p-4 border border-neutral-700 rounded-br-xl cursor-pointer ${
        selectedStyle === "solid" ? "bg-neutral-600" : "bg-neutral-800"
      }`}
    >
      <input
        id="solid"
        name="style"
        type="radio"
        checked={selectedStyle === "solid"}
        onChange={() => setSelectedStyle("solid")}
        className="appearance-none hidden"
      />
      S
    </label>
  </div>
);

export default IconStyle;
