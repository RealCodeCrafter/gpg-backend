import React from "react";
import img from "../../assets/img/partner.svg";

import "./arrow.scss"   
import { NavLink } from "react-router-dom";

const Arrow = () => {
  return (
    <div className="arrow">
      <div className="arrow__container container">
        <div className="arrow__left">
          <img src={img} alt="Arrow-img" />
        </div>
        <div className="arrow__right">
            <h2 className="arrow__right__title">Партнерство и сотрудничество</h2>
            <p className="arrow__right__desc">Мы ценим доверие наших клиентов и партнеров, предлагая продукцию и услуги, которые соответствуют самым высоким мировым стандартам.</p>
            <button className="arrow__right__btn">
              <NavLink to={"/contact"}>Связаться с нами</NavLink>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Arrow;