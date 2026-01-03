import React from "react";
import CatalogIcon from "@/shared/assets/vector/catalog.svg?react";
import s from "./Catalog.module.scss";
import { formatPriceToRUB } from "@/shared/utils";

export default function Catalog() {
  const items = [
    {
      id: 1,
      title: "deep.russie ЛОНГСЛИВ",
      image: "https://i.postimg.cc/s2BcvCx3/product-photo.png",
      price: "3438",
    },
    {
      id: 2,
      title: "deep.russie ЛОНГСЛИВ",
      image: "https://i.postimg.cc/s2BcvCx3/product-photo.png",
      price: "3438",
    },
    {
      id: 3,
      title: "deep.russie ЛОНГСЛИВ",
      image: "https://i.postimg.cc/s2BcvCx3/product-photo.png",
      price: "3438",
      preorder: true,
    },
    {
      id: 4,
      title: "deep.russie ЛОНГСЛИВ",
      image: "https://i.postimg.cc/s2BcvCx3/product-photo.png",
      price: "3438",
    },
    {
      id: 5,
      title: "deep.russie ЛОНГСЛИВ",
      image: "https://i.postimg.cc/s2BcvCx3/product-photo.png",
      price: "3438",
    },
    {
      id: 6,
      title: "deep.russie ЛОНГСЛИВ",
      image: "https://i.postimg.cc/s2BcvCx3/product-photo.png",
      price: "3438",
      notAvaliable: true,
    },
  ];
  return (
    <div>
      <div className={s.catalog__hero}>
        <CatalogIcon className={s.catalog__image} />
      </div>

      <div className={s.list}>
        {items.map((item) => (
          <div key={item.id} className={s.item}>
            <div className={s.item__image}>
              <img src={item.image} alt={item.title} />

              {(item.preorder || item.notAvaliable) && (
                <div className={s.item__tag}>
                  {item.preorder && <span>предзаказ</span>}
                  {item.notAvaliable && <span>нет в наличии</span>}
                </div>
              )}
            </div>
            <div className={s.item__title}>{item.title}</div>
            <div className={s.item__price}>{formatPriceToRUB(item.price)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
