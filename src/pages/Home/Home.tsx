import Banner from "@/pages/Home/Banner";
import InfoSection from "@/pages/Home/infoSection/InfoSection";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      <section id="banner-section">
        <h2>{t("homeSectionTitle")}</h2>
        <Banner />
      </section>

      <main id="info-section">
        <InfoSection />
      </main>
    </div>
  );
}
