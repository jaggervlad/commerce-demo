import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {}

const Logo: React.FC<Props> = () => {
  return (
    <Link href="/">
      <a>
        <Image
          layout="fill"
          priority
          src={'/images/Seacal.png'}
          alt=""
          className="object-cover object-center"
        />
      </a>
    </Link>
  );
};
export default Logo;
