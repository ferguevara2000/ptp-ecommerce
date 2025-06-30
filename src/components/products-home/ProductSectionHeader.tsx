"use client";

import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

export function ProductSectionHeader() {
  const categories = [
    "Exterior Parts and Accessories",
    "Interior Parts and Accessories",
    "Lighting",
    "Parts",
    "Sensors",
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setActiveIndex((prev) => {
      const newIndex = prev === 0 ? categories.length - 1 : prev - 1;
      scrollToCategory(newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const newIndex = prev === categories.length - 1 ? 0 : prev + 1;
      scrollToCategory(newIndex);
      return newIndex;
    });
  };

  const scrollToCategory = (index: number) => {
    const container = containerRef.current;
    if (container) {
      const button = container.children[index] as HTMLElement;
      if (button) {
        button.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
      <div className="flex items-center space-x-4 mb-4 lg:mb-0 w-full lg:w-auto">
        {/* Functional Chevron Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            className="bg-slate-900 text-white p-2 rounded hover:bg-slate-800 transition"
            aria-label="Previous Category"
          >
            <ChevronDown className="w-4 h-4 rotate-90" />
          </button>
          <button
            onClick={handleNext}
            className="bg-slate-900 text-white p-2 rounded hover:bg-slate-800 transition"
            aria-label="Next Category"
          >
            <ChevronDown className="w-4 h-4 -rotate-90" />
          </button>
        </div>

        {/* Category Buttons with Horizontal Scroll on Mobile */}
        <div
          ref={containerRef}
          className="
            flex overflow-x-auto scrollbar-hide
            gap-2 sm:gap-4
            w-full lg:w-auto
            px-1
          "
        >
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`flex-shrink-0 px-3 sm:px-4 py-2 rounded text-sm sm:text-base whitespace-nowrap transition ${
                activeIndex === idx
                  ? "bg-gray-800 text-white"
                  : "text-gray-600 hover:text-red-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Fixed Title */}
      <h2 className="text-xl sm:text-2xl font-bold">
        Featured Truck Parts
      </h2>
    </div>
  );
}
