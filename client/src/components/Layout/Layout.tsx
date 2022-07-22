import Header from '@components/Header/Header';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  );
};

export default Layout;
