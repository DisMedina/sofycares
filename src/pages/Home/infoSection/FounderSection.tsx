import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export default function FounderSection() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image side */}
        <div>
          <img
            src="/images/SC_275.jpg"
            alt={t("founderSectionImageAlt")}
            className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
            style={{ objectPosition: 'center 15%' }}
          />
        </div>

        {/* Content side */}
        <div>
          <div className="bg-secondary-50 rounded-2xl shadow-xl p-8 lg:p-12 border border-secondary-300">
            <h2 className="text-3xl lg:text-4xl font-bold font-allura text-primary-500 mb-6">
              {t("founderSectionTitle")}
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              {t("founderSectionPara1")}
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              {t("founderSectionPara2")}
            </p>

            {/* Profile */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-lg">ST</span>
                </div>
              </div>

              <div>
                <p className="text-lg font-semibold text-text-primary">
                  {t("founderSectionName")}
                </p>
                <p className="text-text-secondary">{t("founderSectionRole")}</p>
              </div>
            </div>

            {/* Button */}
            <button
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
              onClick={() => navigate("/founder")}
            >
              <span>{t("founderSectionButton")}</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
