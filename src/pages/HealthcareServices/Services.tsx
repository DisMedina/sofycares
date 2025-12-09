import EmergencyInfo from "@/shared/components/EmergencyInfo";

interface ServiceSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
}

function ServiceSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imageOnLeft = true,
}: ServiceSectionProps) {
  const paragraphs = description.split("\n\n");

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={imageOnLeft ? "order-1" : "order-2"}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          <div className={imageOnLeft ? "order-2" : "order-1"}>
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-beige-200">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-6">
                {title}
              </h2>

              <div className="text-lg text-text-secondary leading-relaxed space-y-4">
                {paragraphs.map((p, i) => (
                  <p key={i}>{p.trim()}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    "Lorem ipsum dolor sit amet consectetur",
    "Adipiscing elit sed do eiusmod tempor",
    "Incididunt ut labore et dolore magna",
    "Aliqua enim ad minim veniam quis",
    "Nostrud exercitation ullamco laboris",
    "Nisi ut aliquip ex ea commodo consequat",
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-sage-50 to-secondary-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-8">
          Other Benefits
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-lg border border-beige-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="text-text-secondary font-medium">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesBanner() {
  return (
    <section className="relative h-80 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-accent-600/60 z-10"></div>

        <img
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Professional quality services"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          The services we offer are of high quality
        </h1>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50">
      {/* HEADER */}
      <header>
        <EmergencyInfo />
      </header>

      {/* BANNER */}
      <ServicesBanner />

      {/* MAIN CONTENT */}
      <main>
        {/* SERVICE 1 */}
        <ServiceSection
          title="Personal Care"
          imageOnLeft={true}
          imageSrc="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          imageAlt="Professional personal care"
          description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.`}
        />

        <BenefitsSection />

        {/* SERVICE 2 */}
        <ServiceSection
          title="Companionship"
          imageOnLeft={false}
          imageSrc="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          imageAlt="Professional companionship services"
          description={`Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.

Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.`}
        />

        {/* SERVICE 3 */}
        <ServiceSection
          title="Domestic Support"
          imageOnLeft={true}
          imageSrc="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          imageAlt="Professional domestic support services"
          description={`At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.

Similique sunt in culpa qui officia deserunt mollitia animi.

Id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.`}
        />
      </main>
    </div>
  );
}
