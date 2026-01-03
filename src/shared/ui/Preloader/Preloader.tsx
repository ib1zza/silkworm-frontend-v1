// Preloader.tsx
import s from "./Preloader.module.scss";
import LogoIcon from "@/shared/assets/vector/preloader.svg?react";

export const Preloader = () => (
  <div className={s.preloader}>
    <LogoIcon className={s.logo} />
    {/* Replace with your LogoIcon or CSS Spinner */}
  </div>
);
