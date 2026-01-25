import IntroductionSection from "./IntroductionSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import EventsAndCommunitySection from "./EventsAndCommunitySection";
import FounderSection from "./FounderSection";
import LocationSection from "./LocationSection";

export default function InfoSection() {
  return (
    <div className="py-0">
      {/* Introduction - Who We Are */}
      <IntroductionSection />

      {/* Why Choose Sofy Cares */}
      <AboutSection />

      {/* Living Options: Independent & Assisted Living */}
      <ServicesSection />

      {/* Events & Community Life */}
      <EventsAndCommunitySection />

      {/* Our Founder */}
      <FounderSection />

      {/* Location & Contact */}
      <LocationSection />
    </div>
  );
}
