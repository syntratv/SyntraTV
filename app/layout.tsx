import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Poppins, Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Viewport configuration for mobile responsiveness & Google Mobile-Friendly Indexing
export const viewport: Viewport = {
  themeColor: '#050B14',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://syntratv.vip'),
  icons: {
    icon: [
      { url: '/img/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/img/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/img/favicons/favicon-48x48.png', sizes: '48x48' },
      { url: '/img/favicons/favicon-64x64.png', sizes: '64x64' },
      { url: '/img/favicons/favicon-96x96.png', sizes: '96x96' },
      { url: '/img/favicons/favicon-128x128.png', sizes: '128x128' },
      { url: '/img/favicons/favicon-256x256.png', sizes: '256x256' },
      { url: '/img/favicons/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/img/favicons/apple-touch-icon-57x57.png', sizes: '57x57' },
      { url: '/img/favicons/apple-touch-icon-72x72.png', sizes: '72x72' },
      { url: '/img/favicons/apple-touch-icon-114x114.png', sizes: '114x114' },
      { url: '/img/favicons/apple-touch-icon-120x120.png', sizes: '120x120' },
      { url: '/img/favicons/apple-touch-icon-144x144.png', sizes: '144x144' },
      { url: '/img/favicons/apple-touch-icon-152x152.png', sizes: '152x152' },
      { url: '/img/favicons/apple-touch-icon-180x180.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'android-chrome-48x48', url: '/img/favicons/android-chrome-48x48.png' },
      { rel: 'android-chrome-72x72', url: '/img/favicons/android-chrome-72x72.png' },
      { rel: 'android-chrome-96x96', url: '/img/favicons/android-chrome-96x96.png' },
      { rel: 'android-chrome-144x144', url: '/img/favicons/android-chrome-144x144.png' },
      { rel: 'android-chrome-192x192', url: '/img/favicons/android-chrome-192x192.png' },
      { rel: 'android-chrome-256x256', url: '/img/favicons/android-chrome-256x256.png' },
      { rel: 'android-chrome-384x384', url: '/img/favicons/android-chrome-384x384.png' },
      { rel: 'android-chrome-512x512', url: '/img/favicons/android-chrome-512x512.png' },
      { rel: 'mask-icon', url: '/img/favicons/safari-pinned-tab.svg', color: '#FFC107' },
    ],
  },
  manifest: '/img/favicons/site.webmanifest',
  title: {
    default: 'SyntraTV - Best Premium IPTV Subscription Service 2026',
    template: '%s | SyntraTV',
  },
  // Exact 153-character description focused on key search terms
  description: 'The Best IPTV subscription, Discover SyntraTV offers the best IPTV subscription service in 2026. Stream 20,000+ live channels & 65,000+ VODs in 4K/8K quality with fast setup & zero buffering.',
  authors: [{ name: 'SyntraTV Team' }],
  creator: 'SyntraTV',
  publisher: 'SyntraTV',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  // Resolves Hreflang audit issues and sets self-referencing canonical tag
  alternates: {
    canonical: 'https://syntratv.vip/',
    languages: {
      'en-US': 'https://syntratv.vip/',
      'x-default': 'https://syntratv.vip/',
    },
  },
  openGraph: {
    title: 'SyntraTV - Best Premium IPTV Subscription Service 2026',
    description: 'Discover the best IPTV subscription service in 2026 with SyntraTV. Stream 40,000+ channels & VODs in 4K/8K quality with fast setup & zero buffering.',
    url: 'https://syntratv.vip/',
    siteName: 'SyntraTV',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://syntratv.vip/img/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'SyntraTV - Premium IPTV Subscription Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SyntraTV - Best Premium IPTV Subscription Service 2026',
    description: 'Discover the best IPTV subscription service in 2026 with SyntraTV. Stream 40,000+ channels & VODs in 4K/8K quality with fast setup & zero buffering.',
    images: ['https://syntratv.vip/img/og-image.webp'],
    creator: '@SyntraTV',
    site: '@SyntraTV',
  },
  verification: {
    google: 'LxjjjIoDsM5AknwFsnG840fyX4jF4ae-isUkyxQ5sfA',
  },
  category: 'technology',
};

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SyntraTV",
    "url": "https://syntratv.vip",
    "logo": "https://syntratv.vip/img/logo.webp",
    "image": "https://syntratv.vip/img/og-image.webp",
    "description": "Premium IPTV subscription service with 20,000+ live channels and 65,000+ VODs.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://wa.me/+447549589503",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://t.me/SyntraTV",
      "https://twitter.com/SyntraTV"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SyntraTV",
    "url": "https://syntratv.vip",
    "description": "Premium IPTV subscription service",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://syntratv.vip/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "SyntraTV Premium Subscription",
    "logo": "https://syntratv.vip/img/logo.webp",
    "image": "https://syntratv.vip/img/og-image.webp",
    "description": "Premium IPTV service with 20,000+ live channels and 65,000+ VODs.",
    "brand": { "@type": "Brand", "name": "SyntraTV" },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "15000"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "3 Month Plan",
        "priceCurrency": "EUR",
        "price": "30.00",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/OnlineOnly",
        "url": "https://syntratv.vip/pricing"
      },
      {
        "@type": "Offer",
        "name": "6 Month Plan",
        "priceCurrency": "EUR",
        "price": "50.00",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/OnlineOnly",
        "url": "https://syntratv.vip/pricing"
      },
      {
        "@type": "Offer",
        "name": "12 Month Plan",
        "priceCurrency": "EUR",
        "price": "72.00",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/OnlineOnly",
        "url": "https://syntratv.vip/pricing"
      }
    ]
  }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="thumbnail" content="https://syntratv.vip/img/og-image.webp" />
      </head>
      <body
        className={`${poppins.className} ${montserrat.variable} antialiased min-h-screen bg-[#050B14] text-white bg-square-pattern overflow-x-hidden`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />

        <Header />
        <main className="min-h-screen w-full flex flex-col">{children}</main>
        <Footer />

        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-B7BHW6LZJG"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-B7BHW6LZJG');
            `,
          }}
        />
      </body>
    </html>
  );
}