export default function Banner() {
  return (
    <div className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover object-top"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay (simple & clean) */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center flex flex-col items-center">
        {/* Text Card */}
        <div className=" rounded-2xl p-8 md:p-10 ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">
            A safe, compassionate home where care is personal and dignity comes
            first.
          </h1>
        </div>

        {/* Button outside card */}
        <a
          href="https://www.youtube.com/watch?v=PKuWYYTKKw4"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 px-8 py-4 rounded-full bg-accent-600 text-white font-semibold shadow-md hover:bg-accent-700 transition"
        >
          Watch our video
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
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
    </div>
  );
}
