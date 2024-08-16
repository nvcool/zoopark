import React from "react";
import { Button } from "./ui/Button";
import flowers from "@assets/home/flowers.png";
import vk from "@assets/vk.svg";

export const SubscribeForm = () => {
  return (
    <div className="subscribe">
      <h3 className="title title--center">Подписаться на новости</h3>
      <div className="text text--center">
        Узнавайте о наших событиях <strong>первыми</strong>
      </div>
      <form className="subscribe__form">
        <input
          className="subscribe__form-input"
          type="text"
          placeholder="Как вас зовут?"
          required
        />
        <input
          className="subscribe__form-input"
          type="email"
          placeholder="Ваш email"
          required
        />
        <Button>Подписаться</Button>
        <img src={flowers} alt="" />
      </form>
      <div className="subscribe__paragraph">
        <p className="text">
          Нажимая на кнопку, вы даете <br />{" "}
          <a href="#">согласие на обработку персональных данных.</a>
        </p>
        <p className="text">
          Вы также можете узнавать наши новости из группы Вконтакте. Мы
          регулярно обновляем нашу ленту новостей, радуя подписчиков новыми
          интересными публикациями.
        </p>
      </div>
      <Button className="subscribe__button-vk">
        Наша группа ВКонтакте <img src={vk} alt="vk" />
      </Button>
    </div>
  );
};
