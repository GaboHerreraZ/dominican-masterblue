"use client";
import Slider from "react-slick";
import interiores from "../../../../public/img/png/interiores.png";
import mejoras from "../../../../public/img/jpg/mejoras.jpg";

import Image from "next/legacy/image";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div className="absolute right-6  top-[200px]">
      <div
        className="relative shadow-xl border-2 bg-white opacity-75 w-[40px] h-[40px] rounded-full  flex place-content-center cursor-pointer hover:bg-black group"
        onClick={onClick}
      >
        <span className="arrow group-hover:border-white absolute left-[8px] right-0 top-[10px] -rotate-45 w-[15px]  h-[15px] " />
      </div>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className="absolute left-6  top-[200px]">
      <div
        className="relative shadow-xl border-2 bg-white opacity-75 w-[40px] h-[40px] rounded-full  flex place-content-center cursor-pointer hover:bg-black group"
        onClick={onClick}
      >
        <span className="arrow group-hover:border-white absolute  left-[14px] top-[10px] rotate-[135deg] w-[15px]  h-[15px] " />
      </div>
    </div>
  );
}

export const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <div className="h-[500px">
      <Slider {...settings} className="h-full">
        <div className="h-[500px] relative">
          <Image src={interiores} layout="fill" objectFit="cover" />
          {/**
           * <div className="absolute flex flex-col justify-center p-10 h-full self-center">
            <p>Comedores</p>
            <Button>Ver</Button>
          </div>
           */}
        </div>

        <div className="h-[500px]">
          <Image src={mejoras} layout="fill" objectFit="cover" />
        </div>
        <div className="h-[500px]">
          <Image src={interiores} layout="fill" objectFit="cover" />
        </div>
        <div className="h-[500px]">
          <Image src={mejoras} layout="fill" objectFit="cover" />
        </div>
        <div className="h-[500px]">
          <Image src={interiores} layout="fill" objectFit="cover" />
        </div>
        <div className="h-[500px]">
          <Image src={mejoras} layout="fill" objectFit="cover" />
        </div>
      </Slider>
    </div>
  );
};
