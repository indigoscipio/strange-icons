"use client";
import { formatIconName } from "../lib/formatIconName";
import React, { useState } from "react";

const Icon = ({ icon, iconSize, onIconClick }) => {
  return (
    <div
      className=" px-4 py-6 rounded-br-3xl hover:bg-white cursor-pointer"
      onClick={() => onIconClick(icon)}
    >
      <div className="text-center">
        <img
          src={icon.url}
          alt=""
          sizes=""
          width={iconSize}
          height={iconSize}
          className="mx-auto py-4"
        />
        <span className="text-sm text-neutral-600">
          {formatIconName(icon.name)}
        </span>
      </div>
    </div>
  );
};

export default Icon;
