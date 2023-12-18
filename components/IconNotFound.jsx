import React from "react";

const IconNotFound = () => {
  return (
    <div className="flex items-center justify-center h-48 text-gray-500">
      <div className="flex flex-col gap-4 items-center text-center">
        <img
          width="96"
          height="96"
          src="/icons/website/emotion-sad.svg"
          alt=""
        />
        <p className="text-xl">Woops! Icon not found! 😭</p>
      </div>
    </div>
  );
};

export default IconNotFound;
