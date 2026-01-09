import React, { useEffect } from 'react'
import img from "../../assets/img/about3.png"

import "./company.scss"
import { FaArrowRight } from 'react-icons/fa'
import { SlDrop } from 'react-icons/sl'
import { PiLightning } from 'react-icons/pi'
import { IoShieldCheckmarkOutline, IoSpeedometerOutline } from 'react-icons/io5'

import company1 from "../../assets/img/certificat1.png"
import company2 from "../../assets/img/certificat2.png"
import company3 from "../../assets/img/company.png"

import photo1 from "../../assets/img/service.png"
import photo2 from "../../assets/img/service1.webp"
import photo3 from "../../assets/img/service2.png"
import photo4 from "../../assets/img/service.webp"
import photo5 from "../../assets/img/service4.png"
import photo6 from "../../assets/img/service5.png"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next'

const Company = () => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  return (
    <div className='company'>

      <div className="company-bg">

        <div className="company-info container">

          <div className="company-info-left">
            <img src={img} alt="company-img" className="company-info-left-img" />
          </div>

          <div className="company-info-right">
            <h3 className='company-info-right-about'>{t("About Us")}</h3>
            <p className="company-info-right-text">{t("leading")}</p>
          </div>

        </div>

      </div>

      <div className="company-bottom">

        <div className="company-item container">

          <div className="company-item-left">
            <p className="company-item-left-text">{t("Компания ООО")}</p>
            <p className="company-item-left-text">{t('Все этапы')}</p>
          </div>

          <div className="company-item-right">
            <p className="company-item-right-text">{t("Продукция")}</p>
            <p className="company-item-right-text">{t("успешно")}</p>
          </div>

        </div>

        <div className="company-imgs container">

          <div className="company-imgs-left">
            <img className='company-imgs-left-img' src={company3} alt="" />
          </div>

          <div className="company-imgs-right">
            <img src={company1} alt="company settificate one" />
            <img src={company2} alt="company sertificate two" />
          </div>

        </div>

        <div className="company-bottom-info container">
          <p className="company-bottom-info-text">{t("2023 году")}</p>
          <p className="company-bottom-info-text">{t("Высокотехнологичные")}</p>
        </div>

        <div className="container">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper container"
          >
            {[photo1, photo6, photo4, photo3, photo5, photo2].map((img, i) => (
              <SwiperSlide key={i}>
                <img src={img} alt={`photo1-${i}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <p className="company-desc container">{t("company works")}</p>

      </div>

      <div className="company-vision">

        <div className="container company-vision-container">

          <div className="company-vision-top">
            <h2 className="company-vision-top-title">{t("Vision")}</h2>
            <p className="company-vision-top-text">{t("At GPG")}</p>
          </div>

          <div className="company-vision-middle">
            <div className="company-vision-middle-box">
              <h2 className="company-vision-middle-box-title">{t("Visio")}</h2>
              <p className="company-vision-middle-box-text">{t("To make")}</p>
            </div>

            <div className="company-vision-middle-box">
              <h2 className="company-vision-middle-box-title">{t("Mission")}</h2>
              <p className="company-vision-middle-box-text">{t("Setting")}</p>
            </div>

            <div className="company-vision-middle-box">
              <h2 className="company-vision-middle-box-title">{t("Value")}</h2>
              <p className="company-vision-middle-box-text">{t("Leveraging")}</p>
            </div>
          </div>

          <div className="company-vision-bottom">

            <div className="company-vision-bottom-item">
              <SlDrop />
              <span>{t("Eco-friendly")}</span>
            </div>

            <div className="company-vision-bottom-item">
              <PiLightning />
              <span>{t("performance")}</span>
            </div>

            <div className="company-vision-bottom-item">
              <IoSpeedometerOutline />
              <span>{t("Long life")}</span>
            </div>

            <div className="company-vision-bottom-item">
              <IoShieldCheckmarkOutline />
              <span>{t("Base oil")}</span>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Company