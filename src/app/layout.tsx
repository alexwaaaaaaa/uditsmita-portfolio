import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmsans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uditsmita.com"),
  title: "Uditsmita Debnath | Content Strategist & Writer",
  description:
    "Personal portfolio of Uditsmita Debnath. Content Strategist & Writer turning complex ideas in technology, AI and finance into clear, useful stories.",
  keywords: [
    "Uditsmita Debnath",
    "Content Strategist",
    "B2B Tech Writer",
    "AI Content",
    "Finance Content",
    "Digital Transformation",
    "Hubops",
    "KPMG India",
    "Thought Leadership",
  ],
  authors: [{ name: "Uditsmita Debnath" }],
  creator: "Uditsmita Debnath",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://uditsmita.com",
    title: "Uditsmita Debnath | Content Strategist & Writer",
    description:
      "Turning complex ideas in technology, AI and finance into clear, useful stories.",
    siteName: "Uditsmita Debnath Portfolio",
    images: [
      {
        url: "/images/uditsmita-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Uditsmita Debnath - Content Strategist & Writer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uditsmita Debnath | Content Strategist & Writer",
    description:
      "Turning complex ideas in technology, AI and finance into clear, useful stories.",
    images: ["/images/uditsmita-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F4C4A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Uditsmita Debnath",
    jobTitle: "Content Strategist & Writer",
    worksFor: {
      "@type": "Organization",
      name: "KPMG India",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Chandigarh University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "North-Eastern Hill University (NEHU)",
      },
    ],
    url: "https://www.linkedin.com/in/uditsmita-debnath-892284409",
    sameAs: ["https://www.linkedin.com/in/uditsmita-debnath-892284409"],
    description:
      "Content Strategist & Writer turning complex ideas in technology, AI and finance into clear, useful stories.",
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${caveat.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen selection:bg-[#F8A98A] selection:text-[#0F4C4A]">
        {children}
      </body>
    </html>
  );
}
