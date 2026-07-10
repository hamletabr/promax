// ============================================================================
// SPECIALS & COUPONS — powers /specials, the homepage strip, and the
// exit-intent offer popup. EDIT FREELY — every claim becomes an email lead.
// ----------------------------------------------------------------------------
//   value  – the big text on the coupon ("$99", "$500 OFF", "FREE")
//   title  – what the offer is
//   desc   – one supporting sentence (sell the benefit)
//   fine   – fine print (kept honest: expiration, conditions)
//   featured – true = also shown on the homepage strip (keep ~3)
// ============================================================================

export type Special = {
  value: string;
  title: string;
  desc: string;
  fine: string;
  featured?: boolean;
};

export const specials: Special[] = [
  {
    value: "$99",
    title: "Precision AC or Furnace Tune-Up",
    desc: "21-point inspection, coil cleaning, refrigerant check, and a written health report — keep breakdowns away before peak season.",
    fine: "Per system. New customers. Cannot be combined with other offers.",
    featured: true,
  },
  {
    value: "$500 OFF",
    title: "Complete System Installation",
    desc: "Save on any full HVAC system replacement — furnace + AC or an all-electric heat pump conversion, installed by our own certified team.",
    fine: "On qualifying complete systems. Mention this coupon when booking your free estimate.",
    featured: true,
  },
  {
    value: "FREE",
    title: "Service Call With Any Repair",
    desc: "We waive the diagnostic fee entirely when you approve the repair with us — you only ever pay for the fix.",
    fine: "Applied automatically to every repair, 7 days a week.",
    featured: true,
  },
  {
    value: "10% OFF",
    title: "Seniors, Military & First Responders",
    desc: "Our thank-you to those who serve — 10% off any repair or maintenance service, all year round.",
    fine: "Valid ID required. Up to $200 discount. Not combinable with other offers.",
  },
  {
    value: "$75 OFF",
    title: "Water Heater Replacement",
    desc: "Upgrade a failing tank, or go tankless / heat-pump and stack this with federal tax credits of up to $2,000.",
    fine: "One coupon per household. Mention when booking.",
  },
  {
    value: "$50 + $50",
    title: "Referral Reward",
    desc: "Refer a friend or neighbor: they get $50 off their first service, and you get a $50 credit when their job is complete.",
    fine: "Unlimited referrals. Credit issued after the referred job is paid in full.",
  },
];

export const featuredSpecials = specials.filter((s) => s.featured);
