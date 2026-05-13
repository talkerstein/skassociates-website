import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adagio — Proven Financial Reporting and Control | S. Kopstick & Associates',
  description:
    'Adagio offers exceptional financial reporting, departmental and consolidated reporting, detailed budgeting, GridView executive snapshots, and a strong fit for non-profits. Ongoing support for existing Adagio customers.',
};

export default function AdagioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
