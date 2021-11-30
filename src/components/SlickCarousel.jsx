import React from "react";
import Slider from "react-slick";
import TopBanner from "./TopBanner";

function SlickCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <TopBanner />
      <TopBanner />
    </Slider>
  );
}

export default SlickCarousel;
