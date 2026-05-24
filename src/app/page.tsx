import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhatWeDo from "@/components/sections/WhatWeDo";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import PowerfulFeatures from "@/components/sections/PowerfulFeatures";
import Industries from "@/components/sections/Industries";
import ComingSoon from "@/components/sections/ComingSoon";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <FeaturedProduct />
      <PowerfulFeatures />
      <Industries />
      <ComingSoon />
      <FinalCTA />
      <Footer />
    </>
  );
}
