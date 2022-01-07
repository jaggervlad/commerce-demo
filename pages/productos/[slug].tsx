import LayoutContainer from '@/components/layouts/layout-main';
import { commerce } from 'lib/commerce';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  const { data: products } = await commerce.products.list({
    category_slug: [slug],
  });
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      products,
      categories,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: categories } = await commerce.categories.list();

  return {
    paths: categories.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

export { default } from './index';
