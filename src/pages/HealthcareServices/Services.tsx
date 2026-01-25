import HealthServicesSection from "@/pages/Home/infoSection/HealthServicesSection";
import LevelsOfCareSection from "@/pages/Home/infoSection/LevelsOfCareSection";
import AmenitiesSection from "@/pages/Home/infoSection/AmenitiesSection";

function HealthcareBanner() {
  return (
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-accent-600/60 z-10"></div>

        <img
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Healthcare professional providing quality care"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Healthcare Services
        </h1>
        <p className="text-xl md:text-2xl text-white/90">
          Comprehensive care tailored to your needs
        </p>
      </div>
    </section>
  );
}

export default function HealthcareServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
      {/* BANNER */}
      <HealthcareBanner />

      {/* MAIN CONTENT */}
      <main>
        {/* Health & Medical Services */}
        <div id="health-medical-services">
          <HealthServicesSection />
        </div>

        {/* Levels of Care */}
        <div id="levels-of-care">
          <LevelsOfCareSection />
        </div>

        {/* Services & Amenities */}
        <div id="services-amenities">
          <AmenitiesSection />
        </div>
      </main>
    </div>
  );
}
