import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import type { TranslationSchema } from "@/i18n/types";

type FounderImages = TranslationSchema["pages"]["founder"]["images"];

// ======================================================
// Carousel Component
// ======================================================
function FounderCarousel({ images }: { images: FounderImages }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-full">
      <div className="overflow-hidden rounded-2xl shadow-2xl h-full relative">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, i) => (
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
  const { t } = useLang();
  const f = t.pages.founder;

  return (
    <div className="space-y-8">
      <h1 className="text-4xl lg:text-5xl font-bold font-allura text-primary-500 mb-6">
        {f.title}
      </h1>

      <h2 className="text-2xl font-semibold text-primary-600 mb-6">
        {f.subtitle}
      </h2>

      {/* Personal Story */}
      <section>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          {f.personalStoryTitle}
        </h3>
        {f.personalStory.map((para, i) => (
          <p
            key={i}
            className="text-lg text-text-secondary leading-relaxed mb-4 last:mb-0"
          >
            {para}
          </p>
        ))}
      </section>

      {/* Professional Background */}
      <section>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          {f.experienceTitle}
        </h3>
        {f.experience.map((para, i) => (
          <p
            key={i}
            className="text-lg text-text-secondary leading-relaxed mb-4 last:mb-0"
          >
            {para}
          </p>
        ))}
      </section>

      {/* Vision */}
      <section>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          {f.visionTitle}
        </h3>
        {f.vision.map((para, i) => (
          <p
            key={i}
            className="text-lg text-text-secondary leading-relaxed mb-4 last:mb-0"
          >
            {para}
          </p>
        ))}
      </section>

      {/* Achievements */}
      <section>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          {f.achievementsTitle}
        </h3>

        <ul className="space-y-3 text-lg text-text-secondary">
          {f.achievements.map((text, i) => (
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
        href={f.giveCareUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition inline-block"
      >
        {f.giveCareCta}
      </a>
    </div>
  );
}

// ======================================================
// MAIN FOUNDER PAGE
// ======================================================
export default function Founder() {
  const { t } = useLang();

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
              <FounderCarousel images={t.pages.founder.images} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
