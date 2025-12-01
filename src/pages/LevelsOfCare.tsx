import { Link } from "react-router-dom";

export default function LevelsOfCare() {
  const levels = [
    { name: "Assisted Living", href: "/levels/assisted-living" },
    { name: "Memory Care", href: "/levels/memory-care" },
    { name: "Short-term Rehabilitation", href: "/levels/short-term-rehab" },
    { name: "Long-term Rehabilitation", href: "/levels/long-term-rehab" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-sage-700 mb-6 text-center">
        Levels of Care
      </h1>

      <p className="text-lg text-text-secondary mb-6 leading-relaxed text-center">
        We offer a full spectrum of care options to meet every need, from
        assisted living to specialized memory care and rehabilitation.
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
