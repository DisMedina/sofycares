export default function Banner() {
  return (
    <div className="relative min-h-[75vh] py-24 md:py-0 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-primary-900/70 via-primary-800/60 to-accent-600/50" />
        <img
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Healthcare professional caring for elderly patient"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Container */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-xl text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 leading-tight">
            A safe, compassionate home where care is personal and dignity comes
            first.
          </h1>
        </div>

        {/* Video Container */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/30">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/44DmGimrIHE"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <a
            href="https://www.youtube.com/watch?v=44DmGimrIHE"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-accent-600 text-white font-semibold shadow-md hover:bg-accent-700 transition"
          >
            Watch our video
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
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
