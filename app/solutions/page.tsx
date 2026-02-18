import { Metadata } from "next";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "ChargeOps - Operations Engine",
  description: "Operations engine for EV charging networks. Intelligent monitoring, predictive maintenance, and optimization that delivers 95%+ uptime and 15-25% cost reduction.",
  keywords: "EV charging operations, CPMS integration, charging network reliability, demand charge optimization, predictive maintenance, charging station monitoring",
  openGraph: {
    title: "ChargeOps - Operations Engine | Rangkada",
    description: "Operations engine for EV charging networks. 95%+ uptime, 15-25% cost reduction.",
    type: "website",
    url: "https://rangkada.com/solutions",
    images: [
      {
        url: "/images/logo/RANGKADA-text-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Rangkada ChargeOps - Operations Engine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChargeOps - Operations Engine | Rangkada",
    description: "Operations engine for EV charging networks. 95%+ uptime, 15-25% cost reduction.",
    images: ["/images/logo/RANGKADA-text-horizontal.png"],
  },
  alternates: {
    canonical: "https://rangkada.com/solutions",
  },
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
