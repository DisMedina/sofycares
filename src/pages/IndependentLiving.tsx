export default function IndependentLiving() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-text-primary mb-6 text-center">
        Independent Living
      </h1>

      <p className="text-lg text-text-secondary mb-8 leading-relaxed text-center">
        Our independent living spaces offer a vibrant, maintenance-free
        lifestyle for seniors who value freedom and community. Residents enjoy
        spacious accommodations, beautiful common areas, and access to amenities
        and activities.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          className="w-80 h-56 object-cover rounded-xl shadow-lg"
          alt="Independent Living Space"
        />

        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
          className="w-80 h-56 object-cover rounded-xl shadow-lg"
          alt="Independent Living Space"
        />
      </div>
    </section>
  );
}
