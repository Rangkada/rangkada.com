import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter, Gemunu_Libre } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import ReCaptchaProvider from '@/components/Common/ReCaptchaProvider';
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import ThemeProvider from '@/components/Common/ThemeProvider';
import { Metadata } from "next";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const gemunuLibre = Gemunu_Libre({ 
  subsets: ["latin"],
  variable: '--font-gemunu-libre'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rangkada.com'),
  title: {
    default: "Rangkada | Electric Fleet Solutions Philippines",
    template: "%s | Rangkada"
  },
  description: "Transform your fleet with Rangkada's Pay-As-You-Save electric vehicles. Zero upfront cost, 50% guaranteed savings on fuel costs.",
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://rangkada.com",
    siteName: "Rangkada",
    images: [
      {
        url: "/images/logo/RANGKADA-text-horizontal.png",
        width: 1200,
        height: 630,
        alt: "Rangkada - Electric Fleet Solutions Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/logo/RANGKADA-text-horizontal.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="light">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.variable} ${gemunuLibre.variable} font-sans`}>
        <ReCaptchaProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </ReCaptchaProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_MEAS_ID} />
    </html>
  );
}
