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
//   faqs     – unique Q&As per service (rendered + FAQPage rich results)
//
// Response-time / fee / rebate claims are policy, not copywriting — they must
// match src/data/site.ts `promises` and the canonical rebate facts below, even
// though this file can't import site.ts (it's data, read at build time by
// several pages, so it stays framework-free). As of this content pass:
//   - Federal 25C tax credit (30% up to $2,000) EXPIRED for installations
//     after Dec 31, 2025. Never claim it's currently available.
//   - HEEHRA (income-qualified) single-family funding is fully reserved
//     statewide as of Feb 2026 — waitlist only.
//   - TECH Clean California funding is exhausted statewide.
//   - Where a rebate needs mentioning, say we check current eligibility at
//     the free estimate — never promise a dollar figure from an expired or
//     exhausted program.
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
  // ── optional depth (rendered as their own sections when present) ──
  kind?: "repair" | "install" | "maintenance" | "overview"; // picks the benefits variant
  included?: string[]; // "What's included" checklist
  signs?: string[];    // "Signs you need this" symptoms
  brands?: string[];   // equipment brands serviced/installed
  parent?: string;     // slug of the overview page this belongs under
  children?: string[]; // slugs of the repair/install/maintenance pages under this one
};

export const services: Service[] = [
  {
    slug: "hvac",
    name: "HVAC Systems",
    h1: "HVAC Systems in San Jose, CA",
    title: "HVAC Company San Jose, CA | Repair & Installation | Promax",
    metaDesc:
      "Full-service HVAC company in San Jose, CA. Design, installation, repair and maintenance by licensed, EPA-certified techs. Free estimates: (669) 777-1997.",
    sub: "Ready for year-round comfort in the Bay Area? From full system design to repair and maintenance, we keep San Jose homes comfortable in every season.",
    image: "/images/hva1.jpg",
    primary: true,
    kind: "overview",
    children: ["hvac-repair", "hvac-installation"],
    body: [
      "When San Jose homeowners search for a reliable HVAC company near them, they want one team that can handle everything — heating, cooling, ductwork, and air quality. Promax Service Group is a licensed HVAC contractor (Lic #1133885) serving San Jose, Santa Clara, Sunnyvale, Cupertino, and the greater Bay Area with complete heating and air conditioning services: new system design and installation, emergency repairs, seasonal tune-ups, duct sealing, and smart thermostat upgrades.",
      "As a Mitsubishi Diamond Contractor and Bryant Factory Authorized Dealer, we install equipment we trust and back it with real warranties. Whether you need a high-efficiency heat pump for a Willow Glen bungalow, zoned comfort for a two-story Almaden home, or a rooftop package unit for your business, our EPA-certified technicians size the system correctly, pull the required City of San José permits, and leave your home clean.",
    ],
    included: [
      "Manual J load calculation and a written system design",
      "Mechanical permit and HERS duct-leakage testing",
      "Removal and eco-friendly disposal of your old equipment",
      "New refrigerant lines, condensate drain, and code-required safety upgrades",
      "Manufacturer and Promax labor warranty registration",
      "Final walkthrough of your new thermostat and controls",
    ],
    signs: [
      "Your system is 12–15+ years old and repairs keep adding up",
      "Some rooms never reach the temperature you set",
      "Energy bills have climbed without any change in how you use the system",
      "The system runs constantly, short-cycles, or won't shut off",
      "You're adding square footage or converting to an all-electric heat pump",
      "Rust, burning smells, or unusual noises coming from the equipment",
    ],
    brands: ["Mitsubishi Electric", "Bryant", "Carrier", "Trane", "Lennox", "Daikin"],
    faqs: [
      {
        q: "How much does a new HVAC system cost in San Jose?",
        a: "Most full HVAC replacements in the San Jose area run from about $8,000 to $20,000+ depending on system type, home size, and ductwork condition. We provide free, itemized estimates and check every rebate and incentive you qualify for, so the number you approve is the real net cost.",
      },
      {
        q: "Do I need a permit to replace my HVAC system in San Jose?",
        a: "Yes — HVAC changeouts in San Jose and Santa Clara County require a mechanical permit and, since 2023, HERS testing. As a licensed contractor, Promax pulls the permit and schedules the inspections for you, so your installation is fully code-compliant.",
      },
      {
        q: "How long does an HVAC installation take?",
        a: "A straightforward furnace or AC changeout is usually done in one day. Full system replacements with new ductwork or a furnace-to-heat-pump conversion typically take 2–3 days. We confirm the timeline in your free estimate before any work starts.",
      },
      {
        q: "Is it better to fix or fully replace an old HVAC system?",
        a: "As a rule of thumb, if the system is over 12–15 years old and a single repair costs more than a third of a full replacement, replacement is usually the better investment — you stop pouring money into a unit near the end of its life and gain efficiency plus a full warranty. We'll give you both numbers side by side at your free estimate.",
      },
      {
        q: "Do you offer financing for a full system replacement?",
        a: "Yes — we offer approved-credit financing with deferred-interest and low-APR terms, so a full HVAC replacement can be paid down monthly. Ask about current financing offers when you book your free estimate.",
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
    kind: "overview",
    children: ["air-conditioner-repair", "air-conditioner-installation", "air-conditioner-maintenance"],
    body: [
      "San Jose summers are getting hotter, and a struggling air conditioner turns your home into an oven fast. Promax Service Group provides complete air conditioning services across San Jose and Santa Clara County — same-day AC repair, high-efficiency air conditioner installation, seasonal tune-ups, and honest advice on whether to fix or replace your cooling system.",
      "We service every major brand — Bryant, Carrier, Trane, Lennox, Daikin, Mitsubishi, Rheem, and Goodman — and as a Bryant Factory Authorized Dealer we install new SEER2-rated systems that cut cooling bills while keeping your home comfortable through triple-digit heat waves. Every visit ends with upfront pricing, no upsells, and a system you can rely on.",
    ],
    included: [
      "Diagnosis or design tailored to your specific system and home",
      "Upfront, flat-rate pricing before any work begins",
      "Work performed by our own licensed, EPA-certified technicians",
      "A written estimate that includes any required permit",
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
    kind: "overview",
    children: ["furnace-repair", "furnace-installation"],
    body: [
      "Bay Area winters may be mild, but a dead furnace on a 38° January morning in San Jose is still an emergency. Promax Service Group delivers fast, honest furnace service across San Jose and Santa Clara County: emergency heating repair, high-efficiency furnace installation, annual safety inspections, and heat pump conversions for homeowners ready to go all-electric.",
      "Our EPA-certified technicians work on all gas and electric furnace brands and install 80%–96%+ AFUE Bryant systems sized correctly for your home. Every heating repair includes a combustion safety check and carbon monoxide test — because a safe furnace matters as much as a warm house.",
    ],
    included: [
      "Combustion safety check and carbon monoxide test on every furnace visit",
      "Correct sizing based on your home, not just the old nameplate",
      "Mechanical permit and required venting brought up to current code",
      "Manufacturer and Promax labor warranty registration",
    ],
    faqs: [
      {
        q: "Why is my furnace blowing cold air?",
        a: "Common culprits include a faulty igniter, a dirty flame sensor, a stuck gas valve, or a thermostat fan setting stuck on ON. Some are quick fixes; others signal a failing heat exchanger, which is a safety issue. We diagnose it on-site with upfront pricing before any repair.",
      },
      {
        q: "Should I repair or replace my old furnace?",
        a: "A useful rule: if the furnace is 15+ years old and the repair costs more than a third of replacement, replace it. New 96% AFUE models cut gas usage dramatically, and switching to a heat pump may still qualify for some current incentives — we'll check exactly what applies to your project at the free estimate.",
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
    title: "Heat Pump Installation San Jose, CA | Promax Service",
    metaDesc:
      "Heat pump installation in San Jose — efficient heating and cooling in one system from a Mitsubishi Diamond Contractor. Free estimates: (669) 777-1997.",
    sub: "Want lower energy bills and year-round comfort? A heat pump delivers efficient heating and cooling in one system.",
    image: "/images/hva4.jpg",
    primary: true,
    kind: "overview",
    children: ["heat-pump-repair"],
    body: [
      "Heat pumps are the fastest-growing home comfort upgrade in the Bay Area — one system that heats in winter, cools in summer, and runs 2–4× more efficiently than a gas furnace. Promax Service Group installs ducted and ductless heat pumps across San Jose, Cupertino, Sunnyvale, and Santa Clara County, from single-room mini splits to whole-home all-electric conversions.",
      "As a Mitsubishi Diamond Contractor, we install cold-climate hyper-heat systems that hold full capacity even on the coldest Bay Area nights. Rebate programs shift constantly — TECH Clean California funding is currently exhausted statewide, and the federal 25C tax credit ended for installations after December 31, 2025 — so we check every rebate and incentive you actually qualify for at your free estimate instead of quoting numbers that may no longer apply.",
    ],
    included: [
      "Manual J load calculation sized to your home's actual heat loss/gain",
      "Cold-climate (hyper-heat) equipment rated for Bay Area winters",
      "Compatibility check with your existing ductwork or a ductless design",
      "Electrical panel assessment for the new circuit",
      "Mechanical permit and HERS testing",
      "Rebate and incentive check at no charge",
    ],
    signs: [
      "Your furnace and AC are both aging and due for replacement around the same time",
      "You want to stop burning gas and go all-electric",
      "Summer cooling bills or winter gas bills feel out of control",
      "You're building an ADU or addition and need efficient heating and cooling",
      "You want one system instead of maintaining separate furnace and AC equipment",
    ],
    brands: ["Mitsubishi Electric", "Bryant", "Daikin", "Carrier", "Trane"],
    faqs: [
      {
        q: "What rebates are available for heat pumps in San Jose?",
        a: "TECH Clean California funding is exhausted statewide, and the federal 25C tax credit ended for installations completed after December 31, 2025. HEEHRA (the income-qualified program) still exists, but single-family funding is fully reserved statewide as of February 2026 — we can add you to the waitlist and apply it automatically if funds return. We check every rebate and incentive you currently qualify for at your free estimate, so your quote reflects real numbers, not expired programs.",
      },
      {
        q: "Do heat pumps work well in Bay Area winters?",
        a: "Yes — modern inverter heat pumps heat efficiently well below freezing, and San Jose winters rarely drop under 35°F. Mitsubishi hyper-heat models we install maintain 100% heating capacity down to 5°F, far colder than the Bay Area ever gets.",
      },
      {
        q: "Can a heat pump replace both my furnace and AC?",
        a: "Exactly — that's the point. One heat pump replaces both systems, uses your existing ducts in most homes, and eliminates gas combustion in the living space. We'll assess your ductwork and electrical panel during the free estimate.",
      },
      {
        q: "How long does a heat pump last?",
        a: "A well-installed heat pump typically lasts 15–20 years, similar to a central AC, with the compressor doing double duty year-round. Correct sizing and an accurate refrigerant charge at install time do more for lifespan than any single upgrade afterward.",
      },
      {
        q: "Will a heat pump raise my electric bill?",
        a: "Your electric bill will go up and your gas bill will drop — for most San Jose homes on PG&E rates, the net effect is close to a wash or a modest savings, and it's a bigger savings if you also add solar. We'll model the real numbers for your home and usage during the free estimate.",
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
    kind: "overview",
    children: [
      "water-heater-repair",
      "water-heater-installation",
      "water-heater-replacement",
      "heat-pump-water-heater",
      "tankless-water-heater",
    ],
    body: [
      "Few things stop a household faster than no hot water. Promax Service Group repairs, replaces, and installs water heaters across San Jose and the Bay Area — traditional tank units, space-saving tankless systems, and ultra-efficient heat pump water heaters that cut water-heating energy use by up to 70%.",
      "As Navien Service Specialists, we're experts in tankless and condensing systems, and we install every water heater to current California code: seismic strapping, proper venting, expansion tanks, and drip pans. If your unit is leaking, rumbling, or past its 10–12 year lifespan, we'll give you a straight answer on repair versus replacement — with a free estimate either way.",
    ],
    included: [
      "Straight repair-vs-replace assessment before any work starts",
      "Seismic strapping, expansion tank, and drip pan brought up to current code",
      "Proper venting sized for tank, tankless, or heat pump equipment",
      "Same-day service for no-hot-water calls, 7 days a week",
      "Free written estimate comparing tank, tankless, and heat pump options",
    ],
    signs: [
      "No hot water, or hot water that runs out fast",
      "Rumbling, popping, or banging sounds from the tank",
      "Rusty or metallic-tasting water",
      "Water pooling at the base of the tank",
      "The unit is past its 10–12 year (tank) or 15–20 year (tankless) lifespan",
    ],
    brands: ["Rheem", "A.O. Smith", "Bradford White", "Navien", "Noritz"],
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
        a: "Heat pump water heaters no longer qualify for the federal 25C tax credit — that credit ended for installations after December 31, 2025. TECH Clean California funding is exhausted, and HEEHRA's income-qualified, single-family funding is fully reserved statewide as of February 2026 (we can add you to the waitlist and apply it if funds return). We check every rebate and incentive you currently qualify for at your free estimate.",
      },
      {
        q: "Can you install the same day my water heater fails?",
        a: "For no-hot-water calls we offer same-day service, 7 days a week — call in the morning and we'll usually have a technician out that day to diagnose it and quote a repair or replacement on the spot.",
      },
      {
        q: "Do you install both gas and electric water heaters?",
        a: "Yes — tank, tankless, and heat pump water heaters in both gas and electric configurations, including converting from one fuel type to another where the gas line, venting, or electrical panel supports it.",
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
    kind: "overview",
    children: ["mini-split-repair"],
    body: [
      "No ducts? No problem. Ductless mini split systems deliver whisper-quiet heating and cooling to any room — perfect for San Jose's older Willow Glen and Naglee Park homes, garage conversions, ADUs, home offices, and additions where extending ductwork isn't practical. One outdoor unit can serve up to eight indoor zones, each with its own remote and temperature.",
      "Promax is a Mitsubishi Diamond Contractor — the highest tier of factory training and warranty backing Mitsubishi offers — and we also install Daikin, Bryant, and Cooper & Hunter ductless systems. Installation is clean and fast: most single-zone mini splits are running the same day, with only a 3-inch line-set opening in the wall.",
    ],
    included: [
      "Load calculation sized per room or zone, not guessed",
      "Line-set routing through a single ~3-inch wall penetration per indoor head",
      "Mitsubishi, Daikin, or Cooper & Hunter equipment matched to your space",
      "Condensate drain routed to a safe termination point",
      "Wall-mount, ceiling cassette, or floor-console head styles",
      "Wi-Fi control setup and a walkthrough of the remote/app",
    ],
    signs: [
      "A room addition, garage conversion, or ADU has no ductwork",
      "One bedroom or home office is always too hot or too cold",
      "You want zone-by-zone control instead of one house-wide thermostat",
      "Extending existing ductwork isn't practical or would be very costly",
      "You want quiet, efficient heating and cooling without a furnace",
    ],
    brands: ["Mitsubishi Electric", "Daikin", "Bryant", "Cooper & Hunter"],
    faqs: [
      {
        q: "How much does mini split installation cost in San Jose?",
        a: "Single-zone installations typically run $4,500–$8,000 installed; multi-zone systems $12,000–$25,000+ depending on zones and line-set runs. These are rebate-sensitive numbers: TECH Clean California funding is exhausted and the federal 25C tax credit ended for installations after December 31, 2025, so we quote you the real, current cost and flag any rebate you do qualify for at the free estimate.",
      },
      {
        q: "Do mini splits heat as well as they cool?",
        a: "Yes — every system we install is a heat pump that both heats and cools. Mitsubishi hyper-heat models keep full heating output far below any temperature San Jose ever sees, so one system covers you year-round.",
      },
      {
        q: "Single-zone or multi-zone — which do I need?",
        a: "Single-zone is ideal for one problem room (a garage office, an ADU, a hot upstairs bedroom). Multi-zone makes sense when you're conditioning three or more rooms — one outdoor unit, individual control in each room. We'll design both options in a free in-home assessment.",
      },
      {
        q: "How long does mini split installation take?",
        a: "A single-zone system is typically installed and running the same day — usually 4–8 hours from mounting the indoor head to commissioning the outdoor unit. Multi-zone systems with longer line-set runs can take an extra day or two.",
      },
      {
        q: "How loud is a ductless mini split?",
        a: "Indoor heads run around 19–30 dB — quieter than a whisper — and outdoor condensers run 50–60 dB, comparable to a central AC's outdoor unit but often quieter thanks to inverter-driven variable speed.",
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
    kind: "overview",
    body: [
      "Variable Refrigerant Flow (VRF — Daikin calls it VRV) is the gold standard for buildings that need independent temperature control in many rooms at once: offices, medical suites, multi-family buildings, and large custom homes across San Jose and Silicon Valley. Instead of blasting one temperature everywhere, a VRF system continuously modulates refrigerant to each zone — some spaces can heat while others cool, simultaneously.",
      "Promax designs and installs Mitsubishi CITY MULTI and Daikin VRV systems from load calculation through commissioning. Our factory-trained team handles branch controllers, heat-recovery piping, controls integration, and the permits — delivering 30–40% energy savings over conventional rooftop systems with far better comfort.",
    ],
    included: [
      "Load calculation and zone-by-zone design (Mitsubishi CITY MULTI or Daikin VRV)",
      "Branch controller and refrigerant piping layout engineered to spec",
      "Controls integration with a BMS or standalone touchscreen controller",
      "Permits, commissioning, and manufacturer start-up documentation",
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
    title: "Rooftop HVAC Units San Jose | Commercial | Promax",
    metaDesc:
      "Rooftop package unit installation, replacement & repair for San Jose businesses. Crane set, curb adapters, permits & commissioning. Call (669) 777-1997.",
    sub: "Reliable rooftop HVAC systems that stand up to Bay Area weather — perfect for commercial and light-commercial spaces.",
    image: "/images/hva8.jpg",
    primary: true,
    kind: "overview",
    body: [
      "Restaurants, retail spaces, offices, and light-industrial buildings across San Jose rely on rooftop package units (RTUs) for heating and cooling — and when one fails in July, every hour costs you customers. Promax installs, replaces, and repairs rooftop package units throughout Santa Clara County, handling everything from crane scheduling and curb adapters to gas, electrical, and Title 24 compliance.",
      "We work with building owners and property managers on both emergency changeouts and planned replacements, and we'll assess whether a modern high-efficiency RTU or a VRF conversion is the better long-term investment for your building. Preventive maintenance contracts keep your tenants comfortable and your equipment under warranty.",
    ],
    included: [
      "Crane scheduling and curb adapter fabrication when units aren't a drop-in match",
      "Gas, electrical, and refrigerant hookups to code",
      "Title 24 compliance documentation for commercial changeouts",
      "Startup, commissioning, and a walkthrough for your maintenance team",
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
    kind: "overview",
    body: [
      "In many San Jose homes — especially those built before the 1990s — up to 30% of heated and cooled air never reaches the rooms, leaking instead into attics and crawlspaces through old, crushed, or disconnected ducts. If some rooms bake while others freeze, or your energy bills keep climbing, your ductwork is the likely culprit.",
      "Promax designs, replaces, seals, and balances duct systems across Santa Clara County: new R-8 insulated runs, mastic-sealed connections, properly sized returns, and HERS-verified leakage testing required by California code. Better ducts make every system you own — furnace, AC, or heat pump — quieter, more efficient, and more comfortable.",
    ],
    included: [
      "Duct leakage test with a documented before/after number",
      "New R-8 insulated supply and return runs where needed",
      "Mastic-sealed joints and connections, not just tape",
      "Properly sized returns so airflow is balanced room to room",
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
        a: "Duct sealing and replacement can still qualify for utility efficiency rebates on their own, and we check for those at your free estimate. The federal 25C tax credit for combined HVAC/duct projects ended for installations after December 31, 2025, so we won't quote a credit that no longer applies — only rebates that are actually active.",
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
    kind: "overview",
    body: [
      "Two-story homes all over San Jose share the same complaint: the upstairs is sweltering while the downstairs is cold. A zone control system fixes that physics problem — motorized dampers in your ductwork, controlled by separate thermostats, direct conditioned air only where it's needed. Bedrooms stay cool at night without freezing the living room; the home office stays comfortable all day without conditioning empty rooms.",
      "Promax installs 2–8 zone systems with smart thermostats (Ecobee, Honeywell, Bryant Evolution) on both new installations and existing systems. Zoning typically trims 15–25% off heating and cooling costs because you stop paying to condition rooms nobody is using.",
    ],
    included: [
      "2–8 zone dampers matched to your existing ductwork",
      "Smart thermostats per zone (Ecobee, Honeywell, or Bryant Evolution)",
      "Bypass or modulating-equipment setup to protect airflow",
      "Compatible with new installations or retrofits onto existing systems",
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
    kind: "overview",
    body: [
      "Between spring allergies, wildfire smoke season, and homes sealed tight for efficiency, indoor air in the Bay Area often carries more pollutants than the air outside. Promax installs whole-home indoor air quality systems in San Jose that work through your existing HVAC: MERV-13 to HEPA-grade media filtration, UV germicidal lights at the coil, energy-recovery ventilators (ERVs) that bring in fresh filtered air, and whole-home humidity control.",
      "Unlike portable purifiers that clean one corner of one room, a whole-home system treats every cubic foot of air your family breathes — silently, automatically, with one filter change a year for most media cabinets. Ask about IAQ add-ons with any furnace, AC, or heat pump installation; integrated at install time, they cost significantly less.",
    ],
    included: [
      "MERV-13 to HEPA-grade media filtration cabinets",
      "UV germicidal lights installed at the evaporator coil",
      "Energy-recovery ventilators (ERVs) for fresh, filtered outdoor air",
      "Whole-home humidity control add-ons",
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
    primary: true,
    kind: "repair",
    parent: "air-conditioner",
    body: [
      "When your air conditioner quits during a San Jose heat wave, you need a repair team that answers the phone and shows up — not a two-week wait. Promax Service Group provides same-day and next-day AC repair across San Jose, Santa Clara, Campbell, and Milpitas, seven days a week. Our trucks arrive stocked with common capacitors, contactors, fan motors, and refrigerant so most repairs finish in a single visit.",
      "We diagnose and repair every brand — Bryant, Carrier, Trane, Lennox, Goodman, Rheem, Daikin, and more — with flat, upfront pricing you approve before we start. And if your system is beyond sensible repair, we'll say so honestly and credit the service call toward a replacement.",
    ],
    included: [
      "Diagnosis with common capacitors, contactors, motors, and refrigerant stocked on the truck",
      "Upfront flat-rate pricing you approve before any repair starts",
      "Diagnostic fee waived when you approve the repair",
      "Honest repair-vs-replace guidance, with the service call credited toward a new system",
      "All major brands: Bryant, Carrier, Trane, Lennox, Daikin, Rheem, Goodman",
    ],
    signs: [
      "Warm air blowing from the vents instead of cold",
      "The outdoor unit is running but the house isn't cooling",
      "Ice building up on the indoor coil or refrigerant lines",
      "Short-cycling, or the system won't turn on at all",
      "Loud grinding, buzzing, or clicking from the outdoor unit",
      "A burning smell or a tripped breaker when the AC runs",
    ],
    brands: ["Bryant", "Carrier", "Trane", "Lennox", "Daikin", "Rheem", "Goodman"],
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
      {
        q: "Can you repair any brand of air conditioner, not just Bryant?",
        a: "Yes — we carry parts and diagnostic tools for every major brand: Bryant, Carrier, Trane, Lennox, Daikin, Rheem, Goodman, and more. Being a Bryant Factory Authorized Dealer gives us faster access to Bryant OEM parts, but it doesn't limit what we work on.",
      },
      {
        q: "What's the most common reason a San Jose AC fails in summer?",
        a: "A failed run capacitor is the single most common cause — it's a $20–$40 part that we usually carry on the truck, so most capacitor failures are fixed in one visit. Refrigerant leaks and dirty condenser coils are the next most common causes of weak cooling.",
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
    kind: "install",
    parent: "air-conditioner",
    body: [
      "A new air conditioner is only as good as its installation — an oversized or badly ducted system short-cycles, dehumidifies poorly, and dies young. Promax installs central AC and heat pump cooling systems across San Jose the right way: a Manual J load calculation for your actual square footage and sun exposure, matched indoor and outdoor equipment, new refrigerant lines where needed, city permits, and California-required HERS verification.",
      "As a Bryant Factory Authorized Dealer we offer factory-backed equipment at every budget level, from solid single-stage systems to whisper-quiet variable-speed inverters. Financing is available, free estimates always include good/better/best options, and installation is usually complete in one day.",
    ],
    included: [
      "Manual J load calculation for your actual home, not the old nameplate",
      "Matched indoor and outdoor equipment for rated efficiency",
      "New refrigerant lines where the old ones don't meet spec",
      "City permit and California-required HERS verification",
      "Financing options and a good/better/best written estimate",
    ],
    signs: [
      "Your current AC is 12–15+ years old or needs R-22 refrigerant",
      "You're adding square footage or finishing a garage/attic space",
      "Repairs are becoming frequent or increasingly expensive",
      "You want a quieter, higher-efficiency SEER2 system",
    ],
    brands: ["Bryant", "Carrier", "Trane", "Lennox", "Daikin", "Rheem"],
    faqs: [
      {
        q: "What size AC do I need for my house?",
        a: "Roughly one ton of cooling per 600–1,000 sq ft in San Jose's climate, but insulation, windows, orientation, and duct condition swing that widely. We perform a real load calculation instead of guessing — correct sizing matters more than brand for comfort and longevity.",
      },
      {
        q: "Should I install an AC or a heat pump?",
        a: "If your furnace is also aging, a heat pump replaces both for a modest premium and eliminates gas combustion for cooling season — we'll check current rebate and incentive eligibility for you (HEEHRA's single-family funding is fully reserved statewide right now, so we'd add you to the waitlist). If your furnace is newer, a matched AC may make more financial sense. We'll price both in your free estimate.",
      },
      {
        q: "Does a new AC installation include a permit?",
        a: "Always. San Jose requires a mechanical permit and HERS testing for AC changeouts, and unpermitted work can bite you at resale. Permit fees and testing are line items in our written quote — never a surprise.",
      },
      {
        q: "How long does a new AC take to install?",
        a: "A straightforward changeout with existing, compatible ductwork is usually a one-day job. Adding new line sets, a new electrical disconnect, or duct modifications can extend it to a day and a half — we'll give you a firm timeline in your written estimate.",
      },
      {
        q: "What SEER2 rating should I choose?",
        a: "California requires a minimum of 14.3 SEER2 for new central air conditioners. For San Jose's summers, we usually recommend 15.2–17+ SEER2 — the extra efficiency pays back over the system's 15-year-plus lifespan, especially if you run the AC daily in July and August.",
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
    kind: "maintenance",
    parent: "air-conditioner",
    body: [
      "Air conditioners rarely die without warning — they drift out of tune, lose efficiency for a few seasons, then fail on the hottest week of the year when every HVAC company in San Jose is booked solid. An annual professional tune-up breaks that cycle. Our 21-point AC maintenance visit cleans the condenser coil, verifies refrigerant charge, tests capacitors and electrical connections under load, flushes the condensate drain, and measures actual cooling performance.",
      "Maintained systems use 5–15% less electricity, last years longer, and keep manufacturer warranties valid (most brands require documented annual service). Spring appointments book fastest — schedule before the first heat wave and you'll never wait in line behind emergency calls.",
    ],
    included: [
      "21-point inspection with a written report and photos",
      "Condenser coil cleaning and refrigerant charge verification",
      "Capacitor, contactor, and electrical connection testing under load",
      "Condensate drain flush and a measured temperature split",
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
    primary: true,
    kind: "repair",
    parent: "furnace",
    body: [
      "A furnace that won't ignite, keeps shutting off, or blows cold air needs attention fast — especially with kids or older family members in the house. Promax provides prompt furnace repair throughout San Jose and Santa Clara County, seven days a week. We troubleshoot igniters, flame sensors, gas valves, inducer motors, control boards, and thermostat faults on all major brands, and our vans carry the common parts to finish most repairs in one visit.",
      "Every furnace repair includes a combustion analysis and carbon monoxide safety test at no extra charge. If we ever find a cracked heat exchanger — the one furnace problem that genuinely endangers your family — we document it with photos and walk you through every option, repair or replace, with honest numbers.",
    ],
    included: [
      "Igniter, flame sensor, gas valve, and inducer motor diagnostics",
      "Free combustion analysis and carbon monoxide safety test with every visit",
      "Upfront flat-rate pricing before any repair begins",
      "Common parts stocked on the truck for most major-brand repairs",
      "Photo documentation if a cracked heat exchanger is found",
    ],
    signs: [
      "The furnace won't ignite or keeps shutting off",
      "It's blowing cold air instead of heat",
      "Short-cycling — turning on and off repeatedly",
      "A burning smell, rattling, or banging when it runs",
      "The pilot light won't stay lit or keeps going out",
      "Your carbon monoxide detector has alarmed",
    ],
    brands: ["Bryant", "Carrier", "Trane", "Lennox", "Goodman", "Amana"],
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
      {
        q: "Is it safe to run my furnace while waiting for a repair?",
        a: "If you smell gas, hear a CO alarm, or see soot around the unit, shut it off and call us immediately — those are safety issues, not comfort issues. Cold air blowing, short-cycling, or a furnace that won't start are usually safe to leave off until we arrive, since running it repeatedly can wear the parts further.",
      },
      {
        q: "Do you carry parts for older furnace brands?",
        a: "Yes — our vans stock common igniters, flame sensors, control boards, and blower motors across Bryant, Carrier, Trane, Lennox, Goodman, and other major brands. For obsolete parts on very old units, we'll source them fast or walk you through replacement options.",
      },
    ],
  },
  {
    slug: "furnace-installation",
    name: "Furnace Installation",
    h1: "Furnace Installation in San Jose, CA",
    title: "Furnace Installation San Jose | 96% AFUE Systems | Promax",
    metaDesc:
      "High-efficiency furnace installation in San Jose from a Bryant Factory Authorized Dealer. Correct sizing, permits & HERS testing. Free estimates, financing.",
    sub: "Thinking about a new furnace to conquer Bay Area chills? We install high-efficiency units that cut bills and even out heat.",
    image: "/images/furnace-photo-min.jpg",
    kind: "install",
    parent: "furnace",
    body: [
      "If your furnace is over 15 years old, every winter is a gamble — and every therm of gas it burns costs more than it should. Promax installs high-efficiency furnaces across San Jose, from dependable 80% AFUE single-stage units to 96%+ AFUE two-stage and modulating systems that deliver steady, even heat at a whisper. As a Bryant Factory Authorized Dealer, we back installations with full factory warranties and our own labor guarantee.",
      "Every installation starts with correct sizing for your home — not just copying the old nameplate — and includes new venting as required, a code-compliant condensate drain, city permit, and HERS duct testing. Considering going all-electric instead? We'll quote a heat pump conversion side-by-side and check your current rebate eligibility so you can compare with real numbers.",
    ],
    included: [
      "Correct sizing based on a real load calculation",
      "New venting brought up to current code where required",
      "Code-compliant condensate drain and combustion-air provisions",
      "City permit and HERS duct testing",
      "Full factory warranty registration plus our own labor guarantee",
    ],
    signs: [
      "Your furnace is 15+ years old or was recently repaired",
      "You want higher efficiency to cut winter gas bills",
      "You're comparing a furnace replacement against an all-electric heat pump",
      "The current system is too loud, undersized, or heats the home unevenly",
    ],
    brands: ["Bryant", "Carrier", "Trane", "Lennox", "Goodman", "Amana"],
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
        a: "Often yes, if the AC is newer and the blower is compatible. If both are past 12–15 years, replacing together (or converting to a single heat pump) saves duplicate labor and usually nets better pricing and any rebate you currently qualify for.",
      },
      {
        q: "Do I need a new thermostat with a new furnace?",
        a: "Not always — many smart thermostats are compatible across brands. If your furnace is switching to two-stage or modulating operation, though, a compatible communicating thermostat (like a Bryant Evolution model) unlocks the extra comfort and efficiency the equipment is designed for.",
      },
      {
        q: "Can you install a furnace in one day?",
        a: "A like-for-like changeout with existing, code-compliant venting is typically a one-day job. Adding new venting, upsizing gas lines, or converting to a two-stage/modulating system can extend it — your written estimate spells out the timeline before work starts.",
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
    kind: "repair",
    parent: "hvac",
    body: [
      "Heating, cooling, thermostat, or airflow — when any part of your home comfort system misbehaves, Promax fixes it. We're a licensed C-20 HVAC contractor (Lic #1133885) repairing every type of system installed in San Jose homes: gas furnaces, central AC, heat pumps, ductless mini splits, package units, and zoned systems, from every major manufacturer.",
      "Our diagnostic process is methodical, our pricing is flat-rate and approved by you before work starts, and our repairs are guaranteed. We're open 7 days a week from 7 AM to 10 PM, because comfort problems don't respect business hours — and neither do we.",
    ],
    included: [
      "Methodical diagnosis across heating, cooling, thermostat, and airflow issues",
      "Flat-rate pricing approved by you before work starts",
      "Diagnostic fee waived when you approve the repair",
      "Guaranteed repairs backed by our own labor warranty",
      "7 days a week, 7 AM–10 PM, no weekend surcharge",
    ],
    signs: [
      "No heat, no cooling, or the system won't turn on at all",
      "The thermostat is blank or unresponsive",
      "Airflow is weak, uneven, or one room won't reach temperature",
      "Strange noises, smells, or a tripped breaker when the system runs",
    ],
    brands: ["Bryant", "Carrier", "Trane", "Lennox", "Rheem", "Daikin", "Mitsubishi Electric", "Goodman"],
    faqs: [
      {
        q: "Do you charge for HVAC diagnostics?",
        a: "We charge a standard diagnostic fee that is waived entirely when you approve the repair with us. That applies every day of the week, including weekends.",
      },
      {
        q: "Which HVAC brands do you service?",
        a: "All of them — Bryant, Carrier, Trane, Lennox, Rheem, Ruud, Goodman, Amana, Daikin, Mitsubishi, Fujitsu, American Standard, York, and more. Factory relationships with Bryant and Mitsubishi give us fast access to OEM parts.",
      },
      {
        q: "My thermostat is blank — is that an HVAC problem?",
        a: "Usually yes: a tripped float switch from a clogged condensate drain, a blown low-voltage fuse, or a failed transformer commonly kill thermostat power. All are quick fixes for a technician — and much cheaper than the new system a blank screen makes people fear.",
      },
      {
        q: "How fast can you respond to a no-heat or no-cool emergency?",
        a: "We offer same-day service for no-cool, no-heat, and no-hot-water calls, 7 days a week — call in the morning for the best chance of same-day arrival. Non-emergency repairs are typically scheduled within a day or two.",
      },
      {
        q: "Do you guarantee your repair work?",
        a: "Yes — every repair is backed by our own labor warranty, and we use OEM or OEM-equivalent parts so manufacturer warranties stay intact where applicable.",
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
    kind: "install",
    parent: "hvac",
    body: [
      "A complete HVAC installation is the one home upgrade you feel every single day for the next 15–20 years. Promax designs and installs full systems across San Jose and Santa Clara County: furnace + AC pairs, all-electric heat pumps, ductless multi-zone setups, new ductwork, zoning, and smart controls — engineered as one system rather than parts bolted together.",
      "Your project starts with a free in-home assessment and load calculation, continues through permitted, code-compliant installation by our own employees (never subcontractors), and ends with commissioning, HERS testing, and a walkthrough of your new controls. Any rebate or incentive you qualify for is checked and handled for you — nothing assumed, nothing left on the table.",
    ],
    included: [
      "Free in-home assessment and load calculation",
      "Permitted, code-compliant installation by our own employees",
      "Commissioning, HERS testing, and a controls walkthrough",
      "Rebate and incentive check included with every estimate",
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
    kind: "repair",
    parent: "water-heater",
    body: [
      "No hot water is a today problem, not a next-week problem. Promax repairs tank and tankless water heaters throughout San Jose — relighting and replacing pilot assemblies, swapping heating elements and thermostats, fixing gas valves, descaling tankless heat exchangers, and stopping leaks at fittings and valves before they become floor damage.",
      "As Navien Service Specialists we're factory-trained on the tankless systems most plumbers struggle with, and we service Rheem, Bradford White, A.O. Smith, Rinnai, Noritz, and every other common brand. If the unit is too far gone, you'll get a straight answer and a same-visit replacement quote — often with next-day installation.",
    ],
    included: [
      "Diagnosis of tank, tankless, and heat pump water heaters",
      "Pilot, thermocouple, heating element, and thermostat repairs",
      "Tankless descaling and error-code troubleshooting",
      "Leak repair at fittings and valves before it becomes water damage",
      "Same-day service for no-hot-water calls, 7 days a week",
    ],
    signs: [
      "No hot water, or it runs out much faster than it used to",
      "Lukewarm water no matter how you adjust the setting",
      "Popping, rumbling, or banging sounds from the tank",
      "Water pooling around the base of the unit",
      "A tankless unit displaying an error code",
    ],
    brands: ["Rheem", "Bradford White", "A.O. Smith", "Navien", "Rinnai", "Noritz"],
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
      {
        q: "Should I repair or replace my water heater?",
        a: "If the tank itself is leaking (not just a fitting) or it's past 10–12 years old, replacement is almost always the right call — the internal liner has failed and can't be repaired. Element, thermostat, valve, and most tankless component failures are usually worth repairing on a unit under 8–10 years old.",
      },
      {
        q: "How fast can you fix a no-hot-water emergency?",
        a: "We offer same-day service for no-hot-water calls, 7 days a week — call in the morning and we'll typically have a technician out that day with common parts already on the truck.",
      },
    ],
  },
  {
    slug: "water-heater-installation",
    name: "Water Heater Installation",
    h1: "Water Heater Installation in San Jose, CA",
    title: "Water Heater Installation San Jose, CA | Promax",
    metaDesc:
      "Water heater installation in San Jose — tank, tankless, or heat pump. We compare real costs and check current rebates for you. Call (669) 777-1997.",
    sub: "Not sure whether to repair, replace, or upgrade? We help San Jose homeowners choose the right water heater — tank, tankless, or heat pump — for their home and budget.",
    image: "/images/hva5.jpg",
    kind: "install",
    parent: "water-heater",
    body: [
      "Choosing a new water heater comes down to three real options: a traditional tank, a tankless system, or a heat pump water heater — and the right one depends on your household's hot water use, available space, and electrical or gas capacity, not just the sticker price. Promax installs all three across San Jose and Santa Clara County, and we'll walk you through the real trade-offs instead of just quoting the cheapest box.",
      "A standard tank is the lowest upfront cost and the simplest to maintain — a straightforward swap for most households. A tankless system costs more to install but delivers endless hot water and roughly double the lifespan, which is why we're Navien Service Specialists and run tankless water heater installation as its own dedicated service. A heat pump water heater cuts water-heating energy use by up to 70% and is our other dedicated install specialty — see our heat pump water heater and tankless water heater pages for the full details on each, including sizing, venting or electrical requirements, and what a Sunnyvale family saved after switching.",
    ],
    included: [
      "A plain-English comparison of tank, tankless, and heat pump costs",
      "Correct sizing for your household's peak hot-water demand",
      "Permit, seismic strapping, and code-required upgrades on every install",
      "A rebate and incentive check specific to the equipment you choose",
    ],
    signs: [
      "Your current unit is near or past its expected lifespan",
      "You're remodeling and want to right-size hot water for a bigger household",
      "You're comparing gas vs. electric or considering going all-electric",
      "You want to lower water-heating energy costs long-term",
    ],
    brands: ["Rheem", "A.O. Smith", "Bradford White", "Navien"],
    faqs: [
      {
        q: "Tank, tankless, or heat pump — which should I choose?",
        a: "A tank is the simplest and cheapest to install and is fine for most households. Tankless is the right call if you want endless hot water and have the gas line and venting capacity for it. A heat pump water heater is the best long-term value if you have the space and electrical capacity, cutting operating costs by up to 70%. We size and price all three at your free estimate.",
      },
      {
        q: "How much does water heater installation cost in San Jose?",
        a: "A like-for-like tank installation typically runs $2,200–$3,800. Tankless installations run $4,500–$7,500 depending on gas line and venting changes. Heat pump water heaters land in a similar range to tankless before any rebates. We'll give you firm, itemized numbers for whichever option you're considering.",
      },
      {
        q: "Are there rebates for a new water heater right now?",
        a: "TECH Clean California funding is exhausted statewide, and the federal 25C tax credit ended for installations after December 31, 2025. HEEHRA's income-qualified, single-family funding is fully reserved statewide — we can add you to the waitlist and apply it if funds return. We check every rebate you currently qualify for at your free estimate.",
      },
      {
        q: "Do you handle the permit for a water heater installation?",
        a: "Yes — every installation includes the required Santa Clara County or City of San José permit and code upgrades like seismic strapping, an expansion tank, and a drip pan where required. It's included in your written estimate, never a surprise add-on.",
      },
      {
        q: "Can I switch fuel types when I replace my water heater?",
        a: "Often yes — converting gas to electric (or adding a heat pump) or upgrading to a larger gas line for tankless is common during replacement. We'll assess your panel capacity or gas line during the free estimate and quote any upgrade needed.",
      },
    ],
  },
  {
    slug: "heat-pump-water-heater",
    name: "Heat Pump Water Heater",
    h1: "Heat Pump Water Heater Installation in San Jose, CA",
    title: "Heat Pump Water Heater Installation San Jose | Promax",
    metaDesc:
      "Heat pump water heater installation in San Jose — cut water-heating costs up to 70%. Rheem & A.O. Smith specialists. Free estimates: (669) 777-1997.",
    sub: "Want to slash water-heating costs and never run out of hot water? We install heat pump water heaters engineered for San Jose garages and utility rooms.",
    image: "/images/water-heater-photo-min.jpg",
    primary: true,
    kind: "install",
    parent: "water-heater",
    body: [
      "A heat pump water heater doesn't generate heat the way a gas or standard electric tank does — it pulls warmth out of the surrounding air and moves it into the water, which is why it uses roughly a third of the energy of a conventional electric tank. For San Jose homeowners tired of watching water-heating costs climb, it's the single most effective upgrade in the house: real households cut their water-heating bill by 50–70% after switching, with the same 40- or 50-gallon capacity and recovery they're used to.",
      "Fit matters more with a heat pump water heater than with any other type, and it's the first thing we check on-site. The unit needs roughly 450–1,000 cubic feet of surrounding air to draw heat from efficiently — most San Jose garages and utility rooms qualify without modification — plus a condensate drain for the water the unit pulls out of the air as a byproduct of the process. Electrically, most installations run on a standard 240V circuit, but where panel capacity is tight we can spec a 120V plug-in model that runs on an existing outlet instead of an electrical upgrade. We install Rheem and A.O. Smith units sized to a real load calculation — not the old tank's nameplate — because an undersized unit runs out of hot water and an oversized one just costs more upfront for no benefit.",
      "Noise is the other question we get most: a heat pump water heater runs around 45–50 decibels, similar to a refrigerator, and most owners stop noticing it within days — especially in a garage. We recently installed a 50-gallon Rheem heat pump water heater for a Sunnyvale family replacing an aging gas tank; it cut their water-heating energy use by roughly 65% while running quietly against a shared garage wall. Every installation includes the electrical work, condensate routing, seismic strapping, and permit, plus a rebate and incentive check — we'll tell you exactly what applies today rather than quoting a program that's no longer funded.",
    ],
    included: [
      "Load calculation sized to your household's hot water use",
      "240V circuit installation, or a 120V plug-in model where panel capacity is tight",
      "Condensate drain routing to a safe termination point",
      "Seismic strapping, expansion tank, and permit included",
      "Removal and eco-friendly disposal of your old water heater",
      "Rebate and incentive check specific to your household",
    ],
    signs: [
      "Your water heating bill keeps climbing and you want a lasting fix",
      "You have a garage or utility room with enough surrounding air space",
      "Your gas water heater is due for replacement and you want to go electric",
      "You want to pair with solar for near-zero water heating cost",
      "You're building an ADU and want efficient, code-compliant hot water",
    ],
    brands: ["Rheem", "A.O. Smith", "Bradford White", "GE"],
    faqs: [
      {
        q: "How much can I save with a heat pump water heater?",
        a: "Most San Jose households save 50–70% on water-heating energy costs compared to a standard electric tank, and a meaningful amount compared to gas at current PG&E rates. Over a 13–15 year lifespan that adds up to several thousand dollars in energy savings.",
      },
      {
        q: "Will it fit in my garage?",
        a: "Almost always. A heat pump water heater needs roughly 450–1,000 cubic feet of surrounding air to draw heat from efficiently, which most single-car and larger garages meet without any changes. We confirm clearance and airflow during the free site visit before you commit to anything.",
      },
      {
        q: "Does it need a 240V circuit, or can it plug into a regular outlet?",
        a: "Most installations use a dedicated 240V circuit, the same as a standard electric water heater. Where your electrical panel doesn't have room for a new circuit, we can install a 120V plug-in model instead — it runs on a standard outlet with no panel upgrade required, at a modest trade-off in recovery speed.",
      },
      {
        q: "Is a heat pump water heater loud?",
        a: "It runs around 45–50 decibels — about as loud as a modern refrigerator. In a garage or utility room, most homeowners barely notice it after the first few days, and several models offer a quiet mode for nighttime.",
      },
      {
        q: "What happens to the condensate it produces?",
        a: "As the unit pulls heat out of the surrounding air, it also pulls out moisture — typically a few gallons a day — which needs a proper drain. We route it to an existing floor drain, a condensate pump, or a code-compliant termination point as part of every installation.",
      },
      {
        q: "Are there rebates for heat pump water heaters right now?",
        a: "The federal 25C tax credit ended for installations after December 31, 2025, and TECH Clean California funding is exhausted statewide. HEEHRA's income-qualified, single-family funding is fully reserved statewide as of February 2026 — we can add you to the waitlist and apply it automatically if funds return. We check every rebate and incentive you currently qualify for at your free estimate.",
      },
    ],
  },
  {
    slug: "tankless-water-heater",
    name: "Tankless Water Heater",
    h1: "Tankless Water Heater Installation in San Jose, CA",
    title: "Tankless Water Heater Installation San Jose | Promax",
    metaDesc:
      "Tankless water heater installation in San Jose from a Navien Service Specialist — correct gas sizing, venting & endless hot water. Call (669) 777-1997.",
    sub: "Tired of running out of hot water? We install tankless systems that deliver endless hot water on demand — sized and vented the right way.",
    image: "/images/hva5.jpg",
    primary: true,
    kind: "install",
    parent: "water-heater",
    body: [
      "A tankless water heater heats water only when you open a hot tap — no standby tank losing heat around the clock, no running out mid-shower when the dishwasher and washing machine are both going. As Navien Service Specialists, we install and service the condensing tankless systems that most other San Jose contractors won't touch, because the venting and gas requirements trip up plumbers who only install a few a year.",
      "The two things that make or break a tankless installation are gas line sizing and venting, and we check both before we quote a number. Most homes' existing 1/2-inch gas line is undersized for a whole-house tankless unit's higher BTU draw, so we size the line correctly rather than starving the unit of gas on cold mornings. Condensing units vent with PVC or polypropylene rather than metal flue pipe, which often means a shorter, cheaper run than the old tank ever needed — but it has to be routed and terminated to code, not just wherever is convenient.",
      "Tankless systems last 15–20 years instead of a tank's 8–12, but only with annual descaling — San Jose's water isn't the hardest in California, but mineral buildup still reduces efficiency and shortens the heat exchanger's life if it's never flushed. We build a descaling maintenance plan into every installation, and every unit we install comes with the manufacturer's full warranty backed by our own labor guarantee.",
    ],
    included: [
      "Gas line sizing verified for the unit's full BTU draw",
      "Condensing venting routed and terminated to code",
      "Recirculation loop setup for near-instant hot water at distant fixtures",
      "Whole-house or point-of-use sizing based on your actual fixture count",
      "Annual descaling plan to protect the heat exchanger",
      "Full manufacturer warranty plus our own labor guarantee",
    ],
    signs: [
      "You run out of hot water with more than one fixture running",
      "You want to reclaim closet or garage space taken up by a tank",
      "Your current tank is nearing the end of its life and you want to upgrade, not just replace",
      "You're tired of standby heat loss from a tank that runs 24/7",
      "You want a system that can last 15–20 years with proper maintenance",
    ],
    brands: ["Navien", "Rinnai", "Noritz", "Rheem"],
    faqs: [
      {
        q: "Why choose a Navien Service Specialist for tankless installation?",
        a: "Tankless systems are more particular about gas sizing, venting, and setup than a tank, and Navien's factory training goes deeper into that than a general plumbing license does. As Navien Service Specialists, we install and service the condensing tankless line that gives most other San Jose contractors trouble — meaning fewer callbacks and a unit that actually hits its rated efficiency.",
      },
      {
        q: "Do I need a bigger gas line for a tankless water heater?",
        a: "Often, yes. A whole-house tankless unit draws significantly more BTUs than a tank heater, and most homes' existing 1/2-inch gas line can't keep up. We measure your home's total gas load and upsize the line where needed as part of the installation — skipping this step is why some tankless installs underperform.",
      },
      {
        q: "How often does a tankless water heater need descaling?",
        a: "Annually for most San Jose homes, more often with harder water or heavy use. Descaling flushes mineral buildup out of the heat exchanger, which protects efficiency and is typically required to keep the manufacturer's warranty valid. We can set you up on an annual maintenance plan at installation.",
      },
      {
        q: "Will a tankless water heater really give me endless hot water?",
        a: "Yes, within its rated flow rate — a properly sized whole-house unit keeps up with a shower, dishwasher, and washing machine running at once, indefinitely, because it heats on demand instead of drawing down a tank. Sizing it to your actual fixture count and simultaneous-use pattern is the whole game, and we calculate that rather than guessing.",
      },
      {
        q: "How much does tankless installation cost in San Jose?",
        a: "Converting from a tank to tankless typically runs $4,500–$7,500 installed, depending on gas line upsizing, venting changes, and whether a recirculation loop is added. We'll give you a firm, itemized number and check any rebate you currently qualify for before you approve it.",
      },
      {
        q: "Can a tankless water heater fail in cold weather or a power outage?",
        a: "Most residential tankless units need electricity to run their electronics and ignition, so they won't operate in a power outage unless you have backup power — the same is true of many modern tank heaters' electronic ignition. Cold incoming water temperature doesn't stop the unit, it just slightly reduces peak flow rate, which we account for when sizing your system.",
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
    kind: "install",
    parent: "water-heater",
    body: [
      "When a water heater starts leaking from the tank, the countdown has begun — and waiting risks a burst tank and a flooded garage or closet. Promax replaces water heaters across San Jose quickly and cleanly, often next-day: we drain and haul away the old unit, set the new one to current code with seismic straps, expansion tank, drip pan, and proper venting, pull the permit, and leave you with hot water the same afternoon.",
      "Replacement is also the moment to upgrade smart: keep it simple with a like-for-like tank, go tankless for endless hot water and a 20-year lifespan, or choose a heat pump water heater and cut operating costs by two-thirds. We quote all the options that fit your space and check any rebate you currently qualify for, so you decide with real numbers.",
    ],
    included: [
      "Same-day drain, haul-away, and installation for most tank swaps",
      "Seismic strapping, expansion tank, and drip pan brought to current code",
      "Choice of like-for-like tank, tankless, or heat pump upgrade at replacement",
      "Permit pulled and scheduled for you",
    ],
    faqs: [
      {
        q: "How quickly can you replace my water heater?",
        a: "Standard 40 and 50-gallon replacements are usually completed same-day or next-day — the swap itself takes 2–4 hours. Tankless conversions and heat pump upgrades typically take a full day due to venting, gas, or electrical changes.",
      },
      {
        q: "What does water heater replacement cost in San Jose?",
        a: "Like-for-like tank replacements typically run $2,200–$3,800 installed with permit and code upgrades. Tankless conversions run $4,500–$7,500; heat pump water heaters land in between. We'll flag any rebate you currently qualify for before you approve the estimate — TECH Clean California and HEEHRA single-family funding are both unavailable right now, so we quote the real cost rather than assuming a rebate that may not apply.",
      },
      {
        q: "What code upgrades are required when replacing in California?",
        a: "Current code requires seismic strapping (two straps), a thermal expansion tank on closed systems, a temperature-pressure relief drain line, proper venting, and in many cases a drip pan with drain. Our quotes include every required upgrade — some low bids conveniently leave them out.",
      },
    ],
  },
  {
    slug: "mini-split-repair",
    name: "Mini Split Repair",
    h1: "Mini Split Repair in San Jose, CA",
    title: "Mini Split Repair San Jose, CA | All Brands | Promax",
    metaDesc:
      "Mini split repair in San Jose — error codes, leaking or icing heads, all brands. Mitsubishi Diamond-trained techs, upfront pricing. Call (669) 777-1997.",
    sub: "Mini split showing an error code, leaking, or icing up? Our Mitsubishi-trained techs repair every ductless brand across San Jose.",
    image: "/images/hva6.jpg",
    primary: true,
    kind: "repair",
    parent: "ductless-split-systems",
    body: [
      "A ductless mini split that's throwing an error code, leaking water from the indoor head, or icing over isn't something to wait out — most of these failures get worse the longer the system keeps trying to run. Promax repairs mini split systems across San Jose and Santa Clara County from every major brand, and as a Mitsubishi Diamond Contractor our techs get factory training most independent repair shops never see.",
      "An indoor head that's dripping or leaking almost always traces back to a clogged condensate drain line, a dirty or clogged filter restricting airflow, or a refrigerant charge that's drifted low enough to freeze the coil and then leak as it thaws. Icing on the indoor coil or the outdoor unit's refrigerant lines points to the same handful of causes — low refrigerant, a failing sensor, or blocked airflow — and running the system through an ice-up repeatedly can damage the compressor, so we recommend shutting it off (fan on) and calling rather than waiting.",
      "Error codes vary by brand and sometimes even by model line, but our techs carry brand-specific diagnostic tools and reference the actual manufacturer fault tables instead of guessing from a generic chart. We repair Mitsubishi, Daikin, Fujitsu, LG, Cooper & Hunter, and Gree systems, and most repairs — capacitors, sensors, drain pumps, refrigerant leaks — finish in a single visit with parts we carry on the truck.",
    ],
    included: [
      "Brand-specific error code diagnosis, not a generic chart",
      "Condensate drain and drain pump clearing",
      "Refrigerant leak detection, repair, and recharge",
      "Sensor, capacitor, and control board replacement",
      "Indoor head deep cleaning when airflow or icing is the cause",
      "Upfront flat-rate pricing before any repair begins",
    ],
    signs: [
      "The indoor head is dripping or leaking water",
      "Ice is visible on the indoor coil or outdoor refrigerant lines",
      "An error code is flashing on the head or remote",
      "Weak airflow or the system won't reach the set temperature",
      "Short-cycling, or the outdoor unit won't start",
      "Unusual noise from the indoor head or outdoor condenser",
    ],
    brands: ["Mitsubishi Electric", "Daikin", "Fujitsu", "LG", "Cooper & Hunter", "Gree"],
    faqs: [
      {
        q: "My mini split is leaking water — is that serious?",
        a: "It's worth addressing quickly, even if it doesn't feel urgent. A leaking indoor head is almost always a clogged condensate drain or a low refrigerant charge causing the coil to freeze and then drip as it thaws — left alone, either one can damage drywall, flooring, or the unit itself. We can usually diagnose and fix it in one visit.",
      },
      {
        q: "What does an error code on my mini split mean?",
        a: "It depends on the brand — Mitsubishi, Daikin, Fujitsu, and LG each use different fault code systems. Snap a photo of the code on the head or remote when you call; our dispatcher can often narrow down the likely cause before we roll a truck, and our techs carry the manufacturer fault tables for accurate, fast diagnosis on-site.",
      },
      {
        q: "Do you repair mini splits you didn't install?",
        a: "Yes — we service every major ductless brand regardless of who installed it, including systems installed by other contractors or the previous homeowner. Being a Mitsubishi Diamond Contractor means deeper factory training on Mitsubishi specifically, but our techs are equipped to diagnose and repair Daikin, Fujitsu, LG, Cooper & Hunter, and Gree systems as well.",
      },
      {
        q: "Why is my mini split icing up?",
        a: "The usual causes are low refrigerant from a slow leak, a dirty air filter restricting airflow, a failing blower fan, or a stuck reversing valve. Running it through repeated ice-and-thaw cycles stresses the compressor, so turn the system off (fan only) and call us rather than letting it keep cycling.",
      },
      {
        q: "How much does mini split repair cost?",
        a: "Common repairs like drain clearing, capacitors, and sensors typically run $150–$450. Refrigerant leak repairs cost more depending on the leak location and refrigerant type. You'll always get a firm quote before any repair starts, and the diagnostic fee is waived when you approve the repair.",
      },
      {
        q: "Can you service a mini split that's still under manufacturer warranty?",
        a: "Yes — as a Mitsubishi Diamond Contractor we're an authorized service point for Mitsubishi warranty work, and we can diagnose most other brands' warranty claims and coordinate with the manufacturer where needed. Bring your proof of installation date and we'll confirm coverage before any billable work starts.",
      },
    ],
  },
  {
    slug: "heat-pump-repair",
    name: "Heat Pump Repair",
    h1: "Heat Pump Repair in San Jose, CA",
    title: "Heat Pump Repair San Jose, CA | All Brands | Promax",
    metaDesc:
      "Heat pump repair in San Jose — reversing valve, defrost & refrigerant issues fixed fast on any brand, with upfront pricing. Call (669) 777-1997.",
    sub: "Heat pump stuck in one mode, blowing cold air, or icing over? We repair reversing valve, defrost, and refrigerant problems on every brand.",
    image: "/images/hva4.jpg",
    kind: "repair",
    parent: "heat-pump",
    body: [
      "A heat pump doing double duty as your furnace and AC has more moving parts that can fail than either system alone — and when it does, you lose heating and cooling at once. Promax repairs heat pumps across San Jose and Santa Clara County from every major manufacturer, diagnosing the failures unique to heat pumps: a stuck reversing valve, a defrost cycle that won't clear, or a refrigerant charge that's drifted out of spec.",
      "The reversing valve is what lets a heat pump switch between heating and cooling, and when it sticks, the system gets stuck in one mode or blows the wrong-temperature air entirely — a classic 'heat pump blowing cold air in winter' complaint that isn't always a refrigerant problem. A failing defrost control, sensor, or board can leave the outdoor coil caked in ice through an entire cold snap instead of clearing normally, which throttles heating output and can damage the compressor if it runs iced up for too long.",
      "Refrigerant issues show up differently in a heat pump than in a straight AC, because the system needs the correct charge in both heating and cooling mode — an undercharge that seems fine in summer can leave you with weak heat all winter. Our techs are trained across Mitsubishi, Bryant, Daikin, Carrier, Trane, and other major heat pump brands, and most repairs — reversing valves, defrost boards, sensors, and refrigerant leaks — are diagnosed and quoted in a single visit.",
    ],
    included: [
      "Reversing valve and defrost cycle diagnosis",
      "Refrigerant leak detection, repair, and correct dual-mode recharge",
      "Sensor, control board, and capacitor replacement",
      "Outdoor coil de-icing and airflow restoration",
      "Upfront flat-rate pricing before any repair begins",
      "All major brands, whether or not we installed the system",
    ],
    signs: [
      "The system blows cold air when set to heat, or warm air when set to cool",
      "The outdoor unit is caked in ice that doesn't clear during a normal defrost cycle",
      "Heating output is weak even though the system is running",
      "The system is stuck in one mode and won't switch",
      "Short-cycling, or unusual noise from the outdoor unit",
      "Rising electric bills without a change in how you use the system",
    ],
    brands: ["Mitsubishi Electric", "Bryant", "Daikin", "Carrier", "Trane"],
    faqs: [
      {
        q: "Why is my heat pump blowing cold air when it's set to heat?",
        a: "The most common cause is a stuck or failing reversing valve, which controls whether the system heats or cools. Other causes include a low refrigerant charge, a defrost cycle that's stuck on, or (in mild weather) the system briefly running in defrost mode, which is normal for a minute or two but not longer. We diagnose which one it is on-site.",
      },
      {
        q: "Why is the outdoor unit covered in ice?",
        a: "Some frost during a normal defrost cycle is expected in winter, but a coil caked in solid ice means the defrost control, sensor, or board has failed and the system isn't clearing itself. Running it iced up for an extended period can damage the compressor, so it's worth having it checked rather than waiting for it to clear on its own.",
      },
      {
        q: "Do you repair heat pumps you didn't install?",
        a: "Yes — we repair every major heat pump brand regardless of who installed it: Mitsubishi, Bryant, Daikin, Carrier, Trane, and others. Being a Mitsubishi Diamond Contractor gives us deeper factory training on Mitsubishi specifically, but it doesn't limit what brands we work on.",
      },
      {
        q: "How is heat pump refrigerant charging different from an AC?",
        a: "A heat pump has to hold the correct refrigerant charge in both heating and cooling mode, using a reversing valve to switch flow direction. A charge that looks fine in summer cooling mode can still be wrong for winter heating, which is why heat pump refrigerant work needs mode-specific testing, not just a single summer check.",
      },
      {
        q: "What does heat pump repair cost in San Jose?",
        a: "Common repairs like capacitors, sensors, and defrost boards typically run $200–$600. Reversing valve replacement and refrigerant leak repairs cost more depending on the part and refrigerant type. You'll get a firm quote before any work begins, and the diagnostic fee is waived when you approve the repair.",
      },
      {
        q: "My heat pump is short-cycling — what causes that?",
        a: "Short-cycling usually points to a dirty filter restricting airflow, a failing capacitor, an oversized system for the space, or a refrigerant charge issue tripping a safety control. It wastes energy and wears the compressor faster, so it's worth diagnosing early rather than letting it continue.",
      },
    ],
  },
  {
    slug: "commercial-hvac",
    name: "Commercial HVAC",
    h1: "Commercial HVAC Services in San Jose, CA",
    title: "Commercial HVAC in San Jose | Install & Service | Promax",
    metaDesc:
      "Commercial HVAC contractor in San Jose — rooftop units, VRF, maintenance contracts and emergency service for offices and retail. (669) 777-1997.",
    sub: "Keep your tenants, staff, and customers comfortable — installation, replacement, and maintenance programs for commercial buildings across Silicon Valley.",
    image: "/images/hva8.jpg",
    kind: "overview",
    body: [
      "Downtime costs money. Whether you manage a retail storefront on Santana Row, a restaurant kitchen, a dental office, or a light-industrial building, Promax keeps your HVAC running with minimal disruption to business. We install and service rooftop package units, split systems, VRF/VRV multi-zone systems, make-up air, and dedicated server-room cooling across San Jose and Santa Clara County.",
      "Property managers choose us for preventive maintenance contracts — scheduled filter changes, coil cleaning, and inspections that catch failures before tenants feel them — with priority emergency response and consolidated reporting for your portfolio. We handle Title 24 compliance, crane logistics, permits, and after-hours scheduling so your business never has to close for comfort.",
    ],
    included: [
      "Rooftop unit, split system, and VRF installation and service",
      "Preventive maintenance contracts with priority emergency response",
      "Title 24 compliance, crane logistics, and permit handling",
      "After-hours and weekend scheduling to avoid business disruption",
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
  "heat-pump-repair": "/images/heat-pump-photo-min.jpg",
  "ductless-split-systems": "/images/duc-photo-min.jpg",
  "mini-split-repair": "/images/duc-photo-min.jpg",
  "vrf-installation-system": "/images/vrf-photo-min.jpg",
  "rooftop-package-unit": "/images/rooftop-photo-min.jpg",
  "zone-control-system": "/images/zone-photo-min.jpg",
  "indoor-air-quality-system": "/images/photo_hvac-min.jpg",
  "water-heater": "/images/water-heater-photo-min.jpg",
  "water-heater-repair": "/images/water-heater-photo-min.jpg",
  "water-heater-installation": "/images/water-heater-photo-min.jpg",
  "water-heater-replacement": "/images/water-heater-photo-min.jpg",
  "heat-pump-water-heater": "/images/water-heater-photo-min.jpg",
  "tankless-water-heater": "/images/water-heater-photo-min.jpg",
  "commercial-hvac": "/images/rooftop-photo-min.jpg",
};

export const bannerFor = (slug: string) => bannerMap[slug] ?? "/images/photo_hvac-min.jpg";
