import { Metadata } from "next";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Complete Fleet Solutions",
  description: "The Central Nervous System for Electric Fleets in the Philippines.",
  keywords: "fleet solutions, electric vehicles Philippines, fleet management, battery swap, FleetOS, e-trike, e-motorcycle",
  openGraph: {
    title: "Complete Fleet Solutions",
    description: "The Central Nervous System for Electric Fleets in the Philippines",
    type: "website",
    url: "https://rangkada.com/solutions",
    images: [
      {
        url: "/images/logo/RANGKADA-text-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Rangkada - Complete Fleet Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complete Fleet Solutions",
    description: "The Central Nervous System for Electric Fleets in the Philippines",
    images: ["/images/logo/RANGKADA-text-horizontal.png"],
  },
  alternates: {
    canonical: "https://rangkada.com/solutions",
  },
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
