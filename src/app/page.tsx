import { BenefitsSection } from "@/components/home-components/BenefictSection";
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
    {/* <NewsletterSection /> */}
    {/* <BrandsSection /> */}
    {/* <BlogSection /> */}
    {/* <Footer /> */}
    </>
  );
}
