export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 pt-24 pb-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -right-24 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-20 -left-24 w-96 h-96 bg-accent-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center shadow-xl">
              <svg
                className="w-16 h-16 text-primary-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            Events & Activities
          </h1>

          {/* Under Construction Badge */}
          <div className="inline-block mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-accent-100 text-accent-700 text-lg font-semibold tracking-wide">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              Under Construction
            </span>
          </div>

          {/* Message Card */}
          <div className="bg-secondary-50/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-secondary-200 mb-12">
            <p className="text-2xl text-text-secondary leading-relaxed mb-6">
              We're working on something special for you!
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              Our Events & Activities page is currently being developed. Soon
              you'll be able to explore all the exciting events, celebrations,
              and community activities happening at Sofy Cares.
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-600">
              <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-primary-600 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-primary-600 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>

          {/* Preview Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary-50 rounded-xl shadow-lg p-6 border border-primary-200">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
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
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Community Events
              </h3>
              <p className="text-text-secondary">
                Birthday celebrations, holiday gatherings, and special occasions
              </p>
            </div>

            <div className="bg-primary-50 rounded-xl shadow-lg p-6 border border-primary-200">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-accent-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Daily Activities
              </h3>
              <p className="text-text-secondary">
                Arts, crafts, games, and social gatherings
              </p>
            </div>

            <div className="bg-primary-50 rounded-xl shadow-lg p-6 border border-primary-200">
              <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-6 h-6 text-secondary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Cultural Outings
              </h3>
              <p className="text-text-secondary">
                Exploring San Miguel de Allende and local attractions
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Want to Learn More About Our Activities?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Contact us today to discover the vibrant community life at Sofy
              Cares.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:4151177643"
                className="inline-flex items-center space-x-2 text-white hover:text-accent-200 transition-colors"
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
                <span className="font-semibold">415 117 7643</span>
              </a>
              <span className="hidden sm:inline text-white/50">•</span>
              <a
                href="mailto:sofycaressma@gmail.com"
                className="inline-flex items-center space-x-2 text-white hover:text-accent-200 transition-colors"
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
                <span className="font-semibold">sofycaressma@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
