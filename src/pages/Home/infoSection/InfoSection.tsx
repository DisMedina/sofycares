import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import FounderSection from "./FounderSection";
import AwardsSection from "./AwardsSection";
import LocationSection from "./LocationSection";

export default function InfoSection() {
  return (
    <div className="py-16 lg:py-24">
      <AboutSection />
      <ServicesSection />
      <FounderSection />
      <AwardsSection />
      <LocationSection />
    </div>
  );
}
