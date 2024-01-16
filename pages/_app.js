import Head from 'next/head';
import { Open_Sans } from 'next/font/google';

import '@/styles/globals.css';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-opensans',
});

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
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </main>
  );
}
