import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <div>
      <div>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
      </div>
      <div>
        <Link href={'/write'}>
          <a>Write</a>
        </Link>
      </div>
      <div>
        <Link href={'/counter'}>
          <a>Counter</a>
        </Link>
      </div>
      <div>
        <Link href={'/comment'}>
          <a>Comment</a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
