import type { Metadata } from 'next';

const title = 'Implementation & Migration | S. Kopstick & Associates';
const description =
  'Proper software implementation and clean data migration for Spire and Adagio. Workflow configuration, data mapping, testing, and go-live support done right the first time.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Spire implementation',
    'Adagio implementation',
    'data migration',
    'BusinessVision migration',
    'accounting software migration',
  ],
  alternates: { canonical: '/solutions/implementation' },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://skassociates.ca/solutions/implementation',
    siteName: 'S. Kopstick & Associates',
    title,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Implementation and migration services by S. Kopstick & Associates',
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

export default function ImplementationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
