import Head from 'next/head';
import React from 'react';
import Footer from '../footer';
import Header from '../header';

interface Props {}

const LayoutContainer: React.FC<Props> = ({ children }) => {
  const meta = {
    title: 'Demo Commerce',
    description: `Frontend Demo Commerce With NextJS`,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
      </Head>

      <div className="flex flex-col justify-center">
        <Header />
      </div>
      <main className="flex flex-col justify-center py-[60px]">{children}</main>
      <Footer />
    </div>
  );
};
export default LayoutContainer;
