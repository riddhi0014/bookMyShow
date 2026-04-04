// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { banners } from "../../utils/constants";

const BannerSlider = () => {
  const settings = {
    centerMode: true,
    centerPadding: "40px",
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full bg-white py-6">
      <div className="mx-auto px-4">
        <Slider {...settings}>
          {banners.map((banner, i) => (
            <div key={i} className="px-2">
              <img
                src={banner}
                alt={`banner-${i}`}
                className="w-full h-[300px] rounded-xl object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;

