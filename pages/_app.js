import '@/styles/globals.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-opensans',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${openSans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
