export default function LocationSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Title */}
      <h2 className="text-3xl lg:text-4xl font-bold text-primary-700 mb-6 text-center">
        Our Location & Contact
      </h2>

      {/* Flex row */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 mb-8">
        {/* Contact info */}
        <div className="flex flex-col items-start gap-4 md:w-1/2">
          <p className="text-lg text-text-primary">
            <strong>Address:</strong> 123 Main St, Springfield, USA
          </p>

          <p className="text-lg text-text-primary">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@sofycares.com"
              className="text-primary-600 underline"
            >
              info@sofycares.com
            </a>
          </p>

          <p className="text-lg text-text-primary">
            <strong>Phone:</strong>{" "}
            <a href="tel:+1234567890" className="text-primary-600 underline">
              +1 (234) 567-890
            </a>
          </p>
        </div>

        {/* Map */}
        <div className="md:w-1/2 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363155047!3d-37.81627974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sSofy%20Cares!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="600"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
