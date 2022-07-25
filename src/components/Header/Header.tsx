import Link from 'next/link';
import * as React from 'react';

import * as S from './Header.style';

const links = [
  { href: '/home', label: 'home' },
  { href: '/login', label: 'login' },
];

export default function Header() {
  return (
    <S.Header>
      <div>
        <Link href='/' className='home-link'>
          Home
        </Link>
        <nav>
          <ul>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </S.Header>
  );
}
