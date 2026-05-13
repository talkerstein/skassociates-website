import type { Metadata } from 'next';

const title = 'Adagio — Proven Financial Reporting and Control | S. Kopstick & Associates';
const description =
  'Adagio offers exceptional financial reporting, departmental and consolidated reporting, detailed budgeting, GridView executive snapshots, and a strong fit for non-profits. Ongoing support for existing Adagio customers.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Adagio accounting',
    'Adagio software',
    'Adagio implementation',
    'GridView',
    'fund accounting',
    'Adagio Canada',
  ],
  alternates: { canonical: '/solutions/adagio' },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://skassociates.ca/solutions/adagio',
    siteName: 'S. Kopstick & Associates',
    title,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adagio accounting consulting by S. Kopstick & Associates',
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

export default function AdagioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
