import { GetStaticProps, NextPage } from 'next';

import LayoutContainer from '@/components/layouts/layout-main';
import { ProductLayout } from '@/components/commerce/products-page';
import { commerce } from 'lib/commerce';
import { Product } from '@chec/commerce.js/types/product';
import { Category } from '@chec/commerce.js/types/category';

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await commerce.products.list();
  const { data: categories } = await commerce.categories.list();

  const products = data.filter(({ active }) => active);

  return {
    props: {
      products,
      categories,
    },
    revalidate: 60,
  };
};

const ProductsPage: NextPage<{
  products: Product[];
  categories: Category[];
}> = ({ products, categories }) => {
  return (
    <LayoutContainer>
      <ProductLayout products={products} categories={categories} />
    </LayoutContainer>
  );
};

export default ProductsPage;
