import React, { useEffect, useRef, useState } from "react";
// import img from "../../assets/img/service.png";
// import img1 from "../../assets/img/service1.png";
import img from "../../assets/img/service.webp";
import img1 from "../../assets/img/service1.webp";
import "./service.scss"
import { useTranslation } from "react-i18next";

const Service = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t, i18n } = useTranslation()

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };

  }, []);

  return (
    <div className="service container" ref={sectionRef}>
      <div className={`service-top ${isVisible ? 'fade-in-up' : ''}`}>
        <p className="service-top-text">{t("ОБОРУДОВАНИЕ")}</p>
        <h2 className="service-top-title">{t("уровень")}</h2>
        <div className="service-top-line"></div>
      </div>
      <div className="service-bottom">

        <div className={`service-bottom-item ${isVisible ? 'fade-in-left' : ''}`} style={{ animationDelay: '0.2s' }}>
          <div className="image-wrapper">
            <img 
              className="service-bottom-img" 
              src={img}
              alt="service-img" 
            />
            <div className="image-overlay"></div>
          </div>
        </div>
        
        <div className={`service-bottom-item ${isVisible ? 'fade-in-right' : ''}`} style={{ animationDelay: '0.4s' }}>
          <p className="service-bottom-text">
            {t("используем")}
          </p>
        </div>
        
        <div className={`service-bottom-item ${isVisible ? 'fade-in-left' : ''}`} style={{ animationDelay: '0.6s' }}>
          <p className="service-bottom-text">
            {t("Линии")}
          </p>
        </div>
        
        <div className={`service-bottom-item ${isVisible ? 'fade-in-right' : ''}`} style={{ animationDelay: '0.8s' }}>
          <div className="image-wrapper">
            <img 
              className="service-bottom-img" 
              src={img1} 
              alt="service-bottom" 
            />
            <div className="image-overlay"></div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Service;