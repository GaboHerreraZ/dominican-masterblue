"use client";
import Slider from "react-slick";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-screen  h-screen bg-black">
      <Slider {...settings} className="w-full">
        <div>
          <span>1</span>
        </div>
        <div>
          <span>1</span>
        </div>
        <div>
          <span>1</span>
        </div>
        <div>
          <span>1</span>
        </div>
        <div>
          <span>1</span>
        </div>
        <div>
          <span>1</span>
        </div>
      </Slider>
    </div>
  );
};
