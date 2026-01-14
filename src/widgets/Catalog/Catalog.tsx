import React, { useMemo, useState } from "react";
import CatalogIcon from "@/shared/assets/vector/catalog.svg?react";
import LogoIcon from "@/shared/assets/vector/logo.svg?react";
import s from "./Catalog.module.scss";
import { formatPriceToRUB } from "@/shared/utils";
import clsx from "clsx";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";

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

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => api.getApiV1Products().then((res) => res),
    initialData: {
      Items: [],
      Page: 0,
      Total: 0,
      TotalPages: 0,
      PageSize: 0,
    },
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      api.getApiV1CategoriesTree().then((res) => [
        {
          Id: "all",
          Title: "все что есть",
          Slug: "all",
          Children: [],
        },
        ...res,
      ]),
    initialData: [],
  });

  console.log(data, "categories1", categories);

  const [search, setSearch] = useState("");

  const [selectedCategory, setCategory] = useState("all");

  const filteredItems = useMemo(() => {
    if (!data.Items) return [];
    return data.Items.filter((item) => {
      // 1. Фильтрация по поисковому слову
      const matchesSearch = item
        .Title!.toLowerCase()
        .includes(search.toLowerCase().trim());

      // 2. Фильтрация по категории
      const matchesCategory =
        selectedCategory === "all" || item.CategoryId === selectedCategory;

      // Элемент подходит, если соответсвует обоим условиям
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory, data.Items.length]); // Добавляем selectedCategory в зависимости

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
                key={cat.Id}
                className={clsx(s.catalog__category, {
                  [s.catalog__category_active]: cat.Id === selectedCategory,
                })}
                onClick={() => setCategory(cat.Id)}
              >
                {cat.Title}
              </button>
            ))}
          </div>
        </div>

        <div className={s.list}>
          {!filteredItems.length && (
            <div className={s.empty}>Ничего не нашлось</div>
          )}
          {filteredItems.map((item) => (
            <Link to={`/product/${item.Id}`} key={item.Id} className={s.item}>
              <div className={s.item__image}>
                <img src={item.Preview} alt={item.Title} />

                {/* {(item.preorder || item.notAvaliable) && (
                  <div className={s.item__tag}>
                    {item.preorder && <span>предзаказ</span>}
                    {item.notAvaliable && <span>нет в наличии</span>}
                  </div>
                )} */}
              </div>
              <div className={s.item__title}>{item.Title}</div>
              <div className={s.item__price}>
                {formatPriceToRUB(item.Price)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
