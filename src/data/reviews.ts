// ============================================================
// Customer reviews — Promax Service Group (Google Business Profile)
// ------------------------------------------------------------
// Collected 2026-06. Star ratings were not shown in the source
// paste; all reviews are clearly positive so `rating` is set to 5
// (verify against Google if exact stars matter).
//
// `date` keeps Google's relative wording as shown.
// `truncated` = the original text was cut off with "… More" on
//   Google; paste the full version to complete it.
// `googlePhotos` = how many photos this reviewer attached on
//   Google. These are the reviews we can pair with a real photo.
// `photo` is blank for now — drop files in /public/images/reviews/
//   and fill this in when we map reviews -> photos.
// ============================================================

export type Review = {
  id: string;
  name: string;
  rating: number;              // 1–5
  date?: string;               // as shown on Google, e.g. "7 months ago"
  text: string;
  truncated?: boolean;         // true if Google text was cut off ("… More")
  source?: string;             // "Google" | "Yelp" | "Thumbtack" ...
  location?: string;
  service?: string;            // inferred from the review text
  featured?: boolean;          // show on the homepage (keep this to ~3 best)
  tech?: string;               // technician mentioned, if any
  googlePhotos?: number;       // # of photos this reviewer posted on Google
  ownerResponse?: string;      // business reply
  ownerResponseTruncated?: boolean;
  photo?: string;              // mapped job photo, e.g. "/images/reviews/sam-1.jpg"
  avatar?: string;
};

export const reviews: Review[] = [
  {
    id: "anastasiia",
    name: "Anastasiia",
    rating: 5,
    date: "7 months ago",
    text:
      "I don't usually write reviews, but the service I received from Promax was outstanding. Our heating system stopped working right before the holidays, and I was worried it would take weeks to fix. Promax responded immediately, scheduled us",
    truncated: true,
    source: "Google",
    service: "Heating / Furnace Repair",
    ownerResponse:
      "Thank you so much, Anastasiia, for taking the time to share your experience! We're so glad we could help get your heating system back up and running quickly — especially right before the holidays. Max and our team always strive to",
    ownerResponseTruncated: true,
    photo: "",
  },
  {
    id: "bhagya-b",
    name: "Bhagya B",
    rating: 5,
    date: "7 months ago",
    text:
      "Great experience with this heating and cooling company! They offered a 10-year service warranty, which is amazing. Every time we had an issue with our system, they came promptly and fixed it without any hassle. The technicians are",
    truncated: true,
    source: "Google",
    service: "HVAC",
    ownerResponse:
      "Thank you so much, Bhagya! We're truly happy to hear that you've had such positive experiences with our team and service over time. Reliability and professionalism are values we take great pride in, so your feedback means a lot to us.",
    ownerResponseTruncated: true,
    photo: "",
  },
  {
    id: "sam-l",
    name: "Sam L",
    rating: 5,
    date: "a year ago",
    text:
      "We found ProMax through Thumbtack to install a level 2 EV charger and additional outlets for our bathrooms. I went back and forth with Nick on Thumbtack about job scope, availability, and materials required. He was incredibly patient,",
    truncated: true,
    source: "Thumbtack",
    service: "Electrical / EV Charger",
    tech: "Nick",
    googlePhotos: 5,
    ownerResponse:
      "Sam, thank you so much for your thoughtful and detailed review! We're thrilled to hear about your positive experience with ProMax. Nick and Max strive to provide excellent customer service and quality work, and it's great to know they",
    ownerResponseTruncated: true,
    photo: "",
  },
  {
    id: "justin-williams",
    name: "Justin Williams",
    rating: 5,
    date: "7 months ago",
    text:
      "Had Slava from ProMax help with a furnace issue in my house today. What I feared was a major issue turned out to be a minor fix. He even helped to troubleshoot the split mini system on the other side of the house.",
    truncated: true,
    source: "Google",
    service: "Furnace Repair",
    tech: "Slava",
    ownerResponse:
      "Justin, this made our day! Thank you so much! We're really happy Slava could help and that it turned out to be just a minor fix. The \"ring of honor\" chip clip? That's amazing - we love it! 😊",
    ownerResponseTruncated: true,
    photo: "",
  },
  {
    id: "yu-chung-sun",
    name: "Yu-Chung Sun",
    rating: 5,
    date: "8 months ago",
    text:
      "I'm very satisfied with the experience with Promax. Their technicians were always on time for the appointments and on the work day. The heat pump was installed professionally and within the time window they promised. They are professional and very easy to work with. Responses have been very timely and courteous. Strongly recommend.",
    source: "Google",
    service: "Heat Pump Installation",
    featured: true,
    ownerResponse:
      "Thank you so much for your awesome feedback, Yu-Chung Sun! We're really happy to hear you had a great experience with our team and that your new heat pump was installed just the way you expected. We always try to make",
    ownerResponseTruncated: true,
    photo: "",
  },
  {
    id: "flor-s",
    name: "Flor S",
    rating: 5,
    date: "a year ago",
    text:
      "Contacted Promax Service Group through Yelp on Thursday and they were able to find me a tech the very next day. They were very professional, quick, and the price is reasonable. Max was my tech and he successfully mounted my Samsung 55\"",
    truncated: true,
    source: "Yelp",
    service: "TV Mounting / Handyman",
    tech: "Max",
    googlePhotos: 2,
    ownerResponse:
      "Thank you so much for your kind review! We're thrilled to hear that you had such a positive experience with our team. Max is a fantastic technician, and we're glad he was able to provide punctual, professional, and accommodating service",
    ownerResponseTruncated: true,
    photo: "",
  },
  {
    id: "miranda-hoogendoorn",
    name: "Miranda Hoogendoorn",
    rating: 5,
    date: "9 months ago",
    text:
      "I had an airconditioning malfunction. The Promax Pro happened to be in my area when I reached out. He was at my house within an hour, diagnosed and quoted on the spot, and was able to do the repair immediately. Super friendly, professional, fast, and reasonably priced - what a great experience. Thank you!",
    source: "Google",
    service: "AC Repair",
    featured: true,
    ownerResponse:
      "Thank you so much, Miranda for your kind feedback! We're glad we could provide fast, friendly, and professional AC repair for you. Your trust means a lot, and Promax is always here for reliable HVAC service whenever you need it!",
    photo: "",
  },
  {
    id: "gabriela-perez",
    name: "Gabriela Perez, EdD, LMFT",
    rating: 5,
    date: "a year ago",
    text:
      "We hired Promax to help us figure out what was happening with our gfi and new fridge. Max showed up and assessed the situation and carefully explained what we needed to do. He is really helpful and up front. He will become our go to electrician.",
    source: "Google",
    service: "Electrical",
    tech: "Max",
    googlePhotos: 1,
    ownerResponse:
      "Thank you for your wonderful review, Gabriela! We're thrilled to hear that Max provided you with helpful and clear explanations. It's great to know that you'll be choosing us as your go-to electrician. We look forward to assisting you again in the future!",
    photo: "",
  },
  {
    id: "goktug-gurler",
    name: "Göktuğ Gürler",
    rating: 5,
    date: "8 months ago",
    text:
      "There was a significant noise when the AC is turned on. They fixed it very nicely within one day by moving air intake away from the motor. They went under the house and did all the connections. They work professionally and clean after reasonably well. Great service…",
    source: "Google",
    service: "AC Repair",
    featured: true,
    googlePhotos: 1,
    ownerResponse:
      "Thank you, Göktuğ, for sharing your experience with us! We're glad our team was able to quickly resolve the AC noise issue and ensure everything was done professionally. It's great to hear that the solution worked well and that you were",
    ownerResponseTruncated: true,
    photo: "",
  },
];

// Reviewers who posted photos on Google (these are the ones we can map to a real photo):
//   sam-l (5), flor-s (2), gabriela-perez (1), goktug-gurler (1)

export default reviews;
