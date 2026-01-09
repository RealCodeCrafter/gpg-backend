import React, { useEffect } from 'react'
import "./card.scss";
import { BOX, BOXEN } from '../../static';
import { useTranslation } from 'react-i18next';

const Card = () => {

  const { t, i18n } = useTranslation()
  console.log(i18n);

  const BOXLANG = i18n?.language === "en" ? BOXEN : BOX

  return (
    <div className="card container">
      {BOXLANG?.map((el, idx) => (
        <div
          key={el?.id || idx}
          className="card-box"
          role="article"
          tabIndex={0}
          data-aos="flip-up"
        >
          <div className="card-box-icon">
            <img src={el?.icon} alt={el?.title} loading="lazy" />
          </div>
          
          <div className="card-box-info">
            <h2 className="card-box-info-title">{el?.title}</h2>
            <p className="card-box-info-text">{el?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;