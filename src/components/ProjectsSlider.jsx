import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import settings from "@assets/settings.svg";
import vk from "@assets/vk.svg";
import telegram from "@assets/telegram.svg";

const projects = [
  {
    title: "Мы в ответе!",
    description: `Социальный проект \n по защите природы`,
    vk: "#",
    telegram: "#",
  },
  {
    title: "«Крышечки доброТЫ»",
    description: `Рассказываем детям, как \n сохранить нашу планету чистой!`,
    vk: "#",
    telegram: "#",
  },
  {
    title: "День экологических знаний",
    description: "Проводится ежегодно 15 апреля",
    vk: "#",
    telegram: "#",
  },
  {
    title: "«В гостях у клуба»",
    description: "Знакомство с нашей \n организацией",
    vk: "#",
    telegram: "#",
  },
  {
    title: "«Зоопарк на Лампушке»",
    description:
      "Самый большой \n лицензированный частный \n зоопарк Санкт-Петербурга \n и Ленинградской области",
    vk: "#",
    telegram: "#",
  },
  {
    title: "Фестиваль «Струны детства»",
    description:
      "Фестиваль культуры с участием детских танцевальных \n и вокальных коллективов, представителей народного \n творчества для поддержки юных талантов!",
    vk: "#",
    telegram: "#",
  },
  {
    title: "Свеча памяти",
    description:
      "Ежегодная акция в честь памяти \n Дня освобождения от \n фашистской Блокады города- \nгероя Ленинграда! \n\n#Лампушкапомнит",
    vk: "#",
    telegram: "#",
  },
  {
    title: "Фестиваль авторской песни им. Высоцкого",
    description:
      "Бардовский фестиваль авторской песни на сцене-гитаре, \n посвященный творчеству \n В. Высоцкого",
    vk: "#",
    telegram: "#",
  },
  {
    title: "Международный день птиц",
    description:
      "Ежегодно 1 апреля проводим мероприятия, посвященные \n птицам. Повышаем \n биоразнообразие природы, \n проводим экскурсии и игры, повышающие знания \n о крылатых друзьях!",
    vk: "#",
    telegram: "#",
  },
];

export default function ProjectsSlider() {
  return (
    <>
      <div className="projects__slider">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={20}
          centeredSlides={true}
          className="">
          {projects.map((project) => {
            return (
              <SwiperSlide className="projects__slider-box">
                <div
                  key={project.title}
                  className="projects__slider-box-content">
                  <img
                    className="projects__slider-image"
                    src={settings}
                    alt="settings icon"
                  />
                  <strong>{project.title}</strong>
                  <p>{project.description}</p>
                  <div>
                    <a href="#">
                      <img src={vk} alt="" />
                    </a>
                    <a href="#">
                      <img src={telegram} alt="" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="projects__container">
        {projects.map((project) => {
          return (
            <div key={project.title} className="projects__container-box">
              <img
                className="projects__container-image"
                src={settings}
                alt="settings icon"
              />
              <strong>{project.title}</strong>
              <p>{project.description}</p>
              <div>
                <a href="#">
                  <img src={vk} alt="" />
                </a>
                <a href="#">
                  <img src={telegram} alt="" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
