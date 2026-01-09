import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./catalog.scss"
import { useGetCategorysQuery } from "../../context/api/categoryApi";
// import img from "../../assets/bg/catalog.webp"
import CatalogLoading from "../catalogLoading/CatalogLoading";
import { useTranslation } from "react-i18next";

const Catalog = ({ hide }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const { data, isLoading } = useGetCategorysQuery()
  const { t, i18n } = useTranslation()

  console.log(i18n?.language);
  

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <div className="photo-catalog">
      <div className="photo-catalog-top container">
        <span className="photo-catalog-top-text">{t("КАТЕГОРИИ")}</span>
        <h3 className="photo-catalog-top-title"><span>{t("Высококачественные")}</span>, {t("охлаждающие")}</h3>
      </div>
      <div className="photo-catalog__container container">
        
        {
          isLoading
            ?
            <CatalogLoading/>
            :
            <div className="photo-catalog__grid">
              {data?.slice(0,8)?.map((el, index) => (
                <NavLink key={el.id} to={`/singleCatalog/${el.id}`} className="photo-catalog__link">

                  <div
                    className={`photo-catalog__card ${isVisible ? 'animate' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setHoveredId(el.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >

                    <div className="photo-catalog__card-image-container">
                      <img
                        src={hoveredId === el.id && el.images[1] ? el.images[1] : el.images[0]}
                        alt={el.nameRu}
                        className="photo-catalog__card-image"
                      />
                      <div className="photo-catalog__card-gradient"></div>
                    </div>
                          
                    <div className="photo-catalog__card-label">
                      <span className="photo-catalog__card-title">{i18n?.language === "ru" ? el?.nameRu : el?.nameEn}</span>
                    </div>

                  </div>

                </NavLink>
              ))}
            </div>
        }
      </div>
      <p className="photo-catalog-text container">{t("All our")}</p>
    </div>
  );
};


export default Catalog;