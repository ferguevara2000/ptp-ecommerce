"use client";

import * as React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import Image from "next/image";

export function MenuSheet() {
  const menuItems = [
    {
      label: "Exterior Parts and Accessories",
      subItems: ["Mirrors", "Bumpers", "Fenders", "Grilles", "Side Steps"],
    },
    {
      label: "Interior Parts and Accessories",
      subItems: ["Seats", "Dash Kits", "Steering Wheels", "Floor Mats", "Pedals"],
    },
    {
      label: "Lighting",
      subItems: ["Headlights", "Tail Lights", "Fog Lights", "LED Bars", "Signal Lights"],
    },
    {
      label: "Parts",
      subItems: ["Engine Parts", "Brake Parts", "Suspension", "Transmission", "Cooling"],
    },
    {
      label: "Sensors",
      subItems: ["Oxygen Sensors", "Speed Sensors", "Pressure Sensors", "Parking Sensors", "Temperature Sensors"],
    },
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleMenu = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-gray-100 cursor-pointer">
          <Menu className="w-6 h-6 text-gray-600" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0 w-[80vw] sm:w-72 overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle className="sr-only">Main Menu</SheetTitle>
        </SheetHeader>

        {/* Header with Logo */}
        <div className="flex flex-col items-center justify-center border-b p-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo-azul.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/images/logo-letras.png"
              alt="Planet Truck Parts"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        </div>

        {/* Categories Header */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2 border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 tracking-wide">
            Categories
          </h2>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col p-2">
          {menuItems.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <button
                onClick={() => toggleMenu(idx)}
                className="
                  flex items-center justify-between
                  py-3 px-4
                  text-gray-700 hover:bg-gray-100 hover:text-red-600
                  transition rounded
                  font-medium text-base sm:text-sm
                "
              >
                {item.label}
                <ChevronDown
                  className={`w-5 h-5 sm:w-4 sm:h-4 transform transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="ml-4 flex flex-col mb-2">
                  {item.subItems.map((subItem, subIdx) => (
                    <a
                      key={subIdx}
                      href="#"
                      className="
                        py-2 px-2 text-gray-600 hover:text-red-500
                        text-base sm:text-sm transition
                      "
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
