import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reporting & Process Improvement | S. Kopstick & Associates',
  description:
    'Custom reports, dashboards, Crystal Reports, and process optimization for Spire and Adagio. Turn your data into better decisions.',
};

export default function ReportingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
