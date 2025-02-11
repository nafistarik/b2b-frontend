import { FeaturedProductsSection } from "../components/Home/FeaturedProductsSection";
import HeroSection from "../components/Home/HeroSection";

export default function Home() {
    return (
        <div className="container">
        <HeroSection/>
        <FeaturedProductsSection/>
    </div>
    )
  }
  