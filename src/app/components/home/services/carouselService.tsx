"use client";
import "./service.css";
import Slider from "react-slick";
import { CardService } from "./cardService";

export const CarouselService = () => {
  const settings = {
    className: "center",
    centerMode: true,
    autoplay: true,
    infinite: true,
    centerPadding: "120px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    nextArrow: <></>,
    prevArrow: <></>,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "100px",
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "140px",
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
          dots: true,
        },
      },
      {
        breakpoint: 280,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div>
          <CardService />
        </div>
        <div>
          <CardService />
        </div>
        <div>
          <CardService />
        </div>
        <div>
          <CardService />
        </div>
        <div>
          <CardService />
        </div>
        <div>
          <CardService />
        </div>
      </Slider>
    </div>
  );
};
