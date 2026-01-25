import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  const images = [
    { src: "/images/SC_250.jpg", alt: "Sofy Cares Community" },
    { src: "/images/SC_251.jpg", alt: "Sofy Cares Community" },
    { src: "/images/SC_252.jpg", alt: "Sofy Cares Community" },
    { src: "/images/SC_253.jpg", alt: "Sofy Cares Community" },
    { src: "/images/SC_254.jpg", alt: "Sofy Cares Community" },
    { src: "/images/SC_255.jpg", alt: "Sofy Cares Community" },
    { src: "/images/SC_256.jpg", alt: "Sofy Cares Community" },
    { src: "/images/SC_257.jpg", alt: "Sofy Cares Community" },
    { src: "/images/SC_258.jpg", alt: "Sofy Cares Community" },
    { src: "/images/SC_259.jpg", alt: "Sofy Cares Community" },
    { src: "/images/SC_260.jpg", alt: "Sofy Cares Community" },
    { src: "/images/SC_261.jpg", alt: "Sofy Cares Community" },
    { src: "/images/SC_262.jpg", alt: "Sofy Cares Community" },
    { src: "/images/SC_263.jpg", alt: "Sofy Cares Community" },
    { src: "/images/SC_264.jpg", alt: "Sofy Cares Community" },
  ];

  const [index, setIndex] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 pt-24 pb-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 👉 LEFT: IMAGE CAROUSEL */}
          <div className="sticky top-24 h-[600px]">
            <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}

              {/* Navigation dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === i ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 👉 RIGHT: COMPANY CONTENT */}
          <div className="bg-secondary-50 rounded-2xl shadow-xl p-8 lg:p-12 border border-secondary-300 space-y-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">
              About Us
            </h1>

            {/* Mission */}
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                At Sofy Cares, our mission is to provide compassionate, personalized care in a safe and home-like environment where every individual is treated with dignity and respect. We are committed to supporting residents' physical, emotional, and social well-being while honoring their independence and personal choices.
              </p>
            </section>

            {/* Vision */}
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                We envision Sofy Cares as a place where people feel truly at home-supported by attentive care, meaningful connection, and a strong sense of community. Our goal is to set a standard for senior care that balances professional excellence with warmth, humanity, and trust.
              </p>
            </section>

            {/* Values */}
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Our Values
              </h2>
              <ul className="space-y-3 text-lg text-text-secondary">
                {[
                  { title: "Dignity & Respect", description: "We honor each resident as an individual, valuing their life experiences, preferences, and autonomy." },
                  { title: "Compassionate Care", description: "We approach every interaction with empathy, patience, and genuine concern." },
                  { title: "Safety & Trust", description: "We provide a secure environment where residents and families feel confident and at ease." },
                  { title: "Personalized Attention", description: "Care is never one-size-fits-all; we adapt our services to meet each resident's unique needs." },
                  { title: "Family & Community", description: "We foster strong relationships with families and encourage connection, involvement, and shared moments." },
                  { title: "Professional Excellence", description: "Our team upholds high standards of care through experience, training and accountability." },
                ].map((value, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>
                      <strong>{value.title}</strong> - {value.description}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Story */}
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Our Story
              </h2>

              <p className="text-lg text-text-secondary leading-relaxed">
                Sofy Cares was created to offer an alternative to large, impersonal care facilities. From the beginning, our focus has been on building a smaller, more intentional community where residents receive attentive care and feel genuinely supported. By combining professional healthcare practices with a warm, welcoming atmosphere, Sofy Cares provides a space where people can live with comfort, confidence, and peace of mind.
              </p>
            </section>

            {/* Team */}
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Our Team
              </h2>

              <p className="text-lg text-text-secondary leading-relaxed">
                Our caregivers and staff are carefully selected for both their professional experience and their commitment to compassionate service. We believe quality care comes from people who are attentive, respectful, and deeply invested in the well-being of those they serve. At Sofy Cares, our team works collaboratively to ensure residents receive consistent, thoughtful care every day.
              </p>
            </section>

            {/* CTA BUTTON */}
            <button
              onClick={() => navigate("/contact")}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center space-x-3 w-fit"
            >
              <span>Contact Us</span>
              <svg
                className="w-6 h-6"
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
      </main>
    </div>
  );
}
