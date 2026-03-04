import { formatPriceToRUB } from '@/shared/utils';
import s from './ProductSlugPage.module.scss';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/api';
import { useEffect, useState } from 'react';
import type { ProductVariantDto } from '@/api/generated/schemas';
import clsx from 'clsx';
import AddToCartIcon from '@/shared/assets/vector/add_to_cart.svg?react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ProductSlugPage() {
  const { slug } = useParams();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => api.getApiV1ProductsId(slug!),
  });

  const [selectedVariant, setSelectedVariant] = useState<ProductVariantDto | null>(null);

  useEffect(() => {
    if (product) setSelectedVariant(product.Variants[0]);
  }, [product]);

  console.log(product, selectedVariant);

  // TODO: preloader
  if (!product) return null;

  return (
    <div className={s.page}>
      {product.Decoration && (
        <div className={s.decoration}>
          <img src={product.Decoration} alt="decoration" />
        </div>
      )}
      <div className={s.content}>
        <div className={s.main__image}>
          <img src={product?.Preview} alt="" />
        </div>

        <div className={s.main__info}>
          <div className={s.main__price}>
            <span className={s.main__price_prev}>{formatPriceToRUB(product.Price + 200)}</span>
            <span className={s.main__price_current}>{formatPriceToRUB(product.Price)}</span>
          </div>

          <p className={s.main__description}>{product.Description}</p>
          <p className={s.main__composition}>СОСТАВ: {product.Composition}</p>

          {product.Variants.length > 0 && (
            <div className={s.main__variants}>
              <p className={s.main__variants__title}>РАЗМЕРЫ:</p>
              <div className={s.main__variants__list}>
                {product.Variants.map((v) => (
                  <div
                    className={clsx(s.main__variants__item, {
                      [s.selected]: v.Id === selectedVariant?.Id,
                      [s.disabled]: !v.StockCount,
                    })}
                    key={v.Id}
                    onClick={() => setSelectedVariant(v)}
                  >
                    <p>{v.Size}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button className={s.main__buy}>
            <AddToCartIcon />
          </button>
        </div>
      </div>

      {/* {product.Images.length > 0 && (
        <Swiper>
          {product.Images.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} alt={product.Title} />
            </SwiperSlide>
          ))}
        </Swiper>
      )} */}
    </div>
  );
}

// image with body
// {
//     "OriginalUrl": "http://digital-twilight.ru/uploads/products/2492d623-42ee-4a76-89e8-2358d9affeeb.jpg",
//     "FileName": "2492d623-42ee-4a76-89e8-2358d9affeeb.jpg",
//     "FileSize": 316230,
//     "MimeType": "image/jpeg"
// }

// image with product

// {
//     "OriginalUrl": "http://digital-twilight.ru/uploads/products/b74ce699-1c9b-4996-8149-32d3c7813146.png",
//     "FileName": "b74ce699-1c9b-4996-8149-32d3c7813146.png",
//     "FileSize": 165449,
//     "MimeType": "image/png"
// }
