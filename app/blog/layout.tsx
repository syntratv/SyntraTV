// app/blog/layout.tsx
import type { Metadata } from 'next';

/* =========================
   SEO METADATA
========================= */
export const metadata: Metadata = {
  title: 'SyntraTV Blog — IPTV Guides, Tutorials & Streaming News',
  description:
    'Official SyntraTV Blog. Discover IPTV setup guides for Firestick, Android, Smart TV, iOS, and PC. Stay updated with IPTV news, streaming tips, and 4K/8K viewing experiences.',

  authors: [{ name: 'SyntraTV Team' }],
  creator: 'SyntraTV',
  publisher: 'SyntraTV',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: 'https://syntratv.vip/blog',
  },

  openGraph: {
    title: 'SyntraTV Blog — IPTV Guides, Tutorials & Streaming Tips',
    description:
      'Official SyntraTV Blog. Learn IPTV setup on all devices and stay updated with the latest streaming news and tips.',
    url: 'https://syntratv.vip/blog',
    siteName: 'SyntraTV Blog',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://syntratv.vip/img/logo.webp',
        width: 1200,
        height: 630,
        alt: 'SyntraTV Blog - IPTV Guides & Streaming Tutorials',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SyntraTV Blog — IPTV Guides & Streaming Tips',
    description:
      'Learn IPTV setup on Firestick, Android, Smart TV, iOS, and PC. Latest IPTV news and streaming guides.',
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
   JSON-LD: BLOG IDENTITY SCHEMA
========================= */
const BlogRootSchema = () => (
  <script
    type="application/ld+json"
    id="blog-root-jsonld"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        '@id': 'https://syntratv.vip/blog#blog',
        name: 'SyntraTV Blog',
        description:
          'Official SyntraTV Blog featuring IPTV setup guides, tutorials, and streaming news.',
        url: 'https://syntratv.vip/blog',
        inLanguage: 'en-US',
        isFamilyFriendly: true,
        publisher: {
          '@type': 'Organization',
          name: 'SyntraTV',
          url: 'https://syntratv.vip',
          logo: {
            '@type': 'ImageObject',
            url: 'https://syntratv.vip/img/logo.webp',
          },
        },
      }),
    }}
  />
);

/* =========================
   JSON-LD: BREADCRUMB
========================= */
const BlogBreadcrumbSchema = () => (
  <script
    type="application/ld+json"
    id="blog-breadcrumb-jsonld"
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': 'https://syntratv.vip/blog#breadcrumb',
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
            name: 'SyntraTV Blog',
            item: 'https://syntratv.vip/blog',
          },
        ],
      }),
    }}
  />
);

/* =========================
   MAIN LAYOUT
========================= */
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BlogRootSchema />
      <BlogBreadcrumbSchema />
      
      {/* Unstyled div wrapper removed to keep structural component rendering pure and native */}
      {children}
    </>
  );
}