import { BenefitsSection } from "@/components/home-components/BenefictSection";
import { HeroSection } from "@/components/home-components/HeroSection";
import { MainHeader } from "@/components/home-components/MainHeader";
import { TopHeaderBar } from "@/components/home-components/TopHeaderBar";

export default function Home() {
  return (
    <>
    <TopHeaderBar/>
    <MainHeader />
    <HeroSection />
    <BenefitsSection />
    </>
  );
}
