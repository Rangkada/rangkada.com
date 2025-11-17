import { Metadata } from "next";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Complete Fleet Solutions | Rangkada",
  description: "Discover Rangkada's complete electric fleet solution: Pay-As-You-Save financing, data-driven EV design, PowerSwap battery network, and FleetOS management platform.",
  keywords: "fleet solutions, Pay-As-You-Save, electric vehicles Philippines, fleet management, battery swap, FleetOS, e-trike, e-motorcycle",
  openGraph: {
    title: "Complete Fleet Solutions | Rangkada",
    description: "Pay-As-You-Save financing, data-driven vehicles, PowerSwap network, and FleetOS management - everything you need for electric fleet success.",
    type: "website",
    url: "https://rangkada.com/solutions",
    images: [
      {
        url: "/images/logo/RANGKADA-logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Rangkada - Complete Fleet Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Fleet Solutions | Rangkada",
    description: "Pay-As-You-Save financing, data-driven vehicles, PowerSwap network, and FleetOS management platform.",
    images: ["/images/logo/RANGKADA-logo-horizontal.png"],
  },
  alternates: {
    canonical: "https://rangkada.com/solutions",
  },
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
