import React from "react";

const IconNotFound = () => {
  return (
    <div className="flex items-center justify-center h-48 text-gray-500">
      <div className="text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12 inline-block mb-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v14M5 12h14"
          />
        </svg>
        <p className="text-sm">Woops! Icon not found! 😭</p>
      </div>
    </div>
  );
};

export default IconNotFound;
