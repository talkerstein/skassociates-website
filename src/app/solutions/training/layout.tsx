import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Training & Support | S. Kopstick & Associates',
  description:
    'Practical, role-based training for Spire and Adagio. Ongoing expert support from someone who knows your system — not a generic help desk.',
};

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
