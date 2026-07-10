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
  // Default meta description (homepage & fallback)
  description:
    "Promax Service Group — licensed HVAC contractor in San Jose, CA. Same-day AC repair, furnace repair, heat pump & ductless mini split installation, and water heaters across the Bay Area. Free estimates, open 7 days. Call (669) 777-1997.",
  // Structured-data details (used in schema.org JSON-LD)
  address: {
    locality: "San Jose",
    region: "CA",
    country: "US",
  },
  geo: { lat: 37.3434945, lng: -121.9826127 },
  // Profile links Google uses to connect this site to your listings (sameAs).
  // Add your Yelp / Facebook / Instagram / Nextdoor URLs here as you get them.
  sameAs: [
    "https://www.google.com/maps/place/Promax+Service+Group/@37.3434987,-121.9851876,17z/data=!4m8!3m7!1s0x884da2ca13c669cd:0x6e0fcecb77b63e4a!8m2!3d37.3434945!4d-121.9826127!9m1!1b1!16s%2Fg%2F11lp6c3722",
    "https://www.bbb.org/us/ca/santa-clara/profile/heating-contractors/promax-hvac-plumbing-1216-1000065689",
  ],
  googleReviewsUrl:
    "https://www.google.com/maps/place/Promax+Service+Group/@37.3434987,-121.9851876,17z/data=!4m8!3m7!1s0x884da2ca13c669cd:0x6e0fcecb77b63e4a!8m2!3d37.3434945!4d-121.9826127!9m1!1b1!16s%2Fg%2F11lp6c3722?entry=ttu",
  // ── LEAD ROUTING ──────────────────────────────────────────────────────────
  // Every estimator + contact-form submission is POSTed to this endpoint,
  // which emails the lead to you (works on ANY host — no Netlify needed).
  //
  // Setup (5 minutes):
  //   1. Create a free account at https://formspree.io
  //   2. New form → set the notification email to support@promax-service.com
  //      (or, to drop leads straight into Housecall Pro, use your HCP lead
  //      intake email / a forwarding rule — see README "Lead routing")
  //   3. Copy the endpoint URL ("https://formspree.io/f/xxxxxxx") here:
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
  // While formEndpoint still contains "YOUR_FORM_ID", forms fall back to
  // opening the visitor's email app with the lead pre-filled (mailto).

  // ── AI CHAT WIDGET ────────────────────────────────────────────────────────
  // The chat button (bottom-right) can use Google Gemini's FREE tier.
  // Setup (5 minutes):
  //   1. Go to https://aistudio.google.com/apikey and create a free API key.
  //   2. IMPORTANT: click the key → "Application restrictions" → Websites →
  //      add https://promax-service.com/* (this stops others from using it).
  //   3. Paste the key below.
  // Until a key is set, the chat answers from built-in knowledge (services,
  // hours, price ranges) — and lead capture to email works either way.
  ai: {
    geminiApiKey: "",
    model: "gemini-2.5-flash",
  },

  // ── SITE-WIDE PROMO BAR (slim bar above the header; set enabled: false to hide)
  promoBar: {
    enabled: true,
    text: "☀️ Summer special: $99 AC tune-up — beat the heat wave rush",
    cta: "Claim it",
    href: "/specials",
  },

  // ── EXIT-INTENT OFFER POPUP (shows once per visitor per week; set enabled: false to disable)
  exitOffer: {
    enabled: true,
    headline: "Wait — grab $500 off first",
    sub: "Leave your number and we'll hold $500 off a complete system installation for you — plus a free in-home estimate with rebates included.",
    offer: "$500 OFF — Complete System Installation",
  },
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
    { value: 350, suffix: "+", label: "Happy Clients" },
    { value: 98, suffix: "+", label: "Companies Served" },
    { value: 5, suffix: "+", label: "Years Experience" },
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
  { label: "Services", href: "/#services" },
  { label: "Specials", href: "/specials" },
  { label: "Our Work", href: "/our-work" },
  { label: "Financing", href: "/financing" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
