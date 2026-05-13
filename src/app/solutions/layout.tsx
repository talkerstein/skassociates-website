import type { Metadata } from 'next';

const title = 'Solutions | S. Kopstick & Associates';
const description =
  'Spire and Adagio implementation, migration, training, support, and reporting solutions. Expert consulting that delivers lasting value for your organization.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Spire solutions',
    'Adagio solutions',
    'accounting software consulting',
    'ERP solutions Canada',
  ],
  alternates: { canonical: '/solutions' },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://skassociates.ca/solutions',
    siteName: 'S. Kopstick & Associates',
    title,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Solutions by S. Kopstick & Associates',
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

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
