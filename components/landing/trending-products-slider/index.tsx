import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';

interface Props {}

const mock = [
  {
    altImg: 'alt 1',
    src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg',
  },
  {
    altImg: 'alt 2',
    src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg',
  },
  {
    altImg: 'alt 3',
    src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg',
  },
  {
    altImg: 'alt 4',
    src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg',
  },
  {
    altImg: 'alt 5',
    src: 'https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg',
  },
];

const TrendingProductsSlider: React.FC<Props> = () => {
  return (
    <div className="px-3 lg:px-8">
      <h3 className="text-2xl text-center font-serif underline decoration-4 underline-offset-4 mb-4 capitalize">
        Productos de tendencia
      </h3>

      <Splide
        options={{
          height: '20em',
          perPage: 4,
          perMove: 1,
          gap: '1rem',
          type: 'slide',
          arrows: 'slider',
          pagination: false,
          breakpoints: {
            640: {
              perPage: 1,
            },
            768: {
              perPage: 2,
            },
            850: {
              perPage: 3,
            },
          },
        }}
        className="block"
      >
        {mock.map(({ altImg, src }) => (
          <SplideSlide key={altImg}>
            <Image
              layout="fill"
              src={src}
              alt={altImg}
              className="w-full h-full object-center object-cover rounded-md"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};
export default TrendingProductsSlider;
