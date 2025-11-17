import { Metadata } from "next";
import AlphaPartnersHero from '@/components/AlphaPartners/AlphaPartnersHero';
import AlphaPartnersContent from '@/components/AlphaPartners/AlphaPartnersContent';
// import AlphaPartnersApplyCTA from '@/components/AlphaPartners/AlphaPartnersApplyCTA';

export const metadata: Metadata = {
  title: "Alpha Partners - Join Our Pilot Program | Rangkada",
  description: "Become a founding partner and revolutionize your fleet with Rangkada's electric vehicles. Pay-as-you-save model with 50% savings on fuel costs. Zero upfront investment.",
  keywords: "alpha partners, pilot program, electric fleet, pay-as-you-save, founding partners, EV Philippines, fleet electrification",
  openGraph: {
    title: "Alpha Partners - Join Our Pilot Program | Rangkada",
    description: "Become a founding partner and revolutionize your fleet with Rangkada's electric vehicles. Pay-as-you-save model with 50% savings on fuel costs.",
    type: "website",
    url: "https://rangkada.com/alpha-partners",
    images: [
      {
        url: "/images/logo/RANGKADA-logo-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Rangkada Alpha Partners Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Partners - Join Our Pilot Program | Rangkada",
    description: "Become a founding partner and revolutionize your fleet with Rangkada's electric vehicles. Pay-as-you-save model with 50% savings on fuel costs.",
    images: ["/images/logo/RANGKADA-logo-horizontal.png"],
  },
  alternates: {
    canonical: "https://rangkada.com/alpha-partners",
  },
};

const AlphaPartnersPage = () => {

  return (
    <>
      <AlphaPartnersHero />
      <AlphaPartnersContent />
      {/*<AlphaPartnersApplyCTA />*/}
    </>
  );
};

export default AlphaPartnersPage;
