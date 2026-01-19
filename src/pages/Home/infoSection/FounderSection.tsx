import { useNavigate } from "react-router-dom";

export default function FounderSection() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image side */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Founder of Sofy Cares"
            className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        {/* Content side */}
        <div>
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-beige-200">
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
              Our Founder
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Sofia Toledo Soto founded Sofy Cares with a clear vision: to
              provide the same leel of care, warmth, and attention she would
              want for her own family.
            </p>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              With more than 15 years of experience in the health and senior
              care field, she created Sofy Cares as a place where compassion,
              dignity, and personalized care come first. Her commitment to
              thoughtful, human-centered care shapes every part of life at Sofy
              Cares.
            </p>

            {/* Profile */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-lg">ST</span>
                </div>
              </div>

              <div>
                <p className="text-lg font-semibold text-text-primary">
                  Sofia Toledo
                </p>
                <p className="text-text-secondary">Founder & CEO</p>
              </div>
            </div>

            {/* Button */}
            <button
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
              onClick={() => navigate("/founder")}
            >
              <span>See Her Story</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
