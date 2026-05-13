import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Implementation & Migration | S. Kopstick & Associates',
  description:
    'Proper software implementation and clean data migration for Spire and Adagio. Workflow configuration, data mapping, testing, and go-live support done right the first time.',
};

export default function ImplementationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
