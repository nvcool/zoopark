import React from "react";
import bambi from "@assets/projects/bambi.jpg";
import { Button } from "../components/ui/Button";
import ProjectsPhoto from "../components/ProjectsPhoto";
import { Support } from "../components/Support";
import ProjectsSlider from "../components/ProjectsSlider";

const events = [
  {
    text: "День семьи, любви и верности",
  },
  {
    text: "Животные «Зоопарка на Лампушке»",
  },
  {
    text: "Мероприятия ко Дню птиц в Заповедном мире на Лампушке",
  },
  {
    text: "Международный день птиц",
  },
  {
    text: "Новоселье птиц",
  },
];

export const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <section>
          <h1 className="projects__title title">Наши проекты</h1>
          <ProjectsSlider />
        </section>
        <section className="projects__events">
          <h2 className="projects__events-title title">События</h2>
          <ol className="projects__events-container">
            {events.map((event) => (
              <li className="projects__events-item text" key={event.text}>
                {event.text}
              </li>
            ))}
          </ol>
        </section>
        <section className="projects__zoopark">
          <h2 className=" title">Зоопарк на Лампушке</h2>
          <div className="">
            <img src={bambi} alt="" />
            <div className="projects__zoopark-description">
              <p className="text text--lg">
                На территории Заповедного мира «Шишки на Лампушке» есть{" "}
                <strong>уникальное место</strong>, где можно{" "}
                <br className="br-mobile" /> не только посмотреть{" "}
                <br className="br-mobile" /> на животных, но и{" "}
                <br className="br-desktop" /> познакомиться со многими поближе:
                покормить, <br className="br-desktop" />
                погладить, сфотографироваться вместе или погулять.
              </p>
              <Button>Узнать больше</Button>
            </div>
          </div>
        </section>
        <section>
          <h3 className="title title--yellow title--center">
            Фото <br className="br-mobile" /> с наших мероприятий
          </h3>
        </section>
      </div>
      <ProjectsPhoto />
      <div className="container">
        <Support />
      </div>
    </div>
  );
};
