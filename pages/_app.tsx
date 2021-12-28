import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import 'styles/globals.css';
import '@splidejs/splide/dist/css/splide.min.css';
import Head from 'next/head';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Seacal Commerce"
        defaultTitle="Seacal Commerce"
        description="Demo producto seacal dev"
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Component {...pageProps} key={router.route} />
    </>
  );
}

export default MyApp;
