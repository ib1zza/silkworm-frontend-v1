import React from "react";
import s from "./Footer.module.scss";
import { Link } from "react-router";
import clsx from "clsx";

import AnimIcon from "@/shared/assets/vector/footerAnim.svg?react";

export default function Footer() {
  const links = [
    {
      to: "/",
      title: "каталог",
    },
    {
      to: "/gallery",
      title: "галерея",
    },
    // {
    //     to: '/profile',
    //     title: 'профиль'
    // },
    {
      to: "/cart",
      title: "корзина",
      additionalClass: s.cart,
    },
  ];
  return (
    <div className={s.footer}>
      <div className={s.animation}>
        <AnimIcon className={s.animation__icon} />
      </div>
      {/* <div className={s.links}>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={clsx(s.link, link.additionalClass)}
          >
            {link.title}
          </Link>
        ))}
      </div> */}
    </div>
  );
}
