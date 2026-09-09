// app/setup/layout.tsx
import type { Metadata } from 'next';

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title: 'SyntraTV Setup Guide — Install IPTV on Any Device | Firestick, Android, Smart TV, iOS, PC',
  description:
    'Complete step-by-step setup guide for SyntraTV. Learn how to install IPTV on Firestick, Android TV, Smart TV, iOS, Windows, and Mac. Easy installation with screenshots and video tutorials.',

  authors: [{ name: 'SyntraTV Team' }],
  creator: 'SyntraTV',
  publisher: 'SyntraTV',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: 'https://syntratv.vip/setup',
  },

  openGraph: {
    title: 'SyntraTV Setup Guide — Install IPTV on Any Device',
    description:
      'Step-by-step tutorial to install SyntraTV on Firestick, Android TV, Smart TV, iOS, Windows, and Mac. Complete setup instructions with screenshots.',
    url: 'https://syntratv.vip/setup',
    siteName: 'SyntraTV',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://syntratv.vip/img/logo.webp',
        width: 1200,
        height: 630,
        alt: 'SyntraTV Setup Guide - Install IPTV on Any Device',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SyntraTV Setup Guide — Install IPTV on Any Device',
    description:
      'Complete step-by-step setup guide for Firestick, Android TV, Smart TV, iOS, Windows, and Mac.',
    images: ['https://syntratv.vip/img/logo.webp'],
    creator: '@SyntraTV',
    site: '@SyntraTV',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  category: 'tutorial',
};

/* =========================
   JSON-LD: HOW TO SCHEMA
========================= */
const HowToSchema = () => (
  <script
    type="application/ld+json"
    id="howto-jsonld" // Added unique ID
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Setup SyntraTV on Any Device',
        description:
          'Complete step-by-step guide to install and configure SyntraTV on Firestick, Android TV, Smart TV, iOS, Windows, and Mac devices.',
        url: 'https://syntratv.vip/setup',
        totalTime: 'PT10M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'EUR',
          value: '0',
        },
        tool: [
          { '@type': 'HowToTool', name: 'Firestick / Fire TV' },
          { '@type': 'HowToTool', name: 'Android TV / Google TV' },
          { '@type': 'HowToTool', name: 'Smart TV (Samsung, LG, Sony)' },
          { '@type': 'HowToTool', name: 'iOS / iPhone / iPad' },
          { '@type': 'HowToTool', name: 'Windows PC' },
          { '@type': 'HowToTool', name: 'Mac Computer' },
        ],
        step: [
          {
            '@type': 'HowToStep',
            name: 'Subscribe to SyntraTV',
            position: 1,
            text: 'Choose your subscription plan (3, 6, or 12 months) and complete secure payment. Receive instant credentials via email.',
            url: 'https://syntratv.vip/pricing',
          },
          {
            '@type': 'HowToStep',
            name: 'Check Your Email',
            position: 2,
            text: 'After payment confirmation, check your email for login credentials including Username, Password, and Server URL.',
          },
          {
            '@type': 'HowToStep',
            name: 'Choose Your Device',
            position: 3,
            text: 'Select your device: Firestick, Android TV, Smart TV, iOS, Windows, or Mac.',
          },
          {
            '@type': 'HowToStep',
            name: 'Install IPTV App',
            position: 4,
            text: 'Download and install recommended IPTV player for your device (IPTV Smarters Pro, TiviMate, or Smart IPTV).',
            // Pro Tip: If you have screenshots later, you can expand steps with:
            // "image": "https://syntratv.vip/img/setup/step4.jpg"
          },
          {
            '@type': 'HowToStep',
            name: 'Login and Start Streaming',
            position: 5,
            text: 'Enter your credentials and enjoy 20,000+ live channels and 65,000+ VODs in 4K/8K quality.',
          },
        ],
        supply: [
          {
            '@type': 'HowToSupply',
            name: 'Stable Internet Connection (25+ Mbps for 4K)',
          },
          {
            '@type': 'HowToSupply',
            name: 'SyntraTV Login Credentials',
          },
        ],
      }),
    }}
  />
);

/* =========================
   JSON-LD: BREADCRUMB
========================= */
const BreadcrumbSchema = () => (
  <script
    type="application/ld+json"
    id="breadcrumb-jsonld" // Added unique ID
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://syntratv.vip',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Setup Guide',
            item: 'https://syntratv.vip/setup',
          },
        ],
      }),
    }}
  />
);

/* =========================
   MAIN LAYOUT
========================= */
export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HowToSchema />
      <BreadcrumbSchema />
      {/* FAQSchema removed here to clean up DOM execution footprint based on current Google algorithmic guidelines. Make sure to put those FAQs right into the visible text block layout of your main page component! */}
      {children}
    </>
  );
}