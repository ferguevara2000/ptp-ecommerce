"use client";

import { ShoppingCart, User, Menu, Search } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input"; // Cambia si no usas shadcn

export function MainHeader() {
  return (
    <div className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 space-x-4">
          {/* 1️⃣ Menu + Logo + Texto */}
          <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-600">
            {/* Menu Icon */}
            <Menu className="w-6 h-6 text-gray-600" />

            {/* Logo */}
            <div className="flex items-center space-x-2">
              {/* Logo */}
              <Image
                src="/images/logo-azul.png"
                alt="Planet Truck Logo"
                width={60}
                height={60}
                className="object-contain"
                priority
              />

              {/* Letras */}
              <Image
                src="/images/logo-letras.png"
                alt="Planet Truck Parts"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* 3️⃣ Search */}
          <div className="flex-1 mx-4 max-w-xl">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search truck parts..."
                className="w-full pl-10 pr-4 py-2 text-sm border-2 border-gray-300 rounded-lg"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* 4️⃣ Login + 5️⃣ Cart */}
<div className="flex items-center space-x-12">
  {/* Login */}
  <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-600">
    <User className="w-6 h-6 text-gray-600" />
    <span className="text-sm hidden sm:inline">Log In</span>
  </div>

  {/* Cart */}
  <div className="flex items-center cursor-pointer hover:text-gray-600">
    <ShoppingCart className="w-6 h-6 text-gray-600" />
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
