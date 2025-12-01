import { useEffect, useState } from "react";

export default function About() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
      alt: "Professional caregiver helping a senior",
    },
    {
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
      alt: "Team of healthcare professionals",
    },
    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      alt: "Welcoming family environment",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      alt: "Personalized care",
    },
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
    <div className="min-h-screen bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50 pt-24 pb-16">
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
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-beige-200 space-y-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-text-primary">
              About Us
            </h1>

            {/* Mission */}
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>

            {/* Values */}
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Our Values
              </h2>
              <ul className="space-y-3 text-lg text-text-secondary">
                {[
                  "Excepteur sint occaecat cupidatat non proident",
                  "Sunt in culpa qui officia deserunt mollit anim",
                  "Sed ut perspiciatis unde omnis iste natus error",
                  "At vero eos et accusamus et iusto odio dignissimos",
                ].map((value, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <svg
                      className="w-6 h-6 text-accent-500 mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* History */}
            <section>
              <h2 className="text-2xl font-semibold text-text-primary mb-4">
                Our History
              </h2>

              <p className="text-lg text-text-secondary leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </section>

            {/* CTA BUTTON */}
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-200 flex items-center space-x-3 w-fit">
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
