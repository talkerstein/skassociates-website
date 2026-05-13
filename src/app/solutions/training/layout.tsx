import type { Metadata } from 'next';

const title = 'Training & Support | S. Kopstick & Associates';
const description =
  'Practical, role-based training for Spire and Adagio. Ongoing expert support from someone who knows your system, not a generic help desk.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Spire training',
    'Adagio training',
    'accounting software training',
    'Spire support',
    'Adagio support',
  ],
  alternates: { canonical: '/solutions/training' },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://skassociates.ca/solutions/training',
    siteName: 'S. Kopstick & Associates',
    title,
    description,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Training and support by S. Kopstick & Associates',
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

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
