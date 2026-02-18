import { Metadata } from "next";
import ChargeOpsContent from "./ChargeOpsContent";

export const metadata: Metadata = {
  title: "ChargeOps - Operations Engine for EV Charging | Rangkada",
  description: "The operations engine behind reliable, profitable charging. Automated monitoring, diagnosis, and resolution for EV charging networks.",
  keywords: "EV charging operations, CPMS operations, charger reliability, demand charge optimization, charging network management, OCPP monitoring",
  openGraph: {
    title: "ChargeOps - Operations Engine for EV Charging | Rangkada",
    description: "The operations engine behind reliable, profitable charging. Automated monitoring, diagnosis, and resolution for EV charging networks.",
    type: "website",
    url: "https://rangkada.com/chargeops",
    images: [
      {
        url: "/images/logo/RANGKADA-text-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Rangkada ChargeOps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChargeOps - Operations Engine for EV Charging | Rangkada",
    description: "The operations engine behind reliable, profitable charging.",
    images: ["/images/logo/RANGKADA-text-horizontal.png"],
  },
  alternates: {
    canonical: "https://rangkada.com/chargeops",
  },
};

export default function ChargeOpsPage() {
  return <ChargeOpsContent />;
}
