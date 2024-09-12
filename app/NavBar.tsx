import React from 'react';
import Link from 'next/link';
import { PiBugBeetle } from 'react-icons/pi';

const NavBar = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];
  return (
    <main>
      <nav className="flex space-x-6 border-b mb-5 px- h-14 items-center">
        <Link href="/">
          <PiBugBeetle className="w-5 h-5" />
        </Link>

        <ul className="flex space-x-6">
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-bold text-slate-500 hover:text-slate-300 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default NavBar;
