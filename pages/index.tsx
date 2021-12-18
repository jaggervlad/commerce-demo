import CategoriesPreview from '@/components/categories-preview';
import LayoutContainer from '@/components/layout-container';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Home: NextPage = () => {
  return (
    <LayoutContainer>
      <div className="relative py-32 px-6 sm:py-40 sm:px-12 lg:px-16 w-full mb-8">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            layout="fill"
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 bg-opacity-50"
        />
        <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Long-term thinking
          </h2>
          <p className="mt-3 text-xl text-white">
            We&apos;re committed to responsible, sustainable, and ethical
            manufacturing. Our small-scale approach allows us to focus on
            quality and reduce our impact. We&apos;re doing our best to delay
            the inevitable heat-death of the universe.
          </p>
          <a
            href="#"
            className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
          >
            Read our story
          </a>
        </div>
      </div>

      <div className="px-8 mb-8">
        <h3 className="text-2xl text-center font-serif italic underline decoration-4 underline-offset-4 ">
          Lo que tenemos para ti
        </h3>

        <CategoriesPreview />
      </div>

      <div className="px-8">
        <h3 className="text-2xl text-center font-serif italic underline decoration-4 underline-offset-4 mb-4">
          Siguenos en Instagram
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
          }}
          className="hidden md:block"
        >
          <SplideSlide>
            <Image
              layout="fill"
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
              alt="Image 1"
              className="w-full h-full object-center object-cover"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              layout="fill"
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
              alt="Image 1"
              className="w-full h-full object-center object-cover"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              layout="fill"
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
              alt="Image 1"
              className="w-full h-full object-center object-cover"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              layout="fill"
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Image 2"
              className="w-full h-full object-center object-cover"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              layout="fill"
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Image 2"
              className="w-full h-full object-center object-cover"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              layout="fill"
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Image 2"
              className="w-full h-full object-center object-cover"
            />
          </SplideSlide>
        </Splide>

        <Splide
          options={{
            height: '20em',
            perPage: 2,
            perMove: 1,
            gap: '1rem',
            type: 'slide',
            arrows: 'slider',
            pagination: false,
          }}
          className="block md:hidden"
        >
          <SplideSlide>
            <Image
              layout="fill"
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
              alt="Image 1"
              className="w-full h-full object-center object-cover"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              layout="fill"
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Image 2"
              className="w-full h-full object-center object-cover"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              layout="fill"
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Image 2"
              className="w-full h-full object-center object-cover"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              layout="fill"
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Image 2"
              className="w-full h-full object-center object-cover"
            />
          </SplideSlide>
        </Splide>
      </div>
    </LayoutContainer>
  );
};

export default Home;
