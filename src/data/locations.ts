export type Location = {
  slug: string;   // route slug, e.g. "cupertino"
  city: string;
  h1: string;
  title: string;
  sub: string;
  /** Short neighbourhood hook — keeps each city's meta description unique. */
  hook: string;
  // ── optional per-city depth (rendered when present) ──
  metaDesc?: string;        // hand-written, replaces the templated one
  neighborhoods?: string[];
  housing?: string;         // typical housing stock and what it means for HVAC
  utility?: string;         // electricity provider + current rebate note
  permits?: string;         // building department / HERS note
  climate?: string;         // microclimate and what it means for sizing
  faqs?: { q: string; a: string }[];
};

export const locations: Location[] = [
  {
    slug: "atherton",
    city: "Atherton",
    h1: "HVAC Services in Atherton",
    title: "HVAC Services in Atherton | Estate HVAC Experts",
    sub: "From the grand estates of Lindenwood to the quiet lanes near Fair Oaks, Atherton homeowners expect flawless comfort year-round.",
    hook: "Lindenwood to Fair Oaks",
  },
  {
    slug: "belmont",
    city: "Belmont",
    h1: "HVAC Services in Belmont",
    title: "HVAC Services in Belmont | Local HVAC Experts",
    sub: "From the serene hills of Twin Pines to the vibrant Ralston Corridor, Belmont homeowners trust us for dependable HVAC solutions.",
    hook: "Twin Pines to the Ralston Corridor",
  },
  {
    slug: "campbell",
    city: "Campbell",
    h1: "HVAC Services in Campbell",
    title: "HVAC Services in Campbell | Local HVAC Experts",
    sub: "From Downtown Campbell to the Pruneyard, homeowners trust us to keep their HVAC systems running smoothly.",
    hook: "downtown to the Pruneyard",
  },
  {
    slug: "cupertino",
    city: "Cupertino",
    h1: "HVAC Services in Cupertino",
    title: "Cupertino HVAC Services | Same-Day Support",
    sub: "From Main Street to Rancho Rinconada, Cupertino homeowners count on us for responsive, expert HVAC support.",
    hook: "Main Street to Rancho Rinconada",
  },
  {
    slug: "fremont",
    city: "Fremont",
    h1: "HVAC Services in Fremont",
    title: "Fremont HVAC Services | Local Heating & AC Team",
    sub: "From Mission San Jose to Warm Springs, Fremont homes count on our expert HVAC support.",
    hook: "Mission San Jose to Warm Springs",
  },
  {
    slug: "los-altos",
    city: "Los Altos",
    h1: "HVAC Services in Los Altos",
    title: "HVAC Services in Los Altos | Local HVAC Experts",
    sub: "Nestled between Mountain View and Palo Alto, Los Altos residents expect premium comfort in their homes.",
    hook: "between Mountain View and Palo Alto",
  },
  {
    slug: "los-gatos",
    city: "Los Gatos",
    h1: "HVAC Services in Los Gatos",
    title: "Los Gatos HVAC Services | Cooling & Heating Pros",
    sub: "From the historic downtown to Blossom Hill Manor, Los Gatos residents count on us for dependable HVAC comfort.",
    hook: "downtown to Blossom Hill Manor",
  },
  {
    slug: "milpitas",
    city: "Milpitas",
    h1: "HVAC Services in Milpitas",
    title: "HVAC Milpitas CA | Heating & AC Solutions",
    sub: "From Berryessa to Montague, Milpitas families rely on us for dependable heating and cooling.",
    hook: "Berryessa to Montague",
  },
  {
    slug: "mountain-view",
    city: "Mountain View",
    h1: "HVAC Services in Mountain View",
    title: "Mountain View HVAC Services | Fast AC & Heating",
    sub: "From Castro Street to Shoreline Park, Mountain View homeowners rely on us for year-round comfort.",
    hook: "Castro Street to Shoreline",
  },
  {
    slug: "palo-alto",
    city: "Palo Alto",
    h1: "HVAC Services in Palo Alto",
    title: "Palo Alto HVAC Experts | Local & Trusted Contractor",
    sub: "From University Avenue to Stanford, Palo Alto residents depend on our expert HVAC services.",
    hook: "University Ave to Stanford",
  },
  {
    slug: "redwood-city",
    city: "Redwood City",
    h1: "HVAC Services in Redwood City",
    title: "Redwood City HVAC | Residential & Commercial",
    sub: "From Redwood Shores to Belle Haven, Redwood City homes and businesses count on our HVAC expertise.",
    hook: "Redwood Shores to Belle Haven",
  },
  {
    slug: "san-mateo",
    city: "San Mateo",
    h1: "HVAC Services in San Mateo",
    title: "HVAC Services in San Mateo | Local HVAC Experts",
    sub: "From the Hillsdale shopping district to Baywood, San Mateo families trust us to keep their homes comfortable.",
    hook: "Hillsdale to Baywood",
  },
  {
    slug: "santa-clara",
    city: "Santa Clara",
    h1: "HVAC Services in Santa Clara",
    title: "HVAC Services Santa Clara | Fast & Affordable",
    sub: "From Rivermark to Central Park West, Santa Clara households trust us for seamless comfort year-round.",
    hook: "Rivermark to Central Park West",
  },
  {
    slug: "saratoga",
    city: "Saratoga",
    h1: "HVAC Services in Saratoga",
    title: "HVAC Saratoga CA | Installation & Repair Services",
    sub: "From Congress Springs Park to the Foothills, Saratoga homeowners count on our HVAC expertise.",
    hook: "Congress Springs to the Foothills",
  },
  {
    slug: "sunnyvale",
    city: "Sunnyvale",
    h1: "HVAC Services in Sunnyvale",
    title: "HVAC Sunnyvale CA | Reliable & Certified Team",
    sub: "From Downtown Sunnyvale to the Heritage District, local families depend on our HVAC expertise.",
    hook: "downtown to the Heritage District",
  },
];
