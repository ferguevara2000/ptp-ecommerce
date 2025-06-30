import { BenefitsSection } from "@/components/home-components/BenefictSection";
import ShopByBrandSection from "@/components/home-components/BrandSection";
import { DealZoneSection } from "@/components/home-components/DealZoneSection";
import { HeroSection } from "@/components/home-components/HeroSection";
import { MainHeader } from "@/components/home-components/MainHeader";
import { ProductsSection } from "@/components/home-components/ProductSection";
import { TopHeaderBar } from "@/components/home-components/TopHeaderBar";

export default function Home() {
  return (
    <>
    <TopHeaderBar/>
    <MainHeader />
    <HeroSection />
    <BenefitsSection />
    <ProductsSection />
    <DealZoneSection />
    <ShopByBrandSection />
    {/* <BlogSection /> */}
    {/* <Footer /> */}
    </>
  );
}
