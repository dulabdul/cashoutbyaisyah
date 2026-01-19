import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { StructuredData } from '@/components/seo/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'Cashout SPayLater & Boost PayFlex | Trusted Fast Cair - CashoutByAisyah',
  description:
    'Perkhidmatan pencairan limit Shopee PayLater (SPayLater), Boost PayFlex, dan Grab PayLater yang pantas, selamat, dan dipercayai di Malaysia. Cairkan tunai segera!',
  metadataBase: new URL('https://www.cashoutbyaisyah.net'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cashout SPayLater & Boost PayFlex Malaysia',
    description:
      'Tukar limit PayLater anda jadi cash tunai dalam 5 minit. Selamat & Trusted.',
    url: 'https://www.cashoutbyaisyah.net',
    siteName: 'CashoutByAisyah',
    images: [
      {
        url: '/images/og-image.jpg', // Pastikan buat gambar ini (1200x630)
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ms_MY',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ms'
      className={inter.variable}>
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
