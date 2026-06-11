export const siteConfig = {
  name: "EKC Digital",
  tagline: "We build websites that help businesses grow.",
  whatsappUrl: "https://wa.me/905530948822",
};

export const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
];

export const heroFeatures = [
  { label: "Fast Delivery", icon: "clock" },
  { label: "Fixed Pricing", icon: "tag" },
  { label: "Ongoing Support", icon: "support" },
];

export const services = [
  {
    title: "Custom Website Design",
    description:
      "Modern, responsive websites tailored to your business, brand, and audience.",
    icon: "palette",
    color: "bg-violet-100 text-violet-600",
  },
  {
    title: "Web Applications",
    description:
      "Simple, useful web apps built around real business needs, not unnecessary features.",
    icon: "app",
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "QR Menu Systems",
    description:
      "Clean digital menus for restaurants, cafés, and local food businesses.",
    icon: "qrcode",
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Business Dashboards",
    description:
      "Custom dashboards to manage data, bookings, orders, reports, or internal workflows.",
    icon: "chart",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Launch & Domain Setup",
    description:
      "We help publish your project, connect your domain, and prepare everything for launch.",
    icon: "globe",
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Ongoing Support",
    description:
      "Reliable help for small updates, fixes, improvements, and maintenance after launch.",
    icon: "headset",
    color: "bg-indigo-100 text-indigo-600",
  },
];

export interface WorkProject {
  title: string;
  description: string;
  category: string;
  tags: string[];
  gradient: string;
  url?: string;
  image?: string;
  featured?: boolean;
}

export const workProjects: WorkProject[] = [
  {
    title: "Limon Games",
    description:
      "A modern gaming studio website showcasing mobile games, careers, and company story with a bold, playful brand.",
    category: "Website",
    tags: ["Website", "Gaming", "Mobile"],
    gradient: "from-lime-400 to-yellow-500",
    url: "https://www.limon.games/",
    image: "/limon.jpg",
    featured: true,
  },
  {
    title: "Urban Hair Studio",
    description:
      "A stylish salon website with service listings, gallery, and easy booking for local clients.",
    category: "Website",
    tags: ["Website", "Beauty", "Booking"],
    gradient: "from-pink-400 to-rose-500",
    image: "/urban.jpg",
  },
  {
    title: "Peak Fitness Co.",
    description:
      "A membership dashboard web app with class schedules, trainer profiles, analytics, and member management.",
    category: "Web App",
    tags: ["Web App", "Fitness", "Dashboard"],
    gradient: "from-lime-400 to-green-600",
    image: "/peak.jpg",
  },
  {
    title: "Restaurant Website",
    description:
      "A clean restaurant website designed to showcase the menu, location, and online reservations.",
    category: "Website",
    tags: ["Website", "Food & Dining", "Reservations"],
    gradient: "from-orange-400 to-red-500",
  },
  {
    title: "SaaS Dashboard UI",
    description:
      "A modern dashboard interface for a subscription-based software product with analytics and user management.",
    category: "Web App",
    tags: ["Web App", "SaaS", "Dashboard"],
    gradient: "from-violet-500 to-purple-700",
  },
  {
    title: "Clinic Booking App",
    description:
      "An appointment-focused web app that helps patients book visits and clinics manage schedules online.",
    category: "Web App",
    tags: ["Web App", "Healthcare", "Appointments"],
    gradient: "from-teal-400 to-cyan-600",
  },
  {
    title: "Construction Portal",
    description:
      "A professional website for a construction company with project showcases and quote request forms.",
    category: "Website",
    tags: ["Website", "Construction", "Lead Gen"],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "E-commerce Store",
    description:
      "A product-focused online store with catalog browsing, cart flow, and mobile-friendly checkout.",
    category: "Website",
    tags: ["Website", "E-commerce", "Retail"],
    gradient: "from-blue-500 to-indigo-600",
  },
];

export const homeWorkProjects = workProjects.filter((project) =>
  ["Limon Games", "Urban Hair Studio", "Peak Fitness Co."].includes(project.title),
);

export const howWeWorkSteps = [
  "We understand your needs",
  "We build the solution",
  "We launch and support",
];

export const aboutWhyPoints = [
  "Clear and simple process",
  "Practical solutions, not bloated features",
  "Responsive communication",
  "Launch and domain setup support",
  "Ongoing support after delivery",
];

export const pricingFeatures = [
  "Custom responsive design",
  "Contact / WhatsApp integration",
  "Basic SEO setup",
  "Google Maps or social links",
  "Domain connection support",
  "Launch support",
];
