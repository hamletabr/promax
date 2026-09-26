import { site } from "./site";

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
    metaDesc:
      "HVAC in Atherton: multi-zone comfort for Lindenwood and West Atherton estates, quiet equipment, and licensed techs who work around your schedule.",
    neighborhoods: ["Lindenwood", "West Atherton", "Lloyden Park", "Stanford Weekend Acres", "Circus Club Colony"],
    housing:
      "Atherton is almost entirely large, custom-built estates on half-acre-to-multi-acre lots, many with a separate guest house, pool house, or wine cellar that needs its own conditioned zone. That scale calls for multi-zone or VRF systems sized room-by-room rather than a single oversized unit, plus low-sound outdoor equipment placed where it won't bother neighbors across the hedge.",
    utility:
      "Peninsula Clean Energy (PCE) supplies electricity in Atherton; PG&E still delivers the natural gas and maintains the wires and pipes. We check current PCE/PG&E rebates at your free estimate — we never promise a dollar amount before we've seen the system.",
    permits:
      "The Town of Atherton Building Division requires a mechanical permit and HERS (Home Energy Rating System) testing for any furnace, AC, or heat pump changeout. We pull the permit and schedule the required inspections as part of every installation.",
    climate:
      "Atherton sits in the Peninsula's marine-fog belt, so mornings are often cool and overcast even in July. Afternoons still climb into the 80s during heat waves, and the tree canopy that shades many estates can trap humidity — we size equipment for those swings rather than a single average temperature.",
    faqs: [
      {
        q: "Do you size systems for large Atherton estates with multiple wings or a guest house?",
        a: `Yes — we design multi-zone systems so each wing, guest house, or pool house is its own zone with its own thermostat. ${site.promises.estimate}`,
      },
      {
        q: "How fast can you respond if our AC or heat goes out in Atherton?",
        a: `${site.promises.repair}. ${site.promises.callback}.`,
      },
      {
        q: "Can you work around household staff and gate schedules?",
        a: `Yes — tell us your preferred access window when you book and we'll schedule around it. ${site.promises.scheduled}`,
      },
    ],
  },
  {
    slug: "belmont",
    city: "Belmont",
    h1: "HVAC Services in Belmont",
    title: "HVAC Services in Belmont | Local HVAC Experts",
    sub: "From the serene hills of Twin Pines to the vibrant Ralston Corridor, Belmont homeowners trust us for dependable HVAC solutions.",
    hook: "Twin Pines to the Ralston Corridor",
    metaDesc:
      "HVAC service in Belmont, from the Belmont Heights hillside to the Ralston Corridor flats — repair, install, and maintenance from a licensed local team.",
    neighborhoods: ["Belmont Heights", "Sterling Downs", "Cipriani", "Hallmark", "Central Belmont (Ralston Corridor)"],
    housing:
      "Belmont climbs steeply from the Ralston Corridor flats into the Belmont Heights and Sterling Downs hillsides, so homes range from 1950s ranch houses on flat lots to split-level hillside homes with equipment tucked onto narrow side yards or rooftop platforms. Hillside houses often need an access survey before we quote the job, and older ranch homes commonly need duct sealing or resizing.",
    utility:
      "Peninsula Clean Energy (PCE) supplies electricity in Belmont; PG&E delivers the natural gas and maintains the grid. We check current PCE/PG&E rebates at your free estimate — never a promised dollar amount up front.",
    permits:
      "The City of Belmont Building Division requires a mechanical permit and HERS testing for HVAC changeouts. We handle the permit application and schedule the inspections for you.",
    climate:
      "Belmont's hillside neighborhoods sit in the Peninsula fog belt and can run 10–15° cooler than the flats on the same afternoon, while the Ralston Corridor and the lower flats see more direct sun and heat. We size each system for its actual microclimate, not a single town-wide average.",
    faqs: [
      {
        q: "We're up in the Belmont Heights hills — can you still get equipment to our house?",
        a: `Yes — we service hillside homes throughout Belmont and plan for tight side-yard or rooftop access ahead of the job. ${site.promises.scheduled}`,
      },
      {
        q: "Our furnace stopped working overnight — how fast can you come?",
        a: `${site.promises.repair}. ${site.promises.callback}.`,
      },
      {
        q: "Is the estimate free if we're just considering a replacement?",
        a: `${site.promises.estimate}`,
      },
    ],
  },
  {
    slug: "campbell",
    city: "Campbell",
    h1: "HVAC Services in Campbell",
    title: "HVAC Services in Campbell | Local HVAC Experts",
    sub: "From Downtown Campbell to the Pruneyard, homeowners trust us to keep their HVAC systems running smoothly.",
    hook: "downtown to the Pruneyard",
    metaDesc:
      "HVAC repair and installation near Downtown Campbell and the Pruneyard — licensed technicians, upfront pricing, and same-day help when your AC quits.",
    neighborhoods: ["Downtown Campbell", "Pruneyard", "Campbell Park", "Oak Grove", "Sunnyoaks-Winchester"],
    housing:
      "Campbell's housing stock is mostly 1940s–1950s bungalows near downtown and 1960s–70s ranch tract homes in the surrounding blocks, many now on their second or third HVAC system since the original ductwork went in. Small lots mean condenser placement is often tight against a fence or driveway, and older attics frequently have undersized or leaky ducts that limit how well a new system performs.",
    utility:
      "Silicon Valley Clean Energy (SVCE) supplies electricity in Campbell; PG&E delivers the gas and maintains the grid. We check current SVCE/PG&E rebates at your free estimate — never a promised amount up front.",
    permits:
      "The City of Campbell Building Division requires a mechanical permit and HERS testing for any HVAC changeout. We pull the permit and schedule inspections as part of the job.",
    climate:
      "Campbell sits inland with little marine-fog relief, so August afternoons regularly hit the low-to-mid 90s. Homes with west-facing living rooms or minimal attic insulation need a proper load calculation, not just a same-size swap, to keep up on the hottest days.",
    faqs: [
      {
        q: "Our AC near downtown Campbell is over 20 years old — repair or replace?",
        a: `We'll diagnose it honestly and lay out both options with real numbers. ${site.promises.diagnostic}. ${site.promises.estimate}.`,
      },
      {
        q: "It hit 95° and our AC just died — how soon can you help?",
        a: `${site.promises.repair}`,
      },
      {
        q: "Is there a charge just to come look at my furnace?",
        a: `${site.promises.diagnostic}`,
      },
    ],
  },
  {
    slug: "cupertino",
    city: "Cupertino",
    h1: "HVAC Services in Cupertino",
    title: "Cupertino HVAC Services | Same-Day Support",
    sub: "From Main Street to Rancho Rinconada, Cupertino homeowners count on us for responsive, expert HVAC support.",
    hook: "Main Street to Rancho Rinconada",
    metaDesc:
      "Cupertino HVAC repair and installation, from Monta Vista to Rancho Rinconada — ductless heat pumps, tune-ups, and same-day no-cool, no-heat service.",
    neighborhoods: ["Monta Vista", "Fairgrove", "Rancho Rinconada", "Garden Gate", "Seven Springs"],
    housing:
      "Most Cupertino homes are 1960s–70s ranch-style tract houses built during the school-district boom, many originally heated with a single central furnace and cooled later with a bolted-on AC system the existing ducts were never sized for. Newer condo and townhome construction near Main Street and the former Vallco site is a better fit for compact ducted or ductless heat pump systems with less roof and yard space to work with.",
    utility:
      "Silicon Valley Clean Energy (SVCE) supplies electricity in Cupertino; PG&E delivers the gas and maintains the grid. We check current SVCE/PG&E rebates at your free estimate — never a promised amount up front.",
    permits:
      "The City of Cupertino Building Division requires a mechanical permit and HERS testing for HVAC changeouts. We pull the permit and coordinate the inspections.",
    climate:
      "Cupertino's western neighborhoods near the foothills cool off a bit more in the evening, but summer days still regularly reach the low 90s valley-wide. Homes with retrofitted AC on undersized original ductwork often struggle most on those days, which is why we check duct capacity, not just the equipment, during every estimate.",
    faqs: [
      {
        q: "Our ranch home near De Anza has weak airflow in the back bedrooms — can that be fixed?",
        a: `Usually yes — it's almost always undersized or leaky ductwork from the original build. We evaluate the ducts, not just the equipment. ${site.promises.scheduled}`,
      },
      {
        q: "No AC during a heat wave — can you come today?",
        a: `${site.promises.repair}`,
      },
      {
        q: "Do you offer free estimates on new systems in Cupertino?",
        a: `${site.promises.estimate}`,
      },
    ],
  },
  {
    slug: "fremont",
    city: "Fremont",
    h1: "HVAC Services in Fremont",
    title: "Fremont HVAC Services | Local Heating & AC Team",
    sub: "From Mission San Jose to Warm Springs, Fremont homes count on our expert HVAC support.",
    hook: "Mission San Jose to Warm Springs",
    metaDesc:
      "Fremont HVAC service across Mission San Jose, Irvington, Centerville, Niles, and Warm Springs — licensed repair, installation, and maintenance techs.",
    neighborhoods: ["Mission San Jose", "Irvington", "Centerville", "Niles", "Warm Springs", "Ardenwood"],
    housing:
      "Fremont was formed from five historic towns in 1956, and it still shows in the housing: older cottages in Niles and Centerville, mid-century bungalows in Irvington, larger hillside homes in Mission San Jose, and dense new construction in Warm Springs near the BART extension. Older homes in Niles and Centerville often still run original wall furnaces with no ducting at all, while Mission San Jose's larger hillside lots usually need multi-zone systems.",
    utility:
      "Ava Community Energy (formerly East Bay Community Energy) supplies electricity in Fremont; PG&E delivers the gas and maintains the grid. We check current Ava/PG&E rebates and any regional air-district incentives at your free estimate — never a promised amount up front.",
    permits:
      "The City of Fremont Building Division requires a mechanical permit and HERS testing for HVAC changeouts. We pull the permit and schedule the required inspections.",
    climate:
      "Fremont's bay-side neighborhoods like Centerville and Niles get some marine cooling off the water, while Mission San Jose and the inland foothill areas run hotter and drier, often into the mid-90s in August with little breeze. We size systems for whichever side of town the home sits on rather than a single citywide number.",
    faqs: [
      {
        q: "How fast can you get to Fremont on a no-cool day?",
        a: `${site.promises.repair}. ${site.promises.callback}.`,
      },
      {
        q: "Our Niles cottage still has an old wall furnace — can you upgrade it?",
        a: `Yes — most Niles and Centerville homes with old wall furnaces are strong candidates for a ductless heat pump system that adds cooling at the same time. ${site.promises.estimate}`,
      },
      {
        q: "Do you service new construction in Warm Springs?",
        a: `Yes, along with repair and maintenance on existing systems throughout Fremont. ${site.promises.scheduled}`,
      },
    ],
  },
  {
    slug: "los-altos",
    city: "Los Altos",
    h1: "HVAC Services in Los Altos",
    title: "HVAC Services in Los Altos | Local HVAC Experts",
    sub: "Nestled between Mountain View and Palo Alto, Los Altos residents expect premium comfort in their homes.",
    hook: "between Mountain View and Palo Alto",
    metaDesc:
      "Los Altos HVAC repair, installation, and design for new builds and remodels near Old Los Altos and the Country Club area — licensed and EPA-certified.",
    neighborhoods: ["Old Los Altos (Downtown)", "Country Club", "Loyola Corners", "University Park", "Rancho"],
    housing:
      "Los Altos has one of the highest teardown-and-rebuild rates on the Peninsula, so it's common to find a brand-new custom home with a full multi-zone system next door to a 1950s ranch house still running its original single-stage furnace. Older homes in Old Los Altos and University Park usually need duct replacement or a full load recalculation before a new system goes in; new builds are typically designed for HVAC from the start.",
    utility:
      "Silicon Valley Clean Energy (SVCE) supplies electricity in Los Altos; PG&E delivers the gas and maintains the grid. We check current SVCE/PG&E rebates at your free estimate — never a promised amount up front.",
    permits:
      "The City of Los Altos Building Division requires a mechanical permit and HERS testing for HVAC changeouts, and new-construction HVAC design typically goes through full plan review. We manage the permit and inspections either way.",
    climate:
      "Los Altos sits between the fog-influenced hills and the warmer valley floor, so Country Club and the western neighborhoods run a bit cooler than University Park and the flats toward Sunnyvale. Summer afternoons still reach the low 90s valley-side, so we size for the home's specific exposure rather than the town average.",
    faqs: [
      {
        q: "We're rebuilding our Los Altos home — can you design the HVAC system as part of the project?",
        a: `Yes — we work with homeowners and their builders on full HVAC design for new construction and major remodels. ${site.promises.estimate}`,
      },
      {
        q: "Our AC failed during a heat spell — can you come the same day?",
        a: `${site.promises.repair}`,
      },
      {
        q: "Do you offer free estimates on a new heat pump system?",
        a: `${site.promises.estimate}`,
      },
    ],
  },
  {
    slug: "los-gatos",
    city: "Los Gatos",
    h1: "HVAC Services in Los Gatos",
    title: "Los Gatos HVAC Services | Cooling & Heating Pros",
    sub: "From the historic downtown to Blossom Hill Manor, Los Gatos residents count on us for dependable HVAC comfort.",
    hook: "downtown to Blossom Hill Manor",
    metaDesc:
      "Los Gatos HVAC service for downtown homes and the foothills above town — repair, ductless installs, and maintenance from a licensed local team.",
    neighborhoods: ["Downtown Los Gatos", "Almond Grove", "Blossom Manor", "Belwood", "the foothills above town"],
    housing:
      "Downtown Los Gatos and the Almond Grove Historic District are full of older Craftsman and Victorian homes that were never built with ductwork, while the ranch homes climbing into the foothills above town — closer to the Santa Cruz Mountains — tend to be larger, multi-level, and better suited to zoned systems. Older downtown homes are frequently good candidates for ductless heat pumps rather than opening up plaster walls to add ducts.",
    utility:
      "Silicon Valley Clean Energy (SVCE) supplies electricity in Los Gatos; PG&E delivers the gas and maintains the grid. We check current SVCE/PG&E rebates at your free estimate — never a promised amount up front.",
    permits:
      "The Town of Los Gatos Building Department requires a mechanical permit and HERS testing for HVAC changeouts. We pull the permit and schedule inspections as part of every job.",
    climate:
      "The Los Gatos valley floor gets warm in summer, but the foothill and mountain-adjacent homes above town see bigger day-to-night temperature swings and colder overnight lows in winter than the flats. We factor elevation into the load calculation, not just square footage.",
    faqs: [
      {
        q: "Do you cover the hills above Los Gatos?",
        a: `Yes — we regularly service homes in the Los Gatos foothills and mountain-adjacent neighborhoods. ${site.promises.scheduled}`,
      },
      {
        q: "Our historic downtown home has no ductwork — what are our cooling options?",
        a: `A ductless heat pump is usually the best fit — no demolition, and it adds efficient heating too. ${site.promises.estimate}`,
      },
      {
        q: "Our furnace died on a cold night — how fast can you respond?",
        a: `${site.promises.repair}. ${site.promises.callback}.`,
      },
    ],
  },
  {
    slug: "milpitas",
    city: "Milpitas",
    h1: "HVAC Services in Milpitas",
    title: "HVAC Milpitas CA | Heating & AC Solutions",
    sub: "From Midtown to Montague, Milpitas families rely on us for dependable heating and cooling.",
    hook: "Midtown to Montague",
    metaDesc:
      "Milpitas HVAC repair and installation near Midtown, McCarthy Ranch, and Park Victoria — licensed techs sizing systems for tract homes and new builds.",
    neighborhoods: ["Midtown Milpitas", "McCarthy Ranch", "Sunnyhills", "Zanker", "Park Victoria"],
    housing:
      "Milpitas mixes 1960s–70s single-story tract homes in Sunnyhills and around Midtown with newer, denser townhomes and condos near McCarthy Ranch and the Milpitas BART station. Older tract homes are usually on their original or first-replacement single-zone furnace-and-AC system; the multi-generational households common here often need added zoning or capacity for several adults living under one roof.",
    utility:
      "Silicon Valley Clean Energy (SVCE) supplies electricity in Milpitas; PG&E delivers the gas and maintains the grid. We check current SVCE/PG&E rebates at your free estimate — never a promised amount up front.",
    permits:
      "The City of Milpitas Building & Safety Division requires a mechanical permit and HERS testing for HVAC changeouts. We pull the permit and schedule inspections.",
    climate:
      "Milpitas sits at the base of the Diablo Range with little coastal fog relief, so it's regularly one of the hotter spots in the county on summer afternoons. Homes here need equipment sized for sustained heat, not just the occasional hot day.",
    faqs: [
      {
        q: "We're in a newer townhome near BART — is there room for HVAC equipment?",
        a: `Yes — we install compact ducted and ductless systems designed for tight patios and mechanical closets. ${site.promises.estimate}`,
      },
      {
        q: "Our AC stopped during a heat wave — how fast can you come?",
        a: `${site.promises.repair}`,
      },
      {
        q: "Do you offer free estimates for system replacement in Milpitas?",
        a: `${site.promises.estimate}`,
      },
    ],
  },
  {
    slug: "mountain-view",
    city: "Mountain View",
    h1: "HVAC Services in Mountain View",
    title: "Mountain View HVAC Services | Fast AC & Heating",
    sub: "From Castro Street to Shoreline Park, Mountain View homeowners rely on us for year-round comfort.",
    hook: "Castro Street to Shoreline",
    metaDesc:
      "Mountain View HVAC service from Old Mountain View to Cuesta Park — ductless retrofits for older bungalows, repair, and same-day no-cool response.",
    neighborhoods: ["Old Mountain View (Castro Street)", "Cuesta Park", "Monta Loma", "Waverly Park", "North Bayshore"],
    housing:
      "Older bungalows near Castro Street and in Monta Loma were mostly built without central air, so many still rely on a wall furnace or window units decades later; ductless heat pumps are usually the cleanest way to add cooling without opening up walls or ceilings. Newer, denser development near North Bayshore and downtown leans on compact ducted or multi-split systems built into the original design.",
    utility:
      "Silicon Valley Clean Energy (SVCE) supplies electricity in Mountain View; PG&E delivers the gas and maintains the grid. We check current SVCE/PG&E rebates at your free estimate — never a promised amount up front.",
    permits:
      "The City of Mountain View Building Division requires a mechanical permit and HERS testing for HVAC changeouts. We pull the permit and schedule inspections.",
    climate:
      "Mountain View's bay-side neighborhoods near Shoreline get more marine breeze and fog than the inland blocks toward El Camino Real, which can change the right cooling size for two otherwise identical houses. We size to the specific block, not just the ZIP code.",
    faqs: [
      {
        q: "Our older Mountain View bungalow has no central air — what do you recommend?",
        a: `A ductless heat pump is usually the best fit — it adds cooling and efficient heating without cutting into walls or attic space. ${site.promises.estimate}`,
      },
      {
        q: "Our AC died today — can you come the same day?",
        a: `${site.promises.repair}`,
      },
      {
        q: "Is the diagnostic visit free?",
        a: `${site.promises.diagnostic}`,
      },
    ],
  },
  {
    slug: "palo-alto",
    city: "Palo Alto",
    h1: "HVAC Services in Palo Alto",
    title: "Palo Alto HVAC Experts | Local & Trusted Contractor",
    sub: "From University Avenue to Stanford, Palo Alto residents depend on our expert HVAC services.",
    hook: "University Ave to Stanford",
    metaDesc:
      "Palo Alto HVAC service for Eichler tracts, Professorville, and Old Palo Alto homes — ductless heat pumps, repair, and free in-home estimates.",
    neighborhoods: ["Downtown / University Avenue", "Professorville", "Old Palo Alto", "Barron Park", "Midtown (Greenmeadow / Green Gables)"],
    housing:
      "Palo Alto's Eichler tracts in Greenmeadow, Green Gables, and Fairmeadow were built on radiant-heated concrete slabs with no ductwork at all, which makes a ductless heat pump the standard way to add cooling without breaking the slab. Older Professorville and Old Palo Alto homes often still have original, aging electrical service, so a heat pump conversion sometimes needs a panel upgrade first — something we flag during the estimate, not after the install.",
    utility:
      "City of Palo Alto Utilities (CPAU) supplies both electricity and natural gas in Palo Alto — one of the few cities in California with its own full municipal gas utility. We check current CPAU rebates at your free estimate; we never promise a dollar amount up front.",
    permits:
      "The City of Palo Alto's Development Services Department requires a mechanical permit and HERS testing for HVAC changeouts. We pull the permit and coordinate CPAU and city inspections.",
    climate:
      "The Palo Alto Baylands stay cool and breezy most of the summer, while the Palo Alto Hills and inland neighborhoods run noticeably warmer and drier. We size Eichler and slab-home systems around the whole-house radiant load, not just square footage.",
    faqs: [
      {
        q: "We have an Eichler with radiant heat — can you add cooling?",
        a: `Yes — a ductless heat pump is the standard fix for a slab-heated Eichler, since there's no ductwork to tie into. ${site.promises.estimate}`,
      },
      {
        q: "How fast can you respond to a no-heat call in Professorville?",
        a: `${site.promises.repair}. ${site.promises.callback}.`,
      },
      {
        q: "Do you offer free estimates for Palo Alto homeowners?",
        a: `${site.promises.estimate}`,
      },
    ],
  },
  {
    slug: "redwood-city",
    city: "Redwood City",
    h1: "HVAC Services in Redwood City",
    title: "Redwood City HVAC | Residential & Commercial",
    sub: "From Redwood Shores to Belle Haven, Redwood City homes and businesses count on our HVAC expertise.",
    hook: "Redwood Shores to downtown Redwood City",
    metaDesc:
      "Redwood City HVAC repair and install from Redwood Shores to Woodside Plaza — corrosion-aware equipment near the bay, licensed local technicians.",
    neighborhoods: ["Redwood Shores", "Woodside Plaza", "Farm Hill", "Emerald Hills", "Downtown / Mount Carmel"],
    housing:
      "Redwood Shores was built in the 1980s–90s on filled bay land and is mostly townhomes and condos close enough to the water that outdoor equipment benefits from corrosion-resistant coils and hardware. Inland, Woodside Plaza and Farm Hill are older 1950s ranch homes that usually need a duct inspection before a new system goes in, since the original ductwork is now well past its service life.",
    utility:
      "Peninsula Clean Energy (PCE) supplies electricity in Redwood City; PG&E delivers the gas and maintains the grid. We check current PCE/PG&E rebates at your free estimate — never a promised amount up front.",
    permits:
      "The City of Redwood City Building Division requires a mechanical permit and HERS testing for HVAC changeouts. We pull the permit and schedule inspections.",
    climate:
      "Redwood Shores and the bay-facing flats get regular fog and wind off the water, while Farm Hill and Emerald Hills sit above the fog line and run warmer in summer. That coastal exposure is also why we spec corrosion-resistant equipment for homes closest to the bay.",
    faqs: [
      {
        q: "We're in Redwood Shores near the water — does the salt air affect our equipment?",
        a: `It can, over time — we spec corrosion-resistant coils and hardware for homes close to the bay so the system holds up. ${site.promises.estimate}`,
      },
      {
        q: "Our water heater died over the weekend — can you help fast?",
        a: `${site.promises.repair}`,
      },
      {
        q: "Do you offer free estimates for a system replacement?",
        a: `${site.promises.estimate}`,
      },
    ],
  },
  {
    slug: "san-mateo",
    city: "San Mateo",
    h1: "HVAC Services in San Mateo",
    title: "HVAC Services in San Mateo | Local HVAC Experts",
    sub: "From the Hillsdale shopping district to Baywood, San Mateo families trust us to keep their homes comfortable.",
    hook: "Hillsdale to Baywood",
    metaDesc:
      "San Mateo HVAC service from the Highlands' Eichler tract to Baywood Park — ductless heat pumps, repair, and maintenance from licensed local techs.",
    neighborhoods: ["Hillsdale", "Baywood Park", "San Mateo Highlands", "Beresford", "San Mateo Park"],
    housing:
      "The San Mateo Highlands has one of the Peninsula's real Eichler tracts, built on radiant slabs with no ducts — the same fit as Sunnyvale and Palo Alto, where a ductless heat pump adds cooling without cutting the slab. Baywood Park's older homes and the Hillsdale-area ranch houses run traditional ducted systems that, by now, typically need duct sealing or resizing.",
    utility:
      "Peninsula Clean Energy (PCE) supplies electricity in San Mateo; PG&E delivers the gas and maintains the grid. We check current PCE/PG&E rebates at your free estimate — never a promised amount up front.",
    permits:
      "The City of San Mateo Building Division requires a mechanical permit and HERS testing for HVAC changeouts. We pull the permit and schedule inspections.",
    climate:
      "San Mateo sits squarely in the Peninsula fog belt, especially at the Highlands' higher elevation, while the lower bay-side neighborhoods run warmer and more humid in summer. We size equipment to the specific neighborhood's fog exposure rather than a single town number.",
    faqs: [
      {
        q: "We're in a San Mateo Highlands Eichler — can you add central cooling without ductwork?",
        a: `Yes — a ductless heat pump is the standard solution for a slab-heated Eichler. ${site.promises.estimate}`,
      },
      {
        q: "Our AC failed during a heat wave — can you come the same day?",
        a: `${site.promises.repair}`,
      },
      {
        q: "Is there a fee just for the estimate?",
        a: `${site.promises.estimate}`,
      },
    ],
  },
  {
    slug: "santa-clara",
    city: "Santa Clara",
    h1: "HVAC Services in Santa Clara",
    title: "HVAC Services Santa Clara | Fast & Affordable",
    sub: "From Rivermark to Central Park West, Santa Clara households trust us for seamless comfort year-round.",
    hook: "Rivermark to Central Park West",
    metaDesc:
      "Santa Clara HVAC repair and installation near Rivermark, the Old Quad, and Northside — compact ductless systems and same-day no-cool response.",
    neighborhoods: ["Rivermark", "Old Quad", "Golden Triangle", "Northside", "Mission neighborhood"],
    housing:
      "Rivermark's condos and townhomes were built in the 2000s on former industrial land, with small patios that call for compact, low-profile ductless heads rather than a full-size condenser. The older homes near the Mission and Old Quad tend to have smaller original electrical panels, which we check before recommending a heat pump upgrade.",
    utility:
      "Silicon Valley Power (SVP), the city's own municipal electric utility, supplies electricity in Santa Clara; PG&E still delivers the natural gas. We check current SVP/PG&E rebates at your free estimate — never a promised amount up front.",
    permits:
      "The City of Santa Clara Building Division requires a mechanical permit and HERS testing for HVAC changeouts. We pull the permit and schedule inspections.",
    climate:
      "Santa Clara sits on the valley floor with little marine-fog relief, so August afternoons regularly reach the mid-90s to 100°F. We run a full load calculation rather than a rule-of-thumb size, especially for homes with west-facing windows.",
    faqs: [
      {
        q: "We're in a Rivermark condo with a small patio — is there room for HVAC equipment?",
        a: `Yes — we install compact ductless systems sized for small patios and balconies. ${site.promises.estimate}`,
      },
      {
        q: "No AC on a 100° day — how fast can you come?",
        a: `${site.promises.repair}`,
      },
      {
        q: "Do you offer free estimates for Santa Clara system replacements?",
        a: `${site.promises.estimate}`,
      },
    ],
  },
  {
    slug: "saratoga",
    city: "Saratoga",
    h1: "HVAC Services in Saratoga",
    title: "HVAC Saratoga CA | Installation & Repair Services",
    sub: "From Congress Springs Park to the Foothills, Saratoga homeowners count on our HVAC expertise.",
    hook: "Congress Springs to the Foothills",
    metaDesc:
      "Saratoga HVAC service for Saratoga Village and hillside foothill homes — smoke-ready air filtration, repair, install, and free in-home estimates.",
    neighborhoods: ["Downtown Saratoga Village", "Congress Springs", "Brookglen", "Quito", "the Saratoga foothills"],
    housing:
      "Saratoga's foothill and Golden Triangle homes tend to be larger, multi-story properties on bigger lots, often with more than one HVAC zone already or a clear need for one. Homes closer to the hills also sit nearer wildfire-smoke exposure during fire season, which makes filtration upgrades a common add-on alongside a system replacement.",
    utility:
      "Silicon Valley Clean Energy (SVCE) supplies electricity in Saratoga; PG&E delivers the gas and maintains the grid. We check current SVCE/PG&E rebates at your free estimate — never a promised amount up front.",
    permits:
      "The City of Saratoga's Community Development Department requires a mechanical permit and HERS testing for HVAC changeouts. We pull the permit and schedule inspections.",
    climate:
      "Saratoga's tree cover and foothill elevation keep mornings cooler than the valley floor, but afternoon heat still climbs into the 90s in summer, and smoke from nearby wildfire seasons can affect indoor air quality for days at a time. We factor both into equipment and filtration recommendations.",
    faqs: [
      {
        q: "Our Saratoga home gets smoky during fire season — what are our air quality options?",
        a: `We install upgraded filtration and, where needed, whole-home air purifiers to cut smoke and particulates indoors. ${site.promises.estimate}`,
      },
      {
        q: "Our AC died during a heat wave in the foothills — same day?",
        a: `${site.promises.repair}`,
      },
      {
        q: "Do you offer free estimates in Saratoga?",
        a: `${site.promises.estimate}`,
      },
    ],
  },
  {
    slug: "sunnyvale",
    city: "Sunnyvale",
    h1: "HVAC Services in Sunnyvale",
    title: "HVAC Sunnyvale CA | Reliable & Certified Team",
    sub: "From Downtown Sunnyvale to the Heritage District, local families depend on our HVAC expertise.",
    hook: "downtown to the Heritage District",
    metaDesc:
      "Sunnyvale HVAC service from the Heritage District to the Fairbrae Eichler tract — ductless heat pumps, repair, and same-day no-cool response.",
    neighborhoods: ["Downtown Sunnyvale", "Heritage District", "Fairbrae / Fairwood (Eichler tract)", "Cherry Chase", "Ponderosa"],
    housing:
      "The Fairbrae and Fairwood Eichler tracts were built on radiant-heated slabs with no ductwork, the same as Palo Alto's Eichler neighborhoods — a ductless heat pump is the standard way to add cooling here. Downtown and the Heritage District mix older 1950s ranch homes with newer infill townhomes, and the older homes usually need a duct check before a straight equipment swap.",
    utility:
      "Silicon Valley Clean Energy (SVCE) supplies electricity in Sunnyvale; PG&E delivers the gas and maintains the grid. We check current SVCE/PG&E rebates at your free estimate — never a promised amount up front.",
    permits:
      "The City of Sunnyvale Building Safety Division requires a mechanical permit and HERS testing for HVAC changeouts. We pull the permit and schedule inspections.",
    climate:
      "Sunnyvale sits on the valley floor with minimal fog relief, so summer afternoons regularly reach the low-to-mid 90s. We size Eichler and slab-home systems for the whole radiant load, and standard homes with a full load calculation rather than a rule-of-thumb swap.",
    faqs: [
      {
        q: "We have an Eichler with radiant heat — can you add cooling?",
        a: `Yes — a ductless heat pump is the standard fix for a slab-heated Eichler like the ones in Fairbrae and Fairwood. ${site.promises.estimate}`,
      },
      {
        q: "How fast can you get to Sunnyvale on a no-cool day?",
        a: `${site.promises.repair}. ${site.promises.callback}.`,
      },
      {
        q: "Do you offer a free estimate for a new system in Sunnyvale?",
        a: `${site.promises.estimate}`,
      },
    ],
  },
];
