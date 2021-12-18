import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'styles/globals.css';
import '@splidejs/splide/dist/css/splide.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
