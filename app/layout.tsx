import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://forestknowswhy.github.io'),
  title: {
    default: 'Yingwen Tan',
    template: '%s — Yingwen Tan',
  },
  description:
    'Yingwen Tan is a postdoctoral fellow at HKUST researching high-frequency statistics, financial econometrics, functional data, and market microstructure.',
  keywords: [
    'Yingwen Tan',
    'financial econometrics',
    'high-frequency statistics',
    'functional data analysis',
    'market microstructure',
    'HKUST',
  ],
  authors: [{ name: 'Yingwen Tan' }],
  creator: 'Yingwen Tan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Yingwen Tan',
    title: 'Yingwen Tan — Financial Econometrics',
    description:
      'Research in high-frequency statistics, financial econometrics, functional data, and market microstructure.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Yingwen Tan — Financial Econometrics and High-Frequency Statistics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yingwen Tan — Financial Econometrics',
    description:
      'Research in high-frequency statistics, financial econometrics, functional data, and market microstructure.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
