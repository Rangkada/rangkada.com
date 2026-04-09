import { Metadata } from "next";
import FleetElectrificationContent from "./FleetElectrificationContent";

export const metadata: Metadata = {
  title: "Fleet Electrification - Asset-Light EV Charging Solution | Rangkada",
  description: "Reliability-as-a-Service for EV fleets. 95%+ uptime, predictable energy costs, and shared savings. No upfront CapEx required.",
  keywords: "fleet electrification, EV charging, asset-light, reliability as a service, fleet charging solution, demand charge optimization",
  openGraph: {
    title: "Fleet Electrification - Asset-Light EV Charging Solution | Rangkada",
    description: "Reliability-as-a-Service for EV fleets. 95%+ uptime, predictable energy costs, and shared savings.",
    type: "website",
    url: "https://rangkada.com/fleet-electrification",
    images: [
      {
        url: "/images/logo/RANGKADA-text-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Rangkada Fleet Electrification",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleet Electrification - Asset-Light EV Charging Solution | Rangkada",
    description: "Reliability-as-a-Service for EV fleets. 95%+ uptime, predictable energy costs.",
    images: ["/images/logo/RANGKADA-text-horizontal.png"],
  },
  alternates: {
    canonical: "https://rangkada.com/fleet-electrification",
  },
};

export default function FleetElectrificationPage() {
  return <FleetElectrificationContent />;
}
