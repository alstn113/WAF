import { Link } from 'react-router-dom';
import useAuthStore from '@libs/store/useAuthStore';
import * as S from './Header.styles';
import { useCallback, useEffect, useState } from 'react';

const NAV_ITEMS: { label: string; href: string }[] = [
  { label: 'HOME', href: '/' },
  { label: 'BOARD', href: '/board' },
  { label: 'WRITE', href: '/board/post/write' },
  { label: 'MY_PAGE', href: '/my-page' },
  { label: 'MODEL_VIEW', href: '/form/model-view' },
];

const Navbar = () => {
  const { currentUser, logout } = useAuthStore();
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0) {
      setIsScroll(false);
    } else {
      setIsScroll(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <S.Wrapper isScroll={isScroll}>
      <S.Header>
        <S.Logo>WAF</S.Logo>
        <S.Nav>
          {NAV_ITEMS.map((item) => (
            <S.NavItem key={item.label}>
              <Link to={item.href}>{item.label}</Link>
            </S.NavItem>
          ))}
        </S.Nav>

        {currentUser ? (
          <S.AuthWrapper>
            <div>{currentUser?.username}</div>
            <button onClick={() => logout()}>LOGOUT</button>
          </S.AuthWrapper>
        ) : (
          <S.AuthWrapper>
            <button
              onClick={() => {
                window.location.href = 'http://localhost:8080/auth/github';
              }}
            >
              GITHUB
            </button>
          </S.AuthWrapper>
        )}
      </S.Header>
    </S.Wrapper>
  );
};

export default Navbar;
