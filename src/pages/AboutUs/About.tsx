import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";


export default function About() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const images = [
    { src: "/images/SC_250.jpg", alt: t("aboutUsImageAlt") },
    { src: "/images/SC_251.jpg", alt: t("aboutUsImageAlt") },
    { src: "/images/SC_252.jpg", alt: t("aboutUsImageAlt") },
    { src: "/images/SC_253.jpg", alt: t("aboutUsImageAlt") },
    { src: "/images/SC_254.jpg", alt: t("aboutUsImageAlt") },
    { src: "/images/SC_255.jpg", alt: t("aboutUsImageAlt") },
    { src: "/images/SC_256.jpg", alt: t("aboutUsImageAlt") },
    { src: "/images/SC_257.jpg", alt: t("aboutUsImageAlt") },
    { src: "/images/SC_258.jpg", alt: t("aboutUsImageAlt") },
    { src: "/images/SC_259.jpg", alt: t("aboutUsImageAlt") },
    { src: "/images/SC_260.jpg", alt: t("aboutUsImageAlt") },
    { src: "/images/SC_261.jpg", alt: t("aboutUsImageAlt") },
    { src: "/images/SC_262.jpg", alt: t("aboutUsImageAlt") },
    { src: "/images/SC_263.jpg", alt: t("aboutUsImageAlt") },
    { src: "/images/SC_264.jpg", alt: t("aboutUsImageAlt") },
  ];

  const [index, setIndex] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 pt-24 pb-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 👉 LEFT: IMAGE CAROUSEL */}
          <div className="sticky top-24 h-[600px]">
            <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === i ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 👉 RIGHT: COMPANY CONTENT */}
          <div className="bg-secondary-50 rounded-2xl shadow-xl p-8 lg:p-12 border border-secondary-300 space-y-10">
            <h1 className="text-4xl lg:text-5xl font-bold font-allura text-primary-500">
              {t("aboutUsTitle")}
            </h1>

            {/* Mission */}
            <section>
              <h2 className="text-2xl font-semibold font-allura text-primary-500 mb-4">
                {t("ourMission")}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {t("aboutUsMissionDesc")}
              </p>
            </section>

            {/* Vision */}
            <section>
              <h2 className="text-2xl font-semibold font-allura text-primary-500 mb-4">
                {t("ourVision")}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {t("ourVisionDesc")}
              </p>
            </section>

            {/* Values */}
            <section>
              <h2 className="text-2xl font-semibold font-allura text-primary-500 mb-4">
                {t("ourValues")}
              </h2>
              <ul className="space-y-3 text-lg text-text-secondary">
                {[
                  { title: t("value1Title"), description: t("value1Desc") },
                  { title: t("value2Title"), description: t("value2Desc") },
                  { title: t("value3Title"), description: t("value3Desc") },
                  { title: t("value4Title"), description: t("value4Desc") },
                  { title: t("value5Title"), description: t("value5Desc") },
                  { title: t("value6Title"), description: t("value6Desc") },
                ].map((value, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      <strong>{value.title}</strong> - {value.description}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Story */}
            <section>
              <h2 className="text-2xl font-semibold font-allura text-primary-500 mb-4">
                {t("ourStory")}
              </h2>

              <p className="text-lg text-text-secondary leading-relaxed">
                {t("ourStoryDesc")}
              </p>
            </section>

            {/* Team */}
            <section>
              <h2 className="text-2xl font-semibold font-allura text-primary-500 mb-4">
                {t("ourTeam")}
              </h2>

              <p className="text-lg text-text-secondary leading-relaxed">
                {t("ourTeamDesc")}
              </p>
            </section>

            {/* CTA BUTTON */}
            <button
              onClick={() => navigate("/contact")}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center space-x-3 w-fit"
            >
              <span>{t("contactUs")}</span>
              <svg
                className="w-6 h-6"
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
      </main>
    </div>
  );
}
