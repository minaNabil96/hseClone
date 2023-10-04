import React, { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import mainswiperdata from "../assets/mainswiperdata.json";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
// Register Swiper web component
const SwiperComponent = () => {
  const swiperRef = useRef(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const dataMap =
    mainswiperdata &&
    mainswiperdata.map(({ id, title, image }, idx) => (
      <swiper-slide key={idx}>
        <div
          className={`${
            image === "yellow"
              ? "bg-yellow-400"
              : image === "green"
              ? "bg-green-400"
              : image === "red"
              ? "bg-red-400"
              : image === "blue"
              ? "bg-blue-400"
              : image === "purple"
              ? "bg-purple-400"
              : "bg-slate-50"
          } min-h-[650px] max-sm:min-h-screen  min-w-screen object-cover relative flex items-end justify-start max-sm:items-center max-sm:justify-center  `}
        >
          {image && image.includes("www") && (
            <img
              src={image}
              alt={title}
              className={`w-full h-full object-cover absolute `}
            />
          )}
          <h1
            className={`z-10 text-[30px] max-sm:text-[25px] text-white capitalize max-sm:w-[340px] w-[550px]   sm:p-10 max-sm:text-center  `}
          >
            {title}
          </h1>
        </div>
      </swiper-slide>
    ));
  useEffect(() => {
    register();

    // Object with parameters
    const params = {
      slidesPerView: 1,
      autoplay: true,
      // disableOnInteraction: true,
      loop: true,
      direction: "horizontal",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      on: {
        beforeInit: (swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          // swiper.hostEl.style.position = "relative";
          // swiper.hostEl.style.maxWidth = "100vw";
        },
        slideChange: (swiper) => {
          swiper.autoplay.resume();
        },
      },
    };

    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);

  return (
    <>
      <swiper-container init="false" ref={swiperRef}>
        {dataMap}
      </swiper-container>
      <div
        className={` absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-full flex items-center justify-between `}
      >
        <div
          ref={navigationPrevRef}
          className={` absolute -left-12 w-fit h-fit focus:outline-none active:outline-none min-w-[115px] min-h-[115px] flex items-center justify-end pe-3 border border-slate-200 rounded-full `}
        >
          <HiOutlineArrowNarrowLeft
            className={`text-[33px] text-slate-200  `}
          />
        </div>
        <div
          ref={navigationNextRef}
          className={` absolute -right-12 w-fit h-fit focus:outline-none active:outline-none min-w-[115px] min-h-[115px] flex items-center justify-start ps-3 border border-slate-200 rounded-full `}
        >
          <HiOutlineArrowNarrowRight
            className={`text-[33px] text-slate-200  `}
          />
        </div>
      </div>
    </>
  );
};

export default SwiperComponent;
