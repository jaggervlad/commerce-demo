import { NextRouter } from 'next/router';

export const isActive = (href: string, router: NextRouter) => {
  return href === router.pathname ? true : false;
};
