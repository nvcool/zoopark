import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import photo1 from "@assets/projects/photo1.jpg";
import photo2 from "@assets/projects/photo2.jpg";
import photo3 from "@assets/projects/photo3.jpg";
import photo4 from "@assets/projects/photo4.jpg";
import photo5 from "@assets/projects/photo5.jpg";
import arrow from "@assets/arrow.svg";
import { Navigation } from "swiper/modules";

const photos = [
  {
    image: photo1,
  },
  {
    image: photo2,
  },
  {
    image: photo3,
  },
  {
    image: photo4,
  },
  {
    image: photo5,
  },
];

export default function ProjectsPhotoSlider() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <Swiper
        breakpoints={{
          390: {
            slidesPerView: 1.3,
            spaceBetween: 16,
          },
          1366: {
            slidesPerView: "auto",
          },
        }}
        navigation={{
          // Both prevEl & nextEl are null at render so this does not work
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        // slidesPerView={"auto"}
        modules={[Navigation]}
        // spaceBetween={32}
        centeredSlides={true}
        className="projects__photo ">
        {photos.map((photo) => {
          return (
            <SwiperSlide key={photo.image} className="projects__photo-slider ">
              <img className="" src={photo.image} alt="" />
              <span className=" text text--lg">Мы в ответе!</span>
            </SwiperSlide>
          );
        })}
        <div className="swiper-navigation swiper-navigation--mobile container">
          <button ref={navigationPrevRef}>
            <img src={arrow} alt="" />
          </button>
          <button ref={navigationNextRef} className="swiper-navigation-button">
            <img src={arrow} alt="" />
          </button>
        </div>
      </Swiper>
    </>
  );
}
