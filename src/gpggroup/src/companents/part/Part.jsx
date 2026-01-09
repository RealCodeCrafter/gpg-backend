import React from 'react';
import "./part.scss";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';
import { PARTNER, PARTNEREN } from '../../static';
import { useTranslation } from 'react-i18next';

const Part = () => {
  const { i18n } = useTranslation();

  const partData = i18n.language === "ru" ? PARTNER : PARTNEREN;

  return (
    <div className='part-swipper container'>
      <Swiper
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {partData?.map(el => (
          <SwiperSlide key={el.id}>
            <div className="part-swipper-card">
              <div className="part-swipper-card-img">
                <img src={el.icon} alt={el.title} />
              </div>
              <div className="part-swipper-card-info">
                <p className="part-swipper-card-info-title">
                  {el.title}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Part;
