export const siteBrand = {
  name: 'Reymond Godoy',
  legalName: 'Reymond Godoy',
  tagline: 'Freelance Web Developer',
  description: 'A Philippines-based freelance web developer building websites for clients who want to grow their business online.',
  shortDescription: 'Freelance website development for business owners who need a clear, professional, and growth-ready online presence.',
  address: 'Dipolog City, Philippines, 7100',
  locality: 'Dipolog City',
  postalCode: '7100',
  addressCountry: 'PH',
  email: 'reymondgodoy89@gmail.com',
  mailto: 'mailto:reymondgodoy89@gmail.com?subject=Project%20Inquiry',
  url: 'https://reymond.online',
  // Socials previously pointed at the Facebook / Instagram / LinkedIn
  // homepages rather than the brand's own profiles. Hide the social row in
  // the footer until each entry is replaced with the real profile URL (and a
  // matching single-letter `icon`). Re-add entries of the shape
  // `{ label, href, icon }` when the profiles exist.
  socials: [] as ReadonlyArray<{ label: string; href: string; icon: string }>,
} as const;

export const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about-me', label: 'About me' },
  { href: '/contact', label: 'Contact' },
] as const;

// export const resourceLinks = [
//   { href: '/website-content', label: 'Blogs' },
//   { href: '/website-content#articles', label: 'Articles' },
// ] as const;

export const industryLinks = [
  { href: '/website-development#industry-retail', label: 'Retail' },
  { href: '/website-development#industry-logistics', label: 'Logistics' },
  { href: '/website-development#industry-medical-clinic-health', label: 'Medical / Clinic / Health' },
  { href: '/website-development#industry-enterprise-business', label: 'Enterprise Business' },
  { href: '/website-development#industry-financial-lending', label: 'Financial / Lending' },
  { href: '/website-development#industry-bpo', label: 'BPO' },
  { href: '/website-development#industry-food-beverages', label: 'Food & Beverages' },
  { href: '/website-development#industry-real-estate-property', label: 'Real Estate & Property' },
  { href: '/website-development#industry-education', label: 'Education' },
  { href: '/website-development#industry-spo', label: 'Social Enterprise (SPO)' },
] as const;

export const aboutPoints = [
  'Start by understanding the project goals, target users, and what the website needs to achieve.',
  'Define the structure of the website by translating the business offer into clear pages and user flow.',
  'Design and build responsive interfaces that ensure consistency across mobile, tablet, and desktop devices.',
  'Develop the website using modern web standards focused on performance, scalability, and maintainability.',
  'Test functionality and user experience using manual checks and automation tools like Selenium and Puppeteer.',
  'Prepare deployment guidance and finalize key pages so the website is ready for launch and real user interaction.',
] as const;

export const webServicingPackages = [
  {
    title: 'Service / Home Launch',
    summary: 'High-conversion homepages for new brands and relaunches.',
  },
  {
    title: 'Service / Brand Story',
    summary: 'About pages that build trust and frame the offer clearly.',
  },
  {
    title: 'Service / Service Stack',
    summary: 'Service pages that explain deliverables, benefits, and next steps.',
  },
  {
    title: 'Service / Booking Flow',
    summary: 'Consultation and appointment pages with simple conversion paths.',
  },
  {
    title: 'Service / E-Commerce',
    summary: 'Storefronts with product listings, carts, and checkout paths.',
  },
  {
    title: 'Service / Client Portal',
    summary: 'Dashboards for proposals, staging links, approvals, and updates.',
  },
  {
    title: 'Service / Admin Console',
    summary: 'Internal screens for content, users, and operational control.',
  },
  {
    title: 'Service / FAQ Center',
    summary: 'Searchable help pages that reduce support friction.',
  },
  {
    title: 'Service / Pricing Table',
    summary: 'Clear pricing and package pages that help clients decide faster.',
  },
  {
    title: 'Service / Case Study',
    summary: 'Portfolio pages that show process, result, and proof.',
  },
  {
    title: 'Service / Retainer Hub',
    summary: 'Maintenance and support pages for post-launch care.',
  },
  {
    title: 'Service / Contact Funnel',
    summary: 'Forms and lead capture pages with strong qualification steps.',
  },
] as const;

export const serviceCards = [
  {
    title: 'Website Development',
    body: 'Fast, responsive, and scalable website solutions built for businesses, startups, and individuals using modern web technologies tailored to specific goals and budgets.',
    href: '/website-development',
  },
  {
    title: 'Web Design Services',
    body: 'Clean and user-focused web design with mobile responsiveness, intuitive layouts, and conversion-driven interfaces that improve engagement and usability.',
    href: '/website-design',
  },
  {
    title: 'Website Hosting',
    body: 'Technical guidance for choosing affordable and reliable website deployment solutions based on project requirements, traffic needs, and overall budget.',
    href: '/website-hosting',
  },
  {
    title: 'Website Testing & Automation',
    body: 'Manual and automated website testing services using Selenium and Puppeteer to identify bugs, improve functionality, and ensure a smooth user experience.',
    href: '/website-testing',
  },
  {
    title: 'SEO Optimization Services',
    body: 'Technical SEO improvements, on-page optimization, and performance-focused strategies designed to increase search visibility and organic website traffic.',
    href: '/seo-optimization',
  },
  {
    title: 'Website Maintenance & Support',
    body: 'Ongoing website maintenance, security updates, bug fixes, and performance monitoring to keep web applications stable, secure, and up to date.',
    href: '/support-and-maintenance',
  },
] as const;

export const processSteps = [
  {
    step: '01',
    title: 'Understand the business',
    body: 'We review the offer, audience, competitors, current website if available, and the result the client wants.',
  },
  {
    step: '02',
    title: 'Plan the website',
    body: 'We map the pages, content, calls to action, and conversion path before visual design or development starts.',
  },
  {
    step: '03',
    title: 'Design and build',
    body: 'We create responsive pages, structured content, and clean code in a private review environment.',
  },
  {
    step: '04',
    title: 'Launch and improve',
    body: 'We prepare deployment, basic SEO setup, analytics readiness, and next-step recommendations for continued growth.',
  },
] as const;

export const footerGroups = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About', href: '/about-me' },
      { label: 'FAQs', href: '/faqs' },
      // { label: 'Blogs', href: '/website-content' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'SEO Optimization', href: '/seo-optimization' },
      { label: 'Web Design', href: '/website-design' },
      { label: 'Website Development', href: '/website-development' },
      { label: 'Website Hosting', href: '/website-hosting' },
      { label: 'Website Maintenance & Support', href: '/support-and-maintenance' },
      { label: 'Website Testing & Automation', href: '/website-testing' },
    ],
  },
] as const;

export const tools = [
  {
    name: 'Next.js',
    logo: '/tools/nextjs.svg',
  },
  {
    name: 'React',
    logo: '/tools/react.svg',
  },
  {
    name: 'TypeScript',
    logo: '/tools/typescript.svg',
  },
  {
    name: 'Node.js',
    logo: '/tools/nodejs.svg',
  },
  {
    name: 'PostgreSQL',
    logo: '/tools/postgresql.svg',
  },
  {
    name: 'MongoDB',
    logo: '/tools/mongodb.svg',
  },
  {
    name: 'Docker',
    logo: '/tools/docker.svg',
  },
  {
    name: 'Git',
    logo: '/tools/git.svg',
  },
  {
    name: 'Selenium',
    logo: '/tools/selenium.svg',
  },
  {
    name: 'Puppeteer',
    logo: '/tools/puppeteer.svg',
  },
] as const;
