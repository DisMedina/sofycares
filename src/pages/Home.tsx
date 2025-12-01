import Banner from "../modules/home/components/Banner";
import InfoSection from "@/modules/home/components/infoSection/InfoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50">
      <section id="banner-section">
        <Banner />
      </section>

      <main id="info-section">
        <InfoSection />
      </main>
    </div>
  );
}
