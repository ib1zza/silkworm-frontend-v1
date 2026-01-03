import React, { useMemo, useState } from "react";
import CatalogIcon from "@/shared/assets/vector/catalog.svg?react";
import LogoIcon from "@/shared/assets/vector/logo.svg?react";
import s from "./Catalog.module.scss";
import { formatPriceToRUB } from "@/shared/utils";
import clsx from "clsx";

export default function Catalog() {
  const items = [
    {
      id: 1,
      title: "deep.russie ЛОНГСЛИВ",
      image: "https://i.postimg.cc/s2BcvCx3/product-photo.png",
      price: "3438",
      category: "upper",
    },
    {
      id: 2,
      title: "deep.russie ЛОНГСЛИВ",
      image: "https://i.postimg.cc/s2BcvCx3/product-photo.png",
      price: "3438",
      category: "upper",
    },
    {
      id: 3,
      title: "deep.russie ЛОНГСЛИВ",
      image: "https://i.postimg.cc/s2BcvCx3/product-photo.png",
      price: "3438",
      preorder: true,
      category: "upper",
    },
    {
      id: 4,
      title: "deep.russie ЛОНГСЛИВ",
      image: "https://i.postimg.cc/s2BcvCx3/product-photo.png",
      price: "3438",
      category: "upper",
    },
    {
      id: 5,
      title: "deep.russie ЛОНГСЛИВ",
      image: "https://i.postimg.cc/s2BcvCx3/product-photo.png",
      price: "3438",
      category: "upper",
    },
    {
      id: 6,
      title: "deep.russie ЛОНГСЛИВ",
      image: "https://i.postimg.cc/s2BcvCx3/product-photo.png",
      price: "3438",
      notAvaliable: true,
      category: "bottom",
    },
  ];

  // TODO: category enum
  const categories = [
    {
      title: "Все что есть",
      value: "all",
    },
    {
      title: "низ",
      value: "bottom",
    },
    {
      title: "верх",
      value: "upper",
    },
    {
      title: "аксессуары",
      value: "accessories",
    },
  ];

  const [search, setSearch] = useState("");

  const [selectedCategory, setCategory] = useState("all");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // 1. Фильтрация по поисковому слову
      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase().trim());

      // 2. Фильтрация по категории
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;

      // Элемент подходит, если соответсвует обоим условиям
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]); // Добавляем selectedCategory в зависимости

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <div className={s.catalog__hero}>
        <CatalogIcon className={s.catalog__image} />
      </div>

      <div className={s.catalog__content}>
        <div className={s.catalog__filters}>
          <div className={s.catalog__search}>
            <div className={s.catalog__search__icon}>
              <LogoIcon />
            </div>
            <input
              type="text"
              className={s.catalog__search__input}
              placeholder="Найди то, что тебе нужно"
              onChange={handleSearch}
            />
            <div className={s.catalog__search__icon}>
              <LogoIcon />
            </div>
          </div>

          <div className={s.catalog__categories}>
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={clsx(s.catalog__category, {
                  [s.catalog__category_active]: cat.value === selectedCategory,
                })}
                onClick={() => setCategory(cat.value)}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        <div className={s.list}>
          {!filteredItems.length && (
            <div className={s.empty}>Ничего не нашлось</div>
          )}
          {filteredItems.map((item) => (
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
              <div className={s.item__price}>
                {formatPriceToRUB(item.price)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
