import { useState } from "react";

// Gallery images from public/images folder
const galleryImages = [
  { src: "/images/SC_10.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_17.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_19.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_51.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_55.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_58.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_8.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_99.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_121.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_122.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_130.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_149.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_152.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_161.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_167.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_221.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_224.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_229.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_232.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_241.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_245.jpg", alt: "Sofy Cares Activity" },
  { src: "/images/SC_249.jpg", alt: "Sofy Cares Activity" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50 pt-24 pb-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Gallery
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A glimpse into our community and the moments we share together at
            Sofy Cares.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-accent-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
