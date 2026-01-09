import React from "react";
import "./information.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Information = () => {

  const { t, i18n } = useTranslation()

  return (
    <div className="information">
      <div className="information__container container">
        <div className="information__left">

          <div className="information__left-top">
            <p className="information__left-top__text">
              {t("ПРОИЗВОДИТЕЛЬ")}
            </p>
            <h2 className="information__left-top__title">
              {t("GPG")}
            </h2>
          </div>

          <div className="information-middle-boxs">
            <div className="information-middle-boxs-top">
            </div>
            <div className="information-middle-boxs-bottom">
              <div className="information-middle-boxs-bottom-left"></div>
              <div className="information-middle-boxs-bottom-right"></div>
            </div>
          </div>

          <div className="information__left-bottom">
            <h3 className="information__left-bottom-title">
              {t("Технологическое")}
            </h3>
            <p className="information__left-bottom-desc">
              {t("ведущий")}
            </p>
            <p className="information__left-bottom-desc">
              {t("UzTR")}
            </p>
            <p className="information__left-bottom-desc">
              {t("reliable")}
            </p>
          </div>

          <div className="information__left-btns">
            <NavLink to={"/company"}>
              <button className="information__left-btns-left animate__animated animate__flipInX">
                {t("Подробнее о нас")}
              </button>
            </NavLink>

            <NavLink to={"/partner"}>
              <button className="information__left-btns-right animate__animated animate__flipInX">
                {t("Наши")}
              </button>
            </NavLink>
          </div>

        </div>

        <div className="information__right animate__animated  animate__zoomIn" data-aos="flip-right">

          <div className="information__right__top">
            <h3 className="information__right__top-title">Компания в цифрах</h3>
          </div>

          <div className="information__right-boxs">
            <div className="information__right-box">
              <h2 className="information__right-box-title">20 +</h2>
              <span>Лет опыта</span>
            </div>

            <div className="information__right-box">
              <h2 className="information__right-box-title">100 +</h2>
              <span>Наименований позиций</span>
            </div>

            <div className="information__right-box">
              <h2 className="information__right-box-title">300 +</h2>
              <span>Специалистов</span>
            </div>

            <div className="information__right-box">
              <h2 className="information__right-box-title">70 %</h2>
              <span>Реализация продукции по Узбекистану</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Information;
