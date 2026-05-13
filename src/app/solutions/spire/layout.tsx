import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spire — The Natural Upgrade from BusinessVision | S. Kopstick & Associates',
  description:
    'Spire is the most logical upgrade from BusinessVision — keep all of your historical records, gain real-time inventory, integrated order management, and 20 included modules. Expert implementation and migration support.',
};

export default function SpireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
