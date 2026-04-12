import { livingOptions, levelsOfCare } from "@/data/content";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export default function AssistedLiving() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const currentLivingOptions = livingOptions[language];
  const currentLevelsOfCare = levelsOfCare[language];
  const assistedLivingOption = currentLivingOptions.options.find(
    (option) => option.title === (language === 'es' ? "Vida Asistida" : "Assisted Living")
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-100 via-accent-200 to-accent-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-600 to-accent-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center">
            {t("assistedLiving")}
          </h1>
          <p className="text-xl lg:text-2xl text-center max-w-4xl mx-auto leading-relaxed">
            {t("AssistedLivingTextBanner")}
          </p>
        </div>
      </section>

      {/* A Hand You Can Reach Any Time */}
      <section className="bg-accent-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-allura text-primary-500 mb-6">
              {t("assistedLivingHandTitle")}
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              {t("assistedLivingHandPara1")}
            </p>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              {t("assistedLivingHandPara2")}
            </p>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              {t("assistedLivingHandPara3")}
            </p>
            <p className="text-xl text-text-secondary leading-relaxed">
              {t("assistedLivingHandPara4")}
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold font-allura text-primary-500 mb-12 text-center">
          {t("assistedLivingSpecialTitle")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assistedLivingOption?.features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </section>

      {/* Levels of Care Details */}
      <section className="bg-accent-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-allura text-primary-500 mb-8 text-center">
            {t("assistedLivingApproachTitle")}
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-4xl mx-auto">
            {currentLevelsOfCare.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {currentLevelsOfCare.features.map((feature, index) => (
              <DetailCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* All-Inclusive Services */}
      <section className="bg-accent-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-allura text-primary-500 mb-8 text-center">
            {currentLevelsOfCare.allInclusiveServices.title}
          </h2>
          <div className="bg-accent-200 rounded-2xl shadow-xl p-8 md:p-12 border border-accent-300">
            <div className="grid md:grid-cols-2 gap-6">
              {currentLevelsOfCare.allInclusiveServices.services.map(
                (service: string, index: number) => (
                  <ServiceItem key={index} service={service} />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold font-allura text-primary-500 mb-12 text-center">
          {t("assistedLivingCommunityTitle")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/images/SC_17.jpg"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            alt="Assisted Living Space"
          />
          <img
            src="/images/SC_265.jpg"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            alt="Assisted Living Space"
          />
          <img
            src="/images/SC_130.jpg"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            alt="Assisted Living Care"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t("assistedLivingCtaTitle")}
          </h2>
          <p className="text-xl mb-8">
            {t("assistedLivingCtaDesc")}
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>{t("assistedLivingCtaButton")}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ feature }: { feature: string }) {
  return (
    <div className="bg-accent-100 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-2 border-accent-200 hover:border-accent-400">
      <div className="flex items-start">
        <svg
          className="w-8 h-8 text-accent-600 mr-4 flex-shrink-0 mt-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-lg text-text-primary font-medium">{feature}</p>
      </div>
    </div>
  );
}

function DetailCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-accent-100 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-accent-200">
      <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

function ServiceItem({ service }: { service: string }) {
  return (
    <div className="flex items-start">
      <svg
        className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span className="text-text-secondary">{service}</span>
    </div>
  );
}
