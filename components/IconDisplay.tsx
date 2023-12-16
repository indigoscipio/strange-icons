"use client";

import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import IconSearch from "./IconSearch";
import IconCategory from "./IconCategory";
import IconStyle from "./IconStyle";
import IconSize from "./IconSize";
import Loader from "./Loader";
import { fetchIcons } from "@/services/fetchIcons";
import ResetButton from "./ResetButton";
import Popup from "./Popup";
import IconNotFound from "./IconNotFound";

const IconDisplay = () => {
  const initialCategory = "asklepios";
  const initialStyle = "monotone";
  const initialIconSize = 32;

  const [iconData, setIconData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedStyle, setSelectedStyle] = useState(initialStyle);
  const [iconSize, setIconSize] = useState(initialIconSize);
  const [loading, setLoading] = useState(true);
  const [selectedIcon, setSelectedIcon] = useState(null);

  const filteredIcons = iconData.filter((icon) => {
    const nameLower = icon.name.toLowerCase().trim();
    const searchLower = searchQuery.toLowerCase().trim();

    return (
      icon.category === selectedCategory &&
      (nameLower.includes(searchLower) || !searchQuery)
    );
  });

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory(initialCategory);
    setSelectedStyle(initialStyle);
    setIconSize(initialIconSize);
  };

  useEffect(() => {
    setLoading(true); // Set loading to true before fetch
    fetchIcons(selectedCategory, selectedStyle, setIconData, setLoading);
  }, [selectedCategory, selectedStyle]);

  return (
    <section id="section-icon-display" className="relative">
      <div className="sticky top-0 bg-black text-white rounded-tr-2xl">
        <div className="container grid grid-cols-2 lg:grid-cols-12 mx-auto gap-4 p-4">
          <IconSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <IconCategory
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <IconSize iconSize={iconSize} setIconSize={setIconSize} />
          <IconStyle
            selectedStyle={selectedStyle}
            setSelectedStyle={setSelectedStyle}
          />
          <ResetButton handleReset={handleReset} />
        </div>
      </div>

      <div className="bg-neutral-100">
        <div className="py-16 container mx-auto py-16">
          {loading && <Loader />}
          {!loading &&
            (filteredIcons.length === 0 && searchQuery.trim() !== "" ? (
              <IconNotFound />
            ) : (
              <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
                {filteredIcons.map((icon, index) => (
                  <Icon
                    onIconClick={setSelectedIcon}
                    iconSize={iconSize}
                    key={index}
                    icon={icon}
                  />
                ))}
              </div>
            ))}

          {selectedIcon && (
            <Popup
              iconSize={iconSize}
              icon={selectedIcon}
              closePopup={() => setSelectedIcon(null)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default IconDisplay;
