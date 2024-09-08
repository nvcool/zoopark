import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import team1 from "@assets/about-us/team1.jpg";
import team2 from "@assets/about-us/team2.jpg";
import team3 from "@assets/about-us/team3.png";
import team4 from "@assets/about-us/team4.jpg";
import team5 from "@assets/about-us/team5.jpg";
import arrow from "@assets/arrow.svg";
import { Navigation } from "swiper/modules";

const team = [
  {
    image: team1,
    name: "Юлия Бородина",
    position: "Учредитель АНО «Лампушка» - Заповедный мир»",
  },
  {
    image: team2,
    name: "Юлия Бородина",
    position: "Учредитель АНО «Лампушка» - Заповедный мир»",
  },
  {
    image: team3,
    name: "Юлия Бородина",
    position: "Учредитель АНО «Лампушка» - Заповедный мир»",
  },
  {
    image: team4,
    name: "Юлия Бородина",
    position: "Учредитель АНО «Лампушка» - Заповедный мир»",
  },
  {
    image: team5,
    name: "Юлия Бородина",
    position: "Учредитель АНО «Лампушка» - Заповедный мир»",
  },
];

export default function Slider() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div style={{ position: "relative" }}>
      <Swiper
        breakpoints={{
          390: {
            slidesPerView: 1.3,
            spaceBetween: 20,
          },
          1366: {
            slidesPerView: "auto",
            spaceBetween: 32,
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
        className="swiper--bottom">
        {team.map((member) => {
          return (
            <SwiperSlide className="">
              <img src={member.image} alt="" />
              <span className="swiper-slide-active-text text text--lg">
                {member.name}
              </span>
              <span className="text">{member.position}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-navigation swiper-navigation--mobile container">
        <button ref={navigationPrevRef}>
          <img src={arrow} alt="" />
        </button>
        <button ref={navigationNextRef} className="swiper-navigation-button">
          <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
}
