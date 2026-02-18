import { Metadata } from "next";
import ScrollUp from "@/components/Common/ScrollUp";
import HomeHero from "@/components/Home/HomeHero";
import ServiceOverview from "@/components/Home/ServiceOverview";
import AlphaPartnersTeaser from '@/components/AlphaPartners/AlphaPartnersTeaser';
import TechnologyTeaser from '@/components/Technology/TechnologyTeaser';
import ChargeOpsTeaser from '@/app/chargeops/ChargeOpsTeaser';
import AlphaPartnersApplyCTA from "@/components/AlphaPartners/AlphaPartnersApplyCTA";
import TalkToUs from "@/components/TalkToUs";

export const metadata: Metadata = {
  title: "Rangkada | Operations Engine for EV Charging Networks",
  description: "Automated monitoring, diagnosis, and resolution for EV charging operations. 95%+ uptime, 15-25% cost reduction. Built for operators with 50+ chargers.",
  keywords: "EV charging operations, CPMS operations, charger reliability, demand charge optimization, charging network management, OCPP monitoring, fleet charging",
  openGraph: {
    title: "Rangkada | Operations Engine for EV Charging Networks",
    description: "Automated monitoring, diagnosis, and resolution for EV charging operations. 95%+ uptime, 15-25% cost reduction.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/logo/RANGKADA-text-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Rangkada - Operations Engine for EV Charging",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rangkada | Operations Engine for EV Charging Networks",
    description: "Automated monitoring, diagnosis, and resolution for EV charging operations. 95%+ uptime, 15-25% cost reduction.",
    images: ["/images/logo/RANGKADA-text-horizontal.png"],
  },
};

export const dynamic = 'force-static';

export default async function Home() {

  return (
    <>
      <ScrollUp />
      <HomeHero />
      <ChargeOpsTeaser theme="light" />
      <ServiceOverview />
      <AlphaPartnersTeaser />
      <TechnologyTeaser theme="light" />
      <AlphaPartnersApplyCTA />
      <div id="contact">
        <TalkToUs />
      </div>
    </>
  );
}
