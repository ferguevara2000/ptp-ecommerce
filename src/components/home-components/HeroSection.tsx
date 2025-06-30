"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function HeroSection() {
  return (
    <div
      className="relative h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/truck-hero.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Find Parts For Your Truck
        </h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl drop-shadow-lg">
          Over hundreds of brands and tens of thousands of commercial truck parts
        </p>

        {/* Search Form */}
        <div className="flex flex-wrap gap-3 sm:gap-4 items-center justify-center max-w-3xl w-full">
          <Button className="bg-slate-900 hover:bg-slate-800 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base">
            Search
          </Button>

          <Select>
            <SelectTrigger className="w-40 sm:w-48 bg-gray-200 text-gray-700 border-0 text-sm sm:text-base">
              <SelectValue placeholder="Select Make" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="freightliner">Freightliner</SelectItem>
              <SelectItem value="volvo">Volvo</SelectItem>
              <SelectItem value="kenworth">Kenworth</SelectItem>
              <SelectItem value="peterbilt">Peterbilt</SelectItem>
              <SelectItem value="mack">Mack</SelectItem>
              <SelectItem value="international">International</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-40 sm:w-48 bg-gray-200 text-gray-700 border-0 text-sm sm:text-base">
              <SelectValue placeholder="Select Model" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cascadia">Cascadia</SelectItem>
              <SelectItem value="vnl">VNL</SelectItem>
              <SelectItem value="t680">T680</SelectItem>
              <SelectItem value="w900">W900</SelectItem>
              <SelectItem value="anthem">Anthem</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-40 sm:w-48 bg-white text-gray-700 border-0 text-sm sm:text-base">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2019">2019</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}