import { servicesAndAmenities } from "@/data/content";

export default function AmenitiesSection() {
  return (
    <section className="bg-gradient-to-br from-secondary-50 to-primary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            {servicesAndAmenities.title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {servicesAndAmenities.subtitle}
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {servicesAndAmenities.categories.map((category, index) => (
            <CategorySection key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategorySection({
  category,
  items,
}: {
  category: string;
  items: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="bg-accent-50 rounded-2xl shadow-lg p-8 border border-secondary-300">
      <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 border-b-4 border-primary-500 pb-3 inline-block">
        {category}
      </h3>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {items.map((item, index) => (
          <AmenityItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function AmenityItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-primary-600"
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
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-text-primary mb-2">
          {title}
        </h4>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
