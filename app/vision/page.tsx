import { Metadata } from "next";
import VisionHero from '@/components/Vision/VisionHero';
import VisionContent from '@/components/Vision/VisionContent';

export const metadata: Metadata = {
  title: "Our Vision - Building the Future of Philippine EV Manufacturing | Rangkada",
  description: "Discover Rangkada's three-phase strategy: from fleet operator to leading EV manufacturer. Learn how we're revolutionizing transportation in the Philippines and Southeast Asia.",
  keywords: "vision, EV manufacturer, Philippine EV, electric vehicles Philippines, fleet electrification, sustainable transportation, EV manufacturing Southeast Asia",
  openGraph: {
    title: "Our Vision - Building the Future of Philippine EV Manufacturing | Rangkada",
    description: "Discover Rangkada's three-phase strategy: from fleet operator to leading EV manufacturer. Learn how we're revolutionizing transportation in the Philippines and Southeast Asia.",
    type: "website",
    url: "https://rangkada.com/vision",
    images: [
      {
        url: "/images/logo/RANGKADA-logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Rangkada - Building the Future of Philippine EV Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Vision - Building the Future of Philippine EV Manufacturing | Rangkada",
    description: "Discover Rangkada's three-phase strategy: from fleet operator to leading EV manufacturer.",
    images: ["/images/logo/RANGKADA-logo-horizontal.png"],
  },
  alternates: {
    canonical: "https://rangkada.com/vision",
  },
};

const VisionPage = () => {
  return (
    <>
      <VisionHero />
      <VisionContent />
    </>
  );
};

export default VisionPage;
