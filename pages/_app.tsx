import 'react-toastify/dist/ReactToastify.css';
import 'styles/globals.css';
import '@splidejs/splide/dist/css/splide.min.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { CartProvider } from 'context/cart';
import { CheckoutProvider } from 'context/checkout';

const toastOpts: ToastContainerProps = {
  position: 'bottom-center',
  draggable: false,
  hideProgressBar: true,
  bodyClassName: 'w-full max-w-3xl',
  toastClassName:
    'bg-blue-600 rounded-lg text-white px-3 shadow-lg shadow-blue-500/50',
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

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

      <Elements stripe={stripePromise}>
        <CartProvider>
          <CheckoutProvider>
            <Component {...pageProps} key={router.route} />
          </CheckoutProvider>
          <ToastContainer {...toastOpts} />
        </CartProvider>
      </Elements>
    </>
  );
}

export default MyApp;
