import React from "react";
import s from "./Footer.module.scss";
import { Link } from "react-router";
import clsx from "clsx";

import AnimIcon from "@/shared/assets/vector/footerAnim.svg?react";

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.animation}>
        <AnimIcon className={s.animation__icon} />
      </div>
      <div className={s.links}>
        <a className={s.link} href="https://t.me/silkwormwear">
          тг канал
        </a>
        <Link className={s.link} to="/about">
          о бренде
        </Link>

        <Link className={clsx(s.link, s.link_right)} to="/about">
          ОПЛАТА И ДОСТАВКА
        </Link>

        <p className={s.copyright}>СДЕЛАНО СИЛАМИ W.solutions</p>
      </div>
    </div>
  );
}
