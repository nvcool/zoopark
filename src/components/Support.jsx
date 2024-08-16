import React from "react";
import { Link } from "./ui/Link";
import { Button } from "./ui/Button";

export const Support = () => {
  return (
    <div className="support">
      <h3 className="title title--center">Как поддержать</h3>
      <div className="support__text">
        <p className="text">
          В отличие от государственных учреждений мы быстрее и гибче реагируем
          на происходящие изменения, сокращаем издержки и делаем все, чтобы наши
          питомцы были здоровы, сыты и ухожены. Вместе с тем, расходы зоопарка
          <br className="home__br-mobile" />
          на содержание животных составляют <br className="home__br-mobile" />{" "}
          около 3 млн рублей ежемесячно.
        </p>
        <p className="text">
          Любое великое дело начинаются с малого: вы можете прийти в зоопарк в
          качестве волонтера, сделать небольшого пожертвования в пользу зоопарка{" "}
          <br className="home__br-mobile" />
          или заключить договор об опеке <br className="home__br-mobile" /> над
          животным. Любой человек или <br className="home__br-mobile" />{" "}
          компания может стать другом нашего зоопарка и его обитателей. Мы
          всегда открыты для предложений.
        </p>
        <p className="text support__text--margin">
          Мы любим природу и обитателей «Зоопарка на Лампушке», животные
          отвечают нам взаимностью. <br className="home__br-mobile" />
          <strong>
            Присоединяйтесь к команде «Зоопарка{" "}
            <br className="home__br-mobile" /> на Лампушке» и спешите делать
            <br className="home__br-mobile" />
            добрые дела вместе с нами.
          </strong>
        </p>
      </div>
      <Link className="support__link" href="#">
        скачать банковские реквизиты <br className="home__br-mobile" /> нко
        «лампушка» - заповедный мир»
      </Link>
      <Button className="support__button">Стать частью команды</Button>
    </div>
  );
};
