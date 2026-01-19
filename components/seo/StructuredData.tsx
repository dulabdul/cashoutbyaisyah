import React from 'react';

export const StructuredData = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Cashout By Aisyah',
    image: 'https://www.cashoutbyaisyah.net/images/og-image.jpg',
    description:
      'Perkhidmatan pencairan limit PayLater (Shopee, Boost, Grab) yang selamat dan pantas di Malaysia.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MY',
    },
    priceRange: '$$',
    telephone: '+601111270048',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    ],
  };

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};
