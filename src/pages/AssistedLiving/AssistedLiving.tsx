export default function AssistedLiving() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-accent-700 mb-6 text-center">
        Assisted Living
      </h1>

      <p className="text-lg text-text-secondary mb-6 leading-relaxed text-center">
        Assisted living at Sofy Cares is designed to feel like home, not a
        hospital. We provide personalized support with daily activities,
        medication management, and compassionate care. Residents benefit from
        social activities, outings, and services that foster independence and
        well-being.
      </p>

      <ul className="mb-6 max-w-2xl mx-auto text-left list-disc pl-6 text-text-secondary">
        <li>Feels like home, not a hospital</li>
        <li>Personalized care and support</li>
        <li>Social activities and outings</li>
        <li>Services for residents and their families</li>
        <li>Safe, comfortable environment</li>
      </ul>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
          className="w-80 h-56 object-cover rounded-xl shadow-lg"
          alt="Assisted Living Space"
        />

        <img
          src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80"
          className="w-80 h-56 object-cover rounded-xl shadow-lg"
          alt="Assisted Living Space"
        />
      </div>
    </section>
  );
}
