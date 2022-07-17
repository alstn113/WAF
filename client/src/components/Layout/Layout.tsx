import Header from '@components/Header/Header';
import React from 'react';
import * as S from './Layout.styles';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <S.Container>{children}</S.Container>
    </>
  );
};

export default Layout;
