import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {}

const Logo: React.FC<Props> = () => {
  return (
    <a className="h-8">
      <Image
        layout="fill"
        priority
        src={'/images/Seacal.png'}
        alt=""
        className="object-cover object-center"
      />
    </a>
  );
};
export default Logo;
