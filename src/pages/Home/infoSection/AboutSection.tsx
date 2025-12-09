import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <h2 className="text-4xl font-bold text-text-primary mb-6 text-center">
        Discover Sofy Cares: Your Trusted Assisted Living Partner
      </h2>

      <p className="text-lg text-text-secondary mb-8 leading-relaxed text-center">
        Located in the heart of our community, Sofy Cares is dedicated to
        providing exceptional assisted living services tailored to the needs of
        every resident. We offer a variety of living options, including
        independent and assisted living, as well as specialized memory care and
        nursing care. Our comprehensive services and amenities include
        comfortable accommodations, nutritious dining, engaging activities, and
        access to medical care. Residents enjoy a vibrant activity calendar,
        opportunities for social connection, and a welcoming environment that
        fosters well-being and peace of mind. Learn more about our community,
        our commitment to quality care, and how Sofy Cares can support you or
        your loved ones.
      </p>

      <button
        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 mx-auto"
        onClick={() => navigate("/about")}
      >
        <span>Read More</span>
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
    </section>
  );
}
