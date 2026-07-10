// ============================================================================
// SERVICE PAGES — every entry here becomes a page at /services/<slug>
// ----------------------------------------------------------------------------
// SEO field guide:
//   title    – the <title> tag (~60 chars max; keyword + city first, brand last)
//   metaDesc – the meta description (~155 chars; keyword, city, benefit, CTA)
//   h1       – on-page heading (one per page; keyword + city)
//   sub      – hero subtitle (hooks the visitor; also good keyword real estate)
//   body     – unique on-page paragraphs. NEVER copy between services — Google
//              deprioritizes duplicate/thin pages. Mention the city, nearby
//              areas, brands, and the specific problem this service solves.
//   faqs     – 3 unique Q&As per service (rendered + FAQPage rich results)
// ============================================================================

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;        // short name for cards/nav
  h1: string;          // page heading
  title: string;       // SEO <title>
  metaDesc: string;    // SEO meta description
  sub: string;         // hero subtitle
  image: string;       // card / hero image
  primary?: boolean;   // shown in homepage services grid
  body: string[];      // unique on-page paragraphs (SEO content)
  faqs: Faq[];         // unique per-service FAQs (FAQPage schema)
};

export const services: Service[] = [
  {
    slug: "hvac",
    name: "HVAC Systems",
    h1: "HVAC Systems in San Jose, CA",
    title: "HVAC Company San Jose, CA | Repair & Installation | Promax",
    metaDesc:
      "Full-service HVAC company in San Jose, CA. System design, installation, repair & maintenance by licensed, EPA-certified techs. Free estimates — call (669) 777-1997.",
    sub: "Ready for year-round comfort in the Bay Area? From full system design to repair and maintenance, we keep San Jose homes comfortable in every season.",
    image: "/images/hva1.jpg",
    primary: true,
    body: [
      "When San Jose homeowners search for a reliable HVAC company near them, they want one team that can handle everything — heating, cooling, ductwork, and air quality. Promax Service Group is a licensed HVAC contractor (Lic #1133885) serving San Jose, Santa Clara, Sunnyvale, Cupertino, and the greater Bay Area with complete heating and air conditioning services: new system design and installation, emergency repairs, seasonal tune-ups, duct sealing, and smart thermostat upgrades.",
      "As a Mitsubishi Diamond Contractor and Bryant Premier Dealer, we install equipment we trust and back it with real warranties. Whether you need a high-efficiency heat pump for a Willow Glen bungalow, zoned comfort for a two-story Almaden home, or a rooftop package unit for your business, our EPA-certified technicians size the system correctly, pull the required City of San José permits, and leave your home clean.",
    ],
    faqs: [
      {
        q: "How much does a new HVAC system cost in San Jose?",
        a: "Most full HVAC replacements in the San Jose area run from about $8,000 to $20,000+ depending on system type, home size, and ductwork condition. We provide free, itemized estimates and help you claim federal tax credits and any active utility rebates that can significantly lower the net cost.",
      },
      {
        q: "Do I need a permit to replace my HVAC system in San Jose?",
        a: "Yes — HVAC changeouts in San Jose and Santa Clara County require a mechanical permit and, since 2023, HERS testing. As a licensed contractor, Promax pulls the permit and schedules the inspections for you, so your installation is fully code-compliant.",
      },
      {
        q: "How long does an HVAC installation take?",
        a: "A straightforward furnace or AC changeout is usually done in one day. Full system replacements with new ductwork or a furnace-to-heat-pump conversion typically take 2–3 days. We confirm the timeline in your free estimate before any work starts.",
      },
    ],
  },
  {
    slug: "air-conditioner",
    name: "Air Conditioner",
    h1: "Air Conditioning Services in San Jose, CA",
    title: "AC Services San Jose, CA | Repair, Install, Tune-Up | Promax",
    metaDesc:
      "Licensed AC services in San Jose: same-day air conditioner repair, energy-efficient installation & maintenance across Santa Clara County. Call (669) 777-1997.",
    sub: "Is your cooling system in San Jose (Santa Clara County, Bay Area) not keeping up? Our licensed techs handle repair, installation, and maintenance.",
    image: "/images/hva2.jpg",
    primary: true,
    body: [
      "San Jose summers are getting hotter, and a struggling air conditioner turns your home into an oven fast. Promax Service Group provides complete air conditioning services across San Jose and Santa Clara County — same-day AC repair, high-efficiency air conditioner installation, seasonal tune-ups, and honest advice on whether to fix or replace your cooling system.",
      "We service every major brand — Bryant, Carrier, Trane, Lennox, Daikin, Mitsubishi, Rheem, and Goodman — and as a Bryant Premier Dealer we install new SEER2-rated systems that cut cooling bills while keeping your home comfortable through triple-digit heat waves. Every visit ends with upfront pricing, no upsells, and a system you can rely on.",
    ],
    faqs: [
      {
        q: "Why is my AC running but not cooling the house?",
        a: "The most common causes are a dirty filter, low refrigerant from a leak, a failing capacitor, or a frozen evaporator coil. Turn the system off to prevent compressor damage and call us — we diagnose most San Jose AC problems the same day.",
      },
      {
        q: "What SEER2 rating do I need in California?",
        a: "California requires a minimum of 14.3 SEER2 for new central air conditioners in our climate zone. We usually recommend 15.2–17+ SEER2 for San Jose homes — the energy savings over a 15-year lifespan typically outweigh the upfront difference.",
      },
      {
        q: "How often should my air conditioner be serviced?",
        a: "Once a year, ideally in spring before the cooling season. A professional tune-up restores lost efficiency, catches failing parts early, and keeps most manufacturer warranties valid.",
      },
    ],
  },
  {
    slug: "furnace",
    name: "Furnace",
    h1: "Heating & Furnace Services in San Jose, CA",
    title: "Furnace Services San Jose | Repair & Installation | Promax",
    metaDesc:
      "Furnace repair, installation & maintenance in San Jose, CA. High-efficiency heating from a licensed local contractor — open 7 days. Call (669) 777-1997.",
    sub: "Heating services in San Jose and Santa Clara County you can count on — from emergency furnace repair to energy-efficient installations.",
    image: "/images/hva3.jpg",
    primary: true,
    body: [
      "Bay Area winters may be mild, but a dead furnace on a 38° January morning in San Jose is still an emergency. Promax Service Group delivers fast, honest furnace service across San Jose and Santa Clara County: emergency heating repair, high-efficiency furnace installation, annual safety inspections, and heat pump conversions for homeowners ready to go all-electric.",
      "Our EPA-certified technicians work on all gas and electric furnace brands and install 80%–96%+ AFUE Bryant systems sized correctly for your home. Every heating repair includes a combustion safety check and carbon monoxide test — because a safe furnace matters as much as a warm house.",
    ],
    faqs: [
      {
        q: "Why is my furnace blowing cold air?",
        a: "Common culprits include a faulty igniter, a dirty flame sensor, a stuck gas valve, or a thermostat fan setting stuck on ON. Some are quick fixes; others signal a failing heat exchanger, which is a safety issue. We diagnose it on-site with upfront pricing before any repair.",
      },
      {
        q: "Should I repair or replace my old furnace?",
        a: "A useful rule: if the furnace is 15+ years old and the repair costs more than a third of replacement, replace it. New 96% AFUE models cut gas usage dramatically, and California rebates for switching to a heat pump can make replacement the smarter long-term investment.",
      },
      {
        q: "How often should a furnace be inspected in the Bay Area?",
        a: "Annually, ideally each fall. A tune-up cleans the burners and flame sensor, verifies safe venting, tests for carbon monoxide, and catches small failures before they leave you without heat on the coldest week of the year.",
      },
    ],
  },
  {
    slug: "heat-pump",
    name: "Heat Pump",
    h1: "Heat Pump Installation in San Jose, CA",
    title: "Heat Pump Installation San Jose | Rebates Available | Promax",
    metaDesc:
      "Heat pump installation in San Jose with federal tax credits up to $2,000. Efficient heating & cooling in one system, installed by licensed pros. (669) 777-1997.",
    sub: "Want lower energy bills and year-round comfort? A heat pump delivers efficient heating and cooling in one system.",
    image: "/images/hva4.jpg",
    primary: true,
    body: [
      "Heat pumps are the fastest-growing home comfort upgrade in the Bay Area — one system that heats in winter, cools in summer, and runs 2–4× more efficiently than a gas furnace. Promax Service Group installs ducted and ductless heat pumps across San Jose, Cupertino, Sunnyvale, and Santa Clara County, from single-room mini splits to whole-home all-electric conversions.",
      "As a Mitsubishi Diamond Contractor, we install cold-climate hyper-heat systems that hold full capacity even on the coldest Bay Area nights. We also handle the paperwork for federal tax-credit and income-qualified HEEHRA incentives — many San Jose homeowners knock thousands of dollars off their heat pump installation cost.",
    ],
    faqs: [
      {
        q: "What rebates are available for heat pumps in San Jose?",
        a: "TECH Clean California rebate funding is currently exhausted statewide, but the federal 25C tax credit still covers 30% (max $2,000/year) of a qualifying heat pump installation, and income-qualified households may get HEEHRA point-of-sale discounts. We watch for new TECH funding waves — if the program reopens, we apply it to eligible quotes automatically.",
      },
      {
        q: "Do heat pumps work well in Bay Area winters?",
        a: "Yes — modern inverter heat pumps heat efficiently well below freezing, and San Jose winters rarely drop under 35°F. Mitsubishi hyper-heat models we install maintain 100% heating capacity down to 5°F, far colder than the Bay Area ever gets.",
      },
      {
        q: "Can a heat pump replace both my furnace and AC?",
        a: "Exactly — that's the point. One heat pump replaces both systems, uses your existing ducts in most homes, and eliminates gas combustion in the living space. We'll assess your ductwork and electrical panel during the free estimate.",
      },
    ],
  },
  {
    slug: "water-heater",
    name: "Water Heater",
    h1: "Water Heater Services in San Jose, CA",
    title: "Water Heater San Jose | Repair, Install, Replace | Promax",
    metaDesc:
      "Water heater repair, replacement & installation in San Jose — tank, tankless & heat pump models. Same-week service, upfront pricing. Call (669) 777-1997.",
    sub: "No hot water for that morning shower? We repair, replace, and install tank and heat-pump water heaters across the Bay Area.",
    image: "/images/hva5.jpg",
    primary: true,
    body: [
      "Few things stop a household faster than no hot water. Promax Service Group repairs, replaces, and installs water heaters across San Jose and the Bay Area — traditional tank units, space-saving tankless systems, and ultra-efficient heat pump water heaters that cut water-heating energy use by up to 70%.",
      "As Navien Service Specialists, we're experts in tankless and condensing systems, and we install every water heater to current California code: seismic strapping, proper venting, expansion tanks, and drip pans. If your unit is leaking, rumbling, or past its 10–12 year lifespan, we'll give you a straight answer on repair versus replacement — with a free estimate either way.",
    ],
    faqs: [
      {
        q: "How long does a water heater last?",
        a: "Traditional tanks last 8–12 years; tankless units 15–20 with regular descaling. If your tank is over 10 years old and leaking from the bottom, replacement is almost always the right call — a burst tank can cause serious water damage.",
      },
      {
        q: "Tank vs. tankless — which is better for my San Jose home?",
        a: "Tankless costs more upfront but delivers endless hot water, lasts nearly twice as long, and saves space and energy. A standard tank is cheaper to install and simpler to maintain. We'll size both options in your free estimate so you can compare real numbers.",
      },
      {
        q: "Are there rebates for heat pump water heaters?",
        a: "Yes — heat pump water heaters qualify for a federal tax credit of up to $2,000, and income-qualified households may also get HEEHRA discounts. (TECH Clean California funding is currently exhausted.) We handle the paperwork for you.",
      },
    ],
  },
  {
    slug: "ductless-split-systems",
    name: "Ductless Split Systems",
    h1: "Ductless Mini Split Systems in San Jose, CA",
    title: "Ductless Mini Split Installation San Jose | Promax Service",
    metaDesc:
      "Ductless mini split installation & repair in San Jose. Mitsubishi Diamond Contractor — single & multi-zone systems for ADUs, additions & older homes.",
    sub: "Efficient, quiet cooling and heating without ripping out walls — ideal for additions, older homes, and room-by-room comfort.",
    image: "/images/hva6.jpg",
    primary: true,
    body: [
      "No ducts? No problem. Ductless mini split systems deliver whisper-quiet heating and cooling to any room — perfect for San Jose's older Willow Glen and Naglee Park homes, garage conversions, ADUs, home offices, and additions where extending ductwork isn't practical. One outdoor unit can serve up to eight indoor zones, each with its own remote and temperature.",
      "Promax is a Mitsubishi Diamond Contractor — the highest tier of factory training and warranty backing Mitsubishi offers — and we also install Daikin, Bryant, and Cooper & Hunter ductless systems. Installation is clean and fast: most single-zone mini splits are running the same day, with only a 3-inch line-set opening in the wall.",
    ],
    faqs: [
      {
        q: "How much does mini split installation cost in San Jose?",
        a: "Single-zone installations typically run $4,500–$8,000 installed; multi-zone systems $12,000–$25,000+ depending on zones and line-set runs. Mini splits are heat pumps, so they qualify for the federal 25C tax credit of up to $2,000 — we include it in your estimate. (TECH Clean California funding is currently exhausted.)",
      },
      {
        q: "Do mini splits heat as well as they cool?",
        a: "Yes — every system we install is a heat pump that both heats and cools. Mitsubishi hyper-heat models keep full heating output far below any temperature San Jose ever sees, so one system covers you year-round.",
      },
      {
        q: "Single-zone or multi-zone — which do I need?",
        a: "Single-zone is ideal for one problem room (a garage office, an ADU, a hot upstairs bedroom). Multi-zone makes sense when you're conditioning three or more rooms — one outdoor unit, individual control in each room. We'll design both options in a free in-home assessment.",
      },
    ],
  },
  {
    slug: "vrf-installation-system",
    name: "VRF / VRV Systems",
    h1: "VRF / VRV System Installation in San Jose, CA",
    title: "VRF & VRV System Installation San Jose | Promax Service",
    metaDesc:
      "Commercial & residential VRF/VRV system installation in San Jose. Precise multi-zone comfort, top efficiency, factory-trained installers. (669) 777-1997.",
    sub: "Need precise temperature control across multiple zones? VRF/VRV systems deliver flexible, efficient comfort for homes and offices.",
    image: "/images/hva7.jpg",
    primary: true,
    body: [
      "Variable Refrigerant Flow (VRF — Daikin calls it VRV) is the gold standard for buildings that need independent temperature control in many rooms at once: offices, medical suites, multi-family buildings, and large custom homes across San Jose and Silicon Valley. Instead of blasting one temperature everywhere, a VRF system continuously modulates refrigerant to each zone — some spaces can heat while others cool, simultaneously.",
      "Promax designs and installs Mitsubishi CITY MULTI and Daikin VRV systems from load calculation through commissioning. Our factory-trained team handles branch controllers, heat-recovery piping, controls integration, and the permits — delivering 30–40% energy savings over conventional rooftop systems with far better comfort.",
    ],
    faqs: [
      {
        q: "What's the difference between VRF and VRV?",
        a: "They're the same technology — VRV is Daikin's trademarked name (Variable Refrigerant Volume); every other manufacturer calls it VRF (Variable Refrigerant Flow). We install both Daikin VRV and Mitsubishi CITY MULTI VRF systems.",
      },
      {
        q: "Is VRF worth it for a house, or only commercial buildings?",
        a: "For larger homes (3,500+ sq ft), homes with in-law units, or owners who want true room-by-room control, VRF is excellent. For most single-family San Jose homes, a multi-zone ductless system delivers similar benefits at lower cost — we'll recommend honestly which fits your building.",
      },
      {
        q: "How much energy does a VRF system save?",
        a: "Compared to conventional rooftop or split systems, properly commissioned VRF typically cuts HVAC energy use 30–40%, thanks to inverter compressors and zone-level modulation. Heat-recovery VRF saves even more by moving heat between zones instead of rejecting it outside.",
      },
    ],
  },
  {
    slug: "rooftop-package-unit",
    name: "Rooftop Package Units",
    h1: "Rooftop Package Unit Services in San Jose, CA",
    title: "Rooftop HVAC Unit Installation San Jose | Commercial | Promax",
    metaDesc:
      "Rooftop package unit installation, replacement & repair for San Jose businesses. Crane set, curb adapters, permits & commissioning. Call (669) 777-1997.",
    sub: "Reliable rooftop HVAC systems that stand up to Bay Area weather — perfect for commercial and light-commercial spaces.",
    image: "/images/hva8.jpg",
    primary: true,
    body: [
      "Restaurants, retail spaces, offices, and light-industrial buildings across San Jose rely on rooftop package units (RTUs) for heating and cooling — and when one fails in July, every hour costs you customers. Promax installs, replaces, and repairs rooftop package units throughout Santa Clara County, handling everything from crane scheduling and curb adapters to gas, electrical, and Title 24 compliance.",
      "We work with building owners and property managers on both emergency changeouts and planned replacements, and we'll assess whether a modern high-efficiency RTU or a VRF conversion is the better long-term investment for your building. Preventive maintenance contracts keep your tenants comfortable and your equipment under warranty.",
    ],
    faqs: [
      {
        q: "How long does a rooftop unit replacement take?",
        a: "With the unit in stock and the crane scheduled, most single-RTU swaps are completed in one day — including disconnect, set, hookup, and startup. We coordinate the crane, permits, and inspections so your business barely notices.",
      },
      {
        q: "What size rooftop unit does my building need?",
        a: "Commercial spaces typically need roughly 1 ton of cooling per 300–500 sq ft, but ceiling height, occupancy, kitchen equipment, and window load change that substantially. We perform a proper load calculation rather than just matching the old nameplate.",
      },
      {
        q: "Do you offer maintenance contracts for commercial HVAC?",
        a: "Yes — quarterly or semi-annual plans that include filter changes, coil cleaning, belt and refrigerant checks, and priority emergency response. Regular maintenance is usually the difference between a 12-year and a 20-year RTU lifespan.",
      },
    ],
  },
  {
    slug: "hvac-ductwork",
    name: "HVAC Ductwork",
    h1: "HVAC Ductwork Installation & Sealing in San Jose, CA",
    title: "Ductwork Installation & Repair San Jose | Promax Service",
    metaDesc:
      "Duct installation, replacement, sealing & balancing in San Jose. Fix uneven rooms and high bills — up to 30% of conditioned air leaks from old ducts.",
    sub: "Struggling with uneven airflow or high energy bills? We design, repair, and seal ductwork for balanced comfort in every room.",
    image: "/images/hva9.jpg",
    primary: true,
    body: [
      "In many San Jose homes — especially those built before the 1990s — up to 30% of heated and cooled air never reaches the rooms, leaking instead into attics and crawlspaces through old, crushed, or disconnected ducts. If some rooms bake while others freeze, or your energy bills keep climbing, your ductwork is the likely culprit.",
      "Promax designs, replaces, seals, and balances duct systems across Santa Clara County: new R-8 insulated runs, mastic-sealed connections, properly sized returns, and HERS-verified leakage testing required by California code. Better ducts make every system you own — furnace, AC, or heat pump — quieter, more efficient, and more comfortable.",
    ],
    faqs: [
      {
        q: "How do I know if my ducts are leaking?",
        a: "Telltale signs: rooms that never reach temperature, dusty air, whistling sounds, high bills despite a newer system, and flex ducts visibly sagging in the attic. A duct leakage test gives a definitive number — California requires under 10% leakage on replacements (5% for new systems).",
      },
      {
        q: "Should I repair or fully replace my old ductwork?",
        a: "If the ducts are pre-1990 fiberglass duct board or brittle flex, full replacement usually pays off — old ducts are often undersized for modern equipment. Isolated damage or a few leaky joints can be sealed and insulated instead. We give you both prices.",
      },
      {
        q: "Does new ductwork qualify for rebates?",
        a: "Duct sealing and replacement can qualify for utility efficiency rebates, and it is often bundled into heat pump upgrade projects that earn federal tax credits. We'll include any eligible rebates in your written estimate.",
      },
    ],
  },
  {
    slug: "zone-control-system",
    name: "Zone Control Systems",
    h1: "HVAC Zoning Systems in San Jose, CA",
    title: "HVAC Zone Control Systems San Jose | Room-by-Room Comfort",
    metaDesc:
      "HVAC zoning installation in San Jose — motorized dampers & smart thermostats give every floor its own temperature. End hot-upstairs syndrome. (669) 777-1997.",
    sub: "Tired of some rooms feeling like an oven while others stay chilly? Zoning gives you independent control room by room.",
    image: "/images/hva10.jpg",
    primary: true,
    body: [
      "Two-story homes all over San Jose share the same complaint: the upstairs is sweltering while the downstairs is cold. A zone control system fixes that physics problem — motorized dampers in your ductwork, controlled by separate thermostats, direct conditioned air only where it's needed. Bedrooms stay cool at night without freezing the living room; the home office stays comfortable all day without conditioning empty rooms.",
      "Promax installs 2–8 zone systems with smart thermostats (Ecobee, Honeywell, Bryant Evolution) on both new installations and existing systems. Zoning typically trims 15–25% off heating and cooling costs because you stop paying to condition rooms nobody is using.",
    ],
    faqs: [
      {
        q: "Can zoning be added to my existing HVAC system?",
        a: "Usually yes — if your ductwork has accessible trunk lines, we can retrofit dampers, a zone control panel, and additional thermostats to most single-system homes. A bypass or modulating equipment keeps airflow healthy. We confirm feasibility in a free assessment.",
      },
      {
        q: "How many zones does a typical house need?",
        a: "Most two-story San Jose homes do great with two zones (upstairs/downstairs). Larger homes benefit from 3–4 zones separating bedrooms, living areas, and bonus rooms. More zones mean finer control but more dampers — we'll design the sweet spot.",
      },
      {
        q: "Does zoning save energy or just improve comfort?",
        a: "Both. Studies and our own customers consistently show 15–25% savings, because the system stops conditioning unoccupied areas. Paired with a variable-speed furnace or inverter heat pump, the comfort and savings are even greater.",
      },
    ],
  },
  {
    slug: "indoor-air-quality-system",
    name: "Indoor Air Quality",
    h1: "Indoor Air Quality Systems in San Jose, CA",
    title: "Indoor Air Quality Solutions San Jose | Filters, UV, ERV",
    metaDesc:
      "Whole-home air purification in San Jose: HEPA filtration, UV lights, ERV ventilation & humidity control. Breathe easier during allergy & wildfire season.",
    sub: "Concerned about allergens, smoke, or stale indoor air? We install filtration, UV, and ventilation systems for cleaner air.",
    image: "/images/hva11.jpg",
    primary: true,
    body: [
      "Between spring allergies, wildfire smoke season, and homes sealed tight for efficiency, indoor air in the Bay Area often carries more pollutants than the air outside. Promax installs whole-home indoor air quality systems in San Jose that work through your existing HVAC: MERV-13 to HEPA-grade media filtration, UV germicidal lights at the coil, energy-recovery ventilators (ERVs) that bring in fresh filtered air, and whole-home humidity control.",
      "Unlike portable purifiers that clean one corner of one room, a whole-home system treats every cubic foot of air your family breathes — silently, automatically, with one filter change a year for most media cabinets. Ask about IAQ add-ons with any furnace, AC, or heat pump installation; integrated at install time, they cost significantly less.",
    ],
    faqs: [
      {
        q: "What helps most against wildfire smoke?",
        a: "A MERV-13 or higher media filter combined with running the system fan on low during smoke events. For sensitive households we add a dedicated HEPA bypass cabinet and an ERV so you can ventilate with filtered outdoor air instead of opening windows.",
      },
      {
        q: "Are UV lights in HVAC systems worth it?",
        a: "UV germicidal lamps mounted at the evaporator coil prevent mold and biofilm growth where condensation lives, keeping the coil efficient and the airstream cleaner. They're most valuable in homes with allergy sufferers or past coil-mold issues.",
      },
      {
        q: "What filter should I use in my furnace?",
        a: "For most San Jose homes, a MERV-11 to MERV-13 pleated filter balances filtration and airflow. Avoid ultra-restrictive 1-inch 'allergen' filters on systems not designed for them — a properly sized 4–5 inch media cabinet filters better with less strain.",
      },
    ],
  },

  // Secondary / detailed service pages (routed, not on the homepage grid)
  {
    slug: "air-conditioner-repair",
    name: "AC Repair",
    h1: "Air Conditioner Repair in San Jose, CA",
    title: "AC Repair San Jose, CA | Same-Day Service | Promax",
    metaDesc:
      "Same-day AC repair in San Jose. Weak airflow, warm air, strange noises — licensed techs fix all brands with upfront pricing. Call (669) 777-1997 today.",
    sub: "Is your AC acting up just as summer heats up in San Jose? Strange noises, weak airflow, or a total shutdown? We fix it fast.",
    image: "/images/hva2.jpg",
    body: [
      "When your air conditioner quits during a San Jose heat wave, you need a repair team that answers the phone and shows up — not a two-week wait. Promax Service Group provides same-day and next-day AC repair across San Jose, Santa Clara, Campbell, and Milpitas, seven days a week. Our trucks arrive stocked with common capacitors, contactors, fan motors, and refrigerant so most repairs finish in a single visit.",
      "We diagnose and repair every brand — Bryant, Carrier, Trane, Lennox, Goodman, Rheem, Daikin, and more — with flat, upfront pricing you approve before we start. And if your system is beyond sensible repair, we'll say so honestly and credit the service call toward a replacement.",
    ],
    faqs: [
      {
        q: "How fast can you get to my house for AC repair?",
        a: "In most of San Jose and nearby cities we offer same-day appointments, especially if you call in the morning. During extreme heat waves we prioritize homes with elderly residents, infants, and medical needs.",
      },
      {
        q: "What does AC repair cost in San Jose?",
        a: "Common repairs like capacitors, contactors, and fan motors typically range $150–$650. Refrigerant leak repairs run more depending on location and refrigerant type. You always get a firm quote before any work begins — and the diagnostic fee is waived when we do the repair.",
      },
      {
        q: "My AC is frozen — what should I do before you arrive?",
        a: "Switch cooling off but set the fan to ON. That thaws the coil so we can test the system properly when we arrive (a frozen coil hides the underlying cause, usually airflow restriction or low refrigerant).",
      },
    ],
  },
  {
    slug: "air-conditioner-installation",
    name: "AC Installation",
    h1: "AC Installation in San Jose, CA",
    title: "AC Installation San Jose | Energy-Efficient Systems | Promax",
    metaDesc:
      "New air conditioner installation in San Jose — properly sized, SEER2-rated systems installed to code with permits & HERS testing. Free in-home estimates.",
    sub: "Ready to upgrade an aging unit or add a new AC to your San Jose home? We size and install the right system for you.",
    image: "/images/hva1.jpg",
    body: [
      "A new air conditioner is only as good as its installation — an oversized or badly ducted system short-cycles, dehumidifies poorly, and dies young. Promax installs central AC and heat pump cooling systems across San Jose the right way: a Manual J load calculation for your actual square footage and sun exposure, matched indoor and outdoor equipment, new refrigerant lines where needed, city permits, and California-required HERS verification.",
      "As a Bryant Premier Dealer we offer factory-backed equipment at every budget level, from solid single-stage systems to whisper-quiet variable-speed inverters. Financing is available, free estimates always include good/better/best options, and installation is usually complete in one day.",
    ],
    faqs: [
      {
        q: "What size AC do I need for my house?",
        a: "Roughly one ton of cooling per 600–1,000 sq ft in San Jose's climate, but insulation, windows, orientation, and duct condition swing that widely. We perform a real load calculation instead of guessing — correct sizing matters more than brand for comfort and longevity.",
      },
      {
        q: "Should I install an AC or a heat pump?",
        a: "If your furnace is also aging, a heat pump replaces both for a modest premium and unlocks federal tax credits (plus HEEHRA discounts for income-qualified households). If your furnace is newer, a matched AC may make more sense. We'll price both in your free estimate.",
      },
      {
        q: "Does a new AC installation include a permit?",
        a: "Always. San Jose requires a mechanical permit and HERS testing for AC changeouts, and unpermitted work can bite you at resale. Permit fees and testing are line items in our written quote — never a surprise.",
      },
    ],
  },
  {
    slug: "air-conditioner-maintenance",
    name: "AC Maintenance",
    h1: "AC Maintenance & Tune-Ups in San Jose, CA",
    title: "AC Tune-Up San Jose | Prevent Summer Breakdowns | Promax",
    metaDesc:
      "Professional AC maintenance in San Jose — 21-point tune-up restores efficiency, prevents breakdowns & keeps warranties valid. Book your spring tune-up.",
    sub: "Fed up with surprise AC breakdowns when San Jose hits triple digits? Routine tune-ups keep your system running strong.",
    image: "/images/hva2.jpg",
    body: [
      "Air conditioners rarely die without warning — they drift out of tune, lose efficiency for a few seasons, then fail on the hottest week of the year when every HVAC company in San Jose is booked solid. An annual professional tune-up breaks that cycle. Our 21-point AC maintenance visit cleans the condenser coil, verifies refrigerant charge, tests capacitors and electrical connections under load, flushes the condensate drain, and measures actual cooling performance.",
      "Maintained systems use 5–15% less electricity, last years longer, and keep manufacturer warranties valid (most brands require documented annual service). Spring appointments book fastest — schedule before the first heat wave and you'll never wait in line behind emergency calls.",
    ],
    faqs: [
      {
        q: "What's included in your AC tune-up?",
        a: "A 21-point inspection: coil cleaning, refrigerant charge verification, capacitor and contactor testing, motor amp draws, thermostat calibration, condensate drain flush, filter check, and a measured temperature split — with a written report and photos of anything that needs attention.",
      },
      {
        q: "Is annual AC maintenance really worth the money?",
        a: "A tune-up costs a fraction of one emergency repair. It restores lost efficiency (dirty coils alone can add 15% to cooling costs), catches failing $20 parts before they take out $2,000 compressors, and preserves your warranty coverage.",
      },
      {
        q: "When is the best time for an AC tune-up in San Jose?",
        a: "March through May, before the cooling season. You get first pick of appointments, and any issues found can be fixed before you actually need the system on a 100° day.",
      },
    ],
  },
  {
    slug: "furnace-repair",
    name: "Furnace Repair",
    h1: "Furnace Repair in San Jose, CA",
    title: "Furnace Repair San Jose, CA | Fast & Honest | Promax",
    metaDesc:
      "Furnace not heating? Fast furnace repair in San Jose, 7 days a week. All brands, upfront pricing, CO safety check included. Call (669) 777-1997.",
    sub: "Facing a furnace failure on a freezing San Jose morning? Our techs diagnose and repair fast to restore your heat.",
    image: "/images/furnace-photo-min.jpg",
    body: [
      "A furnace that won't ignite, keeps shutting off, or blows cold air needs attention fast — especially with kids or older family members in the house. Promax provides prompt furnace repair throughout San Jose and Santa Clara County, seven days a week. We troubleshoot igniters, flame sensors, gas valves, inducer motors, control boards, and thermostat faults on all major brands, and our vans carry the common parts to finish most repairs in one visit.",
      "Every furnace repair includes a combustion analysis and carbon monoxide safety test at no extra charge. If we ever find a cracked heat exchanger — the one furnace problem that genuinely endangers your family — we document it with photos and walk you through every option, repair or replace, with honest numbers.",
    ],
    faqs: [
      {
        q: "Why does my furnace keep turning on and off?",
        a: "Short-cycling usually traces to a dirty filter overheating the furnace, a failing flame sensor, a clogged condensate line on high-efficiency models, or an oversized system. It wastes gas and wears parts fast — most causes are inexpensive fixes when caught early.",
      },
      {
        q: "Is a cracked heat exchanger dangerous?",
        a: "Yes — it can allow carbon monoxide into your home's air supply, which is why we test CO on every heating visit. A confirmed crack means the furnace should be shut down; depending on age, the fix is either a warranty exchanger swap or replacement of the furnace.",
      },
      {
        q: "Do you repair furnaces on weekends?",
        a: "Yes — we operate 7 days a week, 7 AM to 10 PM, at the same rates. No 'weekend emergency' surcharge for getting your heat back on a Saturday night.",
      },
    ],
  },
  {
    slug: "furnace-installation",
    name: "Furnace Installation",
    h1: "Furnace Installation in San Jose, CA",
    title: "Furnace Installation San Jose | 96% AFUE Systems | Promax",
    metaDesc:
      "High-efficiency furnace installation in San Jose from a Bryant Premier Dealer. Correct sizing, permits & HERS testing included. Free estimates, financing.",
    sub: "Thinking about a new furnace to conquer Bay Area chills? We install high-efficiency units that cut bills and even out heat.",
    image: "/images/furnace-photo-min.jpg",
    body: [
      "If your furnace is over 15 years old, every winter is a gamble — and every therm of gas it burns costs more than it should. Promax installs high-efficiency furnaces across San Jose, from dependable 80% AFUE single-stage units to 96%+ AFUE two-stage and modulating systems that deliver steady, even heat at a whisper. As a Bryant Premier Dealer, we back installations with full factory warranties and our own labor guarantee.",
      "Every installation starts with correct sizing for your home — not just copying the old nameplate — and includes new venting as required, a code-compliant condensate drain, city permit, and HERS duct testing. Considering going all-electric instead? We'll quote a heat pump conversion side-by-side so you can compare with rebates factored in.",
    ],
    faqs: [
      {
        q: "How much does furnace installation cost in San Jose?",
        a: "Typical installed prices range from about $5,500 for an 80% AFUE changeout to $9,000–$13,000 for high-efficiency 96% AFUE systems with new venting. Your written estimate itemizes equipment, labor, permit, and HERS testing — no surprises.",
      },
      {
        q: "What does AFUE mean and what should I buy?",
        a: "AFUE is the percentage of gas turned into usable heat — an 80% furnace wastes 20¢ of every dollar up the flue; a 96% furnace wastes 4¢. In San Jose's mild-but-real winters, 96% AFUE usually pays back its premium, especially with PG&E gas rates.",
      },
      {
        q: "Can I replace just the furnace and keep my AC?",
        a: "Often yes, if the AC is newer and the blower is compatible. If both are past 12–15 years, replacing together (or converting to a single heat pump) saves duplicate labor and usually nets better pricing and rebates.",
      },
    ],
  },
  {
    slug: "hvac-repair",
    name: "HVAC Repair",
    h1: "HVAC Repair in San Jose, CA",
    title: "HVAC Repair San Jose, CA | Licensed Contractor | Promax",
    metaDesc:
      "Licensed HVAC repair in San Jose — heating, cooling, thermostats & airflow problems fixed fast, 7 days a week. All brands. Call (669) 777-1997.",
    sub: "Heater stuck on blast? AC refusing to cool? Our licensed contractors get your whole system back online quickly.",
    image: "/images/high-photo-min.jpg",
    body: [
      "Heating, cooling, thermostat, or airflow — when any part of your home comfort system misbehaves, Promax fixes it. We're a licensed C-20 HVAC contractor (Lic #1133885) repairing every type of system installed in San Jose homes: gas furnaces, central AC, heat pumps, ductless mini splits, package units, and zoned systems, from every major manufacturer.",
      "Our diagnostic process is methodical, our pricing is flat-rate and approved by you before work starts, and our repairs are guaranteed. We're open 7 days a week from 7 AM to 10 PM, because comfort problems don't respect business hours — and neither do we.",
    ],
    faqs: [
      {
        q: "Do you charge for HVAC diagnostics?",
        a: "We charge a standard diagnostic fee that is waived entirely when you approve the repair with us. The free service call with repair applies every day of the week, including weekends.",
      },
      {
        q: "Which HVAC brands do you service?",
        a: "All of them — Bryant, Carrier, Trane, Lennox, Rheem, Ruud, Goodman, Amana, Daikin, Mitsubishi, Fujitsu, American Standard, York, and more. Factory relationships with Bryant and Mitsubishi give us fast access to OEM parts.",
      },
      {
        q: "My thermostat is blank — is that an HVAC problem?",
        a: "Usually yes: a tripped float switch from a clogged condensate drain, a blown low-voltage fuse, or a failed transformer commonly kill thermostat power. All are quick fixes for a technician — and much cheaper than the new system a blank screen makes people fear.",
      },
    ],
  },
  {
    slug: "hvac-installation",
    name: "HVAC Installation",
    h1: "HVAC Installation in San Jose, CA",
    title: "HVAC Installation San Jose | Full Systems & Zoning | Promax",
    metaDesc:
      "Complete HVAC installation in San Jose — furnaces, ACs, heat pumps, ductwork & zoning designed and installed to code by licensed pros. Free estimates.",
    sub: "Frustrated by outdated HVAC equipment and skyrocketing bills? We handle full installs — ducts, zoning, and complete setup.",
    image: "/images/high-photo-min.jpg",
    body: [
      "A complete HVAC installation is the one home upgrade you feel every single day for the next 15–20 years. Promax designs and installs full systems across San Jose and Santa Clara County: furnace + AC pairs, all-electric heat pumps, ductless multi-zone setups, new ductwork, zoning, and smart controls — engineered as one system rather than parts bolted together.",
      "Your project starts with a free in-home assessment and load calculation, continues through permitted, code-compliant installation by our own employees (never subcontractors), and ends with commissioning, HERS testing, and a walkthrough of your new controls. Tax-credit and rebate paperwork is handled for you.",
    ],
    faqs: [
      {
        q: "How long does a full HVAC installation take?",
        a: "Equipment-only changeouts: 1 day. Full system with new ductwork: 2–4 days. Complex zoned or VRF projects: up to a week. Your estimate includes a firm timeline, and we keep the home's comfort running as long as possible during the work.",
      },
      {
        q: "What financing options are available?",
        a: "We offer approved-credit financing plans including deferred-interest and low-APR terms, so you can pay for the system monthly with the energy savings offsetting part of the cost. Ask for current promotions when you book your estimate.",
      },
      {
        q: "Why does contractor choice matter more than brand?",
        a: "Industry studies show improper installation cuts system efficiency by up to 30% — sizing, refrigerant charge, airflow, and duct sealing are all workmanship. A mid-tier system installed perfectly outperforms a premium system installed badly, every time.",
      },
    ],
  },
  {
    slug: "water-heater-repair",
    name: "Water Heater Repair",
    h1: "Water Heater Repair in San Jose, CA",
    title: "Water Heater Repair San Jose | Same-Week Service | Promax",
    metaDesc:
      "No hot water? Water heater repair in San Jose for tank & tankless systems — pilots, elements, thermostats & leaks fixed fast. Call (669) 777-1997.",
    sub: "Cold shower surprise? We respond fast to restore hot water for your family — tank and tankless systems.",
    image: "/images/hva5.jpg",
    body: [
      "No hot water is a today problem, not a next-week problem. Promax repairs tank and tankless water heaters throughout San Jose — relighting and replacing pilot assemblies, swapping heating elements and thermostats, fixing gas valves, descaling tankless heat exchangers, and stopping leaks at fittings and valves before they become floor damage.",
      "As Navien Service Specialists we're factory-trained on the tankless systems most plumbers struggle with, and we service Rheem, Bradford White, A.O. Smith, Rinnai, Noritz, and every other common brand. If the unit is too far gone, you'll get a straight answer and a same-visit replacement quote — often with next-day installation.",
    ],
    faqs: [
      {
        q: "Why is my water heater not producing hot water?",
        a: "Gas tanks: usually a failed thermocouple, pilot, or gas control valve. Electric tanks: a tripped high-limit switch or burned-out element. Tankless: scale buildup or an ignition/flow-sensor fault showing an error code. Tell us the symptoms and model and we'll arrive with likely parts on the truck.",
      },
      {
        q: "Is a leaking water heater repairable?",
        a: "Leaks from valves and fittings — yes, usually inexpensive. Leaks from the tank body itself — no; the internal liner has failed and replacement is the only safe fix. We'll tell you which one you have within minutes of arriving.",
      },
      {
        q: "My tankless water heater shows an error code — what does it mean?",
        a: "Error codes usually point to scale buildup, gas supply, venting, or sensor faults. Navien, Rinnai, and Noritz each use different codes — snap a photo of the display when you call and our dispatcher can often quote the likely fix before we roll a truck.",
      },
    ],
  },
  {
    slug: "water-heater-installation",
    name: "Water Heater Installation",
    h1: "Heat Pump Water Heater Installation in San Jose, CA",
    title: "Heat Pump Water Heater Installation San Jose | Rebates",
    metaDesc:
      "Heat pump water heater installation in San Jose — cut water heating costs up to 70%, with federal tax credits up to $2,000. Free quotes.",
    sub: "Want to slash utility bills and never run out of hot water? Heat-pump water heaters are efficient and rebate-eligible.",
    image: "/images/hva5.jpg",
    body: [
      "Water heating is the second-largest energy expense in most San Jose homes — and a heat pump water heater cuts it by up to 70%. Instead of generating heat, it moves heat from the surrounding air into the tank, delivering the same hot showers at a fraction of the operating cost. It's also the single most rebate-rich appliance upgrade in California right now.",
      "Promax installs ENERGY STAR heat pump water heaters from Rheem, A.O. Smith, and Bradford White, handling the 240V electrical circuit, condensate drain, seismic strapping, and permit. We provide the documentation for the federal 25C tax credit (30%, up to $2,000) and check HEEHRA eligibility for income-qualified households — TECH Clean California funding is currently exhausted, and we will apply it automatically if a new wave opens.",
    ],
    faqs: [
      {
        q: "How much can I save with a heat pump water heater?",
        a: "A family of four typically saves $300–$550 per year versus a standard electric tank, and similar amounts versus gas at current PG&E rates. Over a 13–15 year lifespan that's several thousand dollars — before counting the purchase rebates.",
      },
      {
        q: "Do heat pump water heaters need a special location?",
        a: "They need roughly 450–700 cubic feet of surrounding air (a garage is perfect, and most San Jose installations go there), a condensate drain, and a 240V circuit — or a 120V plug-in model where panel capacity is tight. We confirm the right fit during the free site visit.",
      },
      {
        q: "Are they loud?",
        a: "About 45–50 dB — comparable to a modern refrigerator. In a garage or utility room you'll rarely notice it. Some models offer quiet modes and scheduling so the compressor runs while you're away.",
      },
    ],
  },
  {
    slug: "water-heater-replacement",
    name: "Water Heater Replacement",
    h1: "Water Heater Replacement in San Jose, CA",
    title: "Water Heater Replacement San Jose | Fast Swap | Promax",
    metaDesc:
      "Water heater replacement in San Jose — often next-day. Tank, tankless & heat pump options installed to code with permit & haul-away. (669) 777-1997.",
    sub: "Tired of lukewarm showers, hidden leaks, and endless repair bills? We replace old tanks quickly and cleanly.",
    image: "/images/hva5.jpg",
    body: [
      "When a water heater starts leaking from the tank, the countdown has begun — and waiting risks a burst tank and a flooded garage or closet. Promax replaces water heaters across San Jose quickly and cleanly, often next-day: we drain and haul away the old unit, set the new one to current code with seismic straps, expansion tank, drip pan, and proper venting, pull the permit, and leave you with hot water the same afternoon.",
      "Replacement is also the moment to upgrade smart: keep it simple with a like-for-like tank, go tankless for endless hot water and 20-year lifespan, or choose a rebate-eligible heat pump water heater and cut operating costs by two-thirds. We quote all the options that fit your space so you decide with real numbers.",
    ],
    faqs: [
      {
        q: "How quickly can you replace my water heater?",
        a: "Standard 40 and 50-gallon replacements are usually completed same-day or next-day — the swap itself takes 2–4 hours. Tankless conversions and heat pump upgrades typically take a full day due to venting, gas, or electrical changes.",
      },
      {
        q: "What does water heater replacement cost in San Jose?",
        a: "Like-for-like tank replacements typically run $2,200–$3,800 installed with permit and code upgrades. Tankless conversions run $4,500–$7,500; heat pump water heaters land in between before rebates that can shave $1,000–$3,000 off.",
      },
      {
        q: "What code upgrades are required when replacing in California?",
        a: "Current code requires seismic strapping (two straps), a thermal expansion tank on closed systems, a temperature-pressure relief drain line, proper venting, and in many cases a drip pan with drain. Our quotes include every required upgrade — some low bids conveniently leave them out.",
      },
    ],
  },
  {
    slug: "commercial-hvac",
    name: "Commercial HVAC",
    h1: "Commercial HVAC Services in San Jose, CA",
    title: "Commercial HVAC San Jose | Installation & Maintenance | Promax",
    metaDesc:
      "Commercial HVAC contractor in San Jose — rooftop units, VRF systems, maintenance contracts & emergency service for offices, retail & restaurants. (669) 777-1997.",
    sub: "Keep your tenants, staff, and customers comfortable — installation, replacement, and maintenance programs for commercial buildings across Silicon Valley.",
    image: "/images/hva8.jpg",
    body: [
      "Downtime costs money. Whether you manage a retail storefront on Santana Row, a restaurant kitchen, a dental office, or a light-industrial building, Promax keeps your HVAC running with minimal disruption to business. We install and service rooftop package units, split systems, VRF/VRV multi-zone systems, make-up air, and dedicated server-room cooling across San Jose and Santa Clara County.",
      "Property managers choose us for preventive maintenance contracts — scheduled filter changes, coil cleaning, and inspections that catch failures before tenants feel them — with priority emergency response and consolidated reporting for your portfolio. We handle Title 24 compliance, crane logistics, permits, and after-hours scheduling so your business never has to close for comfort.",
    ],
    faqs: [
      {
        q: "Do you offer commercial maintenance contracts?",
        a: "Yes — quarterly or semi-annual programs sized to your equipment, with documented inspections, priority emergency dispatch, and discounted repair rates. Multi-property portfolios get consolidated scheduling and reporting.",
      },
      {
        q: "Can you work outside business hours?",
        a: "Absolutely. We routinely schedule commercial installations and noisy work for early mornings, evenings, or weekends so your business stays open. We're staffed 7 days a week.",
      },
      {
        q: "What size commercial projects do you take?",
        a: "From single-unit RTU swaps on a small retail building to multi-floor VRF installations in office buildings. If it heats, cools, or ventilates a commercial space in the South Bay, we can install and maintain it.",
      },
    ],
  },
];

export const primaryServices = services.filter((s) => s.primary);

// Real per-service banner photos (darkened action shots) from the old site.
const bannerMap: Record<string, string> = {
  hvac: "/images/photo_hvac-min.jpg",
  "hvac-repair": "/images/high-photo-min.jpg",
  "hvac-installation": "/images/high-photo-min.jpg",
  "hvac-ductwork": "/images/hvac-ductwork-photo-min.jpg",
  "air-conditioner": "/images/high-photo-min.jpg",
  "air-conditioner-repair": "/images/high-photo-min.jpg",
  "air-conditioner-installation": "/images/high-photo-min.jpg",
  "air-conditioner-maintenance": "/images/high-photo-min.jpg",
  furnace: "/images/furnace-photo-min.jpg",
  "furnace-repair": "/images/furnace-photo-min.jpg",
  "furnace-installation": "/images/furnace-photo-min.jpg",
  "heat-pump": "/images/heat-pump-photo-min.jpg",
  "ductless-split-systems": "/images/duc-photo-min.jpg",
  "vrf-installation-system": "/images/vrf-photo-min.jpg",
  "rooftop-package-unit": "/images/rooftop-photo-min.jpg",
  "zone-control-system": "/images/zone-photo-min.jpg",
  "indoor-air-quality-system": "/images/photo_hvac-min.jpg",
  "water-heater": "/images/water-heater-photo-min.jpg",
  "water-heater-repair": "/images/water-heater-photo-min.jpg",
  "water-heater-installation": "/images/water-heater-photo-min.jpg",
  "water-heater-replacement": "/images/water-heater-photo-min.jpg",
  "commercial-hvac": "/images/rooftop-photo-min.jpg",
};

export const bannerFor = (slug: string) => bannerMap[slug] ?? "/images/photo_hvac-min.jpg";
