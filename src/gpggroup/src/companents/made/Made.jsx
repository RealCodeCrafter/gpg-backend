import React from 'react'
import "./made.scss"
import img from "../../assets/img/win.png"
import img1 from "../../assets/img/win1.png"
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'

const Made = () => {

    const { t, i18n } = useTranslation()

    return (
        <div className='made container'>
                <div className="made-left">
                    <div className="made-left-info">
                        <h2 className="made-left-info-title">{t("ГПГ")} <br /> {t("Lubricants")}</h2>
                        <p className='made-left-info-text'>{t("Made")}</p>
                    </div>

                    <NavLink to={"/contact"}>
                        <button className='made-left-info-btn'>
                            {t("Контакты")}
                            <span className="btn-arrow">→</span>
                        </button>
                    </NavLink>
                </div>

                <div className="made-right">
                    <button className="made-right-btn">{t("Made")}</button>
                    <h2 className="made-right-title">{t("ГПГ")}</h2>
                    <p className="made-right-text">{t("High-Quality")}</p>
                </div>

                <div className='made-img'>
                    <img className='made-img-one' src={img} alt="Rubaat Motor Oil" />
                </div>

                <div className="made-img-bottom">
                    <img className='made-img-bottom-one' src={img1} alt="Rubaat Premium Oil" />
                </div>
        </div>
    )
}
export default Made