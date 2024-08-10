import lyamur from "@assets/home/Lyamyr.png";
import gusto from "@assets/home/pacha.png";
import lebed from "@assets/home/lebed.png";
import puma from "@assets/home/puma.png";
import settings from "@assets/settings.svg";
import vk from "@assets/vk.svg";
import telegram from "@assets/telegram.svg";
import volonter1 from "@assets/home/volonter1.jpg";
import volonter2 from "@assets/home/volonter2.jpg";
import volonter3 from "@assets/home/volonter3.jpg";
import { Button } from "../components/ui/Button";
import volonter4 from "@assets/home/volonter4.jpg";
import dushaMoloda from "@assets/home/dushaMoloda.jpg";
import moris from "@assets/home/moris.jpg";
import ryis from "@assets/home/ryis.jpg";
import { SubscribeForm } from "../components/SubscribeForm";
import { Support } from "../components/Support";
import { Link } from "../components/ui/Link";

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
];

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1 className="home__title">
          Лампушка <br />- Заповедный мир
        </h1>
        <p className="home__description text">
          Автономная некоммерческая организация по{" "}
          <strong>
            сохранению природных <br />и семейных ценностей
          </strong>{" "}
          «Лампушка» – заповедный мир»
        </p>
        <div className="home__lyamur">
          <img className="home__lyamur-image" src={lyamur} alt="lyamur" />
        </div>
        <h2 className="home__title-eco title">
          Экологическая <br /> и социальная <br />
          ответственность
        </h2>
        <div className="home__direction">
          <div className="home__direction-image">
            <img src={gusto} alt="lama" />
          </div>
          <div className="home__direction-description">
            <h3 className="home__direction-title">
              Основные направления нашей деятельности:
            </h3>
            <p className="home__direction-text text">
              <strong>- Экологическое просвещение детей и молодежи.</strong>
              Мы организуем эко-уроки, экскурсии, мастер-классы по сортировке
              отходов, организовываем квизы и викторины в игровом формате.
            </p>
            <p className="home__direction-text text">
              <strong>- Проекты в сфере защиты и сохранения природы. </strong>
              Ежегодно 1 апреля проводим мероприятия, посвященные птицам.
              Повышаем биоразнообразие природы, проводим экскурсии и игры,
              повышающие знания о крылатых друзьях!
            </p>
            <div className="home__direction-lebed">
              <img src={lebed} alt="lebed" />
            </div>
          </div>
        </div>
        <p className="home__direction-text text">
          <strong>- Проекты в сфере защиты семейных ценностей. </strong>
          Мы сосредотачиваемся на поддержке семей, стараемся создавать семейные
          форматы мероприятий и условия для счастливой и здоровой жизни всех
          членов семьи. Мы предоставляем семьям информацию и образовательные
          программы по решению важных вопросов в сфере здравоохранения,
          образования и воспитания детей.
        </p>
        <p className="home__direction-text text">
          <strong>- Общественные экологические инициативы. </strong>В
          партнерстве с Центром развития экологических и социальных проектов
          «Крышечки ДоброТЫ» наши волонтеры на регулярной основе организуют сбор
          перерабатываемых отходов.
        </p>
        <img className="home__image home__image--puma " src={puma} alt="puma" />
        <h2 className="title title--center">Проекты и события</h2>
        <div className="home__projects-container">
          {projects.map((project) => {
            return (
              <div key={project.title} className="project">
                <img
                  className="project__image"
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
        <div className="home__button-projects">
          <Button>Больше проектов</Button>
        </div>
        <div className="home__volonters">
          <div className="home__volonters-image">
            <h3 className="home__volonters-title title title--yellow">
              Наши <br />
              волонтеры
              <br /> и участники
            </h3>
            <div>
              <img src={volonter1} alt="volonter1" />
            </div>
            <div>
              <img src={volonter2} alt="volonter2" />
            </div>
          </div>
          <div className="home__volonters-image">
            <div className="home__volonters-3">
              <img src={volonter3} alt="volonter3" />
            </div>
            <div>
              <img src={volonter4} alt="volonter4" />
            </div>
          </div>
        </div>
        <div className="home__volonters-description">
          <p className="text text--lg">
            Автономная некоммерческая организация поддержки семей, детей и
            молодежи <strong>«Семейно-Молодежное Сообщество»</strong>{" "}
            Ленинградская область.
          </p>
          <p className="text">
            Объединяет семьи в дружные сообщества, чтобы учиться друг у друга
            быть счастливыми в семье долгие годы.
          </p>
        </div>
        <img className="home__dushamoloda" src={dushaMoloda} alt="" />
        <div className="home__volonters-description">
          <p className="text text--lg">
            <strong>Отряд Серебряных волонтеров «Молоды душой»</strong>
            от региональной общественной организации социального центра «Диалог
            поколений».
          </p>
          <p className="text">
            Миссия —{" "}
            <strong>смягчение социальной напряженности в обществе</strong>,
            создание условий для общения, самореализации и актуализации граждан
            разных поколений.
          </p>
        </div>
        <p className="text text--lg text--center">
          Тоже хочешь стать волонтером?
          <br /> Отправь анкету и <strong>стань частью нашей команды</strong>
        </p>
        <div className="home__button-projects">
          <Button>Стать частью команды</Button>
        </div>
        <h3 className="title title--center">Зоопарк на Лампушке</h3>
        <img className="home__image" src={moris} alt="" />
        <p className="home__text-lampushka text text--lg">
          На территории Заповедного мира «Шишки на Лампушке» есть{" "}
          <strong>уникальное место</strong>, где можно не только посмотреть на
          животных, но и познакомиться со многими поближе: покормить, погладить,
          вместе сфотографироваться или погулять.
        </p>
        <p className="home__text-lampushka-sm text">
          Это <strong>«Зоопарк на Лампушке»</strong> - самый большой
          лицензированный частный зоопарк Санкт-Петербурга и Ленинградской
          области, в котором проживает более 400 животных.
        </p>
        <div className="home__button-projects">
          <Button>Узнать больше</Button>
        </div>
        <h3 className="title title--center">Сафри</h3>
        <img className="home__image" src={ryis} alt="" />
        <p className="home__text-meeting text text--lg">
          <strong>Экскурсия-знакомство</strong> с дикой природой.
        </p>
        <div className="home__button-projects">
          <Button>Узнать больше</Button>
        </div>
        <SubscribeForm />
        <Support />
      </div>
    </div>
  );
};
