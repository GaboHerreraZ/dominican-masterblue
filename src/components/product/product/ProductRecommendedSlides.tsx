"use client";
import { Product } from "@/domain/model/product";
import { ProductTranslations } from "@/models/productTranslations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import "./slidesRecommended.css";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
  translations: { lng: string; translations: ProductTranslations };
}

export const ProductRecommendedSlides = ({ translations, products }: Props) => {
  return (
    <div className="mt-10">
      <Swiper
        style={
          {
            height: "300px",
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        slidesPerView={4}
        spaceBetween={10}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          280: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {products.map((product, idx) => (
          <SwiperSlide key={idx} style={{ height: "100%" }}>
            <div className="w-80 h-full  bg-red-400">
              <ProductCard product={product} translations={translations} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
