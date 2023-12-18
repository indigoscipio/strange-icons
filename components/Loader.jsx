import React from "react";

const Loader = () => (
  <div className=" flex-col gap-4 flex items-center justify-center h-48">
    <div className="flex space-x-2">
      <div className="w-4 h-4 bg-black rounded-tr-md animate-bounce-1"></div>
      <div className="w-4 h-4 bg-black rounded-tr-md animate-bounce-2"></div>
      <div className="w-4 h-4 bg-black rounded-tr-md animate-bounce-3"></div>
    </div>
    <p className="ml-2 text-gray-500">Loading icons...</p>
  </div>
);

export default Loader;
