import { Calendar, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Events() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 pt-24 pb-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold font-allura text-primary-500 mb-4">
            {t("eventsPageTitle")}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            {t("eventsPageSubtitle")}
          </p>
        </div>

        {/* Event Article Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary-50 rounded-2xl shadow-xl p-8 lg:p-12 border border-secondary-300">
            {/* Date Badge */}
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                <Calendar className="w-4 h-4 mr-2" />
                {t("eventsDateMonth")}
              </span>
            </div>

            {/* Article Heading */}
            <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-2">
              {t("eventsArticleTitle1")}
            </h2>
            <h3 className="text-xl lg:text-2xl font-semibold text-primary-600 mb-6">
              {t("eventsArticleTitle2")}
            </h3>

            {/* Author */}
            <p className="text-sm text-text-secondary mb-8 italic">
              {t("eventsAuthor")}
            </p>

            {/* Article Body */}
            <div className="text-text-secondary leading-relaxed space-y-4">
              <p className="text-lg">
                {t("eventsArticleBody")}
              </p>
            </div>

            {/* Flipbook Button */}
            <a
              href="https://heyzine.com/flip-book/a6bb7b22f3.html#page/47"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center space-x-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <ExternalLink className="w-5 h-5" />
              <span>{t("eventsFlipbookButton")}</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
