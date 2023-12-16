// ResetButton.js
import React from "react";

const ResetButton = ({ handleReset }) => {
  return (
    <button
      onClick={handleReset}
      className="col-span-1 bg-white text-black p-4 rounded-br-xl hover:bg-neutral-200"
    >
      🔃
    </button>
  );
};

export default ResetButton;
