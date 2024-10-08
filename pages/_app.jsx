import Head from 'next/head';
import { Open_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '@/styles/globals.css';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-opensans',
});

// install vercel analytics

export default function App({ Component, pageProps }) {
  return (
    <main className={openSans.className}>
      <Head>
        <meta name="description" content="Test Founder" />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta property="og:title" content="Test Founder" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="google-site-verification"
          content="h_Vgb8BndmNa_Jn43uDPKrvlqioQbhRJnXPwo1eHW24"
        />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </main>
  );
}
