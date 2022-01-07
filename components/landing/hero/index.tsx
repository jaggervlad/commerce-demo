import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {}

const HeroSection: React.FC<Props> = () => {
  return (
    <div className="py-40 sm:py-44 lg:py-52 w-full mb-8">
      <div className="absolute inset-0 overflow-hidden ">
        <Image
          layout="fill"
          src="/images/hero-commerce.jpg"
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
          Seacal Commerce
        </h2>
        <p className="mt-3 text-xl text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          corporis esse quam, deserunt quidem, vitae, omnis commodi excepturi
          cumque quaerat quas ratione perferendis. Repellendus, harum. Impedit
          nemo sit doloribus architecto?
        </p>
        <Link href="/productos">
          <a className="mt-8 w-full block bg-black text-white border border-transparent rounded-md py-3 px-8 text-base font-medium hover:bg-opacity-80 sm:w-auto">
            Ver Productos
          </a>
        </Link>
      </div>
    </div>
  );
};
export default HeroSection;
