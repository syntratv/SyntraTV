import type { Metadata } from 'next';

const BASE_URL = 'https://www.syntratv.vip';
const PAGE_PATH = '/syntra-tv';
const FULL_URL = `${BASE_URL}${PAGE_PATH}`;
const OG_IMAGE_URL = `${BASE_URL}/img/syntra-logo.png`; // Place image at public/img/og-syntra-tv.jpg

export const metadata: Metadata = {
  title: 'Syntra TV – Premium 4K IPTV & Ultra HD Live Streaming',
  description: 'Access 20,000+ live TV channels and 65,000+ VOD movies in crisp 4K Ultra HD with Syntra TV. Automated instant activation on Firestick, Smart TVs, Android, and iOS.',
  keywords: [
    'Syntra TV',
    'Syntra TV IPTV',
    '4K IPTV Streaming',
    'Buy Syntra TV',
    'IPTV Firestick Setup',
    'Live Sports Streaming',
    'Syntra TV Subscription',
    'Best IPTV Provider 2026'
  ],
  authors: [{ name: 'Syntra TV Network' }],
  creator: 'Syntra TV',
  publisher: 'Syntra TV Network',
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: FULL_URL,
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
  openGraph: {
    title: 'Syntra TV – Premium 4K IPTV & Ultra HD Live Streaming',
    description: 'Stream over 20,000 live channels and 65,000 VOD movies in 4K with zero buffering. Compatible with Firestick, Smart TVs, and mobile devices.',
    url: FULL_URL,
    siteName: 'Syntra TV Network',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Syntra TV 4K Live Streaming Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syntra TV – Premium 4K IPTV & Ultra HD Live Streaming',
    description: 'Stream 20,000+ live TV channels and 65,000+ VOD titles with instant automated setup on Firestick and Smart TVs.',
    images: [OG_IMAGE_URL],
  },
};

export default function SyntraTVLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Rich Structured Schemas for Google Search Console
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Syntra TV IPTV Subscription',
    image: [OG_IMAGE_URL],
    description: 'Enterprise 4K IPTV platform streaming over 20,000 live channels and 65,000+ VOD titles with anti-freeze servers.',
    sku: 'SYNTRA-TV-2026',
    mpn: 'SYNTRA-4K-01',
    brand: {
      '@type': 'Brand',
      name: 'Syntra TV'
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '30.00',
      highPrice: '139.00',
      offerCount: '3',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: FULL_URL
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '520',
      bestRating: '5',
      worstRating: '1'
    }
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'IPTV Streaming Service',
    provider: {
      '@type': 'Organization',
      name: 'Syntra TV Network',
      url: BASE_URL,
      logo: OG_IMAGE_URL
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Syntra TV Subscription Plans',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Syntra TV 3 Months Subscription'
          },
          price: '30.00',
          priceCurrency: 'EUR'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Syntra TV 6 Months Subscription'
          },
          price: '50.00',
          priceCurrency: 'EUR'
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Syntra TV 12 Months Subscription'
          },
          price: '72.00',
          priceCurrency: 'EUR'
        }
      ]
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Syntra TV',
        item: FULL_URL
      }
    ]
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Syntra TV and how does it work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Syntra TV is an enterprise-grade IPTV platform providing direct online streaming to over 20,000 live TV channels and 65,000 VOD movies and series directly through high-bandwidth edge servers.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does a Syntra TV subscription cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Syntra TV subscriptions are priced at €30 for 3 Months, €50 for 6 Months, and €72 for 12 Months.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Syntra TV compatible with Firestick and Smart TVs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Syntra TV supports Amazon Fire TV Stick, Android TV, Samsung Tizen, LG WebOS, Apple iOS, Android mobile, and Windows/Mac devices using apps like IPTV Smarters Pro and TiviMate.'
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="relative min-h-screen bg-[#03070D] text-white antialiased">
        {children}
      </div>
    </>
  );
}