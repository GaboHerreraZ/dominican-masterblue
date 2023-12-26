"use client";
import { Product } from "@/domain/model/product";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./slideshow.css";

export const ProductDetailMobileImages = ({
  product,
}: {
  product: Product;
}) => {
  return (
    <div className="w-full sm:w-2/3">
      <Swiper
        style={{
          width: "100%",
          height: "500px",
        }}
        pagination
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper2"
      >
        {product.images?.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image
              width={1024}
              height={800}
              src={image.url}
              alt={image.name}
              className="object-fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
