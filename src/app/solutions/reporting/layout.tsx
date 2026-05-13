import type { Metadata } from 'next';

const title = 'Reporting & Process Improvement | S. Kopstick & Associates';
const description =
  'Custom reports, dashboards, Crystal Reports, and process optimization for Spire and Adagio. Turn your data into better decisions.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Crystal Reports',
    'Spire reporting',
    'Adagio reporting',
    'financial dashboards',
    'process improvement',
  ],
  alternates: { canonical: '/solutions/reporting' },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://skassociates.ca/solutions/reporting',
    siteName: 'S. Kopstick & Associates',
    title,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Reporting and process improvement by S. Kopstick & Associates',
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

export default function ReportingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
