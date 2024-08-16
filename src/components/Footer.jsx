import React from "react";
import vk from "@assets/vk.svg";
import telegram from "@assets/telegram.svg";

export const Footer = () => {
  return (
    <div className="container ">
      <div className="footer">
        <p className="footer__text text">
          АНО ПО СОХРАНЕНИЮ ПРИРОДНЫХ И СЕМЕЙНЫХ ЦЕННОСТЕЙ ЛАМПУШКА - ЗАПОВЕДНЫЙ
          МИР.
        </p>
        <p className="footer__text text">
          ОГРН 1224700016133, ИНН 4704112036 и КПП 470401001
        </p>
        <address className="footer__text text">
          Ленинградская обл, Приозерский р-н,
          <br /> с/п Раздольевское, тер. Ланс, зд. 1. <br /> 198261
        </address>
        <a className="footer__phone" href="tel:78123191919">
          +7 (812)-31-91-919
        </a>
        <div className="footer__link">
          <a href="#">
            <img src={vk} alt="" />
          </a>
          <a href="#">
            <img src={telegram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
