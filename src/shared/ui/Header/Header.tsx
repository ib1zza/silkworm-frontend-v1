import React from 'react';
import s from './Header.module.scss';
import { Link, useLocation } from 'react-router';
import clsx from 'clsx';
export default function Header() {
  const links = [
    {
      to: '/',
      title: 'каталог',
    },
    {
      to: '/gallery',
      title: 'галерея',
    },
    // {
    //     to: '/profile',
    //     title: 'профиль'
    // },
    {
      to: '/cart',
      title: 'корзина',
      additionalClass: s.cart,
    },
  ];

  const pagesWithWhiteHeader = ['/gallery'];

  const location = useLocation();

  console.log(location, location.pathname);
  const headerCls = clsx(
    s.header,
    !!pagesWithWhiteHeader.find((el) => location.pathname.includes(el)) && s.header_white,
  );

  return (
    <div className={headerCls}>
      <div className={s.links}>
        {links.map((link) => (
          <Link key={link.to} to={link.to} className={clsx(s.link, link.additionalClass)}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
