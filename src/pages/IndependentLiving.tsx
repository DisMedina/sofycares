import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export default function IndependentLiving() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center">
            {t("ilPageTitle")}
          </h1>
          <p className="text-xl lg:text-2xl text-center max-w-4xl mx-auto leading-relaxed">
            {t("ilPageSubtitle")}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold font-allura text-primary-500 mb-12 text-center">
          {t("ilPageServicesTitle")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            t("ilFeature1"),
            t("ilFeature2"),
            t("ilFeature3"),
            t("ilFeature4"),
            t("ilFeature5"),
            t("ilFeature6"),
            t("ilFeature7"),
            t("ilFeature8"),
          ].map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </section>

      {/* Lifestyle Description */}
      <section className="bg-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-allura text-primary-500 mb-6">
              {t("ilPageLifestyleTitle")}
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              {t("ilPageLifestylePara1")}
            </p>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              {t("ilPageLifestylePara2")}
            </p>
            <p className="text-xl text-text-secondary leading-relaxed">
              {t("ilPageLifestylePara3")}
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Highlight */}
      <section className="bg-gradient-to-br from-sage-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-allura text-primary-500 mb-12 text-center">
            {t("ilPageAmenitiesTitle")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nutrition */}
            <AmenityHighlight
              title={t("ilAmenityNutritionTitle")}
              description={t("ilAmenityNutritionDesc")}
              icon="nutrition"
            />
            {/* Pool */}
            <AmenityHighlight
              title={t("ilAmenityPoolTitle")}
              description={t("ilAmenityPoolDesc")}
              icon="pool"
            />
            {/* Activities */}
            <AmenityHighlight
              title={t("ilAmenityActivitiesTitle")}
              description={t("ilAmenityActivitiesDesc")}
              icon="activity"
            />
            {/* Rooftop */}
            <AmenityHighlight
              title={t("ilAmenityRooftopTitle")}
              description={t("ilAmenityRooftopDesc")}
              icon="rooftop"
            />
            {/* Beauty */}
            <AmenityHighlight
              title={t("ilAmenityBeautyTitle")}
              description={t("ilAmenityBeautyDesc")}
              icon="spa"
            />
            {/* Library */}
            <AmenityHighlight
              title={t("ilAmenityLibraryTitle")}
              description={t("ilAmenityLibraryDesc")}
              icon="library"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold font-allura text-primary-500 mb-12 text-center">
          {t("ilPageHomeTitle")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/images/SC_229.jpg"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            alt="Independent Living Space"
          />
          <img
            src="/images/SC_249.jpg"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            alt="Independent Living Space"
          />
          <img
            src="/images/SC_268.jpg"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            alt="Independent Living Community"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t("ilPageExperienceTitle")}
          </h2>
          <p className="text-xl mb-8">
            {t("ilPageExperienceDesc")}
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
              <span>{t("ilPageContactButton")}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ feature }: { feature: string }) {
  return (
    <div className="bg-primary-50 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-2 border-primary-200 hover:border-primary-400">
      <div className="flex items-start">
        <svg
          className="w-8 h-8 text-primary-600 mr-4 flex-shrink-0 mt-1"
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

function AmenityHighlight({
  title,
  description,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-accent-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-secondary-200 hover:border-primary-300">
      <div className="w-12 h-12 bg-primary-200 rounded-lg flex items-center justify-center mb-4">
        <svg
          className="w-8 h-8 text-primary-600"
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
      </div>
      <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
