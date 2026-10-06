export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  category: "Tech" | "Finance" | "Marketing" | "Social Impact";
  filterTags: Array<"Tech" | "Finance" | "Marketing" | "Social Impact">;
  tagline: string;
  summary: string;
  bullets: string[];
  image?: string;
  visualType?: "hubops-preview" | "finance-chart" | "editorial-article" | "impact-story" | "community-campaign";
  accentColor: string;
  isCurrent?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: "monitor" | "pen-tool" | "file-text" | "calendar";
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  isCurrent?: boolean;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    firstName: string;
    lastName: string;
    monogram: string;
    role: string;
    scriptRole: string;
    tagline: string;
    speechBubbleQuote: string;
    badgeText: string;
    location: string;
    heroImage: string;
    avatar3dImage: string;
    pullQuote: string;
    bioParagraphs: string[];
  };
  contact: {
    linkedInUrl: string;
    linkedInUsername: string;
    location: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
  };
  marqueeSkills: string[];
  experience: ExperienceItem[];
  services: ServiceItem[];
  education: EducationItem[];
  stats: StatItem[];
  placeholdersNote: {
    photo: string;
    email: string;
    phone: string;
    samples: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Uditsmita Debnath",
    firstName: "Uditsmita",
    lastName: "Debnath",
    monogram: "UD",
    role: "Content Strategist & Writer",
    scriptRole: "Content Strategist & Writer",
    tagline:
      "Turning complex ideas in technology, AI and finance into clear, useful stories.",
    speechBubbleQuote: "Turning complex ideas into clear stories ♡",
    badgeText: "OPEN TO OPPORTUNITIES • AVAILABLE FOR COLLABORATION •",
    location: "Kolkata, India",
    heroImage: "/images/uditsmita-hero.jpg",
    avatar3dImage: "/images/uditsmita-avatar.jpg",
    pullQuote:
      "Good content should make the reader pause, understand something better, or look at a problem differently.",
    bioParagraphs: [
      "I like working on content that takes complex ideas and makes them easier to understand. That is especially important in technology, where a lot of good work can sound confusing if it is not explained clearly.",
      "At Hubops, I worked across research-led writing on AI, finance, digital transformation, cloud infrastructure, and enterprise software. My work sits at the intersection of research, writing, communication, and marketing—making content useful, clear, and connected to the problems businesses and professionals actually care about.",
    ],
  },
  contact: {
    linkedInUrl: "https://www.linkedin.com/in/uditsmita-debnath-892284409",
    linkedInUsername: "uditsmita-debnath-892284409",
    location: "Kolkata, India",
    emailPlaceholder: "hello@uditsmita.com [placeholder]",
    phonePlaceholder: "+91 98765 43210 [placeholder]",
  },
  marqueeSkills: [
    "Finance Content",
    "Publication Planning",
    "LinkedIn Content",
    "B2B Tech Writing",
    "Thought Leadership",
    "AI & Digital Transformation",
  ],
  experience: [
    {
      id: "hubops",
      company: "Hubops Private Limited",
      role: "Head of Content Intelligence & Research Lead",
      period: "Feb 2026 – Sep 2026 (8 months)",
      location: "Kolkata, India",
      category: "Tech",
      filterTags: ["Tech", "Marketing", "Finance"],
      tagline: "Enterprise Tech, AI & Cloud Intelligence",
      summary:
        "Led content intelligence, brand communication, and research-led writing across technology, AI, finance, digital transformation, and enterprise software.",
      bullets: [
        "Writing marketing content for Hubops’ services and brand communication across legacy modernization, cloud infrastructure, AI-enabled systems, API platforms, and custom software.",
        "Supporting LinkedIn content and organic content activities, translating technical depth into relatable narratives.",
        "Creating research-based posts and articles around AI, finance, and digital transformation.",
        "Breaking down complex technology topics into simple business language for executive audiences.",
        "Writing content around enterprise technology, software, automation, and innovation.",
        "Supporting topic research, content planning, and market positioning.",
        "Developing thought leadership ideas for social media and long-form publication formats.",
        "Helping communicate Hubops’ services in a clear and audience-friendly way.",
      ],
      image: "/images/hubops-preview.jpg",
      visualType: "hubops-preview",
      accentColor: "#3F9A94",
    },
    {
      id: "kpmg",
      company: "KPMG India",
      role: "Intern",
      period: "Oct 2026 – Present (Current)",
      location: "India",
      category: "Finance",
      filterTags: ["Finance"],
      tagline: "Advisory & Financial Intelligence",
      summary:
        "Applying economic analysis and structured research to institutional financial and corporate advisory workflows.",
      bullets: [
        "Intern within financial operations and advisory practice.",
        "Synthesizing market developments, economic metrics, and regulatory shifts into concise analytical notes.",
        "Supporting cross-functional research teams with structured data gathering and professional presentation.",
      ],
      image: "/images/kpmg-preview.jpg",
      accentColor: "#0F4C4A",
      visualType: "finance-chart",
      isCurrent: true,
    },
    {
      id: "requin",
      company: "Requin Solutions",
      role: "Content Writer",
      period: "Jun 2022 – Aug 2022 (3 months)",
      location: "India",
      category: "Marketing",
      filterTags: ["Marketing", "Tech"],
      tagline: "B2B Tech Blogs & Collateral",
      summary:
        "Produced diverse content formats including blog posts, website copy, and marketing collateral tailored to target audience needs and brand positioning.",
      bullets: [
        "Produced diverse content formats including blog posts, website copy, and marketing collateral, each precisely tailored to target audience needs and brand positioning.",
        "Maintained strict adherence to editorial guidelines, ensuring every deliverable met high standards of accuracy, clarity, and grammatical consistency.",
        "Conducted in-depth industry research to track emerging market trends and seamlessly integrated those insights into daily content creation, keeping brand messaging fresh, relevant, and competitive.",
      ],
      image: "/images/requin-preview.jpg",
      accentColor: "#F8A98A",
      visualType: "editorial-article",
    },
    {
      id: "finango",
      company: "Finango",
      role: "Content Writer",
      period: "Mar 2022 – Apr 2022 (2 months)",
      location: "India",
      category: "Social Impact",
      filterTags: ["Social Impact", "Finance"],
      tagline: "NGO Sector & Impact Storytelling",
      summary:
        "Researched and authored compelling, SEO-optimized articles and copy focused on NGO sector narratives and social impact storytelling.",
      bullets: [
        "Researched and authored compelling, SEO-optimized articles and copy focused on NGO sector narratives and social impact storytelling.",
        "Collaborated closely with marketing and design teams to align content with brand voice and business objectives ensuring consistency across all published materials.",
        "Contributed to measurable growth in organic traffic and user engagement through strategic keyword integration and content structuring.",
      ],
      image: "/images/finango-preview.jpg",
      accentColor: "#FBD57A",
      visualType: "impact-story",
    },
    {
      id: "mycaptain",
      company: "MyCaptain",
      role: "Sales & Marketing Intern",
      period: "Dec 2021 – Jan 2022 (2 months)",
      location: "India",
      category: "Marketing",
      filterTags: ["Marketing", "Social Impact"],
      tagline: "Community Campaigns & Peer Outreach",
      summary:
        "Represented the brand across multiple digital platforms to boost student engagement, strengthen community trust, and drive course enrolments.",
      bullets: [
        "Represented the brand across multiple digital platforms to boost student engagement, strengthen community trust, and drive course enrolments.",
        "Planned and executed peer-to-peer marketing campaigns and promotional initiatives that improved brand visibility among target student audiences.",
        "Served as a key liaison between the community and the company, gathering actionable feedback to continuously refine outreach strategies and improve campaign performance.",
      ],
      image: "/images/mycaptain-preview.jpg",
      accentColor: "#3F9A94",
      visualType: "community-campaign",
    },
  ],
  services: [
    {
      id: "tech-content",
      title: "B2B Tech Content",
      description:
        "Breaking down complex cloud architecture, legacy modernization, APIs, and custom software into engaging business language.",
      iconName: "monitor",
    },
    {
      id: "thought-leadership",
      title: "Thought Leadership",
      description:
        "Developing high-impact LinkedIn perspectives, executive commentary, and industry points-of-view that spark conversation.",
      iconName: "pen-tool",
    },
    {
      id: "research-articles",
      title: "Research-led Articles",
      description:
        "Rigorous research on emerging AI systems, financial ecosystems, and digital transformation with actionable takeaways.",
      iconName: "file-text",
    },
    {
      id: "content-planning",
      title: "Content Planning",
      description:
        "Editorial calendars, publication planning, topic positioning, and end-to-end multi-channel organic distribution strategies.",
      iconName: "calendar",
    },
  ],
  education: [
    {
      degree: "MBA in Marketing",
      field: "Marketing Management",
      institution: "Chandigarh University",
      period: "Sep 2026 – Jul 2028",
      isCurrent: true,
    },
    {
      degree: "Master of Arts",
      field: "Economics",
      institution: "Chandigarh University",
      period: "Aug 2021 – Jul 2023",
      isCurrent: false,
    },
    {
      degree: "Bachelor of Arts",
      field: "Economics",
      institution: "North-Eastern Hill University (NEHU), Shillong",
      period: "Apr 2018 – Jul 2021",
      isCurrent: false,
    },
  ],
  stats: [
    {
      value: 5,
      suffix: "+",
      label: "Roles & Internships",
      description: "Across tech, advisory, NGO & growth",
    },
    {
      value: 2,
      suffix: "",
      label: "Economics Degrees",
      description: "NEHU Shillong & Chandigarh Univ",
    },
    {
      value: 8,
      suffix: " Mos",
      label: "At Hubops",
      description: "Leading content intelligence & research",
    },
  ],
  placeholdersNote: {
    photo:
      "Hero photo and 3D avatar are styled to match the reference visual language. You can swap with your own headshot in /public/images/uditsmita-hero.jpg anytime.",
    email:
      "No email was provided in the LinkedIn profile. We provide 'hello@uditsmita.com [placeholder]' which can be updated in src/data/portfolioData.ts.",
    phone:
      "No phone number was provided in the LinkedIn profile. We provide '+91 98765 43210 [placeholder]'.",
    samples:
      "Card modals showcase real profile achievements from Hubops, KPMG, Requin, Finango, and MyCaptain. Live article links can be linked directly in portfolioData.ts.",
  },
};
