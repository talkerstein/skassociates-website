import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spire ERP Solutions | S. Kopstick & Associates',
  description:
    'Expert Spire implementation, configuration, and support. Real-time inventory, order management, purchasing, and integrated accounting for growing businesses.',
};

export default function SpireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
