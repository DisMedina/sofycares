import { livingOptions, levelsOfCare } from "@/data/content";

export default function AssistedLiving() {
  const assistedLivingOption = livingOptions.options.find(
    (option) => option.title === "Assisted Living"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent-600 to-accent-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center">
            Assisted Living
          </h1>
          <p className="text-xl lg:text-2xl text-center max-w-4xl mx-auto leading-relaxed">
            {assistedLivingOption?.description}
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">
          What Makes Our Assisted Living Special
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {assistedLivingOption?.features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </section>

      {/* Levels of Care Details */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-text-primary mb-8 text-center">
            Our Approach to Assisted Living
          </h2>
          <p className="text-xl text-text-secondary text-center mb-12 max-w-4xl mx-auto">
            {levelsOfCare.description}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {levelsOfCare.features.map((feature, index) => (
              <DetailCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* All-Inclusive Services */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-text-primary mb-8 text-center">
            {levelsOfCare.allInclusiveServices.title}
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {levelsOfCare.allInclusiveServices.services.map(
                (service, index) => (
                  <ServiceItem key={index} service={service} />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">
          Our Assisted Living Community
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            alt="Assisted Living Space"
          />
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            alt="Assisted Living Space"
          />
          <img
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            alt="Assisted Living Care"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Learn More About Our Assisted Living?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to schedule a visit and see our community in person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4151177643"
              className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Call: 415 117 7643</span>
            </a>
            <a
              href="mailto:sofycaressma@gmail.com"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ feature }: { feature: string }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-2 border-accent-100">
      <div className="flex items-start">
        <svg
          className="w-8 h-8 text-accent-600 mr-4 flex-shrink-0 mt-1"
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
        <p className="text-lg text-text-primary font-medium">{feature}</p>
      </div>
    </div>
  );
}

function DetailCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}

function ServiceItem({ service }: { service: string }) {
  return (
    <div className="flex items-start">
      <svg
        className="w-6 h-6 text-accent-600 mr-3 flex-shrink-0 mt-0.5"
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
