import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adagio Accounting Solutions | S. Kopstick & Associates',
  description:
    'Expert Adagio implementation, configuration, and support. Modular financial management with strong controls, audit trails, and reporting for accounting-focused organizations.',
};

export default function AdagioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
