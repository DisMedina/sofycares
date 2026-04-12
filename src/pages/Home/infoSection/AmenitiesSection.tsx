import { useLanguage } from "@/context/LanguageContext";
import { FaFacebook } from "react-icons/fa";

export default function AmenitiesSection() {
  const { t } = useLanguage();
  return (
    <section className="bg-gradient-to-br from-secondary-50 to-primary-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-allura text-primary-500 mb-4">
            {t("servicesAmenitiesTitle")}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {t("servicesAmenitiesSubtitle")}
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {[
            {
              category: t("nutritionCategory"),
              items: [
                {
                  title: t("nutritionItem1Title"),
                  description: t("nutritionItem1Desc"),
                },
                {
                  title: t("nutritionItem2Title"),
                  description: t("nutritionItem2Desc"),
                },
                {
                  title: t("nutritionItem3Title"),
                  description: t("nutritionItem3Desc"),
                },
              ],
            },
            {
              category: t("wellnessCategory"),
              items: [
                {
                  title: t("wellnessItem1Title"),
                  description: t("wellnessItem1Desc"),
                },
                {
                  title: t("wellnessItem2Title"),
                  description: t("wellnessItem2Desc"),
                },
                {
                  title: t("wellnessItem3Title"),
                  description: t("wellnessItem3Desc"),
                },
                {
                  title: t("wellnessItem4Title"),
                  description: t("wellnessItem4Desc"),
                },
              ],
            },
            {
              category: t("personalCareCategory"),
              items: [
                {
                  title: t("personalCareItem1Title"),
                  description: t("personalCareItem1Desc"),
                },
                {
                  title: t("personalCareItem2Title"),
                  description: t("personalCareItem2Desc"),
                },
                {
                  title: t("personalCareItem3Title"),
                  description: t("personalCareItem3Desc"),
                },
              ],
            },
            {
              category: t("facilitiesCategory"),
              items: [
                {
                  title: t("facilitiesItem1Title"),
                  description: t("facilitiesItem1Desc"),
                },
                {
                  title: t("facilitiesItem2Title"),
                  description: t("facilitiesItem2Desc"),
                },
                {
                  title: t("facilitiesItem3Title"),
                  description: t("facilitiesItem3Desc"),
                },
                {
                  title: t("facilitiesItem4Title"),
                  description: t("facilitiesItem4Desc"),
                },
              ],
            },
            {
              category: t("petTherapyCategory"),
              items: [
                {
                  title: t("petTherapyItem1Title"),
                  description: t("petTherapyItem1Desc"),
                },
              ],
            },
            {
              category: t("familyAccommodationsCategory"),
              items: [
                {
                  title: t("familyAccommodationsItem1Title"),
                  description: t("familyAccommodationsItem1Desc"),
                },
              ],
            },
          ].map((category, index) => (
            <CategorySection key={index} {...category} />
          ))}
        </div>

        {/* Trusted Medical Professionals */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold font-allura text-primary-500 mb-4">
              {t("trustedProfessionalsTitle")}
            </h3>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              {t("trustedProfessionalsSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Aldo Jiménez Herevia",
                specialty: "Cirujano Oncólogo y Cirujano General",
                phone: "+52 5654305184",
                phoneRaw: "525654305184",
                facebook: "https://www.facebook.com/share/1EL33ProjE/?mibextid=wwXIfr",
                image: "/images/doc_1.jpg",
              },
            ].map((professional, index) => (
              <ProfessionalCard key={index} {...professional} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfessionalCard({
  name,
  specialty,
  phone,
  phoneRaw,
  facebook,
  image,
}: {
  name: string;
  specialty: string;
  phone: string;
  phoneRaw: string;
  facebook: string;
  image: string;
}) {
  return (
    <div className="bg-accent-50 rounded-2xl shadow-lg border border-secondary-300 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h4 className="text-xl font-bold text-text-primary mb-1">{name}</h4>
        <p className="text-text-secondary mb-4">{specialty}</p>

        <div className="flex items-center space-x-4">
          <a
            href={`tel:${phoneRaw}`}
            className="flex items-center space-x-2 text-primary-700 hover:text-primary-900 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-sm font-medium">{phone}</span>
          </a>

          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on Facebook`}
            className="w-9 h-9 bg-primary-200 hover:bg-primary-300 rounded-lg flex items-center justify-center transition-colors duration-200"
          >
            <FaFacebook className="w-5 h-5 text-primary-700" />
          </a>
        </div>
      </div>
    </div>
  );
}

function CategorySection({
  category,
  items,
}: {
  category: string;
  items: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="bg-accent-50 rounded-2xl shadow-lg p-8 border border-secondary-300">
      <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 border-b-4 border-primary-500 pb-3 inline-block">
        {category}
      </h3>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {items.map((item, index) => (
          <AmenityItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

function AmenityItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-primary-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-text-primary mb-2">
          {title}
        </h4>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
