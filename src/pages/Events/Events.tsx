import { Calendar, Download } from "lucide-react";

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 pt-24 pb-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Events & News
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Stay updated with Sofy Cares community milestones and celebrations
          </p>
        </div>

        {/* Event Article Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary-50 rounded-2xl shadow-xl p-8 lg:p-12 border border-secondary-300">
            {/* Date Badge */}
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                <Calendar className="w-4 h-4 mr-2" />
                February 2026
              </span>
            </div>

            {/* Article Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">
              Caring Comes Home:
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold text-primary-600 mb-6">
              Sofy Cares Celebrates Non-Profit Milestone In San Miguel
            </h3>

            {/* Author */}
            <p className="text-sm text-text-secondary mb-8 italic">
              By CJ Meridian
            </p>

            {/* Article Body */}
            <div className="text-text-secondary leading-relaxed space-y-4">
              <p className="text-lg">
                When the morning light spills into the San Miguel Condominiums,
                it's greeted by the quiet rhythm of life at Sofy Cares—a warm
                chorus of caregivers, music, and laughter echoing down the
                hallways. Coffee pours, conversations rise, and someone always
                finds their way outside to enjoy the beautiful San Miguel
                sunshine. For Sofy Cares, this is what love in action looks
                like.
              </p>
              <p className="text-lg">
                This moment marks a remarkable new chapter in the organization's
                journey: Sofy Cares has officially established it's A.C.
                division, creating a dedicated arm focused on expanding access
                to care. Through this new A.C., we are now able to support
                elders who face financial hardship, ensuring that compassionate,
                respectful care is available to those who need it most.
              </p>
            </div>

            {/* Download Button */}
            <a
              href="/events/Atencion News - February 2026 P47.pdf"
              download="Atencion_News_SofyCares_Feb2026.pdf"
              className="mt-8 inline-flex items-center space-x-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              <span>Download Full Article (PDF)</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
