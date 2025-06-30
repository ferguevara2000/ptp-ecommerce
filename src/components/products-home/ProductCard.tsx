"use client";

import { Star, Maximize2, ShoppingCart as CartIcon } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  sku: string;
  labels?: string[];
  oldPrice?: string;
  rating?: number;
  reviews?: number;
}

export function ProductCard({
  title,
  price,
  image,
  sku,
  labels = [],
  oldPrice,
  rating = 5,
}: ProductCardProps) {
  return (
    <div className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="relative mb-4">
        <Image
  src={image}
  alt={title}
  width={300}
  height={300}
  className="w-full h-48 object-contain"
/>
        <div className="absolute top-2 left-2 flexpace-y-1">
          {labels.map((label, idx) => (
            <span
              key={idx}
              className={`${
                label === "HOT"
                  ? "bg-purple-500"
                  : label === "SALE"
                  ? "bg-slate-900"
                  : "bg-green-500"
              } text-white px-2 py-1 text-xs rounded`}
            >
              {label}
            </span>
          ))}
        </div>
        <Maximize2 className="absolute top-2 right-2 w-5 h-5 text-gray-400 cursor-pointer" />
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>
      </div>
      <div className="text-sm text-gray-500 mb-1">SKU: {sku}</div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="flex items-center mb-2">
        <div className="flex text-yellow-400">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {oldPrice && (
            <span className="text-sm text-gray-500 line-through">{oldPrice}</span>
          )}
          <span className="text-xl font-bold">{price}</span>
        </div>
        <button className="p-2 border rounded hover:bg-gray-50">
          <CartIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
