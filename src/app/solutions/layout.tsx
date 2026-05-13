import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions | S. Kopstick & Associates',
  description:
    'Spire and Adagio implementation, migration, training, support, and reporting solutions. Expert consulting that delivers lasting value for your organization.',
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
