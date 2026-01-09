// import React, { useState, useEffect, useCallback } from "react";

// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { useTranslation } from "react-i18next";

// import imgEn1 from "../../assets/bg/bg1.webp"
// import imgEn2 from "../../assets/bg/bg2.webp"
// import imgEn3 from "../../assets/bg/bg3.webp"

// import imgRu1 from "../../assets/bg/bg-ru1.webp"
// import imgRu2 from "../../assets/bg/bg-ru2.webp"
// import imgRu3 from "../../assets/bg/bg-ru3.webp"

// import mobileEn1 from "../../assets/bg/mobile1.webp"
// import mobileEn2 from "../../assets/bg/mobile2.webp"
// import mobileEn3 from "../../assets/bg/mobile3.webp"

// import mobileRu1 from "../../assets/bg/mobile-ru1.webp"
// import mobileRu2 from "../../assets/bg/mobile-ru2.webp"
// import mobileRu3 from "../../assets/bg/mobile-ru3.webp"

// import './hero.scss';

// const SLIDES = [
//   {
//     img: imgRu1,
//     mobileImg: mobileRu1,
//   },
//   {
//     img: imgRu3,
//     mobileImg: mobileRu3,
//   },
//   {
//     img: imgRu2,
//     mobileImg: mobileRu2,
//   }
// ];

// const SLIDESEN = [
//   {
//     img: imgEn1,
//     mobileImg: mobileEn1,
//   },
//   {
//     img: imgEn3,
//     mobileImg: mobileEn3,
//   },
//   {
//     img: imgEn2,
//     mobileImg: mobileEn2,
//   }
// ];

// const Hero = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [progress, setProgress] = useState(0);
//   const [direction, setDirection] = useState('next');
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const { t, i18n } = useTranslation();

//   const heroData = i18n?.language === "ru" ? SLIDES : SLIDESEN;

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const goToSlide = useCallback((index, dir = 'next') => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setDirection(dir);
//     setActiveIndex(index);
//     setProgress(0);
//     setTimeout(() => setIsAnimating(false), 1500);
//   }, [isAnimating]);

//   const nextSlide = useCallback(() => {
//     const next = (activeIndex + 1) % SLIDES.length;
//     goToSlide(next, 'next');
//   }, [activeIndex, goToSlide]);

//   const prevSlide = useCallback(() => {
//     const prev = (activeIndex - 1 + SLIDES.length) % SLIDES.length;
//     goToSlide(prev, 'prev');
//   }, [activeIndex, goToSlide]);

//   useEffect(() => {
//     const progressInterval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           nextSlide();
//           return 0;
//         }
//         return prev + 0.33;
//       });
//     }, 25);

//     return () => clearInterval(progressInterval);
//   }, [nextSlide]);

//   const handleSlideClick = (index) => {
//     if (index === activeIndex) return;
//     const dir = index > activeIndex ? 'next' : 'prev';
//     goToSlide(index, dir);
//   };

//   const getSlideClass = (index) => {
//     if (index === activeIndex) return 'active';

//     if (direction === 'next') {
//       if (index === (activeIndex - 1 + heroData.length) % heroData.length) return 'prev-slide';
//       if (index === (activeIndex + 1) % heroData.length) return 'next-slide';
//     } else {
//       if (index === (activeIndex + 1) % heroData.length) return 'next-slide';
//       if (index === (activeIndex - 1 + heroData.length) % heroData.length) return 'prev-slide';
//     }
//     return 'hidden-slide';
//   };

//   return (
//     <div className="hero-ultra">
//       <div className="hero-ultra__bg-wrapper">
//         {heroData.map((slide, index) => (
//           <div
//             key={index}
//             className={`hero-ultra__bg ${getSlideClass(index)}`}
//             style={{ backgroundImage: `url(${isMobile ? slide.mobileImg : slide.img})` }}
//           >
//             <div className="hero-ultra__bg-overlay"></div>
//           </div>
//         ))}
//       </div>

//       <div className="hero-ultra__gradient-overlay"></div>

//       <div className="hero-ultra__shapes">
//         <div className="hero-ultra__shape hero-ultra__shape--1" />
//         <div className="hero-ultra__shape hero-ultra__shape--2" />
//         <div className="hero-ultra__shape hero-ultra__shape--3" />
//         <div className="hero-ultra__shape hero-ultra__shape--4" />
//       </div>

//       <div className="hero-ultra__bottom">
//         <div className="hero-ultra__indicators">
//           {heroData.map((_, index) => (
//             <button
//               key={index}
//               className={`hero-ultra__indicator ${index === activeIndex ? 'active' : ''}`}
//               onClick={() => handleSlideClick(index)}
//             >
//               <span className="hero-ultra__indicator-fill"></span>
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

import imgEn1 from "../../assets/bg/bg1.webp"
import imgEn2 from "../../assets/bg/bg2.webp"
import imgEn3 from "../../assets/bg/bg3.webp"

import imgRu1 from "../../assets/bg/bg-ru1.webp"
import imgRu2 from "../../assets/bg/bg-ru2.webp"
import imgRu3 from "../../assets/bg/bg-ru3.webp"

import mobileEn1 from "../../assets/bg/mobile1.webp"
import mobileEn2 from "../../assets/bg/mobile2.webp"
import mobileEn3 from "../../assets/bg/mobile3.webp"

import mobileRu1 from "../../assets/bg/mobile-ru1.webp"
import mobileRu2 from "../../assets/bg/mobile-ru2.webp"
import mobileRu3 from "../../assets/bg/mobile-ru3.webp"

import './hero.scss';

const SLIDES = [
  {
    img: imgRu1,
    mobileImg: mobileRu1,
  },
  {
    img: imgRu3,
    mobileImg: mobileRu3,
  },
  {
    img: imgRu2,
    mobileImg: mobileRu2,
  }
];

const SLIDESEN = [
  {
    img: imgEn1,
    mobileImg: mobileEn1,
  },
  {
    img: imgEn3,
    mobileImg: mobileEn3,
  },
  {
    img: imgEn2,
    mobileImg: mobileEn2,
  }
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { t, i18n } = useTranslation();

  const heroData = i18n?.language === "ru" ? SLIDES : SLIDESEN;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToSlide = useCallback((index, dir = 'next') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setActiveIndex(index);
    setProgress(0);
    setTimeout(() => setIsAnimating(false), 1200);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    const next = (activeIndex + 1) % heroData.length;
    goToSlide(next, 'next');
  }, [activeIndex, goToSlide, heroData.length]);

  const prevSlide = useCallback(() => {
    const prev = (activeIndex - 1 + heroData.length) % heroData.length;
    goToSlide(prev, 'prev');
  }, [activeIndex, goToSlide, heroData.length]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 0.33;
      });
    }, 25);

    return () => clearInterval(progressInterval);
  }, [nextSlide]);

  const handleSlideClick = (index) => {
    if (index === activeIndex) return;
    const dir = index > activeIndex ? 'next' : 'prev';
    goToSlide(index, dir);
  };

  const getSlideClass = (index) => {
    if (index === activeIndex) return 'active';

    if (direction === 'next') {
      if (index === (activeIndex - 1 + heroData.length) % heroData.length) return 'prev-slide';
      if (index === (activeIndex + 1) % heroData.length) return 'next-slide';
    } else {
      if (index === (activeIndex + 1) % heroData.length) return 'next-slide';
      if (index === (activeIndex - 1 + heroData.length) % heroData.length) return 'prev-slide';
    }
    return 'hidden-slide';
  };

  return (
    <div className="hero-ultra">
      <div className="hero-ultra__bg-wrapper">
        {heroData.map((slide, index) => (
          <div
            key={index}
            className={`hero-ultra__bg ${getSlideClass(index)}`}
            style={{ backgroundImage: `url(${isMobile ? slide.mobileImg : slide.img})` }}
          >
            <div className="hero-ultra__bg-overlay"></div>
          </div>
        ))}
      </div>

      <div className="hero-ultra__gradient-overlay"></div>

      <div className="hero-ultra__shapes">
        <div className="hero-ultra__shape hero-ultra__shape--1" />
        <div className="hero-ultra__shape hero-ultra__shape--2" />
        <div className="hero-ultra__shape hero-ultra__shape--3" />
        <div className="hero-ultra__shape hero-ultra__shape--4" />
      </div>

      <div className="hero-ultra__bottom">
        <div className="hero-ultra__indicators">
          {heroData.map((_, index) => (
            <button
              key={index}
              className={`hero-ultra__indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleSlideClick(index)}
            >
              <span className="hero-ultra__indicator-fill"></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;