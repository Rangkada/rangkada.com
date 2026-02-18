import { Metadata } from "next";
import AlphaPartnersHero from '@/components/AlphaPartners/AlphaPartnersHero';
import AlphaPartnersContent from '@/components/AlphaPartners/AlphaPartnersContent';
// import AlphaPartnersApplyCTA from '@/components/AlphaPartners/AlphaPartnersApplyCTA';

export const metadata: Metadata = {
  title: "Partnerships - Build the EV Operations Network | Rangkada",
  description: "Partner with Rangkada to build the operations infrastructure for EV charging. For charging networks, hardware providers, energy companies, and technology partners.",
  keywords: "EV partnerships, charging network partners, hardware integration, energy providers, CPMS integration, OCPP partners",
  openGraph: {
    title: "Partnerships - Build the EV Operations Network | Rangkada",
    description: "Partner with Rangkada to build the operations infrastructure for EV charging. For charging networks, hardware providers, energy companies, and technology partners.",
    type: "website",
    url: "https://rangkada.com/alpha-partners",
    images: [
      {
        url: "/images/logo/RANGKADA-text-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Rangkada Partnerships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partnerships - Build the EV Operations Network | Rangkada",
    description: "Partner with Rangkada to build the operations infrastructure for EV charging.",
    images: ["/images/logo/RANGKADA-text-horizontal.png"],
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
