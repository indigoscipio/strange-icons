"use client";

import { formatIconName } from "../lib/formatIconName";
import { useState } from "react";

const Popup = ({ icon, closePopup, iconSize }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isCopying, setIsCopying] = useState(false);

  const downloadSVG = async () => {
    try {
      const response = await fetch(icon.url);
      const svgData = await response.text();

      // Create a new SVG element with the specified width and height
      const tempSvg = new DOMParser().parseFromString(
        svgData,
        "image/svg+xml"
      ).documentElement;
      tempSvg.setAttribute("width", iconSize);
      tempSvg.setAttribute("height", iconSize);

      // Serialize the modified SVG data
      const modifiedSVGData = new XMLSerializer().serializeToString(tempSvg);

      const svgBlob = new Blob([modifiedSVGData], { type: "image/svg+xml" });
      const svgUrl = URL.createObjectURL(svgBlob);

      const downloadLink = document.createElement("a");
      downloadLink.href = svgUrl;
      downloadLink.download = `${icon.name}`;
      document.body.appendChild(downloadLink);

      downloadLink.click();

      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(svgUrl);
    } catch (error) {
      console.error("Error downloading SVG:", error);
    }
  };

  const downloadPNG = async () => {
    try {
      const response = await fetch(icon.url);
      const svgData = await response.text();

      // Convert SVG to PNG
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      const img = new Image();
      img.src = `data:image/svg+xml,${encodeURIComponent(svgData)}`;
      img.onload = () => {
        canvas.width = iconSize;
        canvas.height = iconSize;
        context.drawImage(img, 0, 0, iconSize, iconSize);

        // Convert canvas to data URL (PNG)
        const pngUrl = canvas.toDataURL("image/png");

        // Extract the file name without the ".svg" extension
        const fileNameWithoutExtension = icon.name.replace(".svg", "");

        // Create a temporary download link
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;

        // Update the download link to remove the ".svg" extension
        downloadLink.download = `${fileNameWithoutExtension}.png`;
        document.body.appendChild(downloadLink);

        // Trigger the click event to start the download
        downloadLink.click();

        // Remove the temporary download link
        document.body.removeChild(downloadLink);
      };
    } catch (error) {
      console.error("Error downloading PNG:", error);
    }
  };

  const copyCodeToClipboard = async () => {
    try {
      if (isCopying) {
        return;
      }

      setIsCopying(true);

      const response = await fetch(icon.url);
      const svgData = await response.text();

      // Remove the existing width and height attributes
      const cleanedSVGData = svgData
        .replace(/width=".*?"/, "")
        .replace(/height=".*?"/, "");

      // Add the new width and height attributes
      const modifiedSVGData = cleanedSVGData.replace(
        /<svg/,
        `<svg width="${iconSize}" height="${iconSize}"`
      );

      navigator.clipboard.writeText(modifiedSVGData);

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
        setIsCopying(false);
      }, 2000);
    } catch (error) {
      console.error("Error copying SVG code:", error);
    }
  };

  return (
    <div className="popup z-10">
      <div className="popup-content">
        <div className="flex flex-none  items-center justify-center w-20 h-20 md:w-28 md:h-28 border  border-neutral-400">
          <img width="48" height="48" src={icon.url} alt={icon.name} />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-center sm:text-left text-2xl font-semibold">
            {icon.name}
          </h3>
          <div className="flex-wrap items-center justify-center flex flex-row gap-2">
            <button
              onClick={downloadSVG}
              className="gap-1 flex-none btn-subtle flex items-center"
            >
              <img src="/icons/website/download.svg" alt="" />
              SVG
            </button>
            <button
              onClick={downloadPNG}
              className="gap-1 flex-none btn-subtle flex items-center"
            >
              <img src="/icons/website/image.svg" alt="" />
              PNG
            </button>
            <button
              onClick={copyCodeToClipboard}
              className="gap-1 flex-none btn-subtle flex items-center"
            >
              {isCopied ? (
                <img src="/icons/website/check.svg" alt="" />
              ) : (
                <img src="/icons/website/copy.svg" alt="" />
              )}
              {isCopied ? "Copied!" : "Copy SVG"}
            </button>
          </div>
        </div>

        <button onClick={closePopup} className="p-2">
          <img width="32" height="32" src="/icons/website/close.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Popup;
