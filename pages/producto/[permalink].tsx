import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import { Product as ProductView } from '@/components/commerce/product-page';
import LayoutContainer from '@/components/layouts/layout-main';

import { commerce } from 'lib/commerce';
import { Product } from '@chec/commerce.js/types/product';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const permalink = params.permalink as string;

  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  });

  return { props: { product }, revalidate: 60 };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map(({ permalink }) => ({
      params: {
        permalink,
      },
    })),
    fallback: false,
  };
};

const ProductPage: NextPage<{ product: Product }> = ({ product }) => {
  return (
    <LayoutContainer>
      <ProductView product={product} />
    </LayoutContainer>
  );
};

export default ProductPage;
