import { Asset } from '@chec/commerce.js/types/asset';
import { Tab } from '@headlessui/react';
import Image from 'next/image';
import classNames from 'clsx';

const ProductImages: React.FC<{
  images: Asset[];
}> = ({ images }) => {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      {/* Image selector */}
      <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          {images.map(({ url, image_dimensions, id, filename }) => (
            <Tab
              key={id}
              className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-opacity-50"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">{filename}</span>
                  <span className="absolute inset-0 rounded-md overflow-hidden">
                    <Image
                      layout="fill"
                      loading="lazy"
                      src={url}
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />
                  </span>
                  <span
                    className={classNames(
                      selected ? 'ring-blue-500' : 'ring-transparent',
                      'absolute inset-0 rounded-md ring-2 ring-offset-2 pointer-events-none'
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </Tab.List>
      </div>

      <Tab.Panels className="w-full aspect-w-1 aspect-h-1">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <Image
              layout="fill"
              loading="lazy"
              src={image.url}
              alt={image.description}
              className="w-full h-full object-center object-cover sm:rounded-lg"
            />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default ProductImages;
