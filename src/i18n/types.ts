export type Language = "en" | "es";

interface TitleDescription {
  title: string;
  description: string;
}

interface AmenityCategory {
  category: string;
  items: TitleDescription[];
}

interface HealthServiceCategory {
  category: string;
  icon: string;
  items: TitleDescription[];
}

interface ImageEntry {
  src: string;
  alt: string;
}

export interface TranslationSchema {
  header: {
    logoAlt: string;
    nav: {
      livingOptions: string;
      independentLiving: string;
      assistedLiving: string;
      aboutUs: string;
      healthcareServices: string;
      healthMedicalServices: string;
      levelsOfCare: string;
      servicesAmenities: string;
      events: string;
      gallery: string;
      contact: string;
      contactCaps: string;
    };
    languageToggle: {
      ariaSwitchToEs: string;
      ariaSwitchToEn: string;
    };
  };

  emergencyBar: {
    phoneDirectory: string;
    giveCare: string;
    generalInformation: string;
    emergencyContact: string;
  };

  donateButton: {
    label: string;
  };

  footer: {
    logoAlt: string;
    tagline: string;
    quickLinksTitle: string;
    quickLinks: {
      home: string;
      aboutUs: string;
      services: string;
      contact: string;
    };
    servicesTitle: string;
    services: {
      independentLiving: string;
      assistedLiving: string;
      healthMedical: string;
      levelsOfCare: string;
      servicesAmenities: string;
    };
    contactTitle: string;
    addressLine1: string;
    addressLine2: string;
    available247Title: string;
    available247Sub: string;
    copyright: string;
    legal: {
      privacy: string;
      terms: string;
      accessibility: string;
    };
  };

  hero: {
    welcomeBadge: string;
    title: string;
    subtitle: string;
    introduction: { paragraphs: string[] };
    cta: {
      primary: { text: string; phone: string; phoneRaw: string; available: string };
      secondary: { text: string; email: string };
      emergency: { text: string; phone: string; phoneRaw: string };
    };
  };

  whyChooseSofyCares: {
    title: string;
    subtitle: string;
    benefits: Array<{ title: string; description: string; icon: string }>;
    learnMoreCta: string;
  };

  livingOptions: {
    title: string;
    subtitle: string;
    learnMoreCta: string;
    independent: {
      title: string;
      description: string;
      features: string[];
      link: string;
    };
    assisted: {
      title: string;
      description: string;
      features: string[];
      link: string;
    };
  };

  levelsOfCare: {
    title: string;
    subtitle: string;
    description: string;
    features: TitleDescription[];
    allInclusiveServices: {
      title: string;
      services: string[];
    };
  };

  servicesAndAmenities: {
    title: string;
    subtitle: string;
    categories: AmenityCategory[];
  };

  trustedProfessionals: {
    title: string;
    subtitle: string;
    facebookAriaSuffix: string;
    professionals: Array<{
      name: string;
      specialty: string;
      phone: string;
      phoneRaw: string;
      facebook: string;
      image: string;
    }>;
  };

  healthServices: {
    title: string;
    subtitle: string;
    services: HealthServiceCategory[];
    note: string;
  };

  eventsAndCommunity: {
    title: string;
    subtitle: string;
    description: string;
    activities: Array<{ title: string; description: string; icon: string }>;
  };

  contactInfo: {
    address: {
      street: string;
      building: string;
      city: string;
      postalCode: string;
      country: string;
    };
    phone: { display: string; raw: string; label: string };
    emergency: { display: string; raw: string; label: string };
    email: string;
    availability: string;
    socialMedia: {
      facebook: { name: string; url: string };
      instagram: { name: string; handle: string; url: string };
      tiktok: { handle: string; url: string };
    };
    googleMapsUrl: string;
  };

  pages: {
    home: {
      banner: { heading: string; watchVideoCta: string };
      aboutSection: { tagline: string };
      founderSection: {
        sectionTitle: string;
        intro: string;
        bio: string;
        nameInitials: string;
        founderName: string;
        founderRole: string;
        cta: string;
        imageAlt: string;
      };
      locationSection: {
        getInTouchBadge: string;
        title: string;
        subtitle: string;
        addressCardTitle: string;
        emailCardTitle: string;
        phoneCardTitle: string;
        generalInformation: string;
        emergencyContact: string;
        availabilitySub: string;
      };
    };

    about: {
      title: string;
      missionTitle: string;
      missionBody: string;
      visionTitle: string;
      visionBody: string;
      valuesTitle: string;
      values: TitleDescription[];
      storyTitle: string;
      storyBody: string;
      teamTitle: string;
      teamBody: string;
      contactCta: string;
      images: ImageEntry[];
    };

    founder: {
      title: string;
      subtitle: string;
      personalStoryTitle: string;
      personalStory: string[];
      experienceTitle: string;
      experience: string[];
      visionTitle: string;
      vision: string[];
      achievementsTitle: string;
      achievements: string[];
      giveCareCta: string;
      giveCareUrl: string;
      images: ImageEntry[];
    };

    services: {
      bannerTitle: string;
      bannerSubtitle: string;
      bannerImageAlt: string;
      bannerImageUrl: string;
    };

    contact: {
      banner: { title: string; subtitle: string };
      info: {
        sectionTitle: string;
        phoneTitle: string;
        phoneContent: string;
        phoneDesc: string;
        emailTitle: string;
        emailDesc: string;
        locationTitle: string;
        locationContent: string;
        locationDesc: string;
      };
      form: {
        sectionTitle: string;
        firstNameLabel: string;
        firstNamePlaceholder: string;
        lastNameLabel: string;
        lastNamePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        phoneLabel: string;
        phonePlaceholder: string;
        serviceTypeLabel: string;
        serviceTypeOptions: {
          select: string;
          personalCare: string;
          companionship: string;
          homeSupport: string;
          respiteCare: string;
          specialized: string;
          consultation: string;
        };
        preferredContactLabel: string;
        preferredContactOptions: {
          email: string;
          phone: string;
          either: string;
        };
        subjectLabel: string;
        subjectPlaceholder: string;
        messageLabel: string;
        messagePlaceholder: string;
        sendButton: string;
        sendingButton: string;
        unavailableButton: string;
      };
      validation: {
        required: string;
        email: string;
        phone: string;
        name: string;
        message: string;
      };
      toast: {
        successSent: string;
        validationError: string;
        sendFailed: string;
        limitReached: string;
      };
      limits: {
        unavailableTitle: string;
        unavailableBodyPrefix: string;
        unavailableBodySuffix: string;
        unavailableEmailLabel: string;
        unavailablePhoneLabel: string;
        unavailablePhone: string;
        criticalTitle: string;
        criticalBodyPrefix: string;
        criticalBodySuffix: string;
        warningPrefix: string;
        warningBodyPrefix: string;
        warningBodySuffix: string;
      };
      submitLabels: {
        serviceType: {
          personalCare: string;
          companionship: string;
          homeSupport: string;
          respiteCare: string;
          specialized: string;
          consultation: string;
        };
        preferredContact: {
          email: string;
          phone: string;
          either: string;
        };
        phoneNotProvided: string;
      };
    };

    assistedLiving: {
      heroTitle: string;
      heroSubtitle: string;
      handTitle: string;
      handPara1: string;
      handPara2: string;
      handPara3: string;
      handPara4: string;
      featuresTitle: string;
      approachTitle: string;
      galleryTitle: string;
      galleryImages: ImageEntry[];
      ctaTitle: string;
      ctaSubtitle: string;
      contactCta: string;
    };

    independentLiving: {
      heroTitle: string;
      heroSubtitle: string;
      featuresTitle: string;
      features: string[];
      lifestyleTitle: string;
      lifestylePara1: string;
      lifestylePara2: string;
      lifestylePara3: string;
      amenitiesTitle: string;
      amenities: Array<{ title: string; description: string; icon: string }>;
      galleryTitle: string;
      galleryImages: ImageEntry[];
      ctaTitle: string;
      ctaSubtitle: string;
      contactCta: string;
    };

    levelsOfCare: {
      title: string;
      description: string;
      levels: Array<{ name: string; href: string }>;
      images: ImageEntry[];
    };

    gallery: {
      title: string;
      subtitle: string;
      enlargedAlt: string;
      images: ImageEntry[];
    };

    events: {
      pageTitle: string;
      pageSubtitle: string;
      dateBadge: string;
      headline: string;
      subheading: string;
      author: string;
      bodyParagraph: string;
      flipbookCta: string;
      flipbookUrl: string;
    };
  };
}
