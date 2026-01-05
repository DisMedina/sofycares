import { useNavigate } from "react-router-dom";
import { livingOptions } from "@/data/content";

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-br from-sage-50 to-secondary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {livingOptions.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {livingOptions.subtitle}
          </p>
        </div>

        {/* Living Options Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {livingOptions.options.map((option, index) => (
            <LivingOptionCard
              key={index}
              {...option}
              navigate={navigate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LivingOptionCard({
  title,
  description,
  features,
  link,
  navigate,
  index,
}: {
  title: string;
  description: string;
  features: string[];
  link: string;
  navigate: (path: string) => void;
  index: number;
}) {
  const bgColorClass =
    index === 0 ? "bg-gradient-to-br from-primary-50 to-primary-100" : "bg-gradient-to-br from-accent-50 to-accent-100";
  const borderColorClass = index === 0 ? "border-primary-200" : "border-accent-200";
  const buttonColorClass =
    index === 0
      ? "bg-primary-600 hover:bg-primary-700"
      : "bg-accent-600 hover:bg-accent-700";

  return (
    <div
      className={`${bgColorClass} ${borderColorClass} border-2 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8`}
    >
      {/* Title */}
      <h3 className="text-3xl font-bold text-text-primary mb-4">{title}</h3>

      {/* Description */}
      <p className="text-lg text-text-secondary mb-6 leading-relaxed">
        {description}
      </p>

      {/* Features List */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <svg
              className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
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
            <span className="text-text-secondary">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <button
        onClick={() => navigate(link)}
        className={`${buttonColorClass} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 w-full flex items-center justify-center space-x-2 shadow-md hover:shadow-lg`}
      >
        <span>Learn More</span>
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
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </button>
    </div>
  );
}
