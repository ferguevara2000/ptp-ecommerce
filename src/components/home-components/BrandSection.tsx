"use client";

import Image from "next/image";

const brands = [
  { name: "ATRO", image: "/images/brands/atro.webp" },
  { name: "CENTRAMATIC", image: "/images/brands/Centramatic.webp" },
  { name: "CON MET", image: "/images/brands/atro.webp" },
  { name: "DAYCO", image: "/images/brands/atro.webp" },
  { name: "DELCO REMY", image: "/images/brands/atro.webp" },
  { name: "DINEX", image: "/images/brands/atro.webp" },
  { name: "ECCO", image: "/images/brands/atro.webp" },
  { name: "GOODYEAR", image: "/images/brands/atro.webp" },
  { name: "GRAND GENERAL", image: "/images/brands/atro.webp" },
  { name: "GRAND ROCK", image: "/images/brands/atro.webp" },
  { name: "GROTE", image: "/images/brands/atro.webp" },
  { name: "HERD", image: "/images/brands/atro.webp" },
  { name: "HOGEBUILT", image: "/images/brands/atro.webp" },
  { name: "HORTON", image: "/images/brands/atro.webp" },
  { name: "LEECE NEVILLE", image: "/images/brands/atro.webp" },
  { name: "LINCOLN CHROME", image: "/images/brands/atro.webp" },
];

export default function ShopByBrandSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Shop by Truck Brand
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-white"
            >
              <div className="relative w-16 h-16 mb-3">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain"
                  sizes="64px"
                />
              </div>
              <span className="text-sm text-gray-700 text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
