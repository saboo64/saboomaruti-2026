import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper";
import { mobileSliders } from "../../constants";
import { Link } from "react-router-dom";
import { LazyImage } from "../../screens/about/About";

function MobileSlider() {
 
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        modules={[Autoplay, Pagination, EffectFade]}
        className="mySwiper "
      >
        {mobileSliders.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={item.link} className="select-none">
              <LazyImage
                src={item.img}
                className="w-full max-w-full lg:mt-16"
                alt={item.alt}
                loading="lazy"
              />{" "}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default MobileSlider;
