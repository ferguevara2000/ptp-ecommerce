"use client";

import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  const products = [
    {
      title: 'Heavy Duty 22.5" Steel Truck Wheel',
      price: "$289.00",
      image: "/images/products/heavy-duty.jpeg?height=200&width=200",
      sku: "TW-22.5-HD",
      labels: ["HOT"],
      rating: 5,
    },
    {
      title: "LED Headlight Assembly for Freightliner Cascadia",
      price: "$549.00",
      oldPrice: "$695.00",
      image: "/images/products/heavy-duty.jpeg?height=200&width=200",
      sku: "HL-CASC-LED",
      labels: ["SALE"],
      rating: 5,
    },
    {
      title: "Heavy Duty Air Brake Chamber",
      price: "$124.00",
      image: "/images/products/heavy-duty.jpeg?height=200&width=200",
      sku: "ABC-HD-30",
      rating: 5,
    },
    {
      title: "Diesel Fuel Filter Kit for Cummins ISX",
      price: "$89.00",
      image: "/images/products/heavy-duty.jpeg?height=200&width=200",
      sku: "DFF-ISX-KIT",
      labels: ["SALE", "NEW", "HOT"],
      rating: 5,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  );
}
