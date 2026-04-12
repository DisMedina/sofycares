import Banner from "@/pages/Home/Banner";
import InfoSection from "@/pages/Home/infoSection/InfoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      <section id="banner-section">
        <Banner />
      </section>

      <main id="info-section">
        <InfoSection />
      </main>
    </div>
  );
}
