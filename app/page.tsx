import BestSellers from "@/components/Main-Page/BestSellers";
import Collection from "@/components/Main-Page/Collection";
import EcoChoice from "@/components/Main-Page/EcoChoice";
import FollowUs from "@/components/Main-Page/FollowUs";
import HeroSection from "@/components/Main-Page/HeroSection";
import ModiWeek from "@/components/Main-Page/ModiWeek";

export default function Home() {
  return (
    <div className="">
        <HeroSection />
        <BestSellers />
        <Collection />
        <ModiWeek />
        <EcoChoice />
        <FollowUs />
    </div>
  );
}
