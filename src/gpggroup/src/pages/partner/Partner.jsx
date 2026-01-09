import React, { useEffect, useState } from "react";
import "./partner.scss";
import { PARTNER, PARTNEREN } from "../../static";
import img from "../../assets/img/partner1.webp"
import img1 from "../../assets/img/partner2.webp"
import { NavLink } from "react-router-dom";
import Module from "../../companents/module/Module";
import { useGetValue } from "../../hooks/useGetValue";
import { useTranslation } from "react-i18next";

const initialState = {
  name: "",
  email: "",
  number: "",
  message: ""
}

const Partner = () => {
  const [hide, setHide] = useState(false)
  const { formData, setFormData, handleChange } = useGetValue(initialState)
  const { t, i18n } = useTranslation()

  const partnerLang = i18n?.language === "en" ? PARTNEREN : PARTNER

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData(initialState)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="partner">

      <div className="partner-top">
        <div className="partner-top-container container">
          <div className="partner-top-left">
            <h2 className="partner-top-left-title">{t("Join Us")}</h2>
            <p className="partner-top-left-text">{t("believe")}</p>
            <button onClick={() => setHide(true)} className="partner-top-left-btn">{t("Become a Partner")}</button>
          </div>

          <div className="partner-top-right">
            <img src={img} alt="partner-img" className="partner-top-right-img" />
          </div>
        </div>
      </div>

      {
        hide
          ?
          <Module width={"400px"} bg={"#0005"} close={setHide}>
            <form onSubmit={handleSubmit} className="partner-form" action="">
              <p className="partner-form-text">{t("Become a Partner")}</p>
              <input name="name" onChange={handleChange} value={formData.name} className="partner-form-input" placeholder={t("Full Name")} type="text" />
              <input name="email" onChange={handleChange} value={formData.email} className="partner-form-input" placeholder={t("Business Email")} type="text" />
              <input name="number" onChange={handleChange} value={formData.number} className="partner-form-input" placeholder={t("Номер")} type="text" />
              <textarea className="partner-form-textarea" placeholder={t("Message")} name="message" value={formData.message} onChange={handleChange} id=""></textarea>
              <button className="partner-form-btn">{t("Let's Talk")}</button>
            </form>
          </Module>
          :
          ""
      }

      <div className="partner__bottom container">
        <p className="partner__bottom-desc">
          {t("Компания Global")}
        </p>

        <div className="partner__bottom__cards">
          {partnerLang?.map((el) => (
            <div key={el?.id} className="partner__bottom__card">
              <img src={el?.icon} alt={el?.title} />
              <p className="partner__bottom__card-text">{el?.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="partner-bg">

        <div className="partner-bg-container container">

          <div className="partner-bg-fix">
            <span className="partner-bg-fix-desc">{t("OUR")}</span>
            <p className="partner-bg-fix-text">{t("opportunities")}</p>
          </div>

        </div>

      </div>

      <div className="partner-info container">
        <div className="partner-info-left">
          <img src={img1} alt="partner-img" className="partner-info-left-img" />
        </div>

        <div className="partner-info-right">
          <h2 className="partner-info-right-title">{t("Unlocking")}</h2>
          <p className="partner-info-right-text">{t("strategic")}</p>
        </div>
      </div>

      <div className="partner-drive">

        <div className="partner-drive-info container">
          <h2 className="partner-drive-info-title">{t("Together")}</h2>
          <NavLink to={"/contact"} className="partner-drive-info-btn">{t("Contact Us")}</NavLink>
        </div>

      </div>

    </div>
  );
};

export default Partner;
