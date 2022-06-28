import React from 'react';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Container,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
const Nav = () => {
  const router = useRouter();
  return (
    <Container>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          MENU
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => router.push('/')}>Home</MenuItem>
          <MenuItem onClick={() => router.push('/write')}>Write</MenuItem>
          <MenuItem onClick={() => router.push('/counter')}>Counter</MenuItem>
        </MenuList>
      </Menu>
    </Container>
  );
};

export default Nav;
