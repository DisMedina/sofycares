import { levelsOfCare } from "@/data/content";

export default function LevelsOfCareSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          {levelsOfCare.title}
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-6">
          {levelsOfCare.subtitle}
        </p>
        <p className="text-lg text-text-secondary max-w-4xl mx-auto">
          {levelsOfCare.description}
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {levelsOfCare.features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* All-Inclusive Services */}
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-xl p-8 md:p-12">
        <h3 className="text-3xl font-bold text-text-primary mb-8 text-center">
          {levelsOfCare.allInclusiveServices.title}
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {levelsOfCare.allInclusiveServices.services.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100">
      <div className="flex items-start">
        <svg
          className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1"
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
        <div>
          <h4 className="text-lg font-semibold text-text-primary mb-2">
            {title}
          </h4>
          <p className="text-text-secondary text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ServiceItem({ service }: { service: string }) {
  return (
    <div className="flex items-start">
      <svg
        className="w-5 h-5 text-accent-600 mr-3 flex-shrink-0 mt-0.5"
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
