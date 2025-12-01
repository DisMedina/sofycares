import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  const services = [
    {
      title: "Independent Living",
      description:
        "Enjoy a vibrant, maintenance-free lifestyle with amenities, activities, and a supportive community.",
      bgColor: "bg-primary-100",
      iconColor: "text-primary-600",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
    },
    {
      title: "Assisted Living",
      description:
        "Personalized support with daily activities, medication management, and compassionate care.",
      bgColor: "bg-accent-100",
      iconColor: "text-accent-600",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
    {
      title: "Levels of Care",
      description:
        "From independent living to specialized nursing and memory care, tailored to each resident.",
      bgColor: "bg-sage-100",
      iconColor: "text-sage-600",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-br from-sage-50 to-secondary-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Services
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            We offer a wide range of personalized care services for every
            resident.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}
