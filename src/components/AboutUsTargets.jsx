import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import target1 from "@assets/about-us/target1.jpg";
import target2 from "@assets/about-us/target2.jpg";
import target3 from "@assets/about-us/target3.jpg";
import target4 from "@assets/about-us/target4.jpg";
import target5 from "@assets/about-us/target5.jpg";
import target6 from "@assets/about-us/target6.png";
import target7 from "@assets/about-us/target7.png";

const targets = [
  {
    text: "Популяризация знаний в сфере экологии и ответственного отношения к природе.",
    cardImage: target1,
  },
  {
    text: "Дополнительное образование детей и взрослых для сохранения объектов животного мира и природных памятников на территории Ленинградской области.",
    cardImage: target2,
  },
  {
    text: "Поддержка и защита традиционных ценностей российского народа, воспитание подрастающего поколения в духе патриотизма и уважения к правам и свободам человека и гражданина.",
    cardImage: target3,
  },
  {
    text: "Поддержка семьи, материнства, отцовства и детства.",
    cardImage: target4,
  },
  {
    text: "Охрана окружающей среды и популяризация здорового образа жизни.",
    cardImage: target5,
  },
  {
    text: "Развитие экологического туризма на территории Ленинградской области.",
    cardImage: target6,
  },
  {
    text: "Cохранение в искусственно созданной среде обитания коллекции фауны, в особенности редких и исчезающих видов.",
    cardImage: target7,
  },
];

export default function AboutUsTargets() {
  return (
    <>
      <div className="about-us__slider">
        <Swiper
          slidesPerView={1}
          spaceBetween={32}
          centeredSlides={true}
          className="">
          {targets.map((target, i) => {
            return (
              <SwiperSlide
                className="about-us__slider-box"
                key={target.cardImage}>
                <div>
                  <span className="about-us__slider-number title">
                    0{i + 1}
                  </span>
                  <p className="text">{target.text}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <ol className="about-us__target-list">
        {targets.map((target, i) => {
          return (
            <li key={target.text} className="about-us__target-item">
              <div className="">
                <span className="about-us__target-number title">0{i + 1}</span>
                <p className="text">{target.text}</p>
              </div>
              <img
                className={`about-us__target-image `}
                src={target.cardImage}
                alt=""
              />
            </li>
          );
        })}
      </ol>
    </>
  );
}
