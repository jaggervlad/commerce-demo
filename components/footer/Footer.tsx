import Link from 'next/link';
import { navigation } from './navigation';

export default function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 mt-auto"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  xl:col-span-2">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-bold text-blacktracking-wider uppercase">
                Acerca de Seacal Commerce
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.about.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a className="text-base text-black hover:text-opacity-80 capitalize">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-bold text-black tracking-wider uppercase">
                Contacto
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.contact.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a className="text-base text-black hover:text-opacity-80 capitalize">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div className="mt-12 md:mt-0">
              <h3 className="text-sm font-bold text-black tracking-wider uppercase">
                Legal
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <a className="text-base text-black hover:text-opacity-80 capitalize">
                        {item.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:text-opacity-80"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-black text-opacity-80 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Secal DEV. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
