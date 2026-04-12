import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

export default function LevelsOfCare() {
  const { t } = useLanguage();

  const levels = [
    { name: t("levelsOfCareAssistedLiving"), href: "/levels/assisted-living" },
    { name: t("levelsOfCareMemoryCare"), href: "/levels/memory-care" },
    { name: t("levelsOfCareShortTermRehab"), href: "/levels/short-term-rehab" },
    { name: t("levelsOfCareLongTermRehab"), href: "/levels/long-term-rehab" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold font-allura text-primary-500 mb-6 text-center">
        {t("levelsOfCarePageTitle")}
      </h1>

      <p className="text-lg text-text-secondary mb-6 leading-relaxed text-center">
        {t("levelsOfCarePageSubtitle")}
      </p>

      <ul className="mb-6 max-w-2xl mx-auto text-left list-disc pl-6 text-text-secondary">
        {levels.map((level) => (
          <li key={level.href}>
            <Link
              to={level.href}
              className="text-primary-600 hover:text-primary-700 underline"
            >
              {level.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <img
          src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
          className="w-80 h-56 object-cover rounded-xl shadow-lg"
          alt="Levels of Care"
        />

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80"
          className="w-80 h-56 object-cover rounded-xl shadow-lg"
          alt="Levels of Care"
        />
      </div>
    </section>
  );
}
