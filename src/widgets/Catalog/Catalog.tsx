import React from "react";
import CatalogIcon from "@/shared/assets/vector/catalog.svg?react";
import s from "./Catalog.module.scss";

export default function Catalog() {
  return (
    <div>
      <div className={s.catalog__hero}>
        <CatalogIcon className={s.catalog__image} />
      </div>
    </div>
  );
}
