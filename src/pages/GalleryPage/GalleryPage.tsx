import s from './GalleryPage.module.scss';
import React from 'react';
import GalleryIcon from '@/shared/assets/vector/gallery.svg?react';

export default function GalleryPage() {
  // TODO: replace with real data when leha make backend
  const items = [
    {
      image: 'http://digital-twilight.ru/uploads/products/da89ba44-f091-4cc6-8eb0-07ce143461d3.png',
    },
    {
      image: 'http://digital-twilight.ru/uploads/products/da89ba44-f091-4cc6-8eb0-07ce143461d3.png',
    },
    {
      image: 'http://digital-twilight.ru/uploads/products/da89ba44-f091-4cc6-8eb0-07ce143461d3.png',
    },
    {
      image: 'http://digital-twilight.ru/uploads/products/da89ba44-f091-4cc6-8eb0-07ce143461d3.png',
    },
    {
      image: 'http://digital-twilight.ru/uploads/products/da89ba44-f091-4cc6-8eb0-07ce143461d3.png',
    },
    {
      image: 'http://digital-twilight.ru/uploads/products/da89ba44-f091-4cc6-8eb0-07ce143461d3.png',
    },
    {
      image: 'http://digital-twilight.ru/uploads/products/da89ba44-f091-4cc6-8eb0-07ce143461d3.png',
    },
    {
      image: 'http://digital-twilight.ru/uploads/products/da89ba44-f091-4cc6-8eb0-07ce143461d3.png',
    },
    {
      image: 'http://digital-twilight.ru/uploads/products/da89ba44-f091-4cc6-8eb0-07ce143461d3.png',
    },
    {
      image: 'http://digital-twilight.ru/uploads/products/da89ba44-f091-4cc6-8eb0-07ce143461d3.png',
    },
    {
      image: 'http://digital-twilight.ru/uploads/products/da89ba44-f091-4cc6-8eb0-07ce143461d3.png',
    },
    {
      image: 'http://digital-twilight.ru/uploads/products/da89ba44-f091-4cc6-8eb0-07ce143461d3.png',
    },
  ];
  return (
    <div className={s.gallery}>
      <div className={s.gallery__hero}>
        <GalleryIcon className={s.gallery__hero__image} />
      </div>

      <p className={s.gallery__description}>Мы разные, но мы все красивые.</p>

      <div className={s.gallery__grid}>
        {items.map((item) => (
          <div className={s.gallery__item}>
            <img src={item.image} alt={'image'} />
          </div>
        ))}
      </div>
    </div>
  );
}
