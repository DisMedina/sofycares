import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";

export default function LevelsOfCare() {
  const { t } = useLang();
  const lc = t.pages.levelsOfCare;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold font-allura text-primary-500 mb-6 text-center">
        {lc.title}
      </h1>

      <p className="text-lg text-text-secondary mb-6 leading-relaxed text-center">
        {lc.description}
      </p>

      <ul className="mb-6 max-w-2xl mx-auto text-left list-disc pl-6 text-text-secondary">
        {lc.levels.map((level) => (
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
        {lc.images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            className="w-80 h-56 object-cover rounded-xl shadow-lg"
            alt={img.alt}
          />
        ))}
      </div>
    </section>
  );
}
