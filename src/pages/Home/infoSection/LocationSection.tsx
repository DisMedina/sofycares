import { contactInfo } from "@/data/content";

export default function LocationSection() {
  return (
    <section className="relative bg-gradient-to-br from-light-gray via-secondary-50 to-beige-50 overflow-hidden py-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-accent-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold tracking-wide uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Our Location & Contact
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            We're here to help and answer any questions you may have
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-primary-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-2">Address</h3>
                  <p className="text-text-secondary leading-relaxed">
                    {contactInfo.address.street}, {contactInfo.address.building}
                    <br />
                    {contactInfo.address.city}, {contactInfo.address.postalCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-primary-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-2">Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="text-accent-600 hover:text-accent-700 font-medium transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Cards */}
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-primary-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-text-primary mb-3">Phone</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm text-text-secondary mb-1">General Information</p>
                      <a href={`tel:${contactInfo.phone.raw}`} className="text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors duration-200">
                        {contactInfo.phone.display}
                      </a>
                    </div>
                    <div className="pt-2 border-t border-primary-100">
                      <p className="text-sm text-red-600 mb-1">Emergency Contact</p>
                      <a href={`tel:${contactInfo.emergency.raw}`} className="text-red-700 hover:text-red-800 font-semibold text-lg transition-colors duration-200">
                        {contactInfo.emergency.display}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-6 shadow-xl text-center">
              <p className="text-white font-bold text-lg mb-1">
                {contactInfo.availability}
              </p>
              <p className="text-white/90 text-sm">
                Always here when you need us
              </p>
            </div>
          </div>

          {/* Map */}
          <div className="h-full min-h-[500px]">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-2 border border-primary-100 h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363155047!3d-37.81627974202198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2sSofy%20Cares!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '480px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
