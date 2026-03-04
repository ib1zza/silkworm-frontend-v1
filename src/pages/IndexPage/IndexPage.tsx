import { useEffect, useRef } from 'react';
import s from './IndexPage.module.scss';
import LogoIcon from '@/shared/assets/vector/preloader.svg?react';
import { Catalog } from '@/widgets/Catalog';

export default function IndexPage() {
  const dvdRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dvd = dvdRef.current;
    const hero = heroRef.current;

    if (!dvd || !hero) return;

    let x = 50;
    let y = 50;
    let vx = 1.2;
    let vy = 1.2;

    const animate = () => {
      const heroRect = hero.getBoundingClientRect();
      const dvdRect = dvd.getBoundingClientRect();

      x += vx;
      y += vy;

      if (x + dvdRect.width >= heroRect.width || x <= 0) {
        vx *= -1;
      }

      if (y + dvdRect.height >= heroRect.height || y <= 0) {
        vy *= -1;
      }

      dvd.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  const handleClick = () => {
    const dvd = dvdRef.current;
    if (!dvd) return;

    dvd.classList.remove(s.flip);
    // перезапуск анимации
    void dvd.offsetWidth;
    dvd.classList.add(s.flip);
  };

  return (
    <div className={s.page}>
      <div className={s.hero} ref={heroRef}>
        <div className={s.dvd} ref={dvdRef} onClick={handleClick}>
          <LogoIcon />
        </div>
      </div>

      <Catalog />
    </div>
  );
}
