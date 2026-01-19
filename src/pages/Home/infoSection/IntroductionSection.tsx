import { heroContent } from "@/data/content";
import { useNavigate } from "react-router-dom";

export default function IntroductionSection() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Title & Subtitle */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold tracking-wide uppercase">
              Welcome to Sofy Cares
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
            {heroContent.title}
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
            <svg
              className="w-6 h-6 text-accent-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <div className="h-1 w-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full"></div>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-text-secondary font-light mb-8">
            {heroContent.subtitle}
          </h2>
        </div>

        {/* Introduction Content */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-primary-100">
            {heroContent.introduction.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center w-full sm:w-auto">
            <button
              onClick={() => navigate("/contact")}
              className="group relative bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-primary-500/50 hover:scale-105 transform"
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
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
              <span>{heroContent.cta.secondary.text}</span>
            </button>
          </div>

          <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-primary-100">
            <p className="text-lg font-semibold text-primary-700 mb-1">
              {heroContent.cta.primary.available}
            </p>
            <a
              href={`tel:${heroContent.cta.primary.phoneRaw}`}
              className="text-2xl md:text-3xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-200"
            >
              {heroContent.cta.primary.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
