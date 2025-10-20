// SEO: Centralized keywords to maintain consistency and avoid keyword stuffing
// Preserving old site keywords and phrases for SEO continuity

// Primary keywords for different sections (from old site)
export const PRIMARY_KEYWORDS = {
  NCLEX: "NCLEX-RN preparation",
  NCLEX_AUSTRALIA: "NCLEX Australia",
  NCLEX_NGN: "NCLEX NGN",
  OSCE: "OSCE preparation",
  OSCE_AUSTRALIA: "OSCE preparation Australia", 
  OSCE_PASSER: "OSCE passer",
  OBA: "OBA pathway",
  NAI: "NAI",
  NURSE_ASSIST: "Nurse Assist International",
  NURSING: "nursing education",
  AUSTRALIA: "Australia nursing registration",
  INTERNATIONAL: "international nurses",
  GUIDANCE: "guidance",
  SUPPORT: "support"
};

// Location-based keywords (major Australian cities for local SEO)
export const LOCATION_KEYWORDS = {
  AUSTRALIA: "Australia",
  SYDNEY: "Sydney",
  MELBOURNE: "Melbourne", 
  BRISBANE: "Brisbane",
  ADELAIDE: "Adelaide",
  PARRAMATTA: "Parramatta",
  NSW: "NSW",
  VIC: "Victoria",
  QLD: "Queensland",
  SA: "South Australia"
};

// Service-related keywords
export const SERVICE_KEYWORDS = {
  TRAINING: "nursing training",
  PREPARATION: "exam preparation",
  COACHING: "nursing coaching",
  MENTORSHIP: "expert mentorship",
  SUPPORT: "student support"
};

// Target audience keywords
export const AUDIENCE_KEYWORDS = {
  IQNM: "internationally qualified nurses",
  MIGRANT_NURSES: "migrant nurses",
  OVERSEAS_NURSES: "overseas nurses",
  FOREIGN_NURSES: "foreign trained nurses"
};

// Exam-specific long-tail keywords (preserved from old site)
export const LONG_TAIL_KEYWORDS = {
  NCLEX: [
    "NCLEX RN Australia",
    "NCLEX Australia preparation", 
    "NCLEX review classes",
    "NCLEX and OSCE in Australia",
    "pass NCLEX first attempt",
    "NCLEX NGN preparation"
  ],
  OSCE: [
    "OSCE preparation Australia",
    "OSCE passer training",
    "clinical skills assessment preparation",
    "nursing OSCE exam coaching",
    "OSCE training Australia"
  ],
  OBA: [
    "OBA pathway Australia",
    "outcome based assessment support", 
    "nursing registration pathway Australia",
    "AHPRA self-check guidance"
  ],
  REVIEWS: [
    "Nurse Assist International reviews",
    "NAI student testimonials",
    "OSCE passer success stories"
  ]
};

// Meta description templates
export const META_TEMPLATES = {
  COURSE: (course, location = "Australia") => 
    `Expert ${course} for international nurses in ${location}. Proven success rates, personalized coaching, and comprehensive support.`,
  
  FAQ: (topic) => 
    `Get answers to frequently asked questions about ${topic}. Expert guidance from Australia's leading nursing education institute.`,
    
  GENERAL: (service, benefit) => 
    `${service} with ${benefit}. Join thousands of successful international nurses in Australia.`
};

export default {
  PRIMARY_KEYWORDS,
  LOCATION_KEYWORDS, 
  SERVICE_KEYWORDS,
  AUDIENCE_KEYWORDS,
  LONG_TAIL_KEYWORDS,
  META_TEMPLATES
};
