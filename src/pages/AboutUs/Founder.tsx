import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const founderImages = [
  {
    src: "/images/SC_275.jpg",
    alt: "Sofia Toledo Soto - Founder of Sofy Cares",
  },
  {
    src: "/images/SC_273.jpg",
    alt: "Sofia Toledo Soto at work",
  },
  {
    src: "/images/SC_271.jpg",
    alt: "Sofia Toledo Soto with the team",
  },
];

// ======================================================
// Carousel Component
// ======================================================
function FounderCarousel() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);

  const imageAlts = [
    t("founderImageAlt1"),
    t("founderImageAlt2"),
    t("founderImageAlt3"),
  ];

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % founderImages.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full">
      <div className="overflow-hidden rounded-2xl shadow-2xl h-full relative">
        {founderImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img.src}
              alt={imageAlts[i]}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {founderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                index === i ? "bg-white" : "bg-white/50"
              } transition-colors`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ======================================================
// Founder Content Component
// ======================================================
function FounderContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl lg:text-5xl font-bold font-allura text-primary-500 mb-6">
        {t("founderTitle")}
      </h1>

      <h2 className="text-2xl font-semibold text-primary-600 mb-6">
        {t("founderName")}
      </h2>

      {/* Personal Story */}
      <section>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          {t("personalStoryTitle")}
        </h3>
        <p className="text-lg text-text-secondary leading-relaxed mb-4">
          {t("personalStoryPara1")}
        </p>
        <p className="text-lg text-text-secondary leading-relaxed">
          {t("personalStoryPara2")}
        </p>
      </section>

      {/* Professional Background */}
      <section>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          {t("professionalExperienceTitle")}
        </h3>
        <p className="text-lg text-text-secondary leading-relaxed mb-4">
          {t("professionalExperiencePara1")}
        </p>
        <p className="text-lg text-text-secondary leading-relaxed">
          {t("professionalExperiencePara2")}
        </p>
      </section>

      {/* Vision */}
      <section>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          {t("visionTitle")}
        </h3>
        <p className="text-lg text-text-secondary leading-relaxed mb-4">
          {t("visionPara1")}
        </p>
        <p className="text-lg text-text-secondary leading-relaxed">
          {t("visionPara2")}
        </p>
      </section>

      {/* Achievements */}
      <section>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          {t("achievementsTitle")}
        </h3>

        <ul className="space-y-3 text-lg text-text-secondary">
          {[
            t("achievement1"),
            t("achievement2"),
            t("achievement3"),
            t("achievement4"),
            t("achievement5"),
          ].map((text, i) => (
            <li className="flex items-start space-x-3" key={i}>
              <svg
                className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Button */}
      <a
        href="https://www.sofy-cares.ac"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition inline-block"
      >
        {t("giveCareHere")}
      </a>
    </div>
  );
}

// ======================================================
// MAIN FOUNDER PAGE
// ======================================================
export default function Founder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      {/* MAIN CONTENT */}
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-secondary-50 rounded-2xl shadow-xl p-8 lg:p-12 border border-secondary-300">
              <FounderContent />
            </div>

            <div className="sticky top-24 h-[600px]">
              <FounderCarousel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
