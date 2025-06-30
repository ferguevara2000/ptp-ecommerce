"use client";

import { ShoppingCart, User, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { MenuSheet } from "../common/MenuDrawer";

export function MainHeader() {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          {/* 1️⃣ Menu + Logo */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Menu Icon */}
            <MenuSheet />

            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/images/logo-azul.png"
                alt="Planet Truck Logo"
                width={40}
                height={40}
                className="object-contain sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px]"
                priority
              />
              <Image
                src="/images/logo-letras.png"
                alt="Planet Truck Parts"
                width={90}
                height={30}
                className="object-contain sm:w-[110px] md:w-[130px]"
                priority
              />
            </div>
          </div>

          {/* 2️⃣ Search */}
          <div className="flex-1 order-3 sm:order-none w-full sm:w-auto">
            <div className="relative max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search truck parts..."
                className="w-full pl-10 pr-4 py-2 text-sm border-2 border-gray-300 rounded-lg"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* 3️⃣ Login + Cart */}
          <div className="flex items-center gap-6 sm:gap-8 md:gap-12">
            {/* Login */}
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              <span className="text-sm hidden sm:inline">Log In</span>
            </div>

            {/* Cart */}
            <div className="flex items-center cursor-pointer hover:text-gray-600">
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
