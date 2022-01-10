import { Checkout } from '@/components/checkout';
import { ClientOnly } from '@/components/customs';
import LayoutContainer from '@/components/layouts/layout-main';
import { NextPage } from 'next';

const CheckoutPage: NextPage = () => {
  return (
    <LayoutContainer>
      <ClientOnly>
        <Checkout />
      </ClientOnly>
    </LayoutContainer>
  );
};

export default CheckoutPage;
