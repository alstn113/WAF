import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Z_INDEX } from '@src/config/styles';

export const Wrapper = styled.header<{ isScroll: boolean }>`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: ${Z_INDEX.HEADER};
  background: #fff;
  transition: 0.5s ease-in-out;
  ${({ isScroll }) =>
    isScroll &&
    css`
      box-shadow: 0 0 16px 8px rgba(0, 0, 0, 0.5);
    `};
`;

export const Header = styled.div`
  max-width: 800px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.span`
  font-size: 2rem;
  font-weight: 900;
`;

export const Nav = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  margin: 0 1rem;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
`;
