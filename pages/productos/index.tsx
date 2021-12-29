import { NextPage } from 'next';

import LayoutContainer from '@/components/layouts/layout-main';
import { ProductLayout } from '@/components/commerce/products-page';

const ProductsPage: NextPage = () => {
  return (
    <LayoutContainer>
      <ProductLayout />
    </LayoutContainer>
  );
};

export default ProductsPage;
