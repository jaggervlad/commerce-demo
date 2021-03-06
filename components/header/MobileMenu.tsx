import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dispatch, Fragment, SetStateAction } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';

const MobileMenu: React.FC<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  navigation: {
    pages: {
      name: string;
      href: string;
    }[];
  };
}> = ({ open, setOpen, navigation }) => {
  const router = useRouter();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden z-40"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="absolute inset-0 bg-stone-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="w-screen max-w-xs">
                <div className="h-full flex flex-col bg-stone-200 shadow-xl">
                  <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <div></div>
                      <div className="ml-3 h-7 flex items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="py-6 px-4 space-y-6">
                      {navigation.pages.map((page, i) => (
                        <Link href={page.href} key={i}>
                          <a
                            className={
                              '-m-2 p-2 block font-medium text-black hover:text-opacity-80 border-b-2'
                            }
                          >
                            {page.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileMenu;
