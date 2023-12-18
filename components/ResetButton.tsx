import React from "react";

const ResetButton = ({ handleReset }) => {
  return (
    <button
      title="Reset Filter"
      onClick={handleReset}
      className="col-span-1 bg-white text-black p-4 rounded-br-xl hover:bg-neutral-200 flex items-center justify-center"
    >
      <img src="/icons/website/arrow-refresh.svg" alt="" />
    </button>
  );
};

export default ResetButton;
