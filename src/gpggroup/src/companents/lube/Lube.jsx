// import React, { useEffect, useState } from 'react';

// import img1 from "../../assets/img/lube1.png"
// import img2 from "../../assets/img/lube2.png"
// import img3 from "../../assets/img/lube3.png"
// import './lube.scss';
// import { useTranslation } from 'react-i18next';
// import { NavLink } from 'react-router-dom';

// const Lube = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const { t, i18n } = useTranslation()

//     useEffect(() => {
//         setIsVisible(true);
//     }, []);

//     return (
//         <div className='lube'>
//             <div className="lube-overlay"></div>

//             <div className="lube-bg-lines">
//                 <div className="line line-1"></div>
//                 <div className="line line-2"></div>
//                 <div className="line line-3"></div>
//                 <div className="line line-4"></div>
//             </div>

//             <div className="light-trail"></div>

//             <div className={`container lube-container ${isVisible ? 'visible' : ''}`}>
//                 <div className="lube-header">
//                     <h3 className='lube-subtitle'>{t("Advanced")}</h3>
//                     <p className="lube-description">
//                         {t("develops")}
//                     </p>
//                 </div>

//                 <div className="lube-imgs">
//                     <NavLink to={"/singleProduct/5"}>
//                         <img src={img1} alt="img-green" className="lube-imgs-img" />
//                     </NavLink>
//                     <NavLink to={"/singleProduct/13"}>
//                         <img src={img2} alt="img-blue" className="lube-imgs-img lube-imgs-blue" />
//                     </NavLink>
//                     <NavLink to={"/singleProduct/11"}>
//                         <img src={img3} alt="img-red" className="lube-imgs-img lube-imgs-red" />
//                     </NavLink>
//                 </div>

//                 <div className="lube-benefits">
//                     <div className="benefits-grid">

//                         <div className="benefit-card benefit-1">
//                             <div className="benefit-content">
//                                 <p className="benefit-text">
//                                     <span className="benefit-main">{t("Thermal")}</span>
//                                     <span className="benefit-sub">{t("Control")}</span>
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="benefit-card benefit-2">
//                             <div className="benefit-content">
//                                 <p className="benefit-text">
//                                     <span className="benefit-main">{t("Cooling")}</span>
//                                     <span className="benefit-sub">{t("Efficiency")}</span>
//                                 </p>
//                             </div>
//                         </div>

//                         <div className="benefit-card benefit-3">
//                             <div className="benefit-content">
//                                 <p className="benefit-text">
//                                     <span className="benefit-main">{t("Temperature")}</span>
//                                     <span className="benefit-sub">{t("Stability")}</span>
//                                 </p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Lube;


import React, { useEffect, useState } from 'react';
import img1 from "../../assets/img/lube1.png"
import img2 from "../../assets/img/lube2.png"
import img3 from "../../assets/img/lube3.png"
import './lube.scss';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Lube = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { t, i18n } = useTranslation()

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='lube'>

            <div className="lube-overlay"></div>

            <div className="lube-bg-lines">

                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <div className="line line-4"></div>

            </div>

            <div className="light-trail"></div>

            <div className={`container lube-container ${isVisible ? 'visible' : ''}`}>
                
                <div className="lube-header">

                    <h3 className='lube-subtitle'>{t("Advanced")}</h3>

                    <p className="lube-description">
                        {t("develops")}
                    </p>

                </div>

                <div className="lube-imgs">

                    <NavLink to={"/singleProduct/5"}>
                        <img src={img1} alt="img-green" className="lube-imgs-img" />
                    </NavLink>

                    <NavLink to={"/singleProduct/13"}>
                        <img src={img2} alt="img-blue" className="lube-imgs-img lube-imgs-blue" />
                    </NavLink>

                    <NavLink to={"/singleProduct/11"}>
                        <img src={img3} alt="img-red" className="lube-imgs-img lube-imgs-red" />
                    </NavLink>

                </div>

                <div className="lube-benefits">

                    <div className="benefits-grid">

                        <div className="benefit-card benefit-1">
                            
                            <div className="benefit-content">
                                <p className="benefit-text">
                                    <span className="benefit-main">{t("Thermal")}</span>
                                    <span className="benefit-sub">{t("Control")}</span>
                                </p>
                            </div>

                        </div>

                        <div className="benefit-card benefit-2">

                            <div className="benefit-content">
                                <p className="benefit-text">
                                    <span className="benefit-main">{t("Cooling")}</span>
                                    <span className="benefit-sub">{t("Efficiency")}</span>
                                </p>
                            </div>

                        </div>

                        <div className="benefit-card benefit-3">

                            <div className="benefit-content">
                                <p className="benefit-text">
                                    <span className="benefit-main">{t("Temperature")}</span>
                                    <span className="benefit-sub">{t("Stability")}</span>
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Lube;