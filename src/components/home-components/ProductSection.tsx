"use client";

import { ProductSectionHeader } from "../products-home/ProductSectionHeader";
import { ProductGrid } from "../products-home/ProductGrid";

export function ProductsSection() {
  return (
    <div className="py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4">
        <ProductSectionHeader />
        <ProductGrid />
      </div>
    </div>
  );
}
