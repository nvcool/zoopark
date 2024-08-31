import React from "react";
import verblyd from "@assets/about-us/programs.jpg";
import lebed from "@assets/about-us/lebed.jpg";
import lama from "@assets/about-us/lama.jpg";
import enot from "@assets/about-us/enot.png";
import goat from "@assets/about-us/goat.jpg";
import forest from "@assets/about-us/forest.jpg";
import princip1 from "@assets/about-us/princip1.jpg";
import princip2 from "@assets/about-us/princip2.jpg";
import Slider from "../components/Slider";
import AboutUsTargets from "../components/AboutUsTargets";

export const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container">
        <section>
          <div className="about-us__mission">
            <div className="about-us__mission-content">
              <h1 className="title">Наша миссия</h1>
              <p className="text text--lg">
                Строим <strong>счастливое будущее</strong> для планеты и всех ее
                обитателей
              </p>
              <p className="text">
                Мы придерживаемся{" "}
                <strong className="text__strong">
                  экологической и социальной ответственности
                </strong>{" "}
                в своей деятельности, а также стараемся популяризировать принцип
                <strong className="text__strong">
                  сохранения природы и семейных ценностей
                </strong>{" "}
                среди общества.
              </p>
            </div>
            <div className="about-us__mission-image">
              <div className="about-us__mission-verblyd">
                <img src={verblyd} alt="verblyd Aby-Rahim-Kashimiri-Andrey" />
                <span className="text">
                  <strong>Программы и проекты</strong>
                </span>
              </div>
              <div className="about-us__mission-lebed">
                <img src={lebed} alt="lebedev" />
                <span className="text">
                  <strong>Поддержка семейных ценностей</strong>
                </span>
              </div>
            </div>
          </div>
          <div className="about-us__lama">
            <img src={lama} alt="" />
            <span className="text">
              <strong>Защита природы</strong>
            </span>
          </div>
          <p className="about-us__paragraph text text--lg">
            <span className="about-us__paragraph-span">
              Главное достояние человечества – планета Земля и ее уникальная
              природа.
            </span>{" "}
            <strong>
              Наш общий дом как никогда нуждается в бережном отношении
            </strong>
            , защите и внимании. Прямо сейчас тысячи видов животных и растений
            находятся под угрозой исчезновения.
          </p>
          <div className="about-us__enot">
            <img src={enot} alt="" />
            <div className="about-us__enot-description">
              <p className="text">
                <strong className="text__strong">
                  Экологическое просвещение, сохранение флоры и фауны, поддержка
                  семейных ценностей
                </strong>{" "}
                – приоритетные направления деятельности нашей организации!
              </p>
              <p className="text">
                Только вместе мы сможем создать счастливое и сбалансированное
                общество, которое будет{" "}
                <strong className="text__strong">
                  процветать и развиваться в гармонии с природой и семейными
                  ценностями.
                </strong>
              </p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="about-us__target-title title title--yellow">
            Наши цели
          </h2>
          <p className="about-us__target-paragraph about-us__target-paragraph--display text text--lg">
            Приоритетные направления нашей деятельности
          </p>
          <AboutUsTargets />
        </section>
        <section className="about-us__goat">
          <p className="about-us__goat-text text text--lg">
            <strong>Делать мир лучше, добрее и экологичнее</strong> – вот цели,
            которые ставят перед собой сотрудники и волонтеры АНО по сохранению
            природных и семейных ценностей «Лампушка – заповедный мир».{" "}
            <span>
              {" "}
              А укрепление семейных ценностей и экологическое мышление населения
              - это то, к чему мы стремимся.
            </span>
          </p>
          <img src={goat} alt="" />
        </section>
        <section className="about-us__history">
          <h2 className="about-us__history-title title">Наша история</h2>
          <div className="about-us__history-box">
            <div className="about-us__history-text">
              <p className="text">
                Автономная некоммерческая организация по сохранению природных и
                семейных ценностей «Лампушка – заповедный мир» зарегистрирована
                9 августа 2022 года.
              </p>
              <p className="text">
                За это время мы стали организаторами{" "}
                <strong className=" text__strong">
                  более двух десятков масштабных мероприятий экологической и
                  просветительской направленности
                </strong>{" "}
                для детей и взрослых: мастер-классов, воркшопов, экскурсий и
                эко-уроков.
              </p>
              <p className="text">
                Несмотря на еще совсем «юный» возраст, АНО «Лампушка –
                заповедный мир» является{" "}
                <strong className=" text__strong">
                  обладателем гранта Губернатора Ленинградской области
                </strong>
                . На эти средства в 2023 году был реализован экологический
                просветительский проект «Мы в ответе».
              </p>
              <p className="text">
                Благодаря серии образовательных мероприятий сотни мальчишек и
                девчонок из Ленинградской области получили теоретические и
                практические знания в сфере защиты природы.
              </p>
            </div>
            <img src={forest} alt="" />
          </div>
        </section>
        <section className="about-us__principles">
          <h3 className="about-us__principles-title title title--yellow">
            Принципы работы
            <br /> и структура организации
          </h3>
          <div className="about-us__principles-box about-us__principles-box--margin">
            <p className="text">
              Наша деятельность направлена на формирование{" "}
              <strong className=" text__strong">
                ответственного отношения человека к природе
              </strong>
              . <br />
              Мы создаем мероприятия и события, которые позволяют в ненавязчивой
              игровой форме донести информацию до детей и взрослых.
            </p>
          </div>
          <div className="about-us__principles-box">
            <div className="about-us__principles-activity">
              <img src={princip1} alt="" />
            </div>
            <div className="about-us__principles-approach">
              <p className="text">
                <strong className=" text__strong">
                  Индивидуальный подход, необычные форматы взаимодействия с
                  аудиторией
                </strong>{" "}
                и, конечно же, любовь к природе и всему, что с ней связано –
                главные принципы нашей организации.
              </p>
              <img src={princip2} alt="" />
            </div>
          </div>
        </section>
      </div>
      <section className="about-us__command">
        <h3 className="container title">Наша команда</h3>
        <Slider />
      </section>
    </div>
  );
};

// ${
//   i % 2 === 0 ? "" : "about-us__target-image--order"
// }
