import { Metadata } from "next";
import VisionHero from '@/components/Vision/VisionHero';
import VisionContent from '@/components/Vision/VisionContent';

export const metadata: Metadata = {
  title: "Our Vision - Intelligent Orchestration for Distributed Energy | Rangkada",
  description: "From solving EV charging operations today to orchestrating distributed energy resources tomorrow. Building the infrastructure for the distributed energy future.",
  keywords: "distributed energy, V2G, vehicle to grid, energy orchestration, smart charging, grid services, renewable energy, EV charging operations",
  openGraph: {
    title: "Our Vision - Intelligent Orchestration for Distributed Energy | Rangkada",
    description: "From solving EV charging operations today to orchestrating distributed energy resources tomorrow. Building the infrastructure for the distributed energy future.",
    type: "website",
    url: "https://rangkada.com/vision",
    images: [
      {
        url: "/images/logo/RANGKADA-text-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Rangkada - Intelligent Orchestration for Distributed Energy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Vision - Intelligent Orchestration for Distributed Energy | Rangkada",
    description: "From solving EV charging operations today to orchestrating distributed energy resources tomorrow.",
    images: ["/images/logo/RANGKADA-text-horizontal.png"],
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
