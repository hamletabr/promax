// Central business info for Promax Service Group
export const site = {
  name: "Promax Service Group",
  shortName: "Promax",
  tagline: "Local HVAC Services in San Jose, CA",
  phone: "(669) 777-1997",
  phoneHref: "tel:6697771997",
  email: "support@promax-service.com",
  license: "Lic #1133885",
  hours: "Every day, 7:00 AM – 10:00 PM",
  hoursShort: "Open 7 days a week",
  cityState: "San Jose, CA",
  serviceArea: "San Jose & Neighboring Bay Area",
  url: "https://promax-service.com",
  certifications: [
    "Mitsubishi Diamond Contractor",
    "Bryant Premier Dealer",
    "EPA Certified",
  ],
  promos: [
    { icon: "/images/ic1n.jpg", big: "FREE", small: "Free service call with repair" },
    { icon: "/images/ic2n.jpg", big: "10%", small: "Save when you book today" },
    { icon: "/images/ic3n.jpg", big: "15%", small: "Discount for regular clients" },
  ],
  // Trust badges shown on the homepage (real images from the old site).
  // Set `url` to make a badge clickable (e.g. your profile/listing page); leave empty for non-clickable.
  trustBadges: [
    // { src: "/images/p1.png", alt: "HomeAdvisor Top Rated", url: "" },
    // { src: "/images/p4.png", alt: "HomeAdvisor Screened & Approved", url: "" },
    // { src: "/images/p6.png", alt: "HomeAdvisor Elite Service", url: "" },

    { src: "/images/bbb_badge.png", alt: "BBB Accredited Business", url: "https://www.bbb.org/us/ca/santa-clara/profile/heating-contractors/promax-hvac-plumbing-1216-1000065689/#sealclick" },
    { src: "/images/p5.png", alt: "Google Guaranteed", url: "" },
    { src: "/images/p3.png", alt: "Yelp 5 Stars", url: "" },
    { src: "/images/p2.png", alt: "NADCA Member", url: "" },
  ],
  brands: [
    "Mitsubishi Electric", "Bryant", "Carrier", "Trane",
    "Lennox", "Daikin", "Rheem", "Goodman", "Honeywell",
  ],
  stats: [
    { value: 999, suffix: "B+", label: "Happy Clients" },
    { value: 98, suffix: "B+", label: "Companies Served" },
    { value: 99, suffix: "+", label: "Years Experience" },
    { value: 7, suffix: "", label: "Days a Week" },
  ],
  // "Why choose us" features mapped to the real orange icon set from the old site
  features: [
    { icon: "/images/co2.png", title: "Efficiency & Speed", text: "Prompt response that minimizes the disruption of heating or cooling problems." },
    { icon: "/images/co1.png", title: "Experience & Expertise", text: "Highly qualified technicians who accurately diagnose and resolve any HVAC issue." },
    { icon: "/images/co4.png", title: "Affordable Pricing", text: "Competitive pricing and transparent billing — no surprises." },
    { icon: "/images/co3.png", title: "Customer Satisfaction", text: "Exceptional service, personalized solutions, and clear communication throughout." },
    { icon: "/images/lo3.png", title: "Reliability", text: "Licensed pros who arrive on time and leave your home clean and tidy." },
    { icon: "/images/lo4.png", title: "Environmental Responsibility", text: "EPA-certified handling of refrigerants and strict environmental standards." },
    { icon: "/images/lo1.png", title: "Comprehensive Warranty", text: "We stand behind our work, covering both service and spare parts." },
    { icon: "/images/lo2.png", title: "Convenience & Flexibility", text: "Flexible scheduling for routine maintenance or emergency repair." },
  ],
  // Certification / rebate badges (real images).
  // Set `url` to make a badge clickable (e.g. the company's license / verification page).
  // Leave url empty ("") and the badge renders as a plain (non-clickable) image.
  certBadges: [
    { src: "/images/mitsubishi-diamond-contractor-logo-full.png", alt: "Mitsubishi Diamond Contractor", url: "https://www.mitsubishicomfort.com/get-started?get-started-single-home-tab=1" },
    { src: "/images/bryant.png", alt: "Bryant Premier Dealer", url: "" },
    { src: "/images/navien.png", alt: "Navien Service Specialist", url: "" },
    { src: "/images/cooper.png", alt: "Cooper & Hunter Pro-Tech Gold Contractor", url: "" },
    // { src: "/images/tech_hvac_certified.png", alt: "TECH Clean California Certified HVAC", url: "" },
    // { src: "/images/contractor_heehra_badge.png", alt: "HEEHRA Rebate Contractor", url: "" },
  ],
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Locations", href: "/#locations" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];
