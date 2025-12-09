import AwardCard from "./AwardCard";

export default function AwardsSection() {
  const awards = [
    {
      title: "Certified Senior Care Provider",
      img: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
      description: "National certification for excellence in senior care.",
    },
    {
      title: "Community Service Award",
      img: "https://cdn-icons-png.flaticon.com/512/190/190406.png",
      description: "Recognized for outstanding service to the local community.",
    },
    {
      title: "Health & Safety Excellence",
      img: "https://cdn-icons-png.flaticon.com/512/190/190408.png",
      description:
        "Awarded for maintaining the highest standards in health and safety.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <h2 className="text-3xl lg:text-4xl font-bold text-accent-700 mb-6 text-center">
        Recognitions & Awards
      </h2>

      <p className="text-lg text-text-secondary mb-8 leading-relaxed text-center max-w-2xl mx-auto">
        Sofy Cares is proud to be recognized for excellence in senior care and
        community service. Our certifications and awards reflect our commitment
        to quality, safety, and compassion.
      </p>

      {/* Awards Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {awards.map((award) => (
          <AwardCard key={award.title} {...award} />
        ))}
      </div>
    </section>
  );
}
