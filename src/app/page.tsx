import { BenefitsSection } from "@/components/home-components/BenefictSection";
import ShopByBrandSection from "@/components/home-components/BrandSection";
import { DealZoneSection } from "@/components/home-components/DealZoneSection";
import { HeroSection } from "@/components/home-components/HeroSection";
import { ProductsSection } from "@/components/home-components/ProductSection";

export default function Home() {
  return (
    <>
    <HeroSection />
    <BenefitsSection />
    <ProductsSection />
    <DealZoneSection />
    <ShopByBrandSection />
    </>
  );
}
