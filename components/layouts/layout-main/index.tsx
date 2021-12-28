import Head from 'next/head';
import React from 'react';
import Footer from '../../footer';
import Header from '../../header';

interface Props {}

const LayoutContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <main className="max-w-7xl w-full flex flex-col justify-center py-[60px] relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default LayoutContainer;
