import type { Metadata } from 'next';

const title = 'Spire — The Natural Upgrade from BusinessVision | S. Kopstick & Associates';
const description =
  'Spire is the most logical upgrade from BusinessVision — keep all of your historical records, gain real-time inventory, integrated order management, and 20 included modules. Expert implementation and migration support.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Spire software',
    'Spire accounting',
    'Spire implementation',
    'BusinessVision upgrade',
    'Spire Canada',
  ],
  alternates: { canonical: '/solutions/spire' },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://skassociates.ca/solutions/spire',
    siteName: 'S. Kopstick & Associates',
    title,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Spire implementation by S. Kopstick & Associates',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
};

export default function SpireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
