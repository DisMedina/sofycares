import { useNavigate } from "react-router-dom";

export default function IndependentLiving() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-center">
            Independent Living
          </h1>
          <p className="text-xl lg:text-2xl text-center max-w-4xl mx-auto leading-relaxed">
            For people like you, who want to enjoy a carefree lifestyle inside
            our community without the responsibilities of living on your own.
          </p>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">
          Independent Living Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Spacious private rooms",
            "Housekeeping and maintenance",
            "A full calendar of social activities and community events",
            "Rich and balanced chef-prepared meals",
            "Transportation",
            "24/7 medical care for emergencies",
            "Optional assistance as needed",
            "Freedom to live at your own pace",
          ].map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </section>

      {/* Lifestyle Description */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              A Senior Lifestyle Built for You
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              Sofy Cares Independent Living program offers you a space where you
              can move freely and have the experience you desire with all the
              care and amenities you need. Meet other people, exercise, join our
              community activities and explore San Miguel Allende.
            </p>
            <p className="text-xl text-text-secondary leading-relaxed mb-8">
              With customized living, your stay can evolve to cover your needs
              for you to have the appropriate level of care whether it is a
              strict diet, medical appointments, memory care or specialized care
              for the next chapter in your life.
            </p>
            <p className="text-xl text-text-secondary leading-relaxed">
              Sofy Cares has all you need and more, join us now!
            </p>
          </div>
        </div>
      </section>

      {/* Amenities Highlight */}
      <section className="bg-gradient-to-br from-sage-50 to-secondary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">
            Amenities & Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Nutrition */}
            <AmenityHighlight
              title="Nutrition"
              description="Three nutritious and balanced meals daily, plus snacks. Menus designed by a certified nutritionist and prepared by our chef."
              icon="nutrition"
            />
            {/* Pool */}
            <AmenityHighlight
              title="Heated Swimming Pool"
              description="Year-round access to our therapeutic heated pool for relaxation and exercise."
              icon="pool"
            />
            {/* Activities */}
            <AmenityHighlight
              title="Arts & Activities"
              description="Engaging activities including arts and crafts, knitting, and seasonal projects."
              icon="activity"
            />
            {/* Rooftop */}
            <AmenityHighlight
              title="Multi-purpose Rooftop"
              description="Perfect for birthdays, family gatherings, outdoor picnics, and special events."
              icon="rooftop"
            />
            {/* Beauty */}
            <AmenityHighlight
              title="Beauty & Spa Services"
              description="On-site salon, barbershop, and spa services including massages and nail care."
              icon="spa"
            />
            {/* Library */}
            <AmenityHighlight
              title="On-site Library"
              description="Access to books and scheduled visits to the local library."
              icon="library"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-text-primary mb-12 text-center">
          Your Independent Living Home
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            alt="Independent Living Space"
          />
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            alt="Independent Living Space"
          />
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            alt="Independent Living Community"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-600 to-accent-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Experience Independent Living at Sofy Cares
          </h2>
          <p className="text-xl mb-8">
            Schedule a visit to see our community and meet our team.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/contact")}
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
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ feature }: { feature: string }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border-2 border-primary-100">
      <div className="flex items-start">
        <svg
          className="w-8 h-8 text-primary-600 mr-4 flex-shrink-0 mt-1"
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

function AmenityHighlight({
  title,
  description,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
        <svg
          className="w-8 h-8 text-primary-600"
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
      <h3 className="text-xl font-bold text-text-primary mb-3">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
