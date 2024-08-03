import lyamur from "@assets/home/Lyamyr.png";
import gusto from "@assets/home/pacha.png";
import lebed from "@assets/home/lebed.png";
import puma from "@assets/home/puma.png";
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
        <div className="home__puma">
          <img src={puma} alt="puma" />
        </div>
        <h2 className="home__projects-title title">Проекты и события</h2>
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
                  <img src={vk} alt="" />
                  <img src={telegram} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
