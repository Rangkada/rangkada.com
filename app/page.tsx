import { Metadata } from "next";
import ScrollUp from "@/components/Common/ScrollUp";
import HomeHero from "@/components/Home/HomeHero";
import AlphaPartnersTeaser from '@/components/AlphaPartners/AlphaPartnersTeaser';
import VisionTeaser from '@/components/Vision/VisionTeaser';
import SolutionsTeaser from '@/components/Solutions/SolutionsTeaser';
import AlphaPartnersApplyCTA from "@/components/AlphaPartners/AlphaPartnersApplyCTA";
import TalkToUs from "@/components/TalkToUs";

export const metadata: Metadata = {
  title: "Rangkada | Electric Vehicle Ecosystem",
  description: "Powering the Connected EV Ecosystem of the Philippines.",
  keywords: "electric vehicles Philippines, EV fleet management, e-trike, e-motorcycle, commercial EV, fleet electrification, sustainable transportation Philippines, electric tricycle, electric motorcycle",
  openGraph: {
    title: "Rangkada | Electric Vehicle Ecosystem",
    description: "Powering the Connected EV Ecosystem of the Philippines.",
    type: "website",
    locale: "en_PH",
    images: [
      {
        url: "/images/logo/RANGKADA-text-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Rangkada - Electric Vehicle Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rangkada | Electric Vehicle Ecosystem",
    description: "Powering the Connected EV Ecosystem of the Philippines.",
    images: ["/images/logo/RANGKADA-text-horizontal.png"],
  },
};

export const dynamic = 'force-static';

export default async function Home() {

  return (
    <>
      <ScrollUp />
      <HomeHero />
      <SolutionsTeaser theme="light" />
      <AlphaPartnersTeaser />
      <VisionTeaser theme="light" />
      <div id="contact">
        <TalkToUs />
      </div>
      <AlphaPartnersApplyCTA />
    </>
  );
}
