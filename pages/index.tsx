import type { NextPage } from 'next';

import LayoutContainer from '@/components/layouts/layout-main';
import {
  HeroSection,
  CategoriesPreview,
  TrendingProductsSlider,
} from '@/components/landing';

const Home: NextPage = () => {
  return (
    <LayoutContainer>
      <HeroSection />
      <CategoriesPreview />
      <TrendingProductsSlider />
    </LayoutContainer>
  );
};

export default Home;
