import type { Language, TranslationSchema } from "./types";

export const translations: Record<Language, TranslationSchema> = {
  en: {
    header: {
      logoAlt: "Sofy Cares",
      nav: {
        livingOptions: "Living Options",
        independentLiving: "Independent Living",
        assistedLiving: "Assisted Living",
        aboutUs: "About Us",
        healthcareServices: "Healthcare Services",
        healthMedicalServices: "Health & Medical Services",
        levelsOfCare: "Levels of Care",
        servicesAmenities: "Services & Amenities",
        events: "Events",
        gallery: "Gallery",
        contact: "Contact",
        contactCaps: "CONTACT",
      },
      languageToggle: {
        ariaSwitchToEs: "Cambiar a Español",
        ariaSwitchToEn: "Switch to English",
      },
    },

    emergencyBar: {
      phoneDirectory: "Phone Directory",
      giveCare: "Give Care",
      generalInformation: "General Information:",
      emergencyContact: "Emergency Contact:",
    },

    donateButton: {
      label: "Give Care",
    },

    footer: {
      logoAlt: "Sofy Cares",
      tagline:
        "We provide personal care and professional companionship services with the love and attention your family deserves.",
      quickLinksTitle: "Quick Links",
      quickLinks: {
        home: "Home",
        aboutUs: "About Us",
        services: "Services",
        contact: "Contact",
      },
      servicesTitle: "Services",
      services: {
        independentLiving: "Independent Living",
        assistedLiving: "Assisted Living",
        healthMedical: "Health & Medical Services",
        levelsOfCare: "Levels of Care",
        servicesAmenities: "Services & Amenities",
      },
      contactTitle: "Contact",
      addressLine1: "Juan José Torres Landa Torre A",
      addressLine2: "37797 San Miguel de Allende, Gto.",
      available247Title: "Available 24/7",
      available247Sub: "Always here when you need us",
      copyright: "© 2025 Sofy Cares Services. All rights reserved.",
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        accessibility: "Accessibility",
      },
    },

    hero: {
      welcomeBadge: "Welcome to Sofy Cares",
      title: "Sofy Cares",
      subtitle:
        "Assisted Living & Independent Living in San Miguel de Allende",
      introduction: {
        paragraphs: [
          "Currently, Sofy Cares offers full-time and part-time care, serving families in San Miguel de Allende with integrity, experience, and genuine dedication. We are a home-like community built on compassion. From daily companionship and assistance to rehabilitation, memory care, and palliative (hospice) care, we adapt our services to each individual's needs.",
          "With fewer residents than large facilities, we provide closer attention, deeper relationships, and higher-quality care—often at a lower cost than more formal institutions.",
        ],
      },
      cta: {
        primary: {
          text: "Schedule a Visit",
          phone: "415 117 7643",
          phoneRaw: "4151177643",
          available: "Available 24/7",
        },
        secondary: {
          text: "Contact Us",
          email: "sofycaressma@gmail.com",
        },
        emergency: {
          text: "Emergency Contact",
          phone: "415 111 2213",
          phoneRaw: "4151112213",
        },
      },
    },

    whyChooseSofyCares: {
      title: "Why Choose Sofy Cares",
      subtitle: "Compassionate, professional care in a home-like environment",
      benefits: [
        {
          title: "Respect for Independence & Dignity",
          description:
            "We honor each resident's independence and personal choices while providing compassionate, respectful support.",
          icon: "heart",
        },
        {
          title: "Peace of Mind for Families",
          description:
            "Families can est easy knowing their loved ones are safe, comfortable, and genuinely well cared for.",
          icon: "shield",
        },
        {
          title: "Safe, Supportive & Welcoming Environment",
          description:
            "Our home-like setting promotes comfort, security, and a true sense of belonging.",
          icon: "home",
        },
        {
          title: "Experienced & Compassionate Staff",
          description:
            "Our team brings decades of professional healthcare experience, paired with genuine compassion and attentiveness.",
          icon: "users",
        },
        {
          title: "U.S. Care Standards with Mexican Warmth",
          description:
            "We combine high U.S. care standards with the warmth and hospitality of Mexican culture.",
          icon: "globe",
        },
      ],
      learnMoreCta: "Learn More About Us",
    },

    livingOptions: {
      title: "Living Options",
      subtitle: "Personalized care solutions for every stage of life",
      learnMoreCta: "Learn More",
      independent: {
        title: "Independent Living",
        description:
          "For older adults who wish to maintain independence while enjoying community living, included meals, and optional support services.",
        features: [
          "Spacious private rooms",
          "Housekeeping and maintenance",
          "A full calendar of social activities and community events",
          "Rich and balanced chef-prepared meals",
          "Transportation",
          "24/7 medical care for emergencies",
          "Optional assistance as needed",
          "Freedom to live at your own pace",
        ],
        link: "/independent-living",
      },
      assisted: {
        title: "Assisted Living",
        description:
          "For residents who require daily assistance with personal care, medication management, mobility, feeding, and medical coordination. Our trained caregivers provide respectful and attentive support 24/7.",
        features: [
          "24/7 compassionate care",
          "Medication management",
          "Assistance with daily activities",
          "Personalized care plans",
          "Safe and comfortable environment",
          "Dignity and respect always",
        ],
        link: "/assisted-living",
      },
    },

    levelsOfCare: {
      title: "Levels of Care",
      subtitle:
        "Comprehensive assisted living services tailored to individual needs",
      description:
        "Our assisted living model combines the comfort of home with professional medical support:",
      features: [
        {
          title: "Home-like, Non-Clinical Environment",
          description:
            "Comfortable, welcoming spaces that feel like home, not a hospital.",
        },
        {
          title: "Deeply Personalized Care Plans",
          description:
            "Every resident receives individualized attention based on their unique needs and preferences.",
        },
        {
          title: "Strong, Meaningful Relationships",
          description:
            "Our small community allows caregivers and residents to form genuine connections.",
        },
        {
          title: "Calm, Intimate Setting",
          description:
            "With only 18 residents, we maintain a peaceful, family-like atmosphere.",
        },
        {
          title: "24/7 Safety & Supervision",
          description:
            "Round-the-clock care and companionship ensure constant support.",
        },
        {
          title: "Activities & Celebrations",
          description:
            "Engaging programs, movement activities, and special events enhance quality of life.",
        },
        {
          title: "Full Transportation Support",
          description:
            "We provide transportation for medical appointments and outings.",
        },
        {
          title: "Peace of Mind for Families",
          description:
            "Whether near or far, families can trust their loved ones are well cared for.",
        },
      ],
      allInclusiveServices: {
        title: "All-Inclusive Monthly Fee Covers",
        services: [
          "Care services, lodging, and meals",
          "Maintained residence and safe, welcoming spaces",
          "Assisted dining when needed",
          "Specialized diets by a certified dietitian",
          "24-hour nursing care",
          "Wellness center access",
          "Private dining room for family gatherings",
          "Scheduled transportation",
          "Housekeeping and linen service",
          "24/7 security and emergency home services",
          "Wi-Fi, telephone, and television access",
        ],
      },
    },

    servicesAndAmenities: {
      title: "Services & Amenities",
      subtitle: "Everything you need for a comfortable, enriching lifestyle",
      categories: [
        {
          category: "Nutrition",
          items: [
            {
              title: "Chef-Prepared Meals",
              description:
                "Three nutritious and balanced meals daily, plus snacks as desired. Our menus are designed by a certified nutritionist and prepared by our in-house chef using fresh ingredients.",
            },
            {
              title: "Personalized Dietary Plans",
              description:
                "We carefully consider dietary needs, medical requirements, and personal preferences—ensuring healthy and enjoyable meals.",
            },
            {
              title: "Home-like Dining Atmosphere",
              description:
                "Relaxed, welcoming dining spaces that promote social connection.",
            },
          ],
        },
        {
          category: "Wellness & Recreation",
          items: [
            {
              title: "Heated Swimming Pool",
              description: "Year-round access to our therapeutic heated pool.",
            },
            {
              title: "Arts and Crafts Activities",
              description: "Including knitting and special seasonal projects.",
            },
            {
              title: "Multi-purpose Rooftop",
              description:
                "Designed for events such as birthdays, family gatherings, outdoor picnics, and more.",
            },
            {
              title: "Cultural Outings",
              description:
                "A variety of outings tailored to residents' interests and hobbies, including access to golf courses, concerts, shopping, visits to nearby towns, and other seasonal local events.",
            },
          ],
        },
        {
          category: "Personal Care Services",
          items: [
            {
              title: "Beauty Salon, Barbershop & Full Spa Services",
              description:
                "Including massages, manicure, and pedicure—available on-site or off-site.",
            },
            {
              title: "Haircuts and Hairstyling",
              description: "Professional grooming services provided regularly.",
            },
            {
              title: "Personal Hygiene Assistance",
              description:
                "Respectful support with bathing, grooming, and daily care. All hygiene products included.",
            },
          ],
        },
        {
          category: "Facilities & Comfort",
          items: [
            {
              title: "On-site Library",
              description: "Plus scheduled visits to the local library.",
            },
            {
              title: "Palapa with Barbecue Area",
              description: "Perfect for outdoor gatherings and social events.",
            },
            {
              title: "Welcoming Common Areas",
              description:
                "Designed to encourage comfort, connection, and calm for residents, friends, and family.",
            },
            {
              title: "Daily Laundry and Housekeeping",
              description:
                "Professional cleaning and laundry services keep everything fresh and comfortable.",
            },
          ],
        },
        {
          category: "Pet Therapy",
          items: [
            {
              title: "Pet Therapy / Service Animals",
              description:
                "Animals can be a very important part of our residents' daily lives. We are able to integrate this valuable aspect into their routine to support well-being and happiness.",
            },
          ],
        },
        {
          category: "Family Accommodations",
          items: [
            {
              title: "Lodging for Family & Friends",
              description:
                "Available through Airbnb within the Sofy Cares residence, located in the adjacent condominium tower. Rentals include rooftop views and amenities such as the pool.",
            },
          ],
        },
      ],
    },

    trustedProfessionals: {
      title: "Trusted Nearby Medical Professionals",
      subtitle:
        "Sofy Cares trusts these independent medical practitioners in the San Miguel de Allende area",
      facebookAriaSuffix: "on Facebook",
      professionals: [
        {
          name: "Aldo Jiménez Herevia",
          specialty: "Cirujano Oncólogo y Cirujano General",
          phone: "+52 5654305184",
          phoneRaw: "525654305184",
          facebook:
            "https://www.facebook.com/share/1EL33ProjE/?mibextid=wwXIfr",
          image: "/images/doc_1.jpg",
        },
      ],
    },

    healthServices: {
      title: "Health & Medical Services",
      subtitle:
        "Professional healthcare with hospital-level expertise in a home-like setting",
      services: [
        {
          category: "Medical Staff",
          icon: "medical",
          items: [
            {
              title: "24/7 Nursing Staff",
              description:
                "Highly trained nurses with hospital-level experience, including ICU and critical care backgrounds.",
            },
            {
              title: "On-site Physician & Medical Specialists",
              description:
                "Available 24/7 for consultations, examinations, and emergencies.",
            },
            {
              title: "Clinical Care Services",
              description:
                "Medication administration, vital signs monitoring, patient medical history management, physical exams, disease follow-up, wound care, and IV therapy.",
            },
          ],
        },
        {
          category: "Specialized Care",
          icon: "heart",
          items: [
            {
              title: "Post-Surgical Care",
              description:
                "Focused on safe and comfortable recovery with close clinical monitoring. Our medical and nursing team supports healing through pain management, mobility assistance, medication supervision, and individualized care plans.",
            },
            {
              title: "Palliative Care",
              description:
                "Focused on comfort, pain relief, and improved quality of life. Our team provides compassionate, personalized support to patients and their families, ensuring dignity, relief, and accompaniment at every stage.",
            },
            {
              title: "Memory Care",
              description:
                "Specialized support for residents with Alzheimer's and dementia, provided by caregivers experienced in cognitive care.",
            },
          ],
        },
        {
          category: "Rehabilitation Services",
          icon: "activity",
          items: [
            {
              title: "Physical Therapy",
              description:
                "For rehabilitation, pain reduction, and fall prevention, including group exercise classes designed by a physical therapist.",
            },
            {
              title: "Occupational Therapy",
              description:
                "Retraining for activities of daily living to maintain independence.",
            },
            {
              title: "Orthopedic Rehabilitation",
              description:
                "Specialized recovery programs for joint and bone conditions.",
            },
            {
              title: "Fall Prevention Programs",
              description:
                "Evidence-based exercises and environmental modifications to reduce fall risk.",
            },
            {
              title: "Pulmonary Care Program",
              description: "Respiratory therapy and exercises for lung health.",
            },
            {
              title: "Heart Failure Program",
              description:
                "Specialized monitoring and care for cardiac conditions.",
            },
            {
              title: "Adaptive Equipment Training",
              description:
                "Instruction on using assistive devices for greater mobility and independence.",
            },
          ],
        },
        {
          category: "Caregiver Support",
          icon: "users",
          items: [
            {
              title: "One-on-One Assistance",
              description:
                "Personal companionship, cognitive activities, and daily living support.",
            },
            {
              title: "Assisted Feeding",
              description:
                "Respectful mealtime assistance for residents who need support.",
            },
            {
              title: "Personal Hygiene Support",
              description:
                "Compassionate assistance with bathing, grooming, and toileting.",
            },
            {
              title: "Medication Management",
              description:
                "Ensuring medications are taken correctly and on schedule.",
            },
          ],
        },
      ],
      note: "Treatment plans are available for both residents and non-residents.",
    },

    eventsAndCommunity: {
      title: "Events & Community Life",
      subtitle: "Embracing the vibrant culture of San Miguel de Allende",
      description:
        "Life at Sofy Cares is enriched by meaningful activities, social connections, and cultural experiences.",
      activities: [
        {
          title: "Immersive Culture in San Miguel de Allende",
          description:
            "Our team researches local and private events in San Miguel de Allende, handling reservations and accompanying residents to activities that match their interests.",
          icon: "calendar",
        },
        {
          title: "Personalized Birthday Celebrations",
          description:
            "Personalized birthday celebrations including cake, special requested meals, surprise gifts, and custom cake selection.",
          icon: "gift",
        },
        {
          title: "Assisted Travel & Trips",
          description:
            "Thoughtfully planned trips that respect residents' needs and wishes, offering recreation with assisted travel and support.",
          icon: "plane",
        },
        {
          title: "Daily Activities",
          description:
            "Engaging daily activities including arts and crafts, group exercises, games, and social gatherings.",
          icon: "activity",
        },
        {
          title: "Family Events",
          description:
            "We welcome and encourage family visits, hosting special events where families can gather and spend meaningful time with their loved ones. ",
          icon: "home",
        },
      ],
    },

    contactInfo: {
      address: {
        street: "Juan José Torres Landa Torre A",
        building: "",
        city: "37797 San Miguel de Allende, Gto.",
        postalCode: "",
        country: "Mexico",
      },
      phone: {
        display: "+52 415 117 7643",
        raw: "+524151177643",
        label: "General Information",
      },
      emergency: {
        display: "415 111 2213",
        raw: "4151112213",
        label: "Emergency Contact",
      },
      email: "sofycaressma@gmail.com",
      availability: "Available 24/7",
      socialMedia: {
        facebook: {
          name: "Sofy Cares SMA",
          url: "https://www.facebook.com/sofycaressma",
        },
        instagram: {
          name: "Sofy Cares Assisted Living A.C.",
          handle: "@sofycaresassistedliving",
          url: "https://www.instagram.com/sofycaresassistedliving",
        },
        tiktok: {
          handle: "@sofycaressma",
          url: "https://www.tiktok.com/@sofycaressma",
        },
      },
      googleMapsUrl:
        "https://www.google.com/maps/place/Sofy+Cares+SMA/@20.9031404,-100.7565095,17z/data=!3m1!4b1!4m6!3m5!1s0x842b51e693122229:0x492c3d728c86bcec!8m2!3d20.9031404!4d-100.7565095!16s%2Fg%2F11xvtnh7_x?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
    },

    pages: {
      home: {
        banner: {
          heading:
            "A safe, compassionate home where care is personal and dignity comes first.",
          watchVideoCta: "Watch our video",
        },
        aboutSection: {
          tagline: "Compassionate, professional care in a home-like environment",
        },
        founderSection: {
          sectionTitle: "Our Founder",
          intro:
            "Sofia Toledo Soto founded Sofy Cares with a clear vision: to provide the same leel of care, warmth, and attention she would want for her own family.",
          bio:
            "With more than 15 years of experience in the health and senior care field, she created Sofy Cares as a place where compassion, dignity, and personalized care come first. Her commitment to thoughtful, human-centered care shapes every part of life at Sofy Cares.",
          nameInitials: "ST",
          founderName: "Sofia Toledo",
          founderRole: "Founder & CEO",
          cta: "See Her Story",
          imageAlt: "Founder of Sofy Cares",
        },
        locationSection: {
          getInTouchBadge: "Get in Touch",
          title: "Our Location & Contact",
          subtitle: "We're here to help and answer any questions you may have",
          addressCardTitle: "Address",
          emailCardTitle: "Email",
          phoneCardTitle: "Phone",
          generalInformation: "General Information",
          emergencyContact: "Emergency Contact",
          availabilitySub: "Always here when you need us",
        },
      },

      about: {
        title: "About Us",
        missionTitle: "Our Mission",
        missionBody:
          "At Sofy Cares, our mission is to provide compassionate, personalized care in a safe and home-like environment where every individual is treated with dignity and respect. We are committed to supporting residents' physical, emotional, and social well-being while honoring their independence and personal choices.",
        visionTitle: "Our Vision",
        visionBody:
          "We envision Sofy Cares as a place where people feel truly at home-supported by attentive care, meaningful connection, and a strong sense of community. Our goal is to set a standard for senior care that balances professional excellence with warmth, humanity, and trust.",
        valuesTitle: "Our Values",
        values: [
          {
            title: "Dignity & Respect",
            description:
              "We honor each resident as an individual, valuing their life experiences, preferences, and autonomy.",
          },
          {
            title: "Compassionate Care",
            description:
              "We approach every interaction with empathy, patience, and genuine concern.",
          },
          {
            title: "Safety & Trust",
            description:
              "We provide a secure environment where residents and families feel confident and at ease.",
          },
          {
            title: "Personalized Attention",
            description:
              "Care is never one-size-fits-all; we adapt our services to meet each resident's unique needs.",
          },
          {
            title: "Family & Community",
            description:
              "We foster strong relationships with families and encourage connection, involvement, and shared moments.",
          },
          {
            title: "Professional Excellence",
            description:
              "Our team upholds high standards of care through experience, training and accountability.",
          },
        ],
        storyTitle: "Our Story",
        storyBody:
          "Sofy Cares was created to offer an alternative to large, impersonal care facilities. From the beginning, our focus has been on building a smaller, more intentional community where residents receive attentive care and feel genuinely supported. By combining professional healthcare practices with a warm, welcoming atmosphere, Sofy Cares provides a space where people can live with comfort, confidence, and peace of mind.",
        teamTitle: "Our Team",
        teamBody:
          "Our caregivers and staff are carefully selected for both their professional experience and their commitment to compassionate service. We believe quality care comes from people who are attentive, respectful, and deeply invested in the well-being of those they serve. At Sofy Cares, our team works collaboratively to ensure residents receive consistent, thoughtful care every day.",
        contactCta: "Contact Us",
        images: [
          { src: "/images/SC_250.jpg", alt: "Sofy Cares Community" },
          { src: "/images/SC_251.jpg", alt: "Sofy Cares Community" },
          { src: "/images/SC_252.jpg", alt: "Sofy Cares Community" },
          { src: "/images/SC_253.jpg", alt: "Sofy Cares Community" },
          { src: "/images/SC_254.jpg", alt: "Sofy Cares Community" },
          { src: "/images/SC_255.jpg", alt: "Sofy Cares Community" },
          { src: "/images/SC_256.jpg", alt: "Sofy Cares Community" },
          { src: "/images/SC_257.jpg", alt: "Sofy Cares Community" },
          { src: "/images/SC_258.jpg", alt: "Sofy Cares Community" },
          { src: "/images/SC_259.jpg", alt: "Sofy Cares Community" },
          { src: "/images/SC_260.jpg", alt: "Sofy Cares Community" },
          { src: "/images/SC_261.jpg", alt: "Sofy Cares Community" },
          { src: "/images/SC_262.jpg", alt: "Sofy Cares Community" },
          { src: "/images/SC_263.jpg", alt: "Sofy Cares Community" },
          { src: "/images/SC_264.jpg", alt: "Sofy Cares Community" },
        ],
      },

      founder: {
        title: "Our Founder",
        subtitle: "Sofia Toledo Soto – Founder & CEO",
        personalStoryTitle: "Her Personal Story",
        personalStory: [
          "Sofia Toledo Soto has always been someone who leads with service. Long before Sofy Cares existed, people naturally turned to her for support, guidance, and steadiness. She has an instinctive way of putting others first-something that has defined her relationships, her work, and ultimately her life's path.",
          "Over the years, through personal experiences and professional encounters, Sofia became increasingly aware of how easily certain people are overlooked-especially older adults whose families may feel overwhelmed, unprepared, or unsure of how to care for them well. What stayed with her was not a single moment, but a growing recognition that many individuals simply need someone willing to show up consistently, listen closely, and take responsibility for their care with sincerity and patience. Sofy Cares grew out of that understanding.",
        ],
        experienceTitle: "Professional Experience",
        experience: [
          "Sofia brings more than 15 years of experience across caregiving, health-related services, and client-centered work. Even during periods when she stepped away from direct caregiving-working in fields such as real estate-her approach remained the same: prioritize people, stay accessible, and follow through.",
          "Her professional strength lies not only in formal experience, but in her ability to communicate openly, answer questions honestly, and remain present for those who rely on her. She is known for being approachable, responsive, and deeply attentive-qualities that shape both her leadership style and the daily operations of Sofy Cares.",
        ],
        visionTitle: "Her Vision for Sofy Cares",
        vision: [
          "Sofia's vision for Sofy Cares is rooted in responsibility and presence. She believes care should never feel distant, rushed, or transactional. Instead, it should feel steady, responsive, and grounded in real human connection.",
          "She envisioned a place where residents are not managed, but supported-where families feel informed rather than shut out, and where trust is built through transparency, consistency, and genuine availability. Sofy Cares was designed to be a community where people feel safe asking questions, expressing needs, and being met with respect at every stage.",
        ],
        achievementsTitle: "Achievements & Commitments",
        achievements: [
          "Over 15 years of experience in caregiving and health-related services",
          "Founder of a community-based care home in San Miguel de Allende",
          "Known for hands-on leadership, accessibility, and clear communication",
          "Deep commitment to serving individuals who are often overlooked or underserved",
          "Dedicated to creating an environment built on trust, presence, and accountability",
        ],
        giveCareCta: "Give Care Here",
        giveCareUrl: "https://www.sofy-cares.ac",
        images: [
          { src: "/images/SC_275.jpg", alt: "Sofia Toledo Soto - Founder of Sofy Cares" },
          { src: "/images/SC_273.jpg", alt: "Sofia Toledo Soto at work" },
          { src: "/images/SC_271.jpg", alt: "Sofia Toledo Soto with the team" },
        ],
      },

      services: {
        bannerTitle: "Healthcare Services",
        bannerSubtitle: "Comprehensive care tailored to your needs",
        bannerImageAlt: "Healthcare professional providing quality care",
        bannerImageUrl:
          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      },

      contact: {
        banner: {
          title: "Contact Us",
          subtitle:
            "We are here to help you. Send your inquiry and we will reach you soon.",
        },
        info: {
          sectionTitle: "Contact Information",
          phoneTitle: "Phone",
          phoneContent: "+52 415 117 7643",
          phoneDesc: "Available 24/7",
          emailTitle: "Email",
          emailDesc: "Response within 24 hours",
          locationTitle: "Location",
          locationContent: "Juan José Torres Landa Torre A",
          locationDesc: "37797 San Miguel de Allende, Gto.",
        },
        form: {
          sectionTitle: "Send Us Your Inquiry",
          firstNameLabel: "First Name *",
          firstNamePlaceholder: "Enter your first name",
          lastNameLabel: "Last Name *",
          lastNamePlaceholder: "Enter your last name",
          emailLabel: "Email *",
          emailPlaceholder: "example@email.com",
          phoneLabel: "Phone",
          phonePlaceholder: "+1 (555) 123-4567",
          serviceTypeLabel: "Service Type *",
          serviceTypeOptions: {
            select: "Select a service",
            personalCare: "Personal Care",
            companionship: "Companionship",
            homeSupport: "Home Support",
            respiteCare: "Respite Care",
            specialized: "Specialized Care",
            consultation: "General Consultation",
          },
          preferredContactLabel: "Preferred Contact Method",
          preferredContactOptions: {
            email: "Email",
            phone: "Phone",
            either: "Either",
          },
          subjectLabel: "Subject *",
          subjectPlaceholder: "Brief description of your inquiry",
          messageLabel: "Message *",
          messagePlaceholder: "Describe your inquiry in detail",
          sendButton: "Send Inquiry",
          sendingButton: "Sending...",
          unavailableButton: "Form Unavailable - Contact Us Directly",
        },
        validation: {
          required: "This field is required",
          email: "Please enter a valid email",
          phone: "Please enter a valid phone number",
          name: "Name must be between 2 and 50 characters",
          message: "Message must be at least 10 characters",
        },
        toast: {
          successSent: "Email sent successfully! We'll get back to you soon.",
          validationError: "Please correct the highlighted fields.",
          sendFailed:
            "Failed to send email. Please try again or contact us directly.",
          limitReached:
            "Monthly email limit reached. Please contact us directly via phone or email.",
        },
        limits: {
          unavailableTitle: "Contact Form Temporarily Unavailable",
          unavailableBodyPrefix: "We've reached our monthly email limit (",
          unavailableBodySuffix:
            " emails sent). Please contact us directly using the information below:",
          unavailableEmailLabel: "📧 Email: ",
          unavailablePhoneLabel: "📞 Phone: ",
          unavailablePhone: "+52 415 117 7643",
          criticalTitle: "High Email Usage Alert",
          criticalBodyPrefix: "We're approaching our monthly email limit (",
          criticalBodySuffix:
            " emails sent). If you need an immediate response, please call us at +52 415 117 7643.",
          warningPrefix: "Note:",
          warningBodyPrefix: " We're experiencing high email volume (",
          warningBodySuffix:
            " emails sent this month). Your message will be delivered, but for urgent matters, please call +52 415 117 7643.",
        },
        submitLabels: {
          serviceType: {
            personalCare: "Personal Care",
            companionship: "Companionship",
            homeSupport: "Home Support",
            respiteCare: "Respite Care",
            specialized: "Specialized Care",
            consultation: "General Consultation",
          },
          preferredContact: {
            email: "Email",
            phone: "Phone",
            either: "Either",
          },
          phoneNotProvided: "Not provided",
        },
      },

      assistedLiving: {
        heroTitle: "Assisted Living",
        heroSubtitle:
          "We are here for you, at the right place and at the right time. Our trained caregivers will give you the extra help you need to live your life at your fullest.",
        handTitle: "A Hand You Can Reach Any Time",
        handPara1:
          "Sofy Cares Assisted Living program is the place for the moment you need a professional on your daily routine. With a schedule made to cover your specific needs, our caregivers will assist you or your loved ones at the same time as we provide you with a dignified lifestyle.",
        handPara2:
          "We will take care of your medical appointments, medications, special services and dietary requirements for you to focus on the most important thing: yourself.",
        handPara3:
          "With a diverse range of physical and mental activities, you will enjoy every moment at the same time you're taken care of.",
        handPara4:
          "Here in Sofy Cares, our main goal is to provide you with the help you need.",
        featuresTitle: "Our Assisted Living Special",
        approachTitle: "Our Approach to Assisted Living",
        galleryTitle: "Our Assisted Living Community",
        galleryImages: [
          { src: "/images/SC_17.jpg", alt: "Assisted Living Space" },
          { src: "/images/SC_265.jpg", alt: "Assisted Living Space" },
          { src: "/images/SC_130.jpg", alt: "Assisted Living Care" },
        ],
        ctaTitle: "Ready to Learn More About Our Assisted Living?",
        ctaSubtitle:
          "Contact us today to schedule a visit and see our community in person.",
        contactCta: "Contact Us",
      },

      independentLiving: {
        heroTitle: "Independent Living",
        heroSubtitle:
          "For people like you, who want to enjoy a carefree lifestyle inside our community without the responsibilities of living on your own.",
        featuresTitle: "Independent Living Services",
        features: [
          "Spacious private rooms",
          "Housekeeping and maintenance",
          "A full calendar of social activities and community events",
          "Rich and balanced chef-prepared meals",
          "Transportation",
          "24/7 medical care for emergencies",
          "Optional assistance as needed",
          "Freedom to live at your own pace",
        ],
        lifestyleTitle: "A Senior Lifestyle Built for You",
        lifestylePara1:
          "Sofy Cares Independent Living program offers you a space where you can move freely and have the experience you desire with all the care and amenities you need. Meet other people, exercise, join our community activities and explore San Miguel Allende.",
        lifestylePara2:
          "With customized living, your stay can evolve to cover your needs for you to have the appropriate level of care whether it is a strict diet, medical appointments, memory care or specialized care for the next chapter in your life.",
        lifestylePara3: "Sofy Cares has all you need and more, join us now!",
        amenitiesTitle: "Amenities & Services",
        amenities: [
          {
            title: "Nutrition",
            description:
              "Three nutritious and balanced meals daily, plus snacks. Menus designed by a certified nutritionist and prepared by our chef.",
            icon: "nutrition",
          },
          {
            title: "Heated Swimming Pool",
            description:
              "Year-round access to our therapeutic heated pool for relaxation and exercise.",
            icon: "pool",
          },
          {
            title: "Arts & Activities",
            description:
              "Engaging activities including arts and crafts, knitting, and seasonal projects.",
            icon: "activity",
          },
          {
            title: "Multi-purpose Rooftop",
            description:
              "Perfect for birthdays, family gatherings, outdoor picnics, and special events.",
            icon: "rooftop",
          },
          {
            title: "Beauty & Spa Services",
            description:
              "On-site salon, barbershop, and spa services including massages and nail care.",
            icon: "spa",
          },
          {
            title: "On-site Library",
            description:
              "Access to books and scheduled visits to the local library.",
            icon: "library",
          },
        ],
        galleryTitle: "Your Independent Living Home",
        galleryImages: [
          { src: "/images/SC_229.jpg", alt: "Independent Living Space" },
          { src: "/images/SC_249.jpg", alt: "Independent Living Space" },
          { src: "/images/SC_268.jpg", alt: "Independent Living Community" },
        ],
        ctaTitle: "Experience Independent Living at Sofy Cares",
        ctaSubtitle:
          "Schedule a visit to see our community and meet our team.",
        contactCta: "Contact Us",
      },

      levelsOfCare: {
        title: "Levels of Care",
        description:
          "We offer a full spectrum of care options to meet every need, from assisted living to specialized memory care and rehabilitation.",
        levels: [
          { name: "Assisted Living", href: "/levels/assisted-living" },
          { name: "Memory Care", href: "/levels/memory-care" },
          { name: "Short-term Rehabilitation", href: "/levels/short-term-rehab" },
          { name: "Long-term Rehabilitation", href: "/levels/long-term-rehab" },
        ],
        images: [
          {
            src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
            alt: "Levels of Care",
          },
          {
            src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
            alt: "Levels of Care",
          },
        ],
      },

      gallery: {
        title: "Gallery",
        subtitle:
          "A glimpse into our community and the moments we share together at Sofy Cares.",
        enlargedAlt: "Enlarged view",
        images: [
          { src: "/images/SC_8.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_10.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_17.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_19.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_51.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_55.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_58.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_99.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_121.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_122.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_130.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_149.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_152.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_161.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_167.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_221.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_224.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_229.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_232.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_241.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_245.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_249.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_250.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_251.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_252.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_253.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_254.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_255.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_256.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_257.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_258.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_259.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_260.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_261.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_262.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_263.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_264.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_265.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_266.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_267.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_268.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_269.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_270.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_271.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_272.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_273.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_274.jpg", alt: "Sofy Cares Activity" },
          { src: "/images/SC_275.jpg", alt: "Sofy Cares Activity" },
        ],
      },

      events: {
        pageTitle: "Events & News",
        pageSubtitle:
          "Stay updated with Sofy Cares community milestones and celebrations",
        articles: [
          {
            dateBadge: "May 2026",
            headline: "A.C. Sofy Cares:",
            subheading: "Expanding the Circle of Care",
            author: "By CJ Meridian",
            bodyParagraphs: [
              "In San Miguel de Allende, where tradition and community are deeply rooted in everyday life, the care of our elders remains one of the most meaningful responsibilities we share. At A.C. Sofy Cares, this belief has always guided the way care is offered, shaping an environment that prioritizes dignity, respect, and human connection above all else.",
              "Founded with the intention of creating a warm, home setting, A.C. Sofy Cares has become a place where personalized attention is not considered a luxury, but a standard. Each resident is treated as an individual with a story, with respect, and a life that deserves to be honored with patience and compassion.",
              "Over time, one unfortunate reality has become increasingly clear. While the need for high-quality, attentive elder care continues to grow, not every family has the financial means to access it fully. Currently, the world elderly population is at its highest in human history. So, this is definitely not an isolated challenge. It is a quiet and ongoing reality for many families who want the best for their loved ones but face limitations that make consistent, professional care difficult to sustain over time.",
              "In response to this need, A.C. Sofy Cares (Asociación Civil) has been formally established. This new chapter allows the organization to receive donations that directly support residents who require financial assistance, ensuring they can continue receiving the care they need without interruption.",
            ],
            ctaLabel: "Download Article",
            ctaUrl: "/events/A.C. Sofy Cares Article.docx",
          },
          {
            dateBadge: "February 2026",
            headline: "Caring Comes Home:",
            subheading:
              "Sofy Cares Celebrates Non-Profit Milestone In San Miguel",
            author: "By CJ Meridian",
            bodyParagraphs: [
              "When the morning light spills into the San Miguel Condominiums, it's greeted by the quiet rhythm of life at Sofy Cares — a warm chorus of caregivers, music, and laughter echoing down the hallways.",
            ],
            ctaLabel: "View Online Flipbook",
            ctaUrl: "https://heyzine.com/flip-book/a6bb7b22f3.html#page/47",
          },
        ],
      },
    },
  },

  // ====================================================================
  // SPANISH
  // ====================================================================
  es: {
    header: {
      logoAlt: "Sofy Cares",
      nav: {
        livingOptions: "Opciones de Vivienda",
        independentLiving: "Vida Independiente",
        assistedLiving: "Vida Asistida",
        aboutUs: "Nosotros",
        healthcareServices: "Servicios de Salud",
        healthMedicalServices: "Servicios Médicos y de Salud",
        levelsOfCare: "Niveles de Cuidado",
        servicesAmenities: "Servicios y Comodidades",
        events: "Eventos",
        gallery: "Galería",
        contact: "Contacto",
        contactCaps: "CONTACTO",
      },
      languageToggle: {
        ariaSwitchToEs: "Cambiar a Español",
        ariaSwitchToEn: "Switch to English",
      },
    },

    emergencyBar: {
      phoneDirectory: "Directorio Telefónico",
      giveCare: "Apoyar",
      generalInformation: "Información General:",
      emergencyContact: "Contacto de Emergencia:",
    },

    donateButton: {
      label: "Apoyar",
    },

    footer: {
      logoAlt: "Sofy Cares",
      tagline:
        "Brindamos servicios de cuidado personal y compañía profesional con el amor y la atención que tu familia merece.",
      quickLinksTitle: "Enlaces Rápidos",
      quickLinks: {
        home: "Inicio",
        aboutUs: "Nosotros",
        services: "Servicios",
        contact: "Contacto",
      },
      servicesTitle: "Servicios",
      services: {
        independentLiving: "Vida Independiente",
        assistedLiving: "Vida Asistida",
        healthMedical: "Servicios Médicos y de Salud",
        levelsOfCare: "Niveles de Cuidado",
        servicesAmenities: "Servicios y Comodidades",
      },
      contactTitle: "Contacto",
      addressLine1: "Juan José Torres Landa Torre A",
      addressLine2: "37797 San Miguel de Allende, Gto.",
      available247Title: "Disponible 24/7",
      available247Sub: "Siempre aquí cuando nos necesites",
      copyright: "© 2025 Sofy Cares Services. Todos los derechos reservados.",
      legal: {
        privacy: "Política de Privacidad",
        terms: "Términos del Servicio",
        accessibility: "Accesibilidad",
      },
    },

    hero: {
      welcomeBadge: "Bienvenido a Sofy Cares",
      title: "Sofy Cares",
      subtitle:
        "Vida Asistida e Independiente en San Miguel de Allende",
      introduction: {
        paragraphs: [
          "Actualmente, Sofy Cares ofrece cuidado de tiempo completo y medio tiempo, atendiendo a las familias de San Miguel de Allende con integridad, experiencia y dedicación genuina. Somos una comunidad cálida tipo hogar, construida sobre la compasión. Desde la compañía y asistencia diaria hasta la rehabilitación, el cuidado de la memoria y los cuidados paliativos (hospicio), adaptamos nuestros servicios a las necesidades de cada persona.",
          "Con menos residentes que las instalaciones grandes, ofrecemos una atención más cercana, relaciones más profundas y cuidados de mayor calidad—a menudo a un costo menor que el de instituciones más formales.",
        ],
      },
      cta: {
        primary: {
          text: "Agenda una Visita",
          phone: "415 117 7643",
          phoneRaw: "4151177643",
          available: "Disponible 24/7",
        },
        secondary: {
          text: "Contáctanos",
          email: "sofycaressma@gmail.com",
        },
        emergency: {
          text: "Contacto de Emergencia",
          phone: "415 111 2213",
          phoneRaw: "4151112213",
        },
      },
    },

    whyChooseSofyCares: {
      title: "Por Qué Elegir Sofy Cares",
      subtitle: "Cuidado profesional y compasivo en un entorno tipo hogar",
      benefits: [
        {
          title: "Respeto por la Independencia y la Dignidad",
          description:
            "Honramos la independencia y las decisiones personales de cada residente, brindando apoyo respetuoso y compasivo.",
          icon: "heart",
        },
        {
          title: "Tranquilidad para las Familias",
          description:
            "Las familias pueden estar tranquilas sabiendo que sus seres queridos están seguros, cómodos y genuinamente bien atendidos.",
          icon: "shield",
        },
        {
          title: "Entorno Seguro, Cálido y Acogedor",
          description:
            "Nuestro ambiente tipo hogar promueve el confort, la seguridad y un verdadero sentido de pertenencia.",
          icon: "home",
        },
        {
          title: "Personal Experimentado y Compasivo",
          description:
            "Nuestro equipo aporta décadas de experiencia profesional en salud, junto con una compasión y atención genuinas.",
          icon: "users",
        },
        {
          title: "Estándares de Cuidado de EE.UU. con Calidez Mexicana",
          description:
            "Combinamos los altos estándares de cuidado de Estados Unidos con la calidez y hospitalidad de la cultura mexicana.",
          icon: "globe",
        },
      ],
      learnMoreCta: "Conoce Más Sobre Nosotros",
    },

    livingOptions: {
      title: "Opciones de Vivienda",
      subtitle: "Soluciones de cuidado personalizadas para cada etapa de la vida",
      learnMoreCta: "Más Información",
      independent: {
        title: "Vida Independiente",
        description:
          "Para adultos mayores que desean mantener su independencia mientras disfrutan de la vida en comunidad, comidas incluidas y servicios de apoyo opcionales.",
        features: [
          "Habitaciones privadas y espaciosas",
          "Servicio de limpieza y mantenimiento",
          "Calendario completo de actividades sociales y eventos comunitarios",
          "Comidas balanceadas preparadas por chef",
          "Transporte",
          "Atención médica 24/7 para emergencias",
          "Asistencia opcional según se requiera",
          "Libertad de vivir a tu propio ritmo",
        ],
        link: "/independent-living",
      },
      assisted: {
        title: "Vida Asistida",
        description:
          "Para residentes que requieren asistencia diaria con cuidado personal, manejo de medicamentos, movilidad, alimentación y coordinación médica. Nuestros cuidadores capacitados brindan apoyo respetuoso y atento las 24 horas.",
        features: [
          "Cuidado compasivo 24/7",
          "Manejo de medicamentos",
          "Asistencia con actividades diarias",
          "Planes de cuidado personalizados",
          "Entorno seguro y cómodo",
          "Dignidad y respeto siempre",
        ],
        link: "/assisted-living",
      },
    },

    levelsOfCare: {
      title: "Niveles de Cuidado",
      subtitle:
        "Servicios integrales de vida asistida adaptados a las necesidades de cada persona",
      description:
        "Nuestro modelo de vida asistida combina la comodidad del hogar con el apoyo médico profesional:",
      features: [
        {
          title: "Entorno Tipo Hogar, No Clínico",
          description:
            "Espacios cómodos y acogedores que se sienten como en casa, no como un hospital.",
        },
        {
          title: "Planes de Cuidado Profundamente Personalizados",
          description:
            "Cada residente recibe atención individualizada según sus necesidades y preferencias únicas.",
        },
        {
          title: "Relaciones Sólidas y Significativas",
          description:
            "Nuestra pequeña comunidad permite que cuidadores y residentes formen conexiones genuinas.",
        },
        {
          title: "Ambiente Tranquilo e Íntimo",
          description:
            "Con sólo 18 residentes, mantenemos una atmósfera apacible y familiar.",
        },
        {
          title: "Seguridad y Supervisión 24/7",
          description:
            "Cuidado y compañía las 24 horas garantizan apoyo constante.",
        },
        {
          title: "Actividades y Celebraciones",
          description:
            "Programas atractivos, actividades de movimiento y eventos especiales que mejoran la calidad de vida.",
        },
        {
          title: "Apoyo de Transporte Integral",
          description:
            "Brindamos transporte para citas médicas y paseos.",
        },
        {
          title: "Tranquilidad para las Familias",
          description:
            "Cerca o lejos, las familias pueden confiar en que sus seres queridos están bien atendidos.",
        },
      ],
      allInclusiveServices: {
        title: "Cuota Mensual Todo Incluido",
        services: [
          "Servicios de cuidado, alojamiento y comidas",
          "Residencia mantenida y espacios seguros y acogedores",
          "Asistencia en las comidas cuando sea necesario",
          "Dietas especializadas por nutriólogo certificado",
          "Atención de enfermería 24 horas",
          "Acceso al centro de bienestar",
          "Comedor privado para reuniones familiares",
          "Transporte programado",
          "Servicio de limpieza y lavandería",
          "Seguridad 24/7 y servicios de emergencia en el hogar",
          "Acceso a Wi-Fi, teléfono y televisión",
        ],
      },
    },

    servicesAndAmenities: {
      title: "Servicios y Comodidades",
      subtitle: "Todo lo que necesitas para un estilo de vida cómodo y enriquecedor",
      categories: [
        {
          category: "Nutrición",
          items: [
            {
              title: "Comidas Preparadas por Chef",
              description:
                "Tres comidas nutritivas y balanceadas al día, además de bocadillos a discreción. Nuestros menús son diseñados por una nutrióloga certificada y preparados por nuestro chef de planta con ingredientes frescos.",
            },
            {
              title: "Planes de Alimentación Personalizados",
              description:
                "Consideramos cuidadosamente las necesidades dietéticas, requerimientos médicos y preferencias personales—asegurando comidas saludables y agradables.",
            },
            {
              title: "Ambiente Tipo Hogar para Comer",
              description:
                "Espacios relajados y acogedores que fomentan la conexión social.",
            },
          ],
        },
        {
          category: "Bienestar y Recreación",
          items: [
            {
              title: "Alberca Climatizada",
              description: "Acceso durante todo el año a nuestra alberca terapéutica climatizada.",
            },
            {
              title: "Actividades de Arte y Manualidades",
              description: "Incluyendo tejido y proyectos de temporada especiales.",
            },
            {
              title: "Roof-Garden Multiusos",
              description:
                "Diseñado para eventos como cumpleaños, reuniones familiares, picnics al aire libre y más.",
            },
            {
              title: "Salidas Culturales",
              description:
                "Una variedad de salidas adaptadas a los intereses y pasatiempos de los residentes, incluyendo acceso a campos de golf, conciertos, compras, visitas a pueblos cercanos y otros eventos locales por temporada.",
            },
          ],
        },
        {
          category: "Servicios de Cuidado Personal",
          items: [
            {
              title: "Salón de Belleza, Barbería y Spa Completo",
              description:
                "Incluye masajes, manicura y pedicura—disponibles dentro y fuera de la residencia.",
            },
            {
              title: "Cortes y Peinados",
              description: "Servicios profesionales de cuidado personal con regularidad.",
            },
            {
              title: "Asistencia con Higiene Personal",
              description:
                "Apoyo respetuoso con baño, arreglo personal y cuidado diario. Todos los productos de higiene incluidos.",
            },
          ],
        },
        {
          category: "Instalaciones y Confort",
          items: [
            {
              title: "Biblioteca en el Sitio",
              description: "Además de visitas programadas a la biblioteca local.",
            },
            {
              title: "Palapa con Área de Asadores",
              description: "Perfecta para reuniones al aire libre y eventos sociales.",
            },
            {
              title: "Áreas Comunes Acogedoras",
              description:
                "Diseñadas para fomentar la comodidad, conexión y calma de residentes, amigos y familiares.",
            },
            {
              title: "Lavandería y Limpieza Diaria",
              description:
                "Servicios profesionales de limpieza y lavandería que mantienen todo fresco y cómodo.",
            },
          ],
        },
        {
          category: "Terapia con Mascotas",
          items: [
            {
              title: "Terapia con Mascotas / Animales de Servicio",
              description:
                "Los animales pueden ser una parte muy importante de la vida diaria de nuestros residentes. Podemos integrar este valioso aspecto en su rutina para apoyar su bienestar y felicidad.",
            },
          ],
        },
        {
          category: "Alojamiento para Familiares",
          items: [
            {
              title: "Hospedaje para Familiares y Amigos",
              description:
                "Disponible a través de Airbnb dentro de la residencia Sofy Cares, ubicada en la torre de condominios contigua. Las rentas incluyen vistas desde el roof-garden y comodidades como la alberca.",
            },
          ],
        },
      ],
    },

    trustedProfessionals: {
      title: "Profesionales Médicos Cercanos de Confianza",
      subtitle:
        "Sofy Cares confía en estos profesionales médicos independientes en la zona de San Miguel de Allende",
      facebookAriaSuffix: "en Facebook",
      professionals: [
        {
          name: "Aldo Jiménez Herevia",
          specialty: "Cirujano Oncólogo y Cirujano General",
          phone: "+52 5654305184",
          phoneRaw: "525654305184",
          facebook:
            "https://www.facebook.com/share/1EL33ProjE/?mibextid=wwXIfr",
          image: "/images/doc_1.jpg",
        },
      ],
    },

    healthServices: {
      title: "Servicios Médicos y de Salud",
      subtitle:
        "Atención médica profesional con experiencia de nivel hospitalario en un entorno tipo hogar",
      services: [
        {
          category: "Personal Médico",
          icon: "medical",
          items: [
            {
              title: "Personal de Enfermería 24/7",
              description:
                "Enfermeras altamente capacitadas con experiencia de nivel hospitalario, incluyendo terapia intensiva y cuidados críticos.",
            },
            {
              title: "Médico y Especialistas en el Sitio",
              description:
                "Disponibles 24/7 para consultas, exámenes y emergencias.",
            },
            {
              title: "Servicios de Cuidado Clínico",
              description:
                "Administración de medicamentos, monitoreo de signos vitales, manejo de historial médico, exámenes físicos, seguimiento de enfermedades, cuidado de heridas y terapia intravenosa.",
            },
          ],
        },
        {
          category: "Cuidado Especializado",
          icon: "heart",
          items: [
            {
              title: "Cuidado Postquirúrgico",
              description:
                "Enfocado en una recuperación segura y cómoda con monitoreo clínico cercano. Nuestro equipo médico y de enfermería apoya la sanación con manejo del dolor, asistencia para la movilidad, supervisión de medicamentos y planes de cuidado individualizados.",
            },
            {
              title: "Cuidados Paliativos",
              description:
                "Enfocados en el confort, alivio del dolor y mejora de la calidad de vida. Nuestro equipo brinda apoyo compasivo y personalizado a pacientes y familiares, asegurando dignidad, alivio y acompañamiento en cada etapa.",
            },
            {
              title: "Cuidado de la Memoria",
              description:
                "Apoyo especializado para residentes con Alzheimer y demencia, brindado por cuidadores con experiencia en cuidado cognitivo.",
            },
          ],
        },
        {
          category: "Servicios de Rehabilitación",
          icon: "activity",
          items: [
            {
              title: "Terapia Física",
              description:
                "Para rehabilitación, reducción del dolor y prevención de caídas, incluyendo clases de ejercicio grupales diseñadas por un fisioterapeuta.",
            },
            {
              title: "Terapia Ocupacional",
              description:
                "Reentrenamiento en actividades de la vida diaria para mantener la independencia.",
            },
            {
              title: "Rehabilitación Ortopédica",
              description:
                "Programas de recuperación especializados para condiciones de articulaciones y huesos.",
            },
            {
              title: "Programas de Prevención de Caídas",
              description:
                "Ejercicios basados en evidencia y modificaciones del entorno para reducir el riesgo de caídas.",
            },
            {
              title: "Programa de Cuidado Pulmonar",
              description: "Terapia respiratoria y ejercicios para la salud pulmonar.",
            },
            {
              title: "Programa de Insuficiencia Cardíaca",
              description:
                "Monitoreo y cuidado especializado para condiciones cardíacas.",
            },
            {
              title: "Capacitación con Equipo Adaptativo",
              description:
                "Instrucción en el uso de dispositivos de asistencia para mayor movilidad e independencia.",
            },
          ],
        },
        {
          category: "Apoyo de Cuidadores",
          icon: "users",
          items: [
            {
              title: "Asistencia Personalizada",
              description:
                "Compañía personal, actividades cognitivas y apoyo en la vida diaria.",
            },
            {
              title: "Asistencia para Comer",
              description:
                "Apoyo respetuoso en las comidas para residentes que lo necesiten.",
            },
            {
              title: "Apoyo con Higiene Personal",
              description:
                "Asistencia compasiva con el baño, arreglo personal y uso del baño.",
            },
            {
              title: "Manejo de Medicamentos",
              description:
                "Asegurando que los medicamentos se tomen correctamente y a tiempo.",
            },
          ],
        },
      ],
      note: "Los planes de tratamiento están disponibles tanto para residentes como para no residentes.",
    },

    eventsAndCommunity: {
      title: "Eventos y Vida Comunitaria",
      subtitle: "Abrazando la vibrante cultura de San Miguel de Allende",
      description:
        "La vida en Sofy Cares se enriquece con actividades significativas, conexiones sociales y experiencias culturales.",
      activities: [
        {
          title: "Cultura Inmersiva en San Miguel de Allende",
          description:
            "Nuestro equipo investiga eventos locales y privados en San Miguel de Allende, gestionando reservaciones y acompañando a los residentes a actividades acordes a sus intereses.",
          icon: "calendar",
        },
        {
          title: "Celebraciones de Cumpleaños Personalizadas",
          description:
            "Celebraciones de cumpleaños personalizadas que incluyen pastel, comidas especiales solicitadas, regalos sorpresa y selección de pastel a la medida.",
          icon: "gift",
        },
        {
          title: "Viajes y Salidas Asistidas",
          description:
            "Viajes cuidadosamente planeados que respetan las necesidades y deseos de los residentes, ofreciendo recreación con viaje asistido y apoyo.",
          icon: "plane",
        },
        {
          title: "Actividades Diarias",
          description:
            "Actividades diarias atractivas que incluyen artes y manualidades, ejercicios grupales, juegos y reuniones sociales.",
          icon: "activity",
        },
        {
          title: "Eventos Familiares",
          description:
            "Damos la bienvenida y fomentamos las visitas familiares, organizando eventos especiales donde las familias pueden reunirse y pasar tiempo significativo con sus seres queridos. ",
          icon: "home",
        },
      ],
    },

    contactInfo: {
      address: {
        street: "Juan José Torres Landa Torre A",
        building: "",
        city: "37797 San Miguel de Allende, Gto.",
        postalCode: "",
        country: "México",
      },
      phone: {
        display: "+52 415 117 7643",
        raw: "+524151177643",
        label: "Información General",
      },
      emergency: {
        display: "415 111 2213",
        raw: "4151112213",
        label: "Contacto de Emergencia",
      },
      email: "sofycaressma@gmail.com",
      availability: "Disponible 24/7",
      socialMedia: {
        facebook: {
          name: "Sofy Cares SMA",
          url: "https://www.facebook.com/sofycaressma",
        },
        instagram: {
          name: "Sofy Cares Assisted Living A.C.",
          handle: "@sofycaresassistedliving",
          url: "https://www.instagram.com/sofycaresassistedliving",
        },
        tiktok: {
          handle: "@sofycaressma",
          url: "https://www.tiktok.com/@sofycaressma",
        },
      },
      googleMapsUrl:
        "https://www.google.com/maps/place/Sofy+Cares+SMA/@20.9031404,-100.7565095,17z/data=!3m1!4b1!4m6!3m5!1s0x842b51e693122229:0x492c3d728c86bcec!8m2!3d20.9031404!4d-100.7565095!16s%2Fg%2F11xvtnh7_x?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D",
    },

    pages: {
      home: {
        banner: {
          heading:
            "Un hogar seguro y compasivo donde el cuidado es personal y la dignidad va primero.",
          watchVideoCta: "Ver nuestro video",
        },
        aboutSection: {
          tagline:
            "Cuidado profesional y compasivo en un entorno tipo hogar",
        },
        founderSection: {
          sectionTitle: "Nuestra Fundadora",
          intro:
            "Sofia Toledo Soto fundó Sofy Cares con una visión clara: brindar el mismo nivel de cuidado, calidez y atención que ella querría para su propia familia.",
          bio:
            "Con más de 15 años de experiencia en el ámbito de la salud y cuidado de adultos mayores, creó Sofy Cares como un lugar donde la compasión, la dignidad y el cuidado personalizado están en primer lugar. Su compromiso con un cuidado humano y reflexivo da forma a cada parte de la vida en Sofy Cares.",
          nameInitials: "ST",
          founderName: "Sofia Toledo",
          founderRole: "Fundadora y Directora",
          cta: "Conoce su Historia",
          imageAlt: "Fundadora de Sofy Cares",
        },
        locationSection: {
          getInTouchBadge: "Ponte en Contacto",
          title: "Nuestra Ubicación y Contacto",
          subtitle:
            "Estamos aquí para ayudarte y responder a cualquier pregunta",
          addressCardTitle: "Dirección",
          emailCardTitle: "Correo Electrónico",
          phoneCardTitle: "Teléfono",
          generalInformation: "Información General",
          emergencyContact: "Contacto de Emergencia",
          availabilitySub: "Siempre aquí cuando nos necesites",
        },
      },

      about: {
        title: "Nosotros",
        missionTitle: "Nuestra Misión",
        missionBody:
          "En Sofy Cares, nuestra misión es brindar un cuidado compasivo y personalizado en un entorno seguro y tipo hogar donde cada persona sea tratada con dignidad y respeto. Estamos comprometidos a apoyar el bienestar físico, emocional y social de los residentes mientras honramos su independencia y decisiones personales.",
        visionTitle: "Nuestra Visión",
        visionBody:
          "Visualizamos a Sofy Cares como un lugar donde la gente realmente se siente como en casa-respaldada por un cuidado atento, conexión significativa y un fuerte sentido de comunidad. Nuestro objetivo es marcar un estándar en el cuidado de adultos mayores que equilibre la excelencia profesional con calidez, humanidad y confianza.",
        valuesTitle: "Nuestros Valores",
        values: [
          {
            title: "Dignidad y Respeto",
            description:
              "Honramos a cada residente como individuo, valorando sus experiencias de vida, preferencias y autonomía.",
          },
          {
            title: "Cuidado Compasivo",
            description:
              "Abordamos cada interacción con empatía, paciencia y verdadero interés.",
          },
          {
            title: "Seguridad y Confianza",
            description:
              "Brindamos un entorno seguro donde residentes y familias se sienten confiados y tranquilos.",
          },
          {
            title: "Atención Personalizada",
            description:
              "El cuidado nunca es estandarizado; adaptamos nuestros servicios a las necesidades únicas de cada residente.",
          },
          {
            title: "Familia y Comunidad",
            description:
              "Fomentamos relaciones sólidas con las familias y promovemos la conexión, el involucramiento y los momentos compartidos.",
          },
          {
            title: "Excelencia Profesional",
            description:
              "Nuestro equipo mantiene altos estándares de cuidado a través de la experiencia, capacitación y responsabilidad.",
          },
        ],
        storyTitle: "Nuestra Historia",
        storyBody:
          "Sofy Cares fue creado para ofrecer una alternativa a las grandes instalaciones impersonales de cuidado. Desde el inicio, nuestro enfoque ha sido construir una comunidad más pequeña e intencional donde los residentes reciban un cuidado atento y se sientan genuinamente apoyados. Combinando prácticas profesionales de salud con una atmósfera cálida y acogedora, Sofy Cares ofrece un espacio donde las personas pueden vivir con comodidad, confianza y tranquilidad.",
        teamTitle: "Nuestro Equipo",
        teamBody:
          "Nuestros cuidadores y personal son seleccionados cuidadosamente tanto por su experiencia profesional como por su compromiso con el servicio compasivo. Creemos que el cuidado de calidad proviene de personas atentas, respetuosas y profundamente comprometidas con el bienestar de quienes atienden. En Sofy Cares, nuestro equipo trabaja en colaboración para asegurar que los residentes reciban un cuidado consistente y reflexivo cada día.",
        contactCta: "Contáctanos",
        images: [
          { src: "/images/SC_250.jpg", alt: "Comunidad Sofy Cares" },
          { src: "/images/SC_251.jpg", alt: "Comunidad Sofy Cares" },
          { src: "/images/SC_252.jpg", alt: "Comunidad Sofy Cares" },
          { src: "/images/SC_253.jpg", alt: "Comunidad Sofy Cares" },
          { src: "/images/SC_254.jpg", alt: "Comunidad Sofy Cares" },
          { src: "/images/SC_255.jpg", alt: "Comunidad Sofy Cares" },
          { src: "/images/SC_256.jpg", alt: "Comunidad Sofy Cares" },
          { src: "/images/SC_257.jpg", alt: "Comunidad Sofy Cares" },
          { src: "/images/SC_258.jpg", alt: "Comunidad Sofy Cares" },
          { src: "/images/SC_259.jpg", alt: "Comunidad Sofy Cares" },
          { src: "/images/SC_260.jpg", alt: "Comunidad Sofy Cares" },
          { src: "/images/SC_261.jpg", alt: "Comunidad Sofy Cares" },
          { src: "/images/SC_262.jpg", alt: "Comunidad Sofy Cares" },
          { src: "/images/SC_263.jpg", alt: "Comunidad Sofy Cares" },
          { src: "/images/SC_264.jpg", alt: "Comunidad Sofy Cares" },
        ],
      },

      founder: {
        title: "Nuestra Fundadora",
        subtitle: "Sofia Toledo Soto – Fundadora y Directora",
        personalStoryTitle: "Su Historia Personal",
        personalStory: [
          "Sofia Toledo Soto siempre ha sido alguien que lidera con servicio. Mucho antes de que existiera Sofy Cares, las personas naturalmente acudían a ella en busca de apoyo, guía y constancia. Tiene una manera instintiva de poner a los demás en primer lugar-algo que ha definido sus relaciones, su trabajo y, en última instancia, el camino de su vida.",
          "Con los años, a través de experiencias personales y encuentros profesionales, Sofia se hizo cada vez más consciente de lo fácil que ciertas personas son pasadas por alto-especialmente adultos mayores cuyas familias pueden sentirse abrumadas, no preparadas o inseguras de cómo cuidarlos bien. Lo que se quedó con ella no fue un solo momento, sino el reconocimiento creciente de que muchas personas simplemente necesitan a alguien dispuesto a estar presente con constancia, escuchar atentamente y asumir la responsabilidad de su cuidado con sinceridad y paciencia. Sofy Cares nació de esa comprensión.",
        ],
        experienceTitle: "Experiencia Profesional",
        experience: [
          "Sofia aporta más de 15 años de experiencia en cuidado, servicios relacionados con la salud y trabajo centrado en el cliente. Incluso durante períodos en los que se alejó del cuidado directo-trabajando en campos como bienes raíces-su enfoque permaneció el mismo: priorizar a las personas, mantenerse accesible y dar seguimiento.",
          "Su fortaleza profesional radica no sólo en la experiencia formal, sino en su capacidad de comunicarse abiertamente, responder con honestidad y permanecer presente para quienes confían en ella. Es conocida por ser cercana, receptiva y profundamente atenta-cualidades que dan forma tanto a su estilo de liderazgo como a la operación diaria de Sofy Cares.",
        ],
        visionTitle: "Su Visión para Sofy Cares",
        vision: [
          "La visión de Sofia para Sofy Cares está enraizada en la responsabilidad y la presencia. Ella cree que el cuidado nunca debe sentirse distante, apresurado o transaccional. En cambio, debe sentirse constante, receptivo y basado en una conexión humana real.",
          "Imaginó un lugar donde los residentes no son administrados, sino apoyados-donde las familias se sienten informadas en lugar de excluidas, y donde la confianza se construye a través de la transparencia, la consistencia y la disponibilidad genuina. Sofy Cares fue diseñado para ser una comunidad donde las personas se sientan seguras al hacer preguntas, expresar necesidades y ser recibidas con respeto en cada etapa.",
        ],
        achievementsTitle: "Logros y Compromisos",
        achievements: [
          "Más de 15 años de experiencia en cuidado y servicios relacionados con la salud",
          "Fundadora de un hogar de cuidado comunitario en San Miguel de Allende",
          "Reconocida por su liderazgo cercano, accesibilidad y comunicación clara",
          "Profundo compromiso con el servicio a personas que a menudo son pasadas por alto o desatendidas",
          "Dedicada a crear un entorno construido sobre la confianza, la presencia y la responsabilidad",
        ],
        giveCareCta: "Apoyar Aquí",
        giveCareUrl: "https://www.sofy-cares.ac",
        images: [
          { src: "/images/SC_275.jpg", alt: "Sofia Toledo Soto - Fundadora de Sofy Cares" },
          { src: "/images/SC_273.jpg", alt: "Sofia Toledo Soto en el trabajo" },
          { src: "/images/SC_271.jpg", alt: "Sofia Toledo Soto con el equipo" },
        ],
      },

      services: {
        bannerTitle: "Servicios de Salud",
        bannerSubtitle: "Cuidado integral adaptado a tus necesidades",
        bannerImageAlt: "Profesional de salud brindando atención de calidad",
        bannerImageUrl:
          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
      },

      contact: {
        banner: {
          title: "Contáctanos",
          subtitle:
            "Estamos aquí para ayudarte. Envíanos tu solicitud y te responderemos pronto.",
        },
        info: {
          sectionTitle: "Información de Contacto",
          phoneTitle: "Teléfono",
          phoneContent: "+52 415 117 7643",
          phoneDesc: "Disponible 24/7",
          emailTitle: "Correo Electrónico",
          emailDesc: "Respuesta en menos de 24 horas",
          locationTitle: "Ubicación",
          locationContent: "Juan José Torres Landa Torre A",
          locationDesc: "37797 San Miguel de Allende, Gto.",
        },
        form: {
          sectionTitle: "Envíanos tu Solicitud",
          firstNameLabel: "Nombre *",
          firstNamePlaceholder: "Ingresa tu nombre",
          lastNameLabel: "Apellido *",
          lastNamePlaceholder: "Ingresa tu apellido",
          emailLabel: "Correo Electrónico *",
          emailPlaceholder: "ejemplo@correo.com",
          phoneLabel: "Teléfono",
          phonePlaceholder: "+52 (555) 123-4567",
          serviceTypeLabel: "Tipo de Servicio *",
          serviceTypeOptions: {
            select: "Selecciona un servicio",
            personalCare: "Cuidado Personal",
            companionship: "Compañía",
            homeSupport: "Apoyo en el Hogar",
            respiteCare: "Cuidado de Relevo",
            specialized: "Cuidado Especializado",
            consultation: "Consulta General",
          },
          preferredContactLabel: "Método de Contacto Preferido",
          preferredContactOptions: {
            email: "Correo Electrónico",
            phone: "Teléfono",
            either: "Cualquiera",
          },
          subjectLabel: "Asunto *",
          subjectPlaceholder: "Breve descripción de tu solicitud",
          messageLabel: "Mensaje *",
          messagePlaceholder: "Describe tu solicitud en detalle",
          sendButton: "Enviar Solicitud",
          sendingButton: "Enviando...",
          unavailableButton: "Formulario No Disponible - Contáctanos Directamente",
        },
        validation: {
          required: "Este campo es obligatorio",
          email: "Por favor ingresa un correo válido",
          phone: "Por favor ingresa un número de teléfono válido",
          name: "El nombre debe tener entre 2 y 50 caracteres",
          message: "El mensaje debe tener al menos 10 caracteres",
        },
        toast: {
          successSent: "¡Correo enviado con éxito! Te responderemos pronto.",
          validationError: "Por favor corrige los campos marcados.",
          sendFailed:
            "No se pudo enviar el correo. Inténtalo de nuevo o contáctanos directamente.",
          limitReached:
            "Se alcanzó el límite mensual de correos. Por favor contáctanos directamente por teléfono o correo.",
        },
        limits: {
          unavailableTitle: "Formulario de Contacto No Disponible Temporalmente",
          unavailableBodyPrefix:
            "Hemos alcanzado nuestro límite mensual de correos (",
          unavailableBodySuffix:
            " correos enviados). Por favor contáctanos directamente usando la información de abajo:",
          unavailableEmailLabel: "📧 Correo: ",
          unavailablePhoneLabel: "📞 Teléfono: ",
          unavailablePhone: "+52 415 117 7643",
          criticalTitle: "Aviso de Alto Volumen de Correos",
          criticalBodyPrefix: "Estamos por alcanzar el límite mensual de correos (",
          criticalBodySuffix:
            " correos enviados). Si necesitas una respuesta inmediata, por favor llámanos al +52 415 117 7643.",
          warningPrefix: "Nota:",
          warningBodyPrefix:
            " Estamos recibiendo un alto volumen de correos (",
          warningBodySuffix:
            " correos enviados este mes). Tu mensaje será entregado, pero para asuntos urgentes, por favor llama al +52 415 117 7643.",
        },
        submitLabels: {
          serviceType: {
            personalCare: "Cuidado Personal",
            companionship: "Compañía",
            homeSupport: "Apoyo en el Hogar",
            respiteCare: "Cuidado de Relevo",
            specialized: "Cuidado Especializado",
            consultation: "Consulta General",
          },
          preferredContact: {
            email: "Correo Electrónico",
            phone: "Teléfono",
            either: "Cualquiera",
          },
          phoneNotProvided: "No proporcionado",
        },
      },

      assistedLiving: {
        heroTitle: "Vida Asistida",
        heroSubtitle:
          "Estamos aquí para ti, en el lugar y momento adecuado. Nuestros cuidadores capacitados te darán la ayuda extra que necesitas para vivir tu vida al máximo.",
        handTitle: "Una Mano que Puedes Tomar en Cualquier Momento",
        handPara1:
          "El programa de Vida Asistida de Sofy Cares es el lugar para el momento en que necesitas un profesional en tu rutina diaria. Con un horario hecho para cubrir tus necesidades específicas, nuestros cuidadores te asistirán a ti o a tus seres queridos al mismo tiempo que te brindamos un estilo de vida digno.",
        handPara2:
          "Nos encargaremos de tus citas médicas, medicamentos, servicios especiales y requerimientos dietéticos para que te enfoques en lo más importante: en ti.",
        handPara3:
          "Con una variedad diversa de actividades físicas y mentales, disfrutarás cada momento al mismo tiempo que recibes cuidado.",
        handPara4:
          "Aquí en Sofy Cares, nuestro objetivo principal es brindarte la ayuda que necesitas.",
        featuresTitle: "Lo Especial de Nuestra Vida Asistida",
        approachTitle: "Nuestro Enfoque a la Vida Asistida",
        galleryTitle: "Nuestra Comunidad de Vida Asistida",
        galleryImages: [
          { src: "/images/SC_17.jpg", alt: "Espacio de Vida Asistida" },
          { src: "/images/SC_265.jpg", alt: "Espacio de Vida Asistida" },
          { src: "/images/SC_130.jpg", alt: "Cuidado en Vida Asistida" },
        ],
        ctaTitle: "¿Listo para Saber Más Sobre Nuestra Vida Asistida?",
        ctaSubtitle:
          "Contáctanos hoy para agendar una visita y conocer nuestra comunidad en persona.",
        contactCta: "Contáctanos",
      },

      independentLiving: {
        heroTitle: "Vida Independiente",
        heroSubtitle:
          "Para personas como tú, que quieren disfrutar de un estilo de vida sin preocupaciones dentro de nuestra comunidad y sin las responsabilidades de vivir solas.",
        featuresTitle: "Servicios de Vida Independiente",
        features: [
          "Habitaciones privadas y espaciosas",
          "Servicio de limpieza y mantenimiento",
          "Calendario completo de actividades sociales y eventos comunitarios",
          "Comidas balanceadas preparadas por chef",
          "Transporte",
          "Atención médica 24/7 para emergencias",
          "Asistencia opcional según se requiera",
          "Libertad de vivir a tu propio ritmo",
        ],
        lifestyleTitle: "Un Estilo de Vida Senior Hecho para Ti",
        lifestylePara1:
          "El programa de Vida Independiente de Sofy Cares te ofrece un espacio donde puedes moverte libremente y tener la experiencia que deseas con todo el cuidado y comodidades que necesitas. Conoce a otras personas, ejercítate, únete a nuestras actividades comunitarias y explora San Miguel de Allende.",
        lifestylePara2:
          "Con un estilo de vida personalizado, tu estancia puede evolucionar para cubrir tus necesidades y que tengas el nivel apropiado de cuidado, ya sea una dieta estricta, citas médicas, cuidado de la memoria o cuidado especializado para el siguiente capítulo de tu vida.",
        lifestylePara3: "Sofy Cares tiene todo lo que necesitas y más, ¡únete ahora!",
        amenitiesTitle: "Servicios y Comodidades",
        amenities: [
          {
            title: "Nutrición",
            description:
              "Tres comidas nutritivas y balanceadas al día, además de bocadillos. Menús diseñados por una nutrióloga certificada y preparados por nuestro chef.",
            icon: "nutrition",
          },
          {
            title: "Alberca Climatizada",
            description:
              "Acceso durante todo el año a nuestra alberca terapéutica climatizada para relajación y ejercicio.",
            icon: "pool",
          },
          {
            title: "Arte y Actividades",
            description:
              "Actividades atractivas que incluyen arte y manualidades, tejido y proyectos de temporada.",
            icon: "activity",
          },
          {
            title: "Roof-Garden Multiusos",
            description:
              "Perfecto para cumpleaños, reuniones familiares, picnics al aire libre y eventos especiales.",
            icon: "rooftop",
          },
          {
            title: "Servicios de Belleza y Spa",
            description:
              "Salón, barbería y servicios de spa en el sitio, incluyendo masajes y cuidado de uñas.",
            icon: "spa",
          },
          {
            title: "Biblioteca en el Sitio",
            description:
              "Acceso a libros y visitas programadas a la biblioteca local.",
            icon: "library",
          },
        ],
        galleryTitle: "Tu Hogar de Vida Independiente",
        galleryImages: [
          { src: "/images/SC_229.jpg", alt: "Espacio de Vida Independiente" },
          { src: "/images/SC_249.jpg", alt: "Espacio de Vida Independiente" },
          { src: "/images/SC_268.jpg", alt: "Comunidad de Vida Independiente" },
        ],
        ctaTitle: "Vive la Experiencia de la Vida Independiente en Sofy Cares",
        ctaSubtitle:
          "Agenda una visita para conocer nuestra comunidad y a nuestro equipo.",
        contactCta: "Contáctanos",
      },

      levelsOfCare: {
        title: "Niveles de Cuidado",
        description:
          "Ofrecemos un espectro completo de opciones de cuidado para cubrir cada necesidad, desde vida asistida hasta cuidado especializado de la memoria y rehabilitación.",
        levels: [
          { name: "Vida Asistida", href: "/levels/assisted-living" },
          { name: "Cuidado de la Memoria", href: "/levels/memory-care" },
          { name: "Rehabilitación de Corto Plazo", href: "/levels/short-term-rehab" },
          { name: "Rehabilitación de Largo Plazo", href: "/levels/long-term-rehab" },
        ],
        images: [
          {
            src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
            alt: "Niveles de Cuidado",
          },
          {
            src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80",
            alt: "Niveles de Cuidado",
          },
        ],
      },

      gallery: {
        title: "Galería",
        subtitle:
          "Un vistazo a nuestra comunidad y los momentos que compartimos juntos en Sofy Cares.",
        enlargedAlt: "Vista ampliada",
        images: [
          { src: "/images/SC_8.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_10.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_17.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_19.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_51.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_55.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_58.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_99.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_121.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_122.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_130.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_149.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_152.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_161.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_167.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_221.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_224.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_229.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_232.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_241.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_245.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_249.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_250.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_251.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_252.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_253.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_254.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_255.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_256.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_257.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_258.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_259.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_260.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_261.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_262.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_263.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_264.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_265.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_266.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_267.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_268.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_269.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_270.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_271.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_272.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_273.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_274.jpg", alt: "Actividad de Sofy Cares" },
          { src: "/images/SC_275.jpg", alt: "Actividad de Sofy Cares" },
        ],
      },

      events: {
        pageTitle: "Eventos y Noticias",
        pageSubtitle:
          "Mantente al día con los hitos y celebraciones de la comunidad Sofy Cares",
        articles: [
          {
            dateBadge: "Mayo 2026",
            headline: "A.C. Sofy Cares:",
            subheading: "Ampliando el Círculo del Cuidado",
            author: "Por CJ Meridian",
            bodyParagraphs: [
              "En San Miguel de Allende, donde la tradición y la comunidad están profundamente arraigadas en la vida cotidiana, el cuidado de nuestros adultos mayores sigue siendo una de las responsabilidades más significativas que compartimos. En A.C. Sofy Cares, esta convicción siempre ha guiado la manera en que se ofrece el cuidado, dando forma a un entorno que prioriza la dignidad, el respeto y la conexión humana por encima de todo.",
              "Fundada con la intención de crear un ambiente cálido y hogareño, A.C. Sofy Cares se ha convertido en un lugar donde la atención personalizada no se considera un lujo, sino un estándar. Cada residente es tratado como una persona con una historia, con respeto y con una vida que merece ser honrada con paciencia y compasión.",
              "Con el tiempo, una realidad lamentable se ha vuelto cada vez más clara. Mientras la necesidad de un cuidado de adultos mayores atento y de alta calidad continúa creciendo, no todas las familias cuentan con los medios económicos para acceder a él plenamente. Actualmente, la población mundial de adultos mayores está en su punto más alto en la historia de la humanidad. Por lo tanto, este no es un desafío aislado. Es una realidad silenciosa y continua para muchas familias que desean lo mejor para sus seres queridos, pero que enfrentan limitaciones que hacen difícil sostener un cuidado profesional y constante a lo largo del tiempo.",
              "En respuesta a esta necesidad, A.C. Sofy Cares (Asociación Civil) se ha constituido formalmente. Este nuevo capítulo permite a la organización recibir donaciones que apoyan directamente a los residentes que requieren asistencia económica, asegurando que puedan seguir recibiendo el cuidado que necesitan sin interrupciones.",
            ],
            ctaLabel: "Descargar Artículo",
            ctaUrl: "/events/A.C. Sofy Cares Article.docx",
          },
          {
            dateBadge: "Febrero 2026",
            headline: "El Cuidado Llega a Casa:",
            subheading:
              "Sofy Cares Celebra un Logro como Asociación Civil en San Miguel",
            author: "Por CJ Meridian",
            bodyParagraphs: [
              "Cuando la luz de la mañana entra en los Condominios San Miguel, es recibida por el ritmo tranquilo de la vida en Sofy Cares — un cálido coro de cuidadores, música y risas que resuenan por los pasillos.",
            ],
            ctaLabel: "Ver Folleto en Línea",
            ctaUrl: "https://heyzine.com/flip-book/a6bb7b22f3.html#page/47",
          },
        ],
      },
    },
  },
};
