import { healthServices } from "@/data/content";

export default function HealthServicesSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
          {healthServices.title}
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          {healthServices.subtitle}
        </p>
      </div>

      {/* Services Categories */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {healthServices.services.map((service, index) => (
          <ServiceCategory key={index} {...service} />
        ))}
      </div>

      {/* Note */}
      <div className="bg-primary-50 border-l-4 border-primary-600 rounded-lg p-6 text-center">
        <p className="text-lg text-text-primary font-medium">
          {healthServices.note}
        </p>
      </div>
    </section>
  );
}

function ServiceCategory({
  category,
  icon,
  items,
}: {
  category: string;
  icon: string;
  items: Array<{ title: string; description: string }>;
}) {
  const iconMap: Record<string, JSX.Element> = {
    medical: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    heart: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    activity: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    users: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-2 border-gray-100">
      {/* Category Header */}
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4 text-accent-600">
          {iconMap[icon]}
        </div>
        <h3 className="text-2xl font-bold text-text-primary">{category}</h3>
      </div>

      {/* Items */}
      <div className="space-y-6">
        {items.map((item, index) => (
          <ServiceItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function ServiceItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h4 className="text-lg font-semibold text-text-primary mb-2">{title}</h4>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
