export const SITE = {
  name: "KidsCommons",
  tagline: "Columbus Indiana Children's Museum",
  description:
    "A fun, safe, and inviting place that nurtures exploration, collaboration, and creativity within all children and their caregivers.",
  url: "https://www.kidscommons.org",
  phone: "(812) 378-3046",
  email: "info@kidscommons.org",
  address: {
    street: "309 Washington Street",
    city: "Columbus",
    state: "IN",
    zip: "47201",
  },
  social: {
    facebook: "https://www.facebook.com/kidscommons",
    instagram: "https://www.instagram.com/kidscommons",
  },
  hours: [
    { days: "Tuesday - Saturday", time: "10:00 AM - 1:00 PM & 2:00 PM - 5:00 PM" },
    { days: "Sunday", time: "2:00 PM - 5:00 PM" },
    { days: "Monday", time: "Closed" },
  ],
  shopUrl: "https://shop.kidscommons.org",
  ticketsUrl: "https://shop.kidscommons.org/calendar.aspx",
  membershipUrl: "https://shop.kidscommons.org",
  donateUrl: "https://shop.kidscommons.org/Donation.aspx",
} as const

export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Visit",
    href: "/visit",
    children: [
      { label: "Hours & Admission", href: "/visit/hours-admission" },
      { label: "Exhibits", href: "/visit/exhibits" },
      { label: "Session Tickets", href: "/visit/tickets" },
      { label: "Location & Parking", href: "/visit/location-parking" },
      { label: "Museums for All", href: "/visit/museums-for-all" },
    ],
  },
  { label: "Memberships", href: "/memberships" },
  {
    label: "Education",
    href: "/education",
    children: [
      { label: "Overview", href: "/education" },
      { label: "School Programs", href: "/education/school-programs" },
      { label: "Field Trip Policy", href: "/education/policy" },
    ],
  },
  { label: "Parties & Rentals", href: "/parties-rentals" },
  { label: "Summer Camps", href: "/summer-camps" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Mission & History", href: "/about/mission-history" },
      { label: "Our Team", href: "/about/team" },
      { label: "Board of Directors", href: "/about/board" },
      { label: "Annual Report", href: "/about/annual-report" },
      { label: "Strategic Plan", href: "/about/strategic-plan" },
      { label: "Employment", href: "/about/employment" },
      { label: "Contact Us", href: "/about/contact" },
    ],
  },
  {
    label: "Support",
    href: "/support/donate",
    children: [
      { label: "Donate", href: "/support/donate" },
      { label: "Volunteer", href: "/support/volunteer" },
      { label: "Kroger Rewards", href: "/support/kroger-rewards" },
      { label: "Donation Request", href: "/support/donation-request" },
    ],
  },
]

export const EXHIBITS = [
  {
    name: "Camp KidsCommons",
    description:
      "An outdoor-themed adventure where kids can explore nature, build a campfire, and discover wildlife in a safe indoor environment.",
    image: "/images/exhibits/camp.jpg",
  },
  {
    name: "Kids-At-Art",
    description:
      "A creative studio where young artists can paint, sculpt, and express themselves through a variety of art mediums.",
    image: "/images/exhibits/art.jpg",
  },
  {
    name: "Bubble-ology",
    description:
      "The science of bubbles comes alive! Kids create giant bubbles, bubble walls, and learn about surface tension through hands-on play.",
    image: "/images/exhibits/bubbles.jpg",
  },
  {
    name: "Early Childhood Garden",
    description:
      "A dedicated space for our youngest visitors (ages 0-3) to safely explore, crawl, and discover at their own pace.",
    image: "/images/exhibits/garden.jpg",
  },
  {
    name: "ExploraHouse!",
    description:
      "A multi-level play house where kids can build, experiment with water tables, and learn through imaginative play.",
    image: "/images/exhibits/explorahouse.jpg",
  },
] as const
