import { Product } from '@chec/commerce.js/types/product';
import Link from 'next/link';
import AddToCart from './AddToCart';
import ProductImages from './ProductImages';

const Product = ({ product }: { product: Product }) => {
  const images = product.assets.filter(({ is_image }) => is_image);

  return (
    <div className="px-2 md:px-6 lg:px-8">
      <nav className="flex my-8" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center space-x-6">
          <li>
            <Link href="/productos">
              <a className="text-sm font-medium text-black cursor-pointer">
                Productos
              </a>
            </Link>
          </li>
          {product.categories.map(({ name, slug }) => (
            <li key={name}>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 h-5 w-5 text-gray-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>

                <Link href={`/productos/${slug}`}>
                  <a className="ml-4 text-sm font-medium text-black">{name}</a>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </nav>
      {/* Product */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        {/* Image gallery */}
        <ProductImages images={images} />

        {/* Product info */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {product.name}
          </h1>

          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">
              {product.price.formatted_with_symbol}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>

            <div
              className="text-base text-gray-700 space-y-6"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </div>

          <div>
            <AddToCart id={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
