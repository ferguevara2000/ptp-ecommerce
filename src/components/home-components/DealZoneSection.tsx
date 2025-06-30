"use client";

import { ChevronDown } from "lucide-react";
import { ProductCard } from "../products-home/ProductCard";
import { useCountdown } from "../../hooks/useCountdown";
import { useMemo, useState } from "react";

export function DealZoneSection() {
  const targetDate = useMemo(() => {
    return new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000); // 3 días a partir de ahora
  }, []);

  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  const products = [
    // puedes reemplazar con tus productos reales
    { image: "/images/products/heavy-duty.jpeg?height=200&width=200", alt: "Product 1", sku: "SKU1", title: "Heavy Duty Exhaust System", ratingCount: 15, ratingValue: 4.6, price: "$1,249.00", badges: [] },
    { image: "/images/products/heavy-duty.jpeg?height=200&width=200", alt: "Product 2", sku: "SKU2", title: "Steel Truck Wheel", ratingCount: 18, ratingValue: 4.5, price: "$289.00", badges: ["HOT"] },
    { image: "/images/products/heavy-duty.jpeg?height=200&width=200", alt: "Product 3", sku: "SKU3", title: "LED Headlight", ratingCount: 24, ratingValue: 4.8, price: "$549.00", oldPrice: "$695.00", badges: ["SALE"] },
    { image: "/images/products/heavy-duty.jpeg?height=200&width=200", alt: "Product 4", sku: "SKU4", title: "Air Brake Chamber", ratingCount: 31, ratingValue: 4.7, price: "$124.00", badges: [] },
    { image: "/images/products/heavy-duty.jpeg?height=200&width=200", alt: "Product 5", sku: "SKU5", title: "Diesel Fuel Filter", ratingCount: 42, ratingValue: 4.9, price: "$89.00", badges: ["SALE", "NEW", "HOT"] },
    { image: "/images/products/heavy-duty.jpeg?height=200&width=200", alt: "Product 6", sku: "SKU6", title: "Clutch Kit", ratingCount: 19, ratingValue: 4.4, price: "$399.00", badges: [] },
    { image: "/images/products/heavy-duty.jpeg?height=200&width=200", alt: "Product 7", sku: "SKU7", title: "Engine Mount", ratingCount: 23, ratingValue: 4.2, price: "$159.00", badges: ["HOT"] },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5; // cuántos productos mostrar a la vez

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, products.length - visibleCount)
    );
  };

  return (
    <div
      className="relative py-16 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/placeholder.svg?height=400&width=1200')",
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center text-white mb-8">
          <h2 className="text-4xl font-bold mb-2">Attention! Deal Zone</h2>
          <p className="text-xl mb-6">
            Hurry up! Discounts up to 70% on truck parts
          </p>

          {/* Countdown */}
          <div className="flex justify-center space-x-4 mb-6">
            {[
              { value: days, label: "DAYS" },
              { value: hours, label: "HRS" },
              { value: minutes, label: "MINS" },
              { value: seconds, label: "SECS" },
            ].map(({ value, label }, idx) => (
              <div
                key={idx}
                className="bg-yellow-400 text-black px-4 py-3 rounded font-bold text-center min-w-[80px]"
              >
                <div className="text-2xl">{String(value).padStart(2, "0")}</div>
                <div className="text-sm">{label}</div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="text-white underline hover:text-yellow-400"
          >
            View All Available Offers
          </a>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
          <button
            className="bg-slate-900 text-white p-3 rounded-full hover:bg-slate-800"
            onClick={handlePrev}
          >
            <ChevronDown className="w-6 h-6 rotate-90" />
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10">
          <button
            className="bg-slate-900 text-white p-3 rounded-full hover:bg-slate-800"
            onClick={handleNext}
          >
            <ChevronDown className="w-6 h-6 -rotate-90" />
          </button>
        </div>

        {/* Products Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products
            .slice(startIndex, startIndex + visibleCount)
            .map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({
            length: products.length - visibleCount + 1,
          }).map((_, idx) => (
            <div
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === startIndex ? "bg-slate-900" : "bg-white"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
