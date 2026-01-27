import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Autoplay, Navigation } from "swiper";
import { sliders } from "../../constants";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { LazyImage } from "../../screens/about/About";

function Slider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <Swiper
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation, Autoplay]}
        loop={true}
        className="mySwiper lg:mt-16 desktop_slider"
      >
        {sliders.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={item.link} className="select-none">
              <LazyImage
                src={item.img}
                alt="offers"
                className="w-full"
                loading="lazy"
              />
            </Link>
          </SwiperSlide>
        ))}

        <div
          ref={navigationPrevRef}
          className="absolute z-10 p-3 bg-white rounded-full cursor-pointer left-10 top-1/2"
        >
          <GrFormPrevious />
        </div>
        <div
          ref={navigationNextRef}
          className="absolute z-10 p-3 bg-white rounded-full cursor-pointer right-10 top-1/2"
        >
          <GrFormNext />
        </div>
      </Swiper>
    </>
  );
}

export default Slider;
