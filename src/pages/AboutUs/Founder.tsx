import { useEffect, useState } from "react";

const founderImages = [
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sofia Toledo Soto - Founder of Sofy Cares",
  },
  {
    src: "https://images.unsplash.com/photo-1594824475317-8c78e1b0b157?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sofia Toledo Soto at work",
  },
  {
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sofia Toledo Soto with the team",
  },
  {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Sofia Toledo Soto - Leader in health care",
  },
];

// ======================================================
// Carousel Component
// ======================================================
function FounderCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % founderImages.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full">
      <div className="overflow-hidden rounded-2xl shadow-2xl h-full relative">
        {founderImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {founderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                index === i ? "bg-white" : "bg-white/50"
              } transition-colors`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ======================================================
// Founder Content Component
// ======================================================
function FounderContent() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
        Our Founder
      </h1>

      <h2 className="text-2xl font-semibold text-primary-600 mb-6">
        Sofia Toledo Soto – Founder & CEO
      </h2>

      {/* Personal Story */}
      <section>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          Her Personal Story
        </h3>
        <p className="text-lg text-text-secondary leading-relaxed mb-4">
          Sofia Toledo Soto has always been someone who leads with service. Long before Sofy Cares existed, people naturally turned to her for support, guidance, and steadiness. She has an instinctive way of putting others first-something that has defined her relationships, her work, and ultimately her life's path.
        </p>
        <p className="text-lg text-text-secondary leading-relaxed">
          Over the years, through personal experiences and professional encounters, Sofia became increasingly aware of how easily certain people are overlooked-especially older adults whose families may feel overwhelmed, unprepared, or unsure of how to care for them well. What stayed with her was not a single moment, but a growing recognition that many individuals simply need someone willing to show up consistently, listen closely, and take responsibility for their care with sincerity and patience. Sofy Cares grew out of that understanding.
        </p>
      </section>

      {/* Professional Background */}
      <section>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          Professional Experience
        </h3>
        <p className="text-lg text-text-secondary leading-relaxed mb-4">
          Sofia brings more than 15 years of experience across caregiving, health-related services, and client-centered work. Even during periods when she stepped away from direct caregiving-working in fields such as real estate-her approach remained the same: prioritize people, stay accessible, and follow through.
        </p>
        <p className="text-lg text-text-secondary leading-relaxed">
          Her professional strength lies not only in formal experience, but in her ability to communicate openly, answer questions honestly, and remain present for those who rely on her. She is known for being approachable, responsive, and deeply attentive-qualities that shape both her leadership style and the daily operations of Sofy Cares.
        </p>
      </section>

      {/* Vision */}
      <section>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          Her Vision for Sofy Cares
        </h3>
        <p className="text-lg text-text-secondary leading-relaxed mb-4">
          Sofia's vision for Sofy Cares is rooted in responsibility and presence. She believes care should never feel distant, rushed, or transactional. Instead, it should feel steady, responsive, and grounded in real human connection.
        </p>
        <p className="text-lg text-text-secondary leading-relaxed">
          She envisioned a place where residents are not managed, but supported-where families feel informed rather than shut out, and where trust is built through transparency, consistency, and genuine availability. Sofy Cares was designed to be a community where people feel safe asking questions, expressing needs, and being met with respect at every stage.
        </p>
      </section>

      {/* Achievements */}
      <section>
        <h3 className="text-xl font-semibold text-text-primary mb-4">
          Achievements & Commitments
        </h3>

        <ul className="space-y-3 text-lg text-text-secondary">
          {[
            "Over 15 years of experience in caregiving and health-related services",
            "Founder of a community-based care home in San Miguel de Allende",
            "Known for hands-on leadership, accessibility, and clear communication",
            "Deep commitment to serving individuals who are often overlooked or underserved",
            "Dedicated to creating an environment built on trust, presence, and accountability",
          ].map((text, i) => (
            <li className="flex items-start space-x-3" key={i}>
              <svg
                className="w-6 h-6 text-primary-600 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Button */}
      <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition">
        Give Care Here
      </button>
    </div>
  );
}

// ======================================================
// MAIN FOUNDER PAGE
// ======================================================
export default function Founder() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50">
      {/* MAIN CONTENT */}
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-beige-200">
              <FounderContent />
            </div>

            <div className="sticky top-24 h-[600px]">
              <FounderCarousel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
