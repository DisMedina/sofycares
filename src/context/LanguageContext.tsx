import { createContext, ReactNode, useContext, useMemo, useState } from "react";

type Language = "en" | "es";

type TranslationKey =
  | "title" // Header.tsx
  | "subtitle" // Header.tsx
  | "scheduleVisit" // Header.tsx
  | "contact" // Header.tsx
  | "emergencyContact" // Header.tsx
  | "livingOptions" // Header.tsx
  | "independentLiving" // Header.tsx
  | "assistedLiving" // Header.tsx
  | "aboutUs" // Header.tsx
  | "healthcareServices" // Header.tsx
  | "events" // Header.tsx
  | "gallery" // Header.tsx
  | "contactUs" // Header.tsx
  | "available24x7" // Header.tsx
  | "phone" // Header.tsx
  | "email" // Header.tsx
  | "homeSectionTitle" // AboutSection.tsx
  | "textBanner" // AboutSection.tsx
  | "heroTitle" // AboutSection.tsx
  | "welcomeToSofyCares" // IntroductionSection.tsx
  | "heroSubtitle" // AboutSection.tsx
  | "heroIntroPara1" // AboutSection.tsx
  | "heroIntroPara2" // AboutSection.tsx
  | "heroCtaPrimaryText" // AboutSection.tsx
  | "heroCtaPrimaryPhone" // AboutSection.tsx
  | "heroCtaPrimaryPhoneRaw" // AboutSection.tsx
  | "heroCtaPrimaryAvailable" // AboutSection.tsx
  | "heroCtaSecondaryText" // AboutSection.tsx
  | "heroCtaSecondaryEmail" // AboutSection.tsx
  | "heroCtaEmergencyText" // AboutSection.tsx
  | "heroCtaEmergencyPhone" // AboutSection.tsx
  | "whyChooseTitle" // AboutSection.tsx
  | "whyChooseSubtitle" // AboutSection.tsx
  | "whyChooseBenefit1Title" // AboutSection.tsx
  | "whyChooseBenefit1Desc" // AboutSection.tsx
  | "whyChooseBenefit2Title" // AboutSection.tsx
  | "whyChooseBenefit2Desc" // AboutSection.tsx
  | "whyChooseBenefit3Title" // AboutSection.tsx
  | "whyChooseBenefit3Desc" // AboutSection.tsx
  | "whyChooseBenefit4Title" // AboutSection.tsx
  | "whyChooseBenefit4Desc" // AboutSection.tsx
  | "whyChooseBenefit5Title" // AboutSection.tsx
  | "whyChooseBenefit5Desc" // AboutSection.tsx
  | "learnMoreAboutUs" // AboutSection.tsx
  | "learnMore" // ServicesSection.tsx
  | "livingOptionsTitle" // AmenitiesSection.tsx
  | "livingOptionsSubtitle" // AmenitiesSection.tsx
  | "independentLivingTitle" // AmenitiesSection.tsx
  | "independentLivingDesc" // AmenitiesSection.tsx
  | "independentLivingFeature1" // AmenitiesSection.tsx
  | "independentLivingFeature2" // AmenitiesSection.tsx
  | "independentLivingFeature3" // AmenitiesSection.tsx
  | "independentLivingFeature4" // AmenitiesSection.tsx
  | "independentLivingFeature5" // AmenitiesSection.tsx
  | "independentLivingFeature6" // AmenitiesSection.tsx
  | "independentLivingFeature7" // AmenitiesSection.tsx
  | "independentLivingFeature8" // AmenitiesSection.tsx
  | "assistedLivingTitle" // AmenitiesSection.tsx
  | "assistedLivingDesc" // AmenitiesSection.tsx
  | "assistedLivingFeature1" // AmenitiesSection.tsx
  | "assistedLivingFeature2" // AmenitiesSection.tsx
  | "assistedLivingFeature3" // AmenitiesSection.tsx
  | "assistedLivingFeature4" // AmenitiesSection.tsx
  | "assistedLivingFeature5" // AmenitiesSection.tsx
  | "assistedLivingFeature6" // AmenitiesSection.tsx
  | "levelsOfCareTitle" // AmenitiesSection.tsx
  | "levelsOfCareSubtitle" // AmenitiesSection.tsx
  | "levelsOfCareDesc" // AmenitiesSection.tsx
  | "levelsOfCareFeature1Title" // AmenitiesSection.tsx
  | "levelsOfCareFeature1Desc" // AmenitiesSection.tsx
  | "levelsOfCareFeature2Title" // AmenitiesSection.tsx
  | "levelsOfCareFeature2Desc" // AmenitiesSection.tsx
  | "levelsOfCareFeature3Title" // AmenitiesSection.tsx
  | "levelsOfCareFeature3Desc" // AmenitiesSection.tsx
  | "levelsOfCareFeature4Title" // AmenitiesSection.tsx
  | "levelsOfCareFeature4Desc" // AmenitiesSection.tsx
  | "levelsOfCareFeature5Title" // AmenitiesSection.tsx
  | "levelsOfCareFeature5Desc" // AmenitiesSection.tsx
  | "levelsOfCareFeature6Title" // AmenitiesSection.tsx
  | "levelsOfCareFeature6Desc" // AmenitiesSection.tsx
  | "levelsOfCareFeature7Title" // AmenitiesSection.tsx
  | "levelsOfCareFeature7Desc" // AmenitiesSection.tsx
  | "levelsOfCareFeature8Title" // AmenitiesSection.tsx
  | "levelsOfCareFeature8Desc" // AmenitiesSection.tsx
  | "allInclusiveTitle" // AmenitiesSection.tsx
  | "allInclusiveService1" // AmenitiesSection.tsx
  | "allInclusiveService2" // AmenitiesSection.tsx
  | "allInclusiveService3" // AmenitiesSection.tsx
  | "allInclusiveService4" // AmenitiesSection.tsx
  | "allInclusiveService5" // AmenitiesSection.tsx
  | "allInclusiveService6" // AmenitiesSection.tsx
  | "allInclusiveService7" // AmenitiesSection.tsx
  | "allInclusiveService8" // AmenitiesSection.tsx
  | "allInclusiveService9" // AmenitiesSection.tsx
  | "allInclusiveService10" // AmenitiesSection.tsx
  | "allInclusiveService11" // AmenitiesSection.tsx
  | "allInclusiveService12" // AmenitiesSection.tsx
  | "servicesAmenitiesTitle" // AmenitiesSection.tsx
  | "servicesAmenitiesSubtitle" // AmenitiesSection.tsx
  | "nutritionCategory" // AmenitiesSection.tsx
  | "nutritionItem1Title" // AmenitiesSection.tsx
  | "nutritionItem1Desc" // AmenitiesSection.tsx
  | "nutritionItem2Title" // AmenitiesSection.tsx
  | "nutritionItem2Desc" // AmenitiesSection.tsx
  | "nutritionItem3Title" // AmenitiesSection.tsx
  | "nutritionItem3Desc" // AmenitiesSection.tsx
  | "wellnessCategory" // AmenitiesSection.tsx
  | "wellnessItem1Title" // AmenitiesSection.tsx
  | "wellnessItem1Desc" // AmenitiesSection.tsx
  | "wellnessItem2Title" // AmenitiesSection.tsx
  | "wellnessItem2Desc" // AmenitiesSection.tsx
  | "wellnessItem3Title" // AmenitiesSection.tsx
  | "wellnessItem3Desc" // AmenitiesSection.tsx
  | "wellnessItem4Title" // AmenitiesSection.tsx
  | "wellnessItem4Desc" // AmenitiesSection.tsx
  | "personalCareCategory" // AmenitiesSection.tsx
  | "personalCareItem1Title" // AmenitiesSection.tsx
  | "personalCareItem1Desc" // AmenitiesSection.tsx
  | "personalCareItem2Title" // AmenitiesSection.tsx
  | "personalCareItem2Desc" // AmenitiesSection.tsx
  | "personalCareItem3Title" // AmenitiesSection.tsx
  | "personalCareItem3Desc" // AmenitiesSection.tsx
  | "facilitiesCategory" // AmenitiesSection.tsx
  | "facilitiesItem1Title" // AmenitiesSection.tsx
  | "facilitiesItem1Desc" // AmenitiesSection.tsx
  | "facilitiesItem2Title" // AmenitiesSection.tsx
  | "facilitiesItem2Desc" // AmenitiesSection.tsx
  | "facilitiesItem3Title" // AmenitiesSection.tsx
  | "facilitiesItem3Desc" // AmenitiesSection.tsx
  | "facilitiesItem4Title" // AmenitiesSection.tsx
  | "facilitiesItem4Desc" // AmenitiesSection.tsx
  | "petTherapyCategory" // AmenitiesSection.tsx
  | "petTherapyItem1Title" // AmenitiesSection.tsx
  | "petTherapyItem1Desc" // AmenitiesSection.tsx
  | "familyAccommodationsCategory" // AmenitiesSection.tsx
  | "familyAccommodationsItem1Title" // AmenitiesSection.tsx
  | "familyAccommodationsItem1Desc" // AmenitiesSection.tsx
  | "trustedProfessionalsTitle" // AmenitiesSection.tsx
  | "trustedProfessionalsSubtitle" // AmenitiesSection.tsx
  | "healthServicesTitle" // HealthServicesSection.tsx
  | "healthServicesSubtitle" // HealthServicesSection.tsx
  | "medicalStaffCategory" // HealthServicesSection.tsx
  | "medicalStaffItem1Title" // HealthServicesSection.tsx
  | "medicalStaffItem1Desc" // HealthServicesSection.tsx
  | "medicalStaffItem2Title" // HealthServicesSection.tsx
  | "medicalStaffItem2Desc" // HealthServicesSection.tsx
  | "medicalStaffItem3Title" // HealthServicesSection.tsx
  | "medicalStaffItem3Desc" // HealthServicesSection.tsx
  | "specializedCareCategory" // HealthServicesSection.tsx
  | "specializedCareItem1Title" // HealthServicesSection.tsx
  | "specializedCareItem1Desc" // HealthServicesSection.tsx
  | "specializedCareItem2Title" // HealthServicesSection.tsx
  | "specializedCareItem2Desc" // HealthServicesSection.tsx
  | "specializedCareItem3Title" // HealthServicesSection.tsx
  | "specializedCareItem3Desc" // HealthServicesSection.tsx
  | "rehabilitationCategory" // HealthServicesSection.tsx
  | "rehabilitationItem1Title" // HealthServicesSection.tsx
  | "rehabilitationItem1Desc" // HealthServicesSection.tsx
  | "rehabilitationItem2Title" // HealthServicesSection.tsx
  | "rehabilitationItem2Desc" // HealthServicesSection.tsx
  | "rehabilitationItem3Title" // HealthServicesSection.tsx
  | "rehabilitationItem3Desc" // HealthServicesSection.tsx
  | "rehabilitationItem4Title" // HealthServicesSection.tsx
  | "rehabilitationItem4Desc" // HealthServicesSection.tsx
  | "rehabilitationItem5Title" // HealthServicesSection.tsx
  | "rehabilitationItem5Desc" // HealthServicesSection.tsx
  | "rehabilitationItem6Title" // HealthServicesSection.tsx
  | "rehabilitationItem6Desc" // HealthServicesSection.tsx
  | "rehabilitationItem7Title" // HealthServicesSection.tsx
  | "rehabilitationItem7Desc" // HealthServicesSection.tsx
  | "caregiverSupportCategory" // HealthServicesSection.tsx
  | "caregiverSupportItem1Title" // HealthServicesSection.tsx
  | "caregiverSupportItem1Desc" // HealthServicesSection.tsx
  | "caregiverSupportItem2Title" // HealthServicesSection.tsx
  | "caregiverSupportItem2Desc" // HealthServicesSection.tsx
  | "caregiverSupportItem3Title" // HealthServicesSection.tsx
  | "caregiverSupportItem3Desc" // HealthServicesSection.tsx
  | "caregiverSupportItem4Title" // HealthServicesSection.tsx
  | "caregiverSupportItem4Desc" // HealthServicesSection.tsx
  | "healthServicesNote" // HealthServicesSection.tsx
  | "contactInfoPhoneDisplay" // Contact
  | "contactInfoPhoneRaw" // Contact
  | "contactInfoEmergencyDisplay" // Contact
  | "contactInfoEmergencyRaw" // Contact
  | "contactInfoEmail" // Contact
  | "contactInfoAvailability" // Contact
  | "aboutUsTitle" // About.tsx
  | "ourMission" // About.tsx
  | "ourVision" // About.tsx
  | "ourVisionDesc" // About.tsx
  | "ourValues" // About.tsx
  | "value1Title" // About.tsx
  | "value1Desc" // About.tsx
  | "value2Title" // About.tsx
  | "value2Desc" // About.tsx
  | "value3Title" // About.tsx
  | "value3Desc" // About.tsx
  | "value4Title" // About.tsx
  | "value4Desc" // About.tsx
  | "value5Title" // About.tsx
  | "value5Desc" // About.tsx
  | "value6Title" // About.tsx
  | "value6Desc" // About.tsx
  | "ourStory" // About.tsx
  | "ourStoryDesc" // About.tsx
  | "ourTeam" // About.tsx
  | "ourTeamDesc" // About.tsx
  | "aboutUsImageAlt" // About.tsx
  | "founderTitle" // Founder.tsx
  | "founderName" // Founder.tsx
  | "personalStoryTitle" // Founder.tsx
  | "personalStoryPara1" // Founder.tsx
  | "personalStoryPara2" // Founder.tsx
  | "professionalExperienceTitle" // Founder.tsx
  | "professionalExperiencePara1" // Founder.tsx
  | "professionalExperiencePara2" // Founder.tsx
  | "visionTitle" // Founder.tsx
  | "visionPara1" // Founder.tsx
  | "visionPara2" // Founder.tsx
  | "achievementsTitle" // Founder.tsx
  | "achievement1" // Founder.tsx
  | "achievement2" // Founder.tsx
  | "achievement3" // Founder.tsx
  | "achievement4" // Founder.tsx
  | "achievement5" // Founder.tsx
  | "giveCareHere" // Founder.tsx
  | "founderImageAlt1" // Founder.tsx
  | "founderImageAlt2" // Founder.tsx
  | "founderImageAlt3" // Founder.tsx
  | "eventsAndCommunityTitle" // EventsAndCommunitySection.tsx
  | "eventsAndCommunitySubtitle" // EventsAndCommunitySection.tsx
  | "eventsAndCommunityDescription" // EventsAndCommunitySection.tsx
  | "eventsActivity1Title" // EventsAndCommunitySection.tsx
  | "eventsActivity1Desc" // EventsAndCommunitySection.tsx
  | "eventsActivity2Title" // EventsAndCommunitySection.tsx
  | "eventsActivity2Desc" // EventsAndCommunitySection.tsx
  | "eventsActivity3Title" // EventsAndCommunitySection.tsx
  | "eventsActivity3Desc" // EventsAndCommunitySection.tsx
  | "eventsActivity4Title" // EventsAndCommunitySection.tsx
  | "eventsActivity4Desc" // EventsAndCommunitySection.tsx
  | "eventsActivity5Title" // EventsAndCommunitySection.tsx
  | "eventsActivity5Desc" // EventsAndCommunitySection.tsx
  | "founderSectionTitle" // FounderSection.tsx
  | "founderSectionImageAlt" // FounderSection.tsx
  | "founderSectionPara1" // FounderSection.tsx
  | "founderSectionPara2" // FounderSection.tsx
  | "founderSectionName" // FounderSection.tsx
  | "founderSectionRole" // FounderSection.tsx
  | "founderSectionButton" // FounderSection.tsx
  | "getInTouch" // LocationSection.tsx
  | "ourLocationAndContact" // LocationSection.tsx
  | "locationSubtitle" // LocationSection.tsx
  | "locationAddress" // LocationSection.tsx
  | "locationEmail" // LocationSection.tsx
  | "locationPhone" // LocationSection.tsx
  | "generalInformation" // LocationSection.tsx
  | "locationEmergencyContact" // LocationSection.tsx
  | "alwaysHereWhenYouNeedUs" // LocationSection.tsx
  | "donateButtonText" // DonateStickyButton.tsx
  | "phoneDirectory" // EmergencyInfo2.tsx
  | "giveCare" // EmergencyInfo2.tsx
  | "generalInformationLabel" // EmergencyInfo2.tsx
  | "emergencyContactLabel" // EmergencyInfo2.tsx
  | "healthAndMedicalServices" // Header.tsx
  | "levelsOfCare" // Header.tsx
  | "servicesAndAmenities" // Header.tsx
  | "footerQuickLinks" // Footer.tsx
  | "footerServices" // Footer.tsx
  | "footerContact" // Footer.tsx
  | "footerDescription" // Footer.tsx
  | "footerAvailable247" // Footer.tsx
  | "footerAlwaysHere" // Footer.tsx
  | "footerCopyright" // Footer.tsx
  | "footerHome" // Footer.tsx
  | "footerAboutUs" // Footer.tsx
  | "footerServicesLink" // Footer.tsx
  | "footerContactLink" // Footer.tsx
  | "footerIndependentLiving" // Footer.tsx
  | "footerAssistedLiving" // Footer.tsx
  | "footerPrivacyPolicy" // Footer.tsx
  | "footerTermsOfService" // Footer.tsx
  | "footerAccessibility" // Footer.tsx
  | "watchOurVideo" // Banner.tsx
  | "aboutUsMissionDesc" // About.tsx
  | "ilPageTitle" // IndependentLiving.tsx
  | "ilPageSubtitle" // IndependentLiving.tsx
  | "ilPageServicesTitle" // IndependentLiving.tsx
  | "ilPageLifestyleTitle" // IndependentLiving.tsx
  | "ilPageLifestylePara1" // IndependentLiving.tsx
  | "ilPageLifestylePara2" // IndependentLiving.tsx
  | "ilPageLifestylePara3" // IndependentLiving.tsx
  | "ilPageAmenitiesTitle" // IndependentLiving.tsx
  | "ilPageHomeTitle" // IndependentLiving.tsx
  | "ilPageExperienceTitle" // IndependentLiving.tsx
  | "ilPageExperienceDesc" // IndependentLiving.tsx
  | "ilPageContactButton" // IndependentLiving.tsx
  | "ilFeature1" // IndependentLiving.tsx
  | "ilFeature2" // IndependentLiving.tsx
  | "ilFeature3" // IndependentLiving.tsx
  | "ilFeature4" // IndependentLiving.tsx
  | "ilFeature5" // IndependentLiving.tsx
  | "ilFeature6" // IndependentLiving.tsx
  | "ilFeature7" // IndependentLiving.tsx
  | "ilFeature8" // IndependentLiving.tsx
  | "ilAmenityNutritionTitle" // IndependentLiving.tsx
  | "ilAmenityNutritionDesc" // IndependentLiving.tsx
  | "ilAmenityPoolTitle" // IndependentLiving.tsx
  | "ilAmenityPoolDesc" // IndependentLiving.tsx
  | "ilAmenityActivitiesTitle" // IndependentLiving.tsx
  | "ilAmenityActivitiesDesc" // IndependentLiving.tsx
  | "ilAmenityRooftopTitle" // IndependentLiving.tsx
  | "ilAmenityRooftopDesc" // IndependentLiving.tsx
  | "ilAmenityBeautyTitle" // IndependentLiving.tsx
  | "ilAmenityBeautyDesc" // IndependentLiving.tsx
  | "ilAmenityLibraryTitle" // IndependentLiving.tsx
  | "ilAmenityLibraryDesc" // IndependentLiving.tsx
  | "AssistedLivingTextBanner" // AssistedLiving.tsx
  | "levelsOfCarePageTitle" // LevelsOfCare.tsx
  | "levelsOfCarePageSubtitle" // LevelsOfCare.tsx
  | "levelsOfCareAssistedLiving" // LevelsOfCare.tsx
  | "levelsOfCareMemoryCare" // LevelsOfCare.tsx
  | "levelsOfCareShortTermRehab" // LevelsOfCare.tsx
  | "levelsOfCareLongTermRehab" // LevelsOfCare.tsx
  | "assistedLivingHandTitle" // AssistedLiving.tsx
  | "assistedLivingHandPara1" // AssistedLiving.tsx
  | "assistedLivingHandPara2" // AssistedLiving.tsx
  | "assistedLivingHandPara3" // AssistedLiving.tsx
  | "assistedLivingHandPara4" // AssistedLiving.tsx
  | "assistedLivingSpecialTitle" // AssistedLiving.tsx
  | "assistedLivingApproachTitle" // AssistedLiving.tsx
  | "assistedLivingCommunityTitle" // AssistedLiving.tsx
  | "assistedLivingCtaTitle" // AssistedLiving.tsx
  | "assistedLivingCtaDesc" // AssistedLiving.tsx
  | "assistedLivingCtaButton"; // AssistedLiving.tsx   
        



const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    title: "Sofy Cares",
    subtitle: "Assisted Living & Independent Living in San Miguel de Allende",
    scheduleVisit: "Schedule a Visit",
    contact: "Contact",
    emergencyContact: "Emergency Contact",
    livingOptions: "Living Options",
    independentLiving: "Independent Living",
    assistedLiving: "Assisted Living",
    aboutUs: "About Us",
    healthcareServices: "Healthcare Services",
    events: "Events",
    gallery: "Gallery",
    contactUs: "Contact Us",
    available24x7: "Available 24/7",
    phone: "Phone",
    email: "Email",
    homeSectionTitle: "Why choose us",
    textBanner: "A safe, compassionate home where care is personal and dignity comes first.",
    heroTitle: "Sofy Cares",
    welcomeToSofyCares: "Welcome to Sofy Cares", // IntroductionSection.tsx
    heroSubtitle: "Assisted Living & Independent Living in San Miguel de Allende",
    heroIntroPara1: "Currently, Sofy Cares offers full-time and part-time care, serving families in San Miguel de Allende with integrity, experience, and genuine dedication. We are a home-like community built on compassion. From daily companionship and assistance to rehabilitation, memory care, and palliative (hospice) care, we adapt our services to each individual's needs.",
    heroIntroPara2: "With fewer residents than large facilities, we provide closer attention, deeper relationships, and higher-quality care—often at a lower cost than more formal institutions.",
    heroCtaPrimaryText: "Schedule a Visit",
    heroCtaPrimaryPhone: "415 117 7643",
    heroCtaPrimaryPhoneRaw: "4151177643",
    heroCtaPrimaryAvailable: "Available 24/7",
    heroCtaSecondaryText: "Contact Us",
    heroCtaSecondaryEmail: "sofycaressma@gmail.com",
    heroCtaEmergencyText: "Emergency Contact",
    heroCtaEmergencyPhone: "415 111 2213",
    whyChooseTitle: "Why Choose Sofy Cares",
    whyChooseSubtitle: "Compassionate, professional care in a home-like environment",
    whyChooseBenefit1Title: "Respect for Independence & Dignity",
    whyChooseBenefit1Desc: "We honor each resident's independence and personal choices while providing compassionate, respectful support.",
    whyChooseBenefit2Title: "Peace of Mind for Families",
    whyChooseBenefit2Desc: "Families can est easy knowing their loved ones are safe, comfortable, and genuinely well cared for.",
    whyChooseBenefit3Title: "Safe, Supportive & Welcoming Environment",
    whyChooseBenefit3Desc: "Our home-like setting promotes comfort, security, and a true sense of belonging.",
    whyChooseBenefit4Title: "Experienced & Compassionate Staff",
    whyChooseBenefit4Desc: "Our team brings decades of professional healthcare experience, paired with genuine compassion and attentiveness.",
    whyChooseBenefit5Title: "U.S. Care Standards with Mexican Warmth",
    whyChooseBenefit5Desc: "We combine high U.S. care standards with the warmth and hospitality of Mexican culture.",
    learnMoreAboutUs: "Learn More About Us",
    learnMore: "Learn More", // ServicesSection.tsx
    livingOptionsTitle: "Living Options",
    livingOptionsSubtitle: "Personalized care solutions for every stage of life",
    independentLivingTitle: "Independent Living",
    independentLivingDesc: "For older adults who wish to maintain independence while enjoying community living, included meals, and optional support services.",
    independentLivingFeature1: "Spacious private rooms",
    independentLivingFeature2: "Housekeeping and maintenance",
    independentLivingFeature3: "A full calendar of social activities and community events",
    independentLivingFeature4: "Rich and balanced chef-prepared meals",
    independentLivingFeature5: "Transportation",
    independentLivingFeature6: "24/7 medical care for emergencies",
    independentLivingFeature7: "Optional assistance as needed",
    independentLivingFeature8: "Freedom to live at your own pace",
    assistedLivingTitle: "Assisted Living",
    assistedLivingDesc: "For residents who require daily assistance with personal care, medication management, mobility, feeding, and medical coordination. Our trained caregivers provide respectful and attentive support 24/7.",
    assistedLivingFeature1: "24/7 compassionate care",
    assistedLivingFeature2: "Medication management",
    assistedLivingFeature3: "Assistance with daily activities",
    assistedLivingFeature4: "Personalized care plans",
    assistedLivingFeature5: "Safe and comfortable environment",
    assistedLivingFeature6: "Dignity and respect always",
    levelsOfCareTitle: "Levels of Care",
    levelsOfCareSubtitle: "Comprehensive assisted living services tailored to individual needs",
    levelsOfCareDesc: "Our assisted living model combines the comfort of home with professional medical support:",
    levelsOfCareFeature1Title: "Home-like, Non-Clinical Environment",
    levelsOfCareFeature1Desc: "Comfortable, welcoming spaces that feel like home, not a hospital.",
    levelsOfCareFeature2Title: "Deeply Personalized Care Plans",
    levelsOfCareFeature2Desc: "Every resident receives individualized attention based on their unique needs and preferences.",
    levelsOfCareFeature3Title: "Strong, Meaningful Relationships",
    levelsOfCareFeature3Desc: "Our small community allows caregivers and residents to form genuine connections.",
    levelsOfCareFeature4Title: "Calm, Intimate Setting",
    levelsOfCareFeature4Desc: "With only 18 residents, we maintain a peaceful, family-like atmosphere.",
    levelsOfCareFeature5Title: "24/7 Safety & Supervision",
    levelsOfCareFeature5Desc: "Round-the-clock care and companionship ensure constant support.",
    levelsOfCareFeature6Title: "Activities & Celebrations",
    levelsOfCareFeature6Desc: "Engaging programs, movement activities, and special events enhance quality of life.",
    levelsOfCareFeature7Title: "Full Transportation Support",
    levelsOfCareFeature7Desc: "We provide transportation for medical appointments and outings.",
    levelsOfCareFeature8Title: "Peace of Mind for Families",
    levelsOfCareFeature8Desc: "Whether near or far, families can trust their loved ones are well cared for.",
    allInclusiveTitle: "All-Inclusive Monthly Fee Covers",
    allInclusiveService1: "Care services, lodging, and meals",
    allInclusiveService2: "Maintained residence and safe, welcoming spaces",
    allInclusiveService3: "Assisted dining when needed",
    allInclusiveService4: "Specialized diets by a certified dietitian",
    allInclusiveService5: "24-hour nursing care",
    allInclusiveService6: "Wellness center access",
    allInclusiveService7: "Private dining room for family gatherings",
    allInclusiveService8: "Scheduled transportation",
    allInclusiveService9: "Housekeeping and linen service",
    allInclusiveService10: "24/7 security and emergency home services",
    allInclusiveService11: "Wi-Fi, telephone, and television access",
    allInclusiveService12: "Pet therapy / service animals",
    servicesAmenitiesTitle: "Services & Amenities",
    servicesAmenitiesSubtitle: "Everything you need for a comfortable, enriching lifestyle",
    nutritionCategory: "Nutrition",
    nutritionItem1Title: "Chef-Prepared Meals",
    nutritionItem1Desc: "Three nutritious and balanced meals daily, plus snacks as desired. Our menus are designed by a certified nutritionist and prepared by our in-house chef using fresh ingredients.",
    nutritionItem2Title: "Personalized Dietary Plans",
    nutritionItem2Desc: "We carefully consider dietary needs, medical requirements, and personal preferences—ensuring healthy and enjoyable meals.",
    nutritionItem3Title: "Home-like Dining Atmosphere",
    nutritionItem3Desc: "Relaxed, welcoming dining spaces that promote social connection.",
    wellnessCategory: "Wellness & Recreation",
    wellnessItem1Title: "Heated Swimming Pool",
    wellnessItem1Desc: "Year-round access to our therapeutic heated pool.",
    wellnessItem2Title: "Arts and Crafts Activities",
    wellnessItem2Desc: "Including knitting and special seasonal projects.",
    wellnessItem3Title: "Multi-purpose Rooftop",
    wellnessItem3Desc: "Designed for events such as birthdays, family gatherings, outdoor picnics, and more.",
    wellnessItem4Title: "Cultural Outings",
    wellnessItem4Desc: "A variety of outings tailored to residents' interests and hobbies, including access to golf courses, concerts, shopping, visits to nearby towns, and other seasonal local events.",
    personalCareCategory: "Personal Care Services",
    personalCareItem1Title: "Beauty Salon, Barbershop & Full Spa Services",
    personalCareItem1Desc: "Including massages, manicure, and pedicure—available on-site or off-site.",
    personalCareItem2Title: "Haircuts and Hairstyling",
    personalCareItem2Desc: "Professional grooming services provided regularly.",
    personalCareItem3Title: "Personal Hygiene Assistance",
    personalCareItem3Desc: "Respectful support with bathing, grooming, and daily care. All hygiene products included.",
    facilitiesCategory: "Facilities & Comfort",
    facilitiesItem1Title: "On-site Library",
    facilitiesItem1Desc: "Plus scheduled visits to the local library.",
    facilitiesItem2Title: "Palapa with Barbecue Area",
    facilitiesItem2Desc: "Perfect for outdoor gatherings and social events.",
    facilitiesItem3Title: "Welcoming Common Areas",
    facilitiesItem3Desc: "Designed to encourage comfort, connection, and calm for residents, friends, and family.",
    facilitiesItem4Title: "Daily Laundry and Housekeeping",
    facilitiesItem4Desc: "Professional cleaning and laundry services keep everything fresh and comfortable.",
    petTherapyCategory: "Pet Therapy",
    petTherapyItem1Title: "Pet Therapy / Service Animals",
    petTherapyItem1Desc: "Animals can be a very important part of our residents' daily lives. We are able to integrate this valuable aspect into their routine to support well-being and happiness.",
    familyAccommodationsCategory: "Family Accommodations",
    familyAccommodationsItem1Title: "Lodging for Family & Friends",
    familyAccommodationsItem1Desc: "Available through Airbnb within the Sofy Cares residence, located in the adjacent condominium tower. Rentals include rooftop views and amenities such as the pool.",
    trustedProfessionalsTitle: "Trusted Nearby Medical Professionals",
    trustedProfessionalsSubtitle: "Sofy Cares trusts these independent medical practitioners in the San Miguel de Allende area",
    healthServicesTitle: "Health & Medical Services", // HealthServicesSection.tsx
    healthServicesSubtitle: "Professional healthcare with hospital-level expertise in a home-like setting", // HealthServicesSection.tsx
    medicalStaffCategory: "Medical Staff", // HealthServicesSection.tsx
    medicalStaffItem1Title: "24/7 Nursing Staff", // HealthServicesSection.tsx
    medicalStaffItem1Desc: "Highly trained nurses with hospital-level experience, including ICU and critical care backgrounds.", // HealthServicesSection.tsx
    medicalStaffItem2Title: "On-site Physician & Medical Specialists", // HealthServicesSection.tsx
    medicalStaffItem2Desc: "Available 24/7 for consultations, examinations, and emergencies.", // HealthServicesSection.tsx
    medicalStaffItem3Title: "Clinical Care Services", // HealthServicesSection.tsx
    medicalStaffItem3Desc: "Medication administration, vital signs monitoring, patient medical history management, physical exams, disease follow-up, wound care, and IV therapy.", // HealthServicesSection.tsx
    specializedCareCategory: "Specialized Care", // HealthServicesSection.tsx
    specializedCareItem1Title: "Post-Surgical Care", // HealthServicesSection.tsx
    specializedCareItem1Desc: "Focused on safe and comfortable recovery with close clinical monitoring. Our medical and nursing team supports healing through pain management, mobility assistance, medication supervision, and individualized care plans.", // HealthServicesSection.tsx
    specializedCareItem2Title: "Palliative Care", // HealthServicesSection.tsx
    specializedCareItem2Desc: "Focused on comfort, pain relief, and improved quality of life. Our team provides compassionate, personalized support to patients and their families, ensuring dignity, relief, and accompaniment at every stage.", // HealthServicesSection.tsx
    specializedCareItem3Title: "Memory Care", // HealthServicesSection.tsx
    specializedCareItem3Desc: "Specialized support for residents with Alzheimer's and dementia, provided by caregivers experienced in cognitive care.", // HealthServicesSection.tsx
    rehabilitationCategory: "Rehabilitation Services", // HealthServicesSection.tsx
    rehabilitationItem1Title: "Physical Therapy", // HealthServicesSection.tsx
    rehabilitationItem1Desc: "For rehabilitation, pain reduction, and fall prevention, including group exercise classes designed by a physical therapist.", // HealthServicesSection.tsx
    rehabilitationItem2Title: "Occupational Therapy", // HealthServicesSection.tsx
    rehabilitationItem2Desc: "Retraining for activities of daily living to maintain independence.", // HealthServicesSection.tsx
    rehabilitationItem3Title: "Orthopedic Rehabilitation", // HealthServicesSection.tsx
    rehabilitationItem3Desc: "Specialized recovery programs for joint and bone conditions.", // HealthServicesSection.tsx
    rehabilitationItem4Title: "Fall Prevention Programs", // HealthServicesSection.tsx
    rehabilitationItem4Desc: "Evidence-based exercises and environmental modifications to reduce fall risk.", // HealthServicesSection.tsx
    rehabilitationItem5Title: "Pulmonary Care Program", // HealthServicesSection.tsx
    rehabilitationItem5Desc: "Respiratory therapy and exercises for lung health.", // HealthServicesSection.tsx
    rehabilitationItem6Title: "Heart Failure Program", // HealthServicesSection.tsx
    rehabilitationItem6Desc: "Specialized monitoring and care for cardiac conditions.", // HealthServicesSection.tsx
    rehabilitationItem7Title: "Adaptive Equipment Training", // HealthServicesSection.tsx
    rehabilitationItem7Desc: "Instruction on using assistive devices for greater mobility and independence.", // HealthServicesSection.tsx
    caregiverSupportCategory: "Caregiver Support", // HealthServicesSection.tsx
    caregiverSupportItem1Title: "One-on-One Assistance", // HealthServicesSection.tsx
    caregiverSupportItem1Desc: "Personal companionship, cognitive activities, and daily living support.", // HealthServicesSection.tsx
    caregiverSupportItem2Title: "Assisted Feeding", // HealthServicesSection.tsx
    caregiverSupportItem2Desc: "Respectful mealtime assistance for residents who need support.", // HealthServicesSection.tsx
    caregiverSupportItem3Title: "Personal Hygiene Support", // HealthServicesSection.tsx
    caregiverSupportItem3Desc: "Compassionate assistance with bathing, grooming, and toileting.", // HealthServicesSection.tsx
    caregiverSupportItem4Title: "Medication Management", // HealthServicesSection.tsx
    caregiverSupportItem4Desc: "Ensuring medications are taken correctly and on schedule.", // HealthServicesSection.tsx
    healthServicesNote: "Treatment plans are available for both residents and non-residents.", // HealthServicesSection.tsx,
    contactInfoPhoneDisplay: "+52 415 117 7643",
    contactInfoPhoneRaw: "+524151177643",
    contactInfoEmergencyDisplay: "415 111 2213",
    contactInfoEmergencyRaw: "4151112213",
    contactInfoEmail: "sofycaressma@gmail.com",
    contactInfoAvailability: "Available 24/7",
    aboutUsTitle: "About Us",
    ourMission: "Our Mission",
    ourVision: "Our Vision", // About.tsx
    ourVisionDesc: "We envision Sofy Cares as a place where people feel truly at home-supported by attentive care, meaningful connection, and a strong sense of community. Our goal is to set a standard for senior care that balances professional excellence with warmth, humanity, and trust.", // About.tsx
    ourValues: "Our Values", // About.tsx
    value1Title: "Dignity & Respect", // About.tsx
    value1Desc: "We honor each resident as an individual, valuing their life experiences, preferences, and autonomy.", // About.tsx
    value2Title: "Compassionate Care", // About.tsx
    value2Desc: "We approach every interaction with empathy, patience, and genuine concern.", // About.tsx
    value3Title: "Safety & Trust", // About.tsx
    value3Desc: "We provide a secure environment where residents and families feel confident and at ease.", // About.tsx
    value4Title: "Personalized Attention", // About.tsx
    value4Desc: "Care is never one-size-fits-all; we adapt our services to meet each resident's unique needs.", // About.tsx
    value5Title: "Family & Community", // About.tsx
    value5Desc: "We foster strong relationships with families and encourage connection, involvement, and shared moments.", // About.tsx
    value6Title: "Professional Excellence", // About.tsx
    value6Desc: "Our team upholds high standards of care through experience, training and accountability.", // About.tsx
    ourStory: "Our Story", // About.tsx
    ourStoryDesc: "Sofy Cares was created to offer an alternative to large, impersonal care facilities. From the beginning, our focus has been on building a smaller, more intentional community where residents receive attentive care and feel genuinely supported. By combining professional healthcare practices with a warm, welcoming atmosphere, Sofy Cares provides a space where people can live with comfort, confidence, and peace of mind.", // About.tsx
    ourTeam: "Our Team", // About.tsx
    ourTeamDesc: "Our caregivers and staff are carefully selected for both their professional experience and their commitment to compassionate service. We believe quality care comes from people who are attentive, respectful, and deeply invested in the well-being of those they serve. At Sofy Cares, our team works collaboratively to ensure residents receive consistent, thoughtful care every day.", // About.tsx
    aboutUsImageAlt: "Sofy Cares Community", // About.tsx
    founderTitle: "Our Founder", // Founder.tsx
    founderName: "Sofia Toledo Soto – Founder & CEO", // Founder.tsx
    personalStoryTitle: "Her Personal Story", // Founder.tsx
    personalStoryPara1: "Sofia Toledo Soto has always been someone who leads with service. Long before Sofy Cares existed, people naturally turned to her for support, guidance, and steadiness. She has an instinctive way of putting others first-something that has defined her relationships, her work, and ultimately her life's path.", // Founder.tsx
    personalStoryPara2: "Over the years, through personal experiences and professional encounters, Sofia became increasingly aware of how easily certain people are overlooked-especially older adults whose families may feel overwhelmed, unprepared, or unsure of how to care for them well. What stayed with her was not a single moment, but a growing recognition that many individuals simply need someone willing to show up consistently, listen closely, and take responsibility for their care with sincerity and patience. Sofy Cares grew out of that understanding.", // Founder.tsx
    professionalExperienceTitle: "Professional Experience", // Founder.tsx
    professionalExperiencePara1: "Sofia brings more than 15 years of experience across caregiving, health-related services, and client-centered work. Even during periods when she stepped away from direct caregiving-working in fields such as real estate-her approach remained the same: prioritize people, stay accessible, and follow through.", // Founder.tsx
    professionalExperiencePara2: "Her professional strength lies not only in formal experience, but in her ability to communicate openly, answer questions honestly, and remain present for those who rely on her. She is known for being approachable, responsive, and deeply attentive-qualities that shape both her leadership style and the daily operations of Sofy Cares.", // Founder.tsx
    visionTitle: "Her Vision for Sofy Cares", // Founder.tsx
    visionPara1: "Sofia's vision for Sofy Cares is rooted in responsibility and presence. She believes care should never feel distant, rushed, or transactional. Instead, it should feel steady, responsive, and grounded in real human connection.", // Founder.tsx
    visionPara2: "She envisioned a place where residents are not managed, but supported-where families feel informed rather than shut out, and where trust is built through transparency, consistency, and genuine availability. Sofy Cares was designed to be a community where people feel safe asking questions, expressing needs, and being met with respect at every stage.", // Founder.tsx
    achievementsTitle: "Achievements & Commitments", // Founder.tsx
    achievement1: "Over 15 years of experience in caregiving and health-related services", // Founder.tsx
    achievement2: "Founder of a community-based care home in San Miguel de Allende", // Founder.tsx
    achievement3: "Known for hands-on leadership, accessibility, and clear communication", // Founder.tsx
    achievement4: "Deep commitment to serving individuals who are often overlooked or underserved", // Founder.tsx
    achievement5: "Dedicated to creating an environment built on trust, presence, and accountability", // Founder.tsx
    giveCareHere: "Give Care Here", // Founder.tsx
    founderImageAlt1: "Sofia Toledo Soto - Founder of Sofy Cares", // Founder.tsx
    founderImageAlt2: "Sofia Toledo Soto at work", // Founder.tsx
    founderImageAlt3: "Sofia Toledo Soto with the team", // Founder.tsx
    eventsAndCommunityTitle: "Events & Community Life", // EventsAndCommunitySection.tsx
    eventsAndCommunitySubtitle: "Embracing the vibrant culture of San Miguel de Allende", // EventsAndCommunitySection.tsx
    eventsAndCommunityDescription: "Life at Sofy Cares is enriched by meaningful activities, social connections, and cultural experiences.", // EventsAndCommunitySection.tsx
    eventsActivity1Title: "Immersive Culture in San Miguel de Allende", // EventsAndCommunitySection.tsx
    eventsActivity1Desc: "Our team researches local and private events in San Miguel de Allende, handling reservations and accompanying residents to activities that match their interests.", // EventsAndCommunitySection.tsx
    eventsActivity2Title: "Personalized Birthday Celebrations", // EventsAndCommunitySection.tsx
    eventsActivity2Desc: "Personalized birthday celebrations including cake, special requested meals, surprise gifts, and custom cake selection.", // EventsAndCommunitySection.tsx
    eventsActivity3Title: "Assisted Travel & Trips", // EventsAndCommunitySection.tsx
    eventsActivity3Desc: "Thoughtfully planned trips that respect residents' needs and wishes, offering recreation with assisted travel and support.", // EventsAndCommunitySection.tsx
    eventsActivity4Title: "Daily Activities", // EventsAndCommunitySection.tsx
    eventsActivity4Desc: "Engaging daily activities including arts and crafts, group exercises, games, and social gatherings.", // EventsAndCommunitySection.tsx
    eventsActivity5Title: "Family Events", // EventsAndCommunitySection.tsx
    eventsActivity5Desc: "We welcome and encourage family visits, hosting special events where families can gather and spend meaningful time with their loved ones.", // EventsAndCommunitySection.tsx
    founderSectionTitle: "Our Founder", // FounderSection.tsx
    founderSectionImageAlt: "Founder of Sofy Cares", // FounderSection.tsx
    founderSectionPara1: "Sofia Toledo Soto founded Sofy Cares with a clear vision: to provide the same level of care, warmth, and attention she would want for her own family.", // FounderSection.tsx
    founderSectionPara2: "With more than 15 years of experience in the health and senior care field, she created Sofy Cares as a place where compassion, dignity, and personalized care come first. Her commitment to thoughtful, human-centered care shapes every part of life at Sofy Cares.", // FounderSection.tsx
    founderSectionName: "Sofia Toledo", // FounderSection.tsx
    founderSectionRole: "Founder & CEO", // FounderSection.tsx
    founderSectionButton: "See Her Story", // FounderSection.tsx
    getInTouch: "Get in Touch", // LocationSection.tsx
    ourLocationAndContact: "Our Location & Contact", // LocationSection.tsx
    locationSubtitle: "Find us in the heart of San Miguel de Allende", // LocationSection.tsx
    locationAddress: "Address", // LocationSection.tsx
    locationEmail: "Email", // LocationSection.tsx
    locationPhone: "Phone", // LocationSection.tsx
    generalInformation: "General Information", // LocationSection.tsx
    locationEmergencyContact: "Emergency Contact", // LocationSection.tsx
    alwaysHereWhenYouNeedUs: "Always here when you need us", // LocationSection.tsx
    donateButtonText: "💖 Give Care", // DonateStickyButton.tsx
    phoneDirectory: "Phone Directory", // EmergencyInfo2.tsx
    giveCare: "Give Care", // EmergencyInfo2.tsx
    generalInformationLabel: "General Information", // EmergencyInfo2.tsx
    emergencyContactLabel: "Emergency Contact", // EmergencyInfo2.tsx
    healthAndMedicalServices: "Health & Medical Services", // Header.tsx
    levelsOfCare: "Levels of Care", // Header.tsx
    servicesAndAmenities: "Services & Amenities", // Header.tsx
    footerQuickLinks: "Quick Links", // Footer.tsx
    footerServices: "Services", // Footer.tsx
    footerContact: "Contact", // Footer.tsx
    footerDescription: "We provide personal care and professional companionship services with the love and attention your family deserves.", // Footer.tsx
    footerAvailable247: "Available 24/7", // Footer.tsx
    footerAlwaysHere: "Always here when you need us", // Footer.tsx
    footerCopyright: "© 2025 Sofy Cares Services. All rights reserved.", // Footer.tsx
    footerHome: "Home", // Footer.tsx
    footerAboutUs: "About Us", // Footer.tsx
    footerServicesLink: "Services", // Footer.tsx
    footerContactLink: "Contact", // Footer.tsx
    footerIndependentLiving: "Independent Living", // Footer.tsx
    footerAssistedLiving: "Assisted Living", // Footer.tsx
    footerPrivacyPolicy: "Privacy Policy", // Footer.tsx
    footerTermsOfService: "Terms of Service", // Footer.tsx
    footerAccessibility: "Accessibility", // Footer.tsx
    watchOurVideo: "Watch our video", // Banner.tsx
    aboutUsMissionDesc: "At Sofy Cares, our mission is to provide compassionate, personalized care in a safe and home-like environment where every individual is treated with dignity and respect. We are committed to supporting residents' physical, emotional, and social well-being while honoring their independence and personal choices.", // About.tsx
    ilPageTitle: "Independent Living", // IndependentLiving.tsx
    ilPageSubtitle: "For people like you, who want to enjoy a carefree lifestyle inside our community without the responsibilities of living on your own.", // IndependentLiving.tsx
    ilPageServicesTitle: "Independent Living Services", // IndependentLiving.tsx
    ilPageLifestyleTitle: "A Senior Lifestyle Built for You", // IndependentLiving.tsx
    ilPageLifestylePara1: "Sofy Cares Independent Living program offers you a space where you can move freely and have the experience you desire with all the care and amenities you need. Meet other people, exercise, join our community activities and explore San Miguel Allende.", // IndependentLiving.tsx
    ilPageLifestylePara2: "With customized living, your stay can evolve to cover your needs for you to have the appropriate level of care whether it is a strict diet, medical appointments, memory care or specialized care for the next chapter in your life.", // IndependentLiving.tsx
    ilPageLifestylePara3: "Sofy Cares has all you need and more, join us now!", // IndependentLiving.tsx
    ilPageAmenitiesTitle: "Amenities & Services", // IndependentLiving.tsx
    ilPageHomeTitle: "Your Independent Living Home", // IndependentLiving.tsx
    ilPageExperienceTitle: "Experience Independent Living at Sofy Cares", // IndependentLiving.tsx
    ilPageExperienceDesc: "Schedule a visit to see our community and meet our team.", // IndependentLiving.tsx
    ilPageContactButton: "Contact Us", // IndependentLiving.tsx
    ilFeature1: "Spacious private rooms", // IndependentLiving.tsx
    ilFeature2: "Housekeeping and maintenance", // IndependentLiving.tsx
    ilFeature3: "A full calendar of social activities and community events", // IndependentLiving.tsx
    ilFeature4: "Rich and balanced chef-prepared meals", // IndependentLiving.tsx
    ilFeature5: "Transportation", // IndependentLiving.tsx
    ilFeature6: "24/7 medical care for emergencies", // IndependentLiving.tsx
    ilFeature7: "Optional assistance as needed", // IndependentLiving.tsx
    ilFeature8: "Freedom to live at your own pace", // IndependentLiving.tsx
    ilAmenityNutritionTitle: "Nutrition", // IndependentLiving.tsx
    ilAmenityNutritionDesc: "Three nutritious and balanced meals daily, plus snacks. Menus designed by a certified nutritionist and prepared by our chef.", // IndependentLiving.tsx
    ilAmenityPoolTitle: "Heated Swimming Pool", // IndependentLiving.tsx
    ilAmenityPoolDesc: "Year-round access to our therapeutic heated pool for relaxation and exercise.", // IndependentLiving.tsx
    ilAmenityActivitiesTitle: "Arts & Activities", // IndependentLiving.tsx
    ilAmenityActivitiesDesc: "Engaging activities including arts and crafts, knitting, and seasonal projects.", // IndependentLiving.tsx
    ilAmenityRooftopTitle: "Multi-purpose Rooftop", // IndependentLiving.tsx
    ilAmenityRooftopDesc: "Perfect for birthdays, family gatherings, outdoor picnics, and special events.", // IndependentLiving.tsx
    ilAmenityBeautyTitle: "Beauty & Spa Services", // IndependentLiving.tsx
    ilAmenityBeautyDesc: "On-site salon, barbershop, and spa services including massages and nail care.", // IndependentLiving.tsx
    ilAmenityLibraryTitle: "On-site Library", // IndependentLiving.tsx
    ilAmenityLibraryDesc: "Access to books and scheduled visits to the local library.", // IndependentLiving.tsx
    AssistedLivingTextBanner: "We are here for you, at the right place and at the right time. Our trained caregivers will give you the extra help you need to live your life at your fullest.", // AssistedLiving.tsx
    levelsOfCarePageTitle: "Levels of Care", // LevelsOfCare.tsx
    levelsOfCarePageSubtitle: "We offer a full spectrum of care options to meet every need, from assisted living to specialized memory care and rehabilitation.", // LevelsOfCare.tsx
    levelsOfCareAssistedLiving: "Assisted Living", // LevelsOfCare.tsx
    levelsOfCareMemoryCare: "Memory Care", // LevelsOfCare.tsx
    levelsOfCareShortTermRehab: "Short-term Rehabilitation", // LevelsOfCare.tsx
    levelsOfCareLongTermRehab: "Long-term Rehabilitation", // LevelsOfCare.tsx
    assistedLivingHandTitle: "A Hand You Can Reach Any Time", // AssistedLiving.tsx
    assistedLivingHandPara1: "Sofy Cares Assisted Living program is the place for the moment you need a professional on your daily routine. With a schedule made to cover your specific needs, our caregivers will assist you or your loved ones at the same time as we provide you with a dignified lifestyle.", // AssistedLiving.tsx
    assistedLivingHandPara2: "We will take care of your medical appointments, medications, special services and dietary requirements for you to focus on the most important thing: yourself.", // AssistedLiving.tsx
    assistedLivingHandPara3: "With a diverse range of physical and mental activities, you will enjoy every moment at the same time you're taken care of.", // AssistedLiving.tsx
    assistedLivingHandPara4: "Here in Sofy Cares, our main goal is to provide you with the help you need.", // AssistedLiving.tsx
    assistedLivingSpecialTitle: "Our Assisted Living Special", // AssistedLiving.tsx
    assistedLivingApproachTitle: "Our Approach to Assisted Living", // AssistedLiving.tsx
    assistedLivingCommunityTitle: "Our Assisted Living Community", // AssistedLiving.tsx
    assistedLivingCtaTitle: "Ready to Learn More About Our Assisted Living?", // AssistedLiving.tsx
    assistedLivingCtaDesc: "Contact us today to schedule a visit and see our community in person.", // AssistedLiving.tsx
    assistedLivingCtaButton: "Contact Us", // AssistedLiving.tsx
    }, 
    es: {
    title: "Sofy Cares",
    subtitle: "Vida Asistida y Vida Independiente en San Miguel de Allende",
    scheduleVisit: "Programar una Visita",
    contact: "Contacto",
    emergencyContact: "Contacto de Emergencia",
    livingOptions: "Opciones de Vida",
    independentLiving: "Vida Independiente",
    assistedLiving: "Vida Asistida",
    aboutUs: "Sobre Nosotros",
    healthcareServices: "Servicios de Salud",
    events: "Eventos",
    gallery: "Galería",
    contactUs: "Contáctenos",
    available24x7: "Disponible 24/7",
    phone: "Teléfono",
    email: "Correo Electrónico",
    homeSectionTitle: "Por qué elegirnos",
    textBanner: "Un hogar seguro y compasivo donde el cuidado es personal y la dignidad es lo primero.",
    heroTitle: "Sofy Cares",
    welcomeToSofyCares: "Bienvenido a Sofy Cares", // IntroductionSection.tsx
    heroSubtitle: "Vida Asistida y Vida Independiente en San Miguel de Allende",
    heroIntroPara1: "Actualmente, Sofy Cares ofrece cuidado a tiempo completo y parcial, sirviendo a familias en San Miguel de Allende con integridad, experiencia y dedicación genuina. Somos una comunidad hogareña construida sobre la compasión. Desde la compañía diaria y asistencia hasta la rehabilitación, cuidado de la memoria y cuidado paliativo (hogar de ancianos), adaptamos nuestros servicios a las necesidades de cada individuo.",
    heroIntroPara2: "Con menos residentes que las instalaciones grandes, proporcionamos atención más cercana, relaciones más profundas y cuidado de mayor calidad—a menudo a un costo más bajo que las instituciones más formales.",
    heroCtaPrimaryText: "Programar una Visita",
    heroCtaPrimaryPhone: "415 117 7643",
    heroCtaPrimaryPhoneRaw: "4151177643",
    heroCtaPrimaryAvailable: "Disponible 24/7",
    heroCtaSecondaryText: "Contáctenos",
    heroCtaSecondaryEmail: "sofycaressma@gmail.com",
    heroCtaEmergencyText: "Contacto de Emergencia",
    heroCtaEmergencyPhone: "415 111 2213",
    whyChooseTitle: "Por qué elegir Sofy Cares",
    whyChooseSubtitle: "Cuidado compasivo y profesional en un entorno hogareño",
    whyChooseBenefit1Title: "Respeto por la Independencia y Dignidad",
    whyChooseBenefit1Desc: "Honramos la independencia y las elecciones personales de cada residente mientras proporcionamos apoyo compasivo y respetuoso.",
    whyChooseBenefit2Title: "Paz Mental para las Familias",
    whyChooseBenefit2Desc: "Las familias pueden estar tranquilas sabiendo que sus seres queridos están seguros, cómodos y realmente bien cuidados.",
    whyChooseBenefit3Title: "Entorno Seguro, de Apoyo y Acogedor",
    whyChooseBenefit3Desc: "Nuestro entorno hogareño promueve comodidad, seguridad y un verdadero sentido de pertenencia.",
    whyChooseBenefit4Title: "Personal Experimentado y Compasivo",
    whyChooseBenefit4Desc: "Nuestro equipo aporta décadas de experiencia profesional en atención médica, combinada con compasión genuina y atención.",
    whyChooseBenefit5Title: "Estándares de Cuidado Estadounidenses con Calor Mexicano",
    whyChooseBenefit5Desc: "Combinamos estándares de cuidado estadounidenses de alta calidad con el calor y la hospitalidad de la cultura mexicana.",
    learnMoreAboutUs: "Conoce Más Sobre Nosotros",
    learnMore: "Saber Más", // ServicesSection.tsx
    livingOptionsTitle: "Opciones de Vida",
    livingOptionsSubtitle: "Soluciones de cuidado personalizadas para cada etapa de la vida",
    independentLivingTitle: "Vida Independiente",
    independentLivingDesc: "Para adultos mayores que desean mantener la independencia mientras disfrutan de la vida comunitaria, comidas incluidas y servicios de apoyo opcionales.",
    independentLivingFeature1: "Habitaciones privadas espaciosas",
    independentLivingFeature2: "Limpieza y mantenimiento",
    independentLivingFeature3: "Un calendario completo de actividades sociales y eventos comunitarios",
    independentLivingFeature4: "Comidas ricas y balanceadas preparadas por chef",
    independentLivingFeature5: "Transporte",
    independentLivingFeature6: "Cuidado médico de emergencia 24/7",
    independentLivingFeature7: "Asistencia opcional según sea necesario",
    independentLivingFeature8: "Libertad para vivir a tu propio ritmo",
    assistedLivingTitle: "Vida Asistida",
    assistedLivingDesc: "Para residentes que requieren asistencia diaria con cuidado personal, manejo de medicamentos, movilidad, alimentación y coordinación médica. Nuestros cuidadores capacitados proporcionan apoyo respetuoso y atento 24/7.",
    assistedLivingFeature1: "Cuidado compasivo 24/7",
    assistedLivingFeature2: "Manejo de medicamentos",
    assistedLivingFeature3: "Asistencia con actividades diarias",
    assistedLivingFeature4: "Planes de cuidado personalizados",
    assistedLivingFeature5: "Entorno seguro y cómodo",
    assistedLivingFeature6: "Dignidad y respeto siempre",
    levelsOfCareTitle: "Niveles de Cuidado",
    levelsOfCareSubtitle: "Servicios integrales de vida asistida adaptados a necesidades individuales",
    levelsOfCareDesc: "Nuestro modelo de vida asistida combina la comodidad del hogar con apoyo médico profesional:",
    levelsOfCareFeature1Title: "Entorno Hogareño, No Clínico",
    levelsOfCareFeature1Desc: "Espacios cómodos y acogedores que se sienten como un hogar, no un hospital.",
    levelsOfCareFeature2Title: "Planes de Cuidado Profundamente Personalizados",
    levelsOfCareFeature2Desc: "Cada residente recibe atención individualizada basada en sus necesidades y preferencias únicas.",
    levelsOfCareFeature3Title: "Relaciones Fuertes y Significativas",
    levelsOfCareFeature3Desc: "Nuestra pequeña comunidad permite que cuidadores y residentes formen conexiones genuinas.",
    levelsOfCareFeature4Title: "Entorno Calmado e Íntimo",
    levelsOfCareFeature4Desc: "Con solo 18 residentes, mantenemos una atmósfera pacífica y familiar.",
    levelsOfCareFeature5Title: "Seguridad y Supervisión 24/7",
    levelsOfCareFeature5Desc: "Cuidado y compañía las 24 horas aseguran apoyo constante.",
    levelsOfCareFeature6Title: "Actividades y Celebraciones",
    levelsOfCareFeature6Desc: "Programas atractivos, actividades de movimiento y eventos especiales mejoran la calidad de vida.",
    levelsOfCareFeature7Title: "Apoyo Completo de Transporte",
    levelsOfCareFeature7Desc: "Proporcionamos transporte para citas médicas y salidas.",
    levelsOfCareFeature8Title: "Paz Mental para las Familias",
    levelsOfCareFeature8Desc: "Ya sea cerca o lejos, las familias pueden confiar en que sus seres queridos están bien cuidados.",
    allInclusiveTitle: "La Tarifa Mensual Todo Incluido Cubre",
    allInclusiveService1: "Servicios de cuidado, alojamiento y comidas",
    allInclusiveService2: "Residencia mantenida y espacios seguros y acogedores",
    allInclusiveService3: "Comidas asistidas cuando sea necesario",
    allInclusiveService4: "Dietas especializadas por un dietista certificado",
    allInclusiveService5: "Cuidado de enfermería 24 horas",
    allInclusiveService6: "Acceso al centro de bienestar",
    allInclusiveService7: "Sala de comedor privada para reuniones familiares",
    allInclusiveService8: "Transporte programado",
    allInclusiveService9: "Servicio de limpieza y ropa de cama",
    allInclusiveService10: "Seguridad 24/7 y servicios de emergencia en el hogar",
    allInclusiveService11: "Acceso a Wi-Fi, teléfono y televisión",
    allInclusiveService12: "Terapia con mascotas / animales de servicio",
    servicesAmenitiesTitle: "Servicios y Comodidades",
    servicesAmenitiesSubtitle: "Todo lo que necesitas para un estilo de vida cómodo y enriquecedor",
    nutritionCategory: "Nutrición",
    nutritionItem1Title: "Comidas Preparadas por Chef",
    nutritionItem1Desc: "Tres comidas nutritivas y balanceadas diariamente, más bocadillos según se desee. Nuestros menús son diseñados por un nutricionista certificado y preparados por nuestro chef interno usando ingredientes frescos.",
    nutritionItem2Title: "Planes Dietéticos Personalizados",
    nutritionItem2Desc: "Consideramos cuidadosamente las necesidades dietéticas, requisitos médicos y preferencias personales—asegurando comidas saludables y agradables.",
    nutritionItem3Title: "Atmósfera de Comedor Hogareña",
    nutritionItem3Desc: "Espacios de comedor relajados y acogedores que promueven la conexión social.",
    wellnessCategory: "Bienestar y Recreación",
    wellnessItem1Title: "Piscina Climatizada",
    wellnessItem1Desc: "Acceso todo el año a nuestra piscina terapéutica climatizada.",
    wellnessItem2Title: "Actividades de Artes y Manualidades",
    wellnessItem2Desc: "Incluyendo tejido y proyectos especiales estacionales.",
    wellnessItem3Title: "Terraza Multifuncional",
    wellnessItem3Desc: "Diseñada para eventos como cumpleaños, reuniones familiares, picnics al aire libre y más.",
    wellnessItem4Title: "Excursiones Culturales",
    wellnessItem4Desc: "Una variedad de salidas adaptadas a los intereses y hobbies de los residentes, incluyendo acceso a campos de golf, conciertos, compras, visitas a pueblos cercanos y otros eventos locales estacionales.",
    personalCareCategory: "Servicios de Cuidado Personal",
    personalCareItem1Title: "Salón de Belleza, Peluquería y Servicios de Spa Completos",
    personalCareItem1Desc: "Incluyendo masajes, manicura y pedicura—disponibles en el sitio o fuera del sitio.",
    personalCareItem2Title: "Cortes de Pelo y Peinados",
    personalCareItem2Desc: "Servicios profesionales de aseo proporcionados regularmente.",
    personalCareItem3Title: "Asistencia con Higiene Personal",
    personalCareItem3Desc: "Apoyo respetuoso con baño, aseo y cuidado diario. Todos los productos de higiene incluidos.",
    facilitiesCategory: "Instalaciones y Comodidad",
    facilitiesItem1Title: "Biblioteca en el Sitio",
    facilitiesItem1Desc: "Más visitas programadas a la biblioteca local.",
    facilitiesItem2Title: "Palapa con Área de Barbacoa",
    facilitiesItem2Desc: "Perfecta para reuniones al aire libre y eventos sociales.",
    facilitiesItem3Title: "Áreas Comunes Acogedoras",
    facilitiesItem3Desc: "Diseñadas para fomentar comodidad, conexión y calma para residentes, amigos y familia.",
    facilitiesItem4Title: "Lavandería y Limpieza Diaria",
    facilitiesItem4Desc: "Servicios profesionales de limpieza y lavandería mantienen todo fresco y cómodo.",
    petTherapyCategory: "Terapia con Mascotas",
    petTherapyItem1Title: "Terapia con Mascotas / Animales de Servicio",
    petTherapyItem1Desc: "Los animales pueden ser una parte muy importante de la vida diaria de nuestros residentes. Podemos integrar este aspecto valioso en su rutina para apoyar el bienestar y la felicidad.",
    familyAccommodationsCategory: "Alojamiento para Familia",
    familyAccommodationsItem1Title: "Alojamiento para Familia y Amigos",
    familyAccommodationsItem1Desc: "Disponible a través de Airbnb dentro de la residencia Sofy Cares, ubicada en la torre de condominios adyacente. Las rentas incluyen vistas a la terraza y comodidades como la piscina.",
    trustedProfessionalsTitle: "Profesionales Médicos Confiables Cercanos",
    trustedProfessionalsSubtitle: "Sofy Cares confía en estos practicantes médicos independientes en el área de San Miguel de Allende",
    healthServicesTitle: "Servicios de Salud y Médicos", // HealthServicesSection.tsx
    healthServicesSubtitle: "Atención médica profesional con experiencia de nivel hospitalario en un entorno hogareño", // HealthServicesSection.tsx
    medicalStaffCategory: "Personal Médico", // HealthServicesSection.tsx
    medicalStaffItem1Title: "Personal de Enfermería 24/7", // HealthServicesSection.tsx
    medicalStaffItem1Desc: "Enfermeras altamente capacitadas con experiencia de nivel hospitalario, incluyendo antecedentes en UCI y cuidados críticos.", // HealthServicesSection.tsx
    medicalStaffItem2Title: "Médico y Especialistas Médicos en el Sitio", // HealthServicesSection.tsx
    medicalStaffItem2Desc: "Disponibles 24/7 para consultas, exámenes y emergencias.", // HealthServicesSection.tsx
    medicalStaffItem3Title: "Servicios de Cuidado Clínico", // HealthServicesSection.tsx
    medicalStaffItem3Desc: "Administración de medicamentos, monitoreo de signos vitales, manejo del historial médico del paciente, exámenes físicos, seguimiento de enfermedades, cuidado de heridas y terapia IV.", // HealthServicesSection.tsx
    specializedCareCategory: "Cuidado Especializado", // HealthServicesSection.tsx
    specializedCareItem1Title: "Cuidado Postquirúrgico", // HealthServicesSection.tsx
    specializedCareItem1Desc: "Enfocado en una recuperación segura y cómoda con monitoreo clínico cercano. Nuestro equipo médico y de enfermería apoya la curación a través del manejo del dolor, asistencia de movilidad, supervisión de medicamentos y planes de cuidado individualizados.", // HealthServicesSection.tsx
    specializedCareItem2Title: "Cuidado Paliativo", // HealthServicesSection.tsx
    specializedCareItem2Desc: "Enfocado en comodidad, alivio del dolor y mejora de la calidad de vida. Nuestro equipo proporciona apoyo compasivo y personalizado a pacientes y sus familias, asegurando dignidad, alivio y acompañamiento en cada etapa.", // HealthServicesSection.tsx
    specializedCareItem3Title: "Cuidado de Memoria", // HealthServicesSection.tsx
    specializedCareItem3Desc: "Apoyo especializado para residentes con Alzheimer y demencia, proporcionado por cuidadores experimentados en cuidado cognitivo.", // HealthServicesSection.tsx
    rehabilitationCategory: "Servicios de Rehabilitación", // HealthServicesSection.tsx
    rehabilitationItem1Title: "Terapia Física", // HealthServicesSection.tsx
    rehabilitationItem1Desc: "Para rehabilitación, reducción del dolor y prevención de caídas, incluyendo clases de ejercicio grupal diseñadas por un fisioterapeuta.", // HealthServicesSection.tsx
    rehabilitationItem2Title: "Terapia Ocupacional", // HealthServicesSection.tsx
    rehabilitationItem2Desc: "Reentrenamiento para actividades de la vida diaria para mantener la independencia.", // HealthServicesSection.tsx
    rehabilitationItem3Title: "Rehabilitación Ortopédica", // HealthServicesSection.tsx
    rehabilitationItem3Desc: "Programas de recuperación especializados para condiciones de articulaciones y huesos.", // HealthServicesSection.tsx
    rehabilitationItem4Title: "Programas de Prevención de Caídas", // HealthServicesSection.tsx
    rehabilitationItem4Desc: "Ejercicios basados en evidencia y modificaciones ambientales para reducir el riesgo de caídas.", // HealthServicesSection.tsx
    rehabilitationItem5Title: "Programa de Cuidado Pulmonar", // HealthServicesSection.tsx
    rehabilitationItem5Desc: "Terapia respiratoria y ejercicios para la salud pulmonar.", // HealthServicesSection.tsx
    rehabilitationItem6Title: "Programa de Insuficiencia Cardíaca", // HealthServicesSection.tsx
    rehabilitationItem6Desc: "Monitoreo y cuidado especializados para condiciones cardíacas.", // HealthServicesSection.tsx
    rehabilitationItem7Title: "Entrenamiento en Equipo Adaptativo", // HealthServicesSection.tsx
    rehabilitationItem7Desc: "Instrucción sobre el uso de dispositivos de asistencia para mayor movilidad e independencia.", // HealthServicesSection.tsx
    caregiverSupportCategory: "Apoyo del Cuidador", // HealthServicesSection.tsx
    caregiverSupportItem1Title: "Asistencia Uno a Uno", // HealthServicesSection.tsx
    caregiverSupportItem1Desc: "Compañía personal, actividades cognitivas y apoyo para la vida diaria.", // HealthServicesSection.tsx
    caregiverSupportItem2Title: "Alimentación Asistida", // HealthServicesSection.tsx
    caregiverSupportItem2Desc: "Asistencia respetuosa en las comidas para residentes que necesitan apoyo.", // HealthServicesSection.tsx
    caregiverSupportItem3Title: "Apoyo con Higiene Personal", // HealthServicesSection.tsx
    caregiverSupportItem3Desc: "Asistencia compasiva con baño, aseo y uso del baño.", // HealthServicesSection.tsx
    caregiverSupportItem4Title: "Manejo de Medicamentos", // HealthServicesSection.tsx
    caregiverSupportItem4Desc: "Asegurar que los medicamentos se tomen correctamente y según lo programado.", // HealthServicesSection.tsx
    healthServicesNote: "Los planes de tratamiento están disponibles tanto para residentes como para no residentes.", // HealthServicesSection.tsx,
    contactInfoPhoneDisplay: "+52 415 117 7643",
    contactInfoPhoneRaw: "+524151177643",
    contactInfoEmergencyDisplay: "415 111 2213",
    contactInfoEmergencyRaw: "4151112213",
    contactInfoEmail: "sofycaressma@gmail.com",
    contactInfoAvailability: "Disponible 24/7",
    aboutUsTitle: "Sobre Nosotros",
    ourMission: "Nuestra Misión",
    ourVision: "Nuestra Visión", // About.tsx
    ourVisionDesc: "Imaginamos Sofy Cares como un lugar donde las personas se sienten realmente en casa—apoyadas por cuidado atento, conexión significativa y un fuerte sentido de comunidad. Nuestro objetivo es establecer un estándar para el cuidado de ancianos que equilibra la excelencia profesional con calidez, humanidad y confianza.", // About.tsx
    ourValues: "Nuestros Valores", // About.tsx
    value1Title: "Dignidad y Respeto", // About.tsx
    value1Desc: "Honramos a cada residente como individuo, valorando sus experiencias de vida, preferencias y autonomía.", // About.tsx
    value2Title: "Cuidado Compasivo", // About.tsx
    value2Desc: "Nos acercamos a cada interacción con empatía, paciencia y preocupación genuina.", // About.tsx
    value3Title: "Seguridad y Confianza", // About.tsx
    value3Desc: "Proporcionamos un entorno seguro donde residentes y familias se sienten confiados y cómodos.", // About.tsx
    value4Title: "Atención Personalizada", // About.tsx
    value4Desc: "El cuidado nunca es de talla única; adaptamos nuestros servicios para satisfacer las necesidades únicas de cada residente.", // About.tsx
    value5Title: "Familia y Comunidad", // About.tsx
    value5Desc: "Fomentamos relaciones sólidas con las familias y alentamos la conexión, la participación y los momentos compartidos.", // About.tsx
    value6Title: "Excelencia Profesional", // About.tsx
    value6Desc: "Nuestro equipo mantiene estándares altos de cuidado a través de experiencia, capacitación y responsabilidad.", // About.tsx
    ourStory: "Nuestra Historia", // About.tsx
    ourStoryDesc: "Sofy Cares fue creado para ofrecer una alternativa a las grandes instalaciones de cuidado impersonales. Desde el principio, nuestro enfoque ha sido construir una comunidad más pequeña y deliberada donde los residentes reciben cuidado atento y se sienten realmente apoyados. Al combinar prácticas de atención médica profesional con una atmósfera cálida y acogedora, Sofy Cares proporciona un espacio donde las personas pueden vivir con comodidad, confianza y tranquilidad.", // About.tsx
    ourTeam: "Nuestro Equipo", // About.tsx
    ourTeamDesc: "Nuestros cuidadores y personal son seleccionados cuidadosamente tanto por su experiencia profesional como por su compromiso con el servicio compasivo. Creemos que el cuidado de calidad proviene de personas que son atentas, respetuosas y profundamente invertidas en el bienestar de quienes sirven. En Sofy Cares, nuestro equipo trabaja colaborativamente para asegurar que los residentes reciban cuidado consistente y reflexivo todos los días.", // About.tsx
    aboutUsImageAlt: "Comunidad Sofy Cares", // About.tsx
    founderTitle: "Nuestra Fundadora", // Founder.tsx
    founderName: "Sofia Toledo Soto – Fundadora y CEO", // Founder.tsx
    personalStoryTitle: "Su Historia Personal", // Founder.tsx
    personalStoryPara1: "Sofia Toledo Soto siempre ha sido alguien que lidera con servicio. Mucho antes de que existiera Sofy Cares, la gente naturalmente acudía a ella en busca de apoyo, orientación y estabilidad. Tiene una forma instintiva de poner a los demás primero—algo que ha definido sus relaciones, su trabajo y, en última instancia, su camino en la vida.", // Founder.tsx
    personalStoryPara2: "A lo largo de los años, a través de experiencias personales y encuentros profesionales, Sofia se dio cuenta cada vez más de lo fácil que es pasar por alto a ciertas personas—especialmente a los adultos mayores cuyas familias pueden sentirse abrumadas, desprevenidas o inseguras sobre cómo cuidarlas bien. Lo que se quedó con ella no fue un momento único, sino un reconocimiento creciente de que muchas personas simplemente necesitan a alguien dispuesto a presentarse consistentemente, escuchar atentamente y asumir la responsabilidad de su cuidado con sinceridad y paciencia. Sofy Cares surgió de esa comprensión.", // Founder.tsx
    professionalExperienceTitle: "Experiencia Profesional", // Founder.tsx
    professionalExperiencePara1: "Sofia aporta más de 15 años de experiencia en cuidado de personas, servicios relacionados con la salud y trabajo centrado en el cliente. Incluso durante períodos en los que se alejó del cuidado directo—trabajando en campos como el inmobiliario—su enfoque siguió siendo el mismo: priorizar a las personas, mantenerse accesible y seguir adelante.", // Founder.tsx
    professionalExperiencePara2: "Su fortaleza profesional radica no solo en la experiencia formal, sino en su capacidad para comunicarse abiertamente, responder preguntas honestamente y permanecer presente para quienes dependen de ella. Se la conoce por ser accesible, receptiva y profundamente atenta—cualidades que dan forma tanto a su estilo de liderazgo como a las operaciones diarias de Sofy Cares.", // Founder.tsx
    visionTitle: "Su Visión para Sofy Cares", // Founder.tsx
    visionPara1: "La visión de Sofia para Sofy Cares está arraigada en la responsabilidad y la presencia. Ella cree que el cuidado nunca debería sentirse distante, apresurado o transaccional. En cambio, debería sentirse constante, receptivo y fundamentado en una conexión humana real.", // Founder.tsx
    visionPara2: "Imaginó un lugar donde los residentes no son administrados, sino apoyados—donde las familias se sienten informadas en lugar de excluidas, y donde la confianza se construye a través de la transparencia, la consistencia y la disponibilidad genuina. Sofy Cares fue diseñado para ser una comunidad donde las personas se sienten seguras preguntando, expresando necesidades y siendo atendidas con respeto en cada etapa.", // Founder.tsx
    achievementsTitle: "Logros y Compromisos", // Founder.tsx
    achievement1: "Más de 15 años de experiencia en cuidado de personas y servicios relacionados con la salud", // Founder.tsx
    achievement2: "Fundadora de un hogar de cuidado comunitario en San Miguel de Allende", // Founder.tsx
    achievement3: "Conocida por liderazgo práctico, accesibilidad y comunicación clara", // Founder.tsx
    achievement4: "Profundo compromiso con servir a individuos que a menudo son pasados por alto o insuficientemente atendidos", // Founder.tsx
    achievement5: "Dedicada a crear un entorno construido sobre confianza, presencia y responsabilidad", // Founder.tsx
    giveCareHere: "Dar Cuidado Aquí", // Founder.tsx
    founderImageAlt1: "Sofia Toledo Soto - Fundadora de Sofy Cares", // Founder.tsx
    founderImageAlt2: "Sofia Toledo Soto en el trabajo", // Founder.tsx
    founderImageAlt3: "Sofia Toledo Soto con el equipo", // Founder.tsx
    eventsAndCommunityTitle: "Eventos y Vida Comunitaria", // EventsAndCommunitySection.tsx
    eventsAndCommunitySubtitle: "Abrazando la vibrante cultura de San Miguel de Allende", // EventsAndCommunitySection.tsx
    eventsAndCommunityDescription: "La vida en Sofy Cares se enriquece con actividades significativas, conexiones sociales y experiencias culturales.", // EventsAndCommunitySection.tsx
    eventsActivity1Title: "Cultura Inmersiva en San Miguel de Allende", // EventsAndCommunitySection.tsx
    eventsActivity1Desc: "Nuestro equipo investiga eventos locales y privados en San Miguel de Allende, manejando reservas y acompañando a los residentes a actividades que coinciden con sus intereses.", // EventsAndCommunitySection.tsx
    eventsActivity2Title: "Celebraciones de Cumpleaños Personalizadas", // EventsAndCommunitySection.tsx
    eventsActivity2Desc: "Celebraciones de cumpleaños personalizadas incluyendo pastel, comidas especiales solicitadas, regalos sorpresa y selección personalizada de pastel.", // EventsAndCommunitySection.tsx
    eventsActivity3Title: "Viajes y Excursiones Asistidas", // EventsAndCommunitySection.tsx
    eventsActivity3Desc: "Viajes cuidadosamente planificados que respetan las necesidades y deseos de los residentes, ofreciendo recreación con viajes asistidos y apoyo.", // EventsAndCommunitySection.tsx
    eventsActivity4Title: "Actividades Diarias", // EventsAndCommunitySection.tsx
    eventsActivity4Desc: "Actividades diarias atractivas incluyendo artes y manualidades, ejercicios grupales, juegos y reuniones sociales.", // EventsAndCommunitySection.tsx
    eventsActivity5Title: "Eventos Familiares", // EventsAndCommunitySection.tsx
    eventsActivity5Desc: "Damos la bienvenida y alentamos las visitas familiares, organizando eventos especiales donde las familias pueden reunirse y pasar tiempo significativo con sus seres queridos.", // EventsAndCommunitySection.tsx
    founderSectionTitle: "Nuestra Fundadora", // FounderSection.tsx
    founderSectionImageAlt: "Fundadora de Sofy Cares", // FounderSection.tsx
    founderSectionPara1: "Sofia Toledo Soto fundó Sofy Cares con una visión clara: proporcionar el mismo nivel de cuidado, calidez y atención que querría para su propia familia.", // FounderSection.tsx
    founderSectionPara2: "Con más de 15 años de experiencia en el campo de la salud y el cuidado de personas mayores, creó Sofy Cares como un lugar donde la compasión, la dignidad y el cuidado personalizado son lo primero. Su compromiso con el cuidado reflexivo y centrado en el ser humano da forma a cada parte de la vida en Sofy Cares.", // FounderSection.tsx
    founderSectionName: "Sofia Toledo", // FounderSection.tsx
    founderSectionRole: "Fundadora y CEO", // FounderSection.tsx
    founderSectionButton: "Ver Su Historia", // FounderSection.tsx
    getInTouch: "Ponte en Contacto", // LocationSection.tsx
    ourLocationAndContact: "Nuestra Ubicación y Contacto", // LocationSection.tsx
    locationSubtitle: "Encuéntranos en el corazón de San Miguel de Allende", // LocationSection.tsx
    locationAddress: "Dirección", // LocationSection.tsx
    locationEmail: "Correo Electrónico", // LocationSection.tsx
    locationPhone: "Teléfono", // LocationSection.tsx
    generalInformation: "Información General", // LocationSection.tsx
    locationEmergencyContact: "Contacto de Emergencia", // LocationSection.tsx
    alwaysHereWhenYouNeedUs: "Siempre aquí cuando nos necesites", // LocationSection.tsx
    donateButtonText: "💖 Dar Cuidado", // DonateStickyButton.tsx
    phoneDirectory: "Directorio Telefónico", // EmergencyInfo2.tsx
    giveCare: "Dar Cuidado", // EmergencyInfo2.tsx
    generalInformationLabel: "Información General", // EmergencyInfo2.tsx
    emergencyContactLabel: "Contacto de Emergencia", // EmergencyInfo2.tsx
    healthAndMedicalServices: "Servicios de Salud y Médicos", // Header.tsx
    levelsOfCare: "Niveles de Cuidado", // Header.tsx
    servicesAndAmenities: "Servicios y Comodidades", // Header.tsx
    footerQuickLinks: "Enlaces Rápidos", // Footer.tsx
    footerServices: "Servicios", // Footer.tsx
    footerContact: "Contacto", // Footer.tsx
    footerDescription: "Proporcionamos servicios de cuidado personal y compañía profesional con el amor y atención que su familia merece.", // Footer.tsx
    footerAvailable247: "Disponible 24/7", // Footer.tsx
    footerAlwaysHere: "Siempre aquí cuando nos necesites", // Footer.tsx
    footerCopyright: "© 2025 Servicios Sofy Cares. Todos los derechos reservados.", // Footer.tsx
    footerHome: "Inicio", // Footer.tsx
    footerAboutUs: "Sobre Nosotros", // Footer.tsx
    footerServicesLink: "Servicios", // Footer.tsx
    footerContactLink: "Contacto", // Footer.tsx
    footerIndependentLiving: "Vida Independiente", // Footer.tsx
    footerAssistedLiving: "Vida Asistida", // Footer.tsx
    footerPrivacyPolicy: "Política de Privacidad", // Footer.tsx
    footerTermsOfService: "Términos de Servicio", // Footer.tsx
    footerAccessibility: "Accesibilidad", // Footer.tsx
    watchOurVideo: "Ver nuestro video", // Banner.tsx
    aboutUsMissionDesc: "En Sofy Cares, nuestra misión es proporcionar cuidado compasivo y personalizado en un entorno seguro y hogareño donde cada individuo es tratado con dignidad y respeto. Estamos comprometidos a apoyar el bienestar físico, emocional y social de los residentes mientras honramos su independencia y elecciones personales.", // About.tsx
    ilPageTitle: "Vida Independiente", // IndependentLiving.tsx
    ilPageSubtitle: "Para personas como tú, que quieren disfrutar de un estilo de vida sin preocupaciones dentro de nuestra comunidad sin las responsabilidades de vivir solos.", // IndependentLiving.tsx
    ilPageServicesTitle: "Servicios de Vida Independiente", // IndependentLiving.tsx
    ilPageLifestyleTitle: "Un Estilo de Vida Senior Hecho para Ti", // IndependentLiving.tsx
    ilPageLifestylePara1: "El programa de Vida Independiente de Sofy Cares te ofrece un espacio donde puedes moverte libremente y tener la experiencia que deseas con todo el cuidado y comodidades que necesitas. Conoce a otras personas, ejercítate, únete a nuestras actividades comunitarias y explora San Miguel de Allende.", // IndependentLiving.tsx
    ilPageLifestylePara2: "Con vivienda personalizada, tu estadía puede evolucionar para cubrir tus necesidades para que tengas el nivel apropiado de cuidado, ya sea una dieta estricta, citas médicas, cuidado de la memoria o cuidado especializado para el próximo capítulo de tu vida.", // IndependentLiving.tsx
    ilPageLifestylePara3: "¡Sofy Cares tiene todo lo que necesitas y más, únete ahora!", // IndependentLiving.tsx
    ilPageAmenitiesTitle: "Comodidades y Servicios", // IndependentLiving.tsx
    ilPageHomeTitle: "Tu Hogar de Vida Independiente", // IndependentLiving.tsx
    ilPageExperienceTitle: "Experimenta la Vida Independiente en Sofy Cares", // IndependentLiving.tsx
    ilPageExperienceDesc: "Programa una visita para ver nuestra comunidad y conocer a nuestro equipo.", // IndependentLiving.tsx
    ilPageContactButton: "Contáctanos", // IndependentLiving.tsx
    ilFeature1: "Habitaciones privadas espaciosas", // IndependentLiving.tsx
    ilFeature2: "Limpieza y mantenimiento", // IndependentLiving.tsx
    ilFeature3: "Un calendario completo de actividades sociales y eventos comunitarios", // IndependentLiving.tsx
    ilFeature4: "Comidas ricas y balanceadas preparadas por chef", // IndependentLiving.tsx
    ilFeature5: "Transporte", // IndependentLiving.tsx
    ilFeature6: "Cuidado médico 24/7 para emergencias", // IndependentLiving.tsx
    ilFeature7: "Asistencia opcional según sea necesario", // IndependentLiving.tsx
    ilFeature8: "Libertad para vivir a tu propio ritmo", // IndependentLiving.tsx
    ilAmenityNutritionTitle: "Nutrición", // IndependentLiving.tsx
    ilAmenityNutritionDesc: "Tres comidas nutritivas y balanceadas diariamente, más refrigerios. Menús diseñados por un nutricionista certificado y preparados por nuestro chef.", // IndependentLiving.tsx
    ilAmenityPoolTitle: "Piscina Climatizada", // IndependentLiving.tsx
    ilAmenityPoolDesc: "Acceso todo el año a nuestra piscina climatizada terapéutica para relajación y ejercicio.", // IndependentLiving.tsx
    ilAmenityActivitiesTitle: "Artes y Actividades", // IndependentLiving.tsx
    ilAmenityActivitiesDesc: "Actividades atractivas incluyendo artes y manualidades, tejido y proyectos estacionales.", // IndependentLiving.tsx
    ilAmenityRooftopTitle: "Terraza Multi-propósito", // IndependentLiving.tsx
    ilAmenityRooftopDesc: "Perfecta para cumpleaños, reuniones familiares, picnics al aire libre y eventos especiales.", // IndependentLiving.tsx
    ilAmenityBeautyTitle: "Servicios de Belleza y Spa", // IndependentLiving.tsx
    ilAmenityBeautyDesc: "Salón, barbería y servicios de spa en el lugar incluyendo masajes y cuidado de uñas.", // IndependentLiving.tsx
    ilAmenityLibraryTitle: "Biblioteca en el Lugar", // IndependentLiving.tsx
    ilAmenityLibraryDesc: "Acceso a libros y visitas programadas a la biblioteca local.", // IndependentLiving.tsx
    AssistedLivingTextBanner: "Estamos aquí para ayudarte, en el lugar y el momento adecuados. Nuestros cuidadores capacitados te brindarán la ayuda adicional que necesitas para vivir tu vida al máximo.", // AssistedLiving.tsx
    levelsOfCarePageTitle: "Niveles de Cuidado", // LevelsOfCare.tsx
    levelsOfCarePageSubtitle: "Ofrecemos un espectro completo de opciones de cuidado para satisfacer cada necesidad, desde vida asistida hasta cuidado especializado de memoria y rehabilitación.", // LevelsOfCare.tsx
    levelsOfCareAssistedLiving: "Vida Asistida", // LevelsOfCare.tsx
    levelsOfCareMemoryCare: "Cuidado de Memoria", // LevelsOfCare.tsx
    levelsOfCareShortTermRehab: "Rehabilitación a Corto Plazo", // LevelsOfCare.tsx
    levelsOfCareLongTermRehab: "Rehabilitación a Largo Plazo", // LevelsOfCare.tsx
    assistedLivingHandTitle: "Una Mano que Puedes Alcanzar en Cualquier Momento", // AssistedLiving.tsx
    assistedLivingHandPara1: "El programa de Vida Asistida de Sofy Cares es el lugar para el momento en que necesitas un profesional en tu rutina diaria. Con un horario hecho para cubrir tus necesidades específicas, nuestros cuidadores te asistirán a ti o a tus seres queridos al mismo tiempo que te proporcionamos un estilo de vida digno.", // AssistedLiving.tsx
    assistedLivingHandPara2: "Nos encargaremos de tus citas médicas, medicamentos, servicios especiales y requisitos dietéticos para que te concentres en lo más importante: tú mismo.", // AssistedLiving.tsx
    assistedLivingHandPara3: "Con una diversa gama de actividades físicas y mentales, disfrutarás cada momento al mismo tiempo que eres cuidado.", // AssistedLiving.tsx
    assistedLivingHandPara4: "Aquí en Sofy Cares, nuestro objetivo principal es proporcionarte la ayuda que necesitas.", // AssistedLiving.tsx
    assistedLivingSpecialTitle: "Nuestro Especial de Vida Asistida", // AssistedLiving.tsx
    assistedLivingApproachTitle: "Nuestro Enfoque a la Vida Asistida", // AssistedLiving.tsx
    assistedLivingCommunityTitle: "Nuestra Comunidad de Vida Asistida", // AssistedLiving.tsx
    assistedLivingCtaTitle: "¿Listo para Aprender Más Sobre Nuestra Vida Asistida?", // AssistedLiving.tsx
    assistedLivingCtaDesc: "Contáctanos hoy para programar una visita y ver nuestra comunidad en persona.", // AssistedLiving.tsx
    assistedLivingCtaButton: "Contáctanos", // AssistedLiving.tsx
    },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((current) => (current === "en" ? "es" : "en"));
  };

  const value = useMemo(
    () => ({
      language,
      toggleLanguage,
      t: (key: TranslationKey) => translations[language][key],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
