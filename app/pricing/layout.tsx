// app/pricing/layout.tsx
import type { Metadata } from 'next';

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title: 'SyntraTV Pricing — Best IPTV Subscription Plans & Deals',
  description:
    'Choose the best SyntraTV subscription plan. Flexible 3, 6, and 12-month IPTV plans with multi-device support, instant activation, and premium streaming quality.',

  authors: [{ name: 'SyntraTV Team' }],
  creator: 'SyntraTV',
  publisher: 'SyntraTV',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: 'https://syntratv.vip/pricing',
  },

  openGraph: {
    title: 'SyntraTV Pricing — IPTV Subscription Plans',
    description:
      'Flexible IPTV subscription plans: 3, 6, and 12 months. Multi-device support and instant activation.',
    url: 'https://syntratv.vip/pricing',
    siteName: 'SyntraTV',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://syntratv.vip/img/logo.webp',
        width: 1200,
        height: 630,
        alt: 'SyntraTV Pricing Plans',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SyntraTV Pricing — IPTV Subscription Plans',
    description:
      'Choose your IPTV plan: 3, 6, or 12 months. Instant activation and multi-device support.',
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

  category: 'technology',
};

/* =========================
   JSON-LD: PRODUCT & AGGREGATE OFFER SCHEMA
========================= */
const PricingProductSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-product-jsonld"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'SyntraTV Subscription',
        description:
          'Premium IPTV subscription service with live TV channels and on-demand content in HD and 4K quality.',
        brand: {
          '@type': 'Brand',
          name: 'SyntraTV',
        },
        url: 'https://syntratv.vip/pricing',
        image: 'https://syntratv.vip/img/logo.webp',

        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '15000',
        },

        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'EUR',
          lowPrice: '30.00',
          highPrice: '139.00',
          offerCount: '3',
          priceValidUntil: '2027-12-31', // Mandatory field to fix search warnings
          availability: 'https://schema.org/OnlineOnly', // Mandatory field
          url: 'https://syntratv.vip/pricing',
        },
      }),
    }}
  />
);

/* =========================
   JSON-LD: BREADCRUMB
========================= */
const PricingBreadcrumbSchema = () => (
  <script
    type="application/ld+json"
    id="pricing-breadcrumb-jsonld"
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
            name: 'Pricing',
            item: 'https://syntratv.vip/pricing',
          },
        ],
      }),
    }}
  />
);

/* =========================
   MAIN LAYOUT
========================= */
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PricingBreadcrumbSchema />
      <PricingProductSchema />
      {children}
    </>
  );
}