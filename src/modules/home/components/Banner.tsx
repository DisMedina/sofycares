export default function Banner() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <BackgroundImage />

      {/* Hero */}
      <HeroContent />

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </div>
  );
}

function BackgroundImage() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-accent-600/60 absolute inset-0 z-10" />
      <img
        src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
        alt="Healthcare professional caring for elderly patient"
        className="w-full h-full object-cover"
        loading="eager"
      />
    </div>
  );
}

function CtaButtons() {
  const buttonClass =
    "bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-medium text-base transition-all duration-200 flex items-center space-x-2";

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row gap-4 justify-center">
        <button
          className={buttonClass}
          onClick={() => console.log("Watch Full Video clicked")}
        >
          Watch Full Video
        </button>
        <button
          className={buttonClass}
          onClick={() => console.log("Schedule a Visit clicked")}
        >
          Schedule a Visit
        </button>
      </div>

      <div className="flex justify-center mt-2">
        <button
          className={buttonClass}
          onClick={() => console.log("Contact Us clicked")}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

function HeroContent() {
  return (
    <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <CtaButtons />
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <div className="animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
}
