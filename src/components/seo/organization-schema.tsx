const SITE_URL = "https://skassociates.ca";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "S. Kopstick & Associates Inc.",
  url: SITE_URL,
  logo: `${SITE_URL}/logos/og-logo.png`,
  description:
    "Toronto-based Spire and Adagio implementation consulting firm. Expert implementation, migration, training, and support for accounting software across Canada.",
  email: "samuel@skassociates.ca",
  telephone: "+1-416-785-8637",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  founder: {
    "@type": "Person",
    name: "Samuel Kopstick",
    jobTitle: "Founder & Principal Consultant",
  },
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  knowsAbout: [
    "Spire",
    "Adagio",
    "Spire implementation",
    "Adagio implementation",
    "BusinessVision migration",
    "Accounting software",
    "ERP implementation",
    "Financial reporting",
  ],
  sameAs: [],
};

const provider = {
  "@type": "Organization",
  name: "S. Kopstick & Associates Inc.",
  url: SITE_URL,
};

const areaServed = {
  "@type": "Country",
  name: "Canada",
};

const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Spire Implementation",
    serviceType: "Spire implementation",
    description:
      "End-to-end Spire accounting software implementation, including configuration, data migration, training, and go-live support.",
    provider,
    areaServed,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Adagio Implementation",
    serviceType: "Adagio implementation",
    description:
      "Adagio accounting implementation with departmental and consolidated reporting, fund accounting, and detailed budgeting setup.",
    provider,
    areaServed,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "BusinessVision Migration",
    serviceType: "BusinessVision migration",
    description:
      "Planned, low-risk migration from Sage BusinessVision to Spire or Adagio ahead of the BusinessVision end-of-support deadline.",
    provider,
    areaServed,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Training & Support",
    serviceType: "Software training and support",
    description:
      "Role-based training and ongoing expert support for Spire and Adagio users across Canada.",
    provider,
    areaServed,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Reporting & Process Improvement",
    serviceType: "Financial reporting and process improvement",
    description:
      "Custom reports, dashboards, Crystal Reports, and workflow optimization for Spire and Adagio.",
    provider,
    areaServed,
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Payment Processing",
    serviceType: "Payment processing integration",
    description:
      "Integrated payment processing setup and consulting for Spire and Adagio environments.",
    provider,
    areaServed,
  },
];

export function OrganizationSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {serviceSchemas.map((service) => (
        <script
          key={service.name}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
    </>
  );
}
