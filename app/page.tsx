import BestSellers from "@/components/Main-Page/BestSellers";
import Collection from "@/components/Main-Page/Collection";
import HeroSection from "@/components/Main-Page/HeroSection";

export default function Home() {
  return (
    <div className="">
        <HeroSection />
        <BestSellers />
        <Collection />
    </div>
  );
}
