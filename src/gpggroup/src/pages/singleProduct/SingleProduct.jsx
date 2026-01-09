// import React, { useEffect, useState } from 'react'
// import "./singleProduct.scss"
// import { useNavigate, useParams } from 'react-router-dom'
// import { useGetProductByIdQuery, useGetProductsQuery } from '../../context/api/productApi'
// import SingleLoading from '../../companents/singleLoading/SingleLoading'
// import { FaArrowLeft } from 'react-icons/fa'
// import { useTranslation } from 'react-i18next'

// const SingleProduct = () => {
//     const { id } = useParams()
//     const { data, isLoading } = useGetProductByIdQuery(id)
//     const [imageLoading, setImageLoading] = useState({})
//     const [selectedImage, setSelectedImage] = useState(0)
//     const { data: productData } = useGetProductsQuery()
//     const { t, i18n } = useTranslation()
//     console.log(data);

//     const navigate = useNavigate()

//     const selectData = productData?.filter(product =>
//         product?.brand?.id === data?.brand?.id &&
//         product?.id !== Number(id)
//     ) || []

//     useEffect(() => {
//         scrollTo(0, 0)
//     }, [])

//     useEffect(() => {
//         if (data?.images) {
//             const loadingState = {}
//             data.images.forEach((_, index) => {
//                 loadingState[index] = true
//             })
//             setImageLoading(loadingState)
//         }
//     }, [data])

//     const handleImageLoad = (index) => {
//         setImageLoading(prev => ({
//             ...prev,
//             [index]: false
//         }))
//     }

//     const handleImageClick = (index) => {
//         setSelectedImage(index)
//     }

//     const Spinner = () => (
//         <div style={{
//             width: '40px',
//             height: '40px',
//             border: '4px solid #f3f3f3',
//             borderTop: '4px solid #3498db',
//             borderRadius: '50%',
//             animation: 'spin 1s linear infinite'
//         }} />
//     )

//     return (
//         <>
//             <style>
//                 {`
//                     @keyframes spin {
//                         0% { transform: rotate(0deg); }
//                         100% { transform: rotate(360deg); }
//                     }
//                 `}
//             </style>

//             <div className='singleProduct'>
//                 <div className="singleProduct-bg">
//                     <h2 onClick={() => navigate(-1)} className='singleProduct-bg-text container'>
//                         <FaArrowLeft />{
//                             i18n?.language === "ru" ?
//                                 data?.brand?.category?.nameRu
//                                 :
//                                 data?.brand?.category?.nameEn
//                         }
//                     </h2>
//                 </div>

//                 <div className="container">
//                     {
//                         isLoading ?
//                             <SingleLoading />
//                             :
//                             <div className="singleProduct-top">
//                                 <div className="singleProduct-top-left">
//                                     <div className="singleProduct-top-left-big" style={{
//                                         position: 'relative',
//                                         minHeight: '400px',
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         justifyContent: 'center'
//                                     }}>

//                                         {imageLoading[selectedImage] && (
//                                             <div style={{
//                                                 position: 'absolute',
//                                                 top: '50%',
//                                                 left: '50%',
//                                                 transform: 'translate(-50%, -50%)',
//                                                 zIndex: 10
//                                             }}>
//                                                 <Spinner />
//                                             </div>
//                                         )}

//                                         <img
//                                             src={data?.images[selectedImage]}
//                                             alt="big-img"
//                                             onLoad={() => handleImageLoad(selectedImage)}
//                                             style={{
//                                                 opacity: imageLoading[selectedImage] ? 0 : 1,
//                                                 transition: 'opacity 0.3s ease-in-out'
//                                             }}
//                                         />
//                                     </div>

//                                     <div className="singleProduct-top-left-small">
//                                         {
//                                             data?.images?.map((el, inx) => (
//                                                 <div
//                                                     key={inx}
//                                                     className={`singleProduct-small-image ${selectedImage === inx ? 'active' : ''}`}
//                                                     style={{
//                                                         position: 'relative',
//                                                         minHeight: '80px',
//                                                         display: 'flex',
//                                                         alignItems: 'center',
//                                                         justifyContent: 'center',
//                                                         cursor: 'pointer'
//                                                     }}
//                                                     onClick={() => handleImageClick(inx)}
//                                                 >

//                                                     {imageLoading[inx] && (
//                                                         <div style={{
//                                                             position: 'absolute',
//                                                             top: '50%',
//                                                             left: '50%',
//                                                             transform: 'translate(-50%, -50%)',
//                                                             zIndex: 10
//                                                         }}>
//                                                             <div style={{
//                                                                 width: '20px',
//                                                                 height: '20px',
//                                                                 border: '3px solid #f3f3f3',
//                                                                 borderTop: '3px solid #3498db',
//                                                                 borderRadius: '50%',
//                                                                 animation: 'spin 1s linear infinite'
//                                                             }} />
//                                                         </div>
//                                                     )}

//                                                     <img
//                                                         src={el}
//                                                         alt="small-img-one"
//                                                         onLoad={() => handleImageLoad(inx)}
//                                                         style={{
//                                                             opacity: imageLoading[inx] ? 0 : 1,
//                                                             transition: 'opacity 0.3s ease-in-out'
//                                                         }}
//                                                     />
//                                                 </div>
//                                             ))
//                                         }
//                                     </div>
//                                 </div>

//                                 <div className="singleProduct-top-right">
//                                     <h4 className='singleProduct-top-right-title'>{data?.nameRu}</h4>
//                                     <p className="singleProduct-top-right-text">{
//                                         i18n?.language === "ru"
//                                             ?
//                                             data?.descriptionRu
//                                             :
//                                             data?.descriptionEn
//                                     }</p>

//                                     {

//                                         data?.specification
//                                             ?
//                                             <div className="singleProduct-top-right-spacy">
//                                                 <h2 className="singleProduct-top-right-spacy-title">Спецификации:</h2>
//                                                 <div className="singleProduct-top-right-spacy-info">
//                                                     {
//                                                         data?.specification?.map((el, index) => (
//                                                             <p key={index} className="singleProduct-top-right-spacy-info-text">{el}</p>
//                                                         ))
//                                                     }
//                                                 </div>
//                                             </div>
//                                             :
//                                             <></>

//                                     }

//                                 </div>
//                             </div>
//                     }

//                     {
//                         data?.sae
//                             ?
//                             <>
//                                 {
//                                     data?.brand?.category?.nameRu === "Моторные масла для легковой и легкой коммерческой техники" || data?.brand?.category?.nameEn === "Motor oils for passenger cars and light commercial vehicles"
//                                         ?
//                                         <div className="single-table">
//                                             <div className="single-table-top">
//                                                 <h2 className='single-table-top-title'>{t("Характеристики")}</h2>
//                                             </div>

//                                             <h3 className="single-table-title">{t("Основные")}</h3>

//                                             <div className="single-table-wrapper">
//                                                 <table className='single-table-item'>

//                                                     <thead className='single-table-item-thead'>
//                                                         <tr className='single-table-item-tr'>
//                                                             <th className='single-table-item-th'>{("индикатора")}</th>
//                                                             <th className='single-table-item-th'>{t("Значение")}</th>
//                                                             <th className='single-table-item-th'>{t("Метод испытания")}</th>
//                                                         </tr>
//                                                     </thead>

//                                                     <tbody className='single-table-item-tbody'>
//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>SAE viscosity grade</td>
//                                                             {
//                                                                 data?.sae?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Density at 20°C, g/cm3</td>
//                                                             {
//                                                                 data?.density?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Kinematic viscosity at 40 °C, mm2/s</td>
//                                                             {
//                                                                 data?.kinematic_one?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Kinematic viscosity at 100 °C, mm2/s</td>
//                                                             {
//                                                                 data?.kinematic_two?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Viscosity index</td>
//                                                             {
//                                                                 data?.viscosityIndex?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Flash point in open crucible °C</td>
//                                                             {
//                                                                 data?.flash?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Solidification temperature, °C</td>
//                                                             {
//                                                                 data?.temperature?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Base number, mg KOH/g</td>
//                                                             {
//                                                                 data?.base?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>
//                                                     </tbody>
//                                                 </table>
//                                             </div>
//                                         </div>
//                                         :
//                                         <></>

//                                 }
//                             </>
//                             :
//                             <></>
//                     }



//                     {
//                         data?.sae
//                             ?
//                             <>
//                                 {
//                                     data?.brand?.category?.nameRu === "Моторные масла для дизельных двигателей" || data?.brand?.category?.nameEn === "Motor oils for diesel engines"
//                                         ?
//                                         <div className="single-table">
//                                             <div className="single-table-top">
//                                                 <h2 className='single-table-top-title'>{t("Характеристики")}</h2>
//                                             </div>

//                                             <h3 className="single-table-title">{t("Основные")}</h3>

//                                             <div className="single-table-wrapper">
//                                                 <table className='single-table-item'>

//                                                     <thead className='single-table-item-thead'>
//                                                         <tr className='single-table-item-tr'>
//                                                             <th className='single-table-item-th'>{("индикатора")}</th>
//                                                             <th className='single-table-item-th'>{t("Значение")}</th>
//                                                             <th className='single-table-item-th'>{t("Метод испытания")}</th>
//                                                         </tr>
//                                                     </thead>

//                                                     <tbody className='single-table-item-tbody'>
//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>SAE viscosity grade</td>
//                                                             {
//                                                                 data?.sae?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Density at 20°C, g/cm3</td>
//                                                             {
//                                                                 data?.density?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Kinematic viscosity at 40 °C, mm2/s</td>
//                                                             {
//                                                                 data?.kinematic_one?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Kinematic viscosity at 100 °C, mm2/s</td>
//                                                             {
//                                                                 data?.kinematic_two?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Viscosity index</td>
//                                                             {
//                                                                 data?.viscosityIndex?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Flash point in open crucible °C</td>
//                                                             {
//                                                                 data?.flash?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Solidification temperature, °C</td>
//                                                             {
//                                                                 data?.temperature?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Base number, mg KOH/g</td>
//                                                             {
//                                                                 data?.base?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>
//                                                     </tbody>
//                                                 </table>
//                                             </div>
//                                         </div>
//                                         :
//                                         <></>

//                                 }
//                             </>
//                             :
//                             <></>
//                     }


//                     {
//                         data?.sae
//                             ?
//                             <>
//                                 {
//                                     data?.brand?.category?.nameRu === "Трансмиссионные масла" || data?.brand?.category?.nameEn === "Transmission oils"
//                                         ?
//                                         <div className="single-table">
//                                             <div className="single-table-top">
//                                                 <h2 className='single-table-top-title'>{t("Характеристики")}</h2>
//                                             </div>

//                                             <h3 className="single-table-title">{t("Основные")}</h3>

//                                             <div className="single-table-wrapper">
//                                                 <table className='single-table-item'>

//                                                     <thead className='single-table-item-thead'>
//                                                         <tr className='single-table-item-tr'>
//                                                             <th className='single-table-item-th'>{("индикатора")}</th>
//                                                             <th className='single-table-item-th'>{t("Значение")}</th>
//                                                             <th className='single-table-item-th'>{t("Метод испытания")}</th>
//                                                         </tr>
//                                                     </thead>

//                                                     <tbody className='single-table-item-tbody'>
//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>SAE viscosity grade</td>
//                                                             {
//                                                                 data?.sae?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Density at 20°C, g/cm3</td>
//                                                             {
//                                                                 data?.density?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Kinematic viscosity at 40 °C, mm2/s</td>
//                                                             {
//                                                                 data?.kinematic_one?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Kinematic viscosity at 100 °C, mm2/s</td>
//                                                             {
//                                                                 data?.kinematic_two?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Viscosity index</td>
//                                                             {
//                                                                 data?.viscosityIndex?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Flash point in open crucible °C</td>
//                                                             {
//                                                                 data?.flash?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         <tr className='single-table-item-tbody-tr'>
//                                                             <td className='single-table-item-tbody-td'>Solidification temperature, °C</td>
//                                                             {
//                                                                 data?.temperature?.map((el, index) => (
//                                                                     <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                                 ))
//                                                             }
//                                                         </tr>

//                                                         {/* <tr className='single-table-item-tbody-tr'>
//                                                 <td className='single-table-item-tbody-td'>Base number, mg KOH/g</td>
//                                                 {
//                                                     data?.base?.map((el, index) => (
//                                                         <td key={index} className='single-table-item-tbody-td'>{el}</td>
//                                                     ))
//                                                 }
//                                             </tr> */}
//                                                     </tbody>
//                                                 </table>
//                                             </div>
//                                         </div>
//                                         :
//                                         <></>

//                                 }
//                             </>
//                             :
//                             <></>

//                     }




//                     <div className="single-bottom">
//                         <h3 className="single-bottom-title">Recommendations</h3>
//                         {selectData.length > 0 && (
//                             <div className="single-cards">
//                                 {
//                                     selectData?.map((el) => (
//                                         <div key={el.id} className="single-card" onClick={() => navigate(`/singleProduct/${el.id}`)}>

//                                             <div className="single-card-img">
//                                                 <img src={el.images[1] ? el.images[1] : el.images[0]} alt={el.nameRu} />
//                                             </div>

//                                             <div className="single-card-info">
//                                                 <h2 className="single-card-info-title">{el.nameRu}</h2>
//                                             </div>

//                                         </div>
//                                     ))
//                                 }
//                             </div>
//                         )}
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default SingleProduct


import React, { useEffect, useState } from 'react'
import "./singleProduct.scss"
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductByIdQuery, useGetProductsQuery } from '../../context/api/productApi'
import SingleLoading from '../../companents/singleLoading/SingleLoading'
import { FaArrowLeft } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const SingleProduct = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetProductByIdQuery(id)
    const [imageLoading, setImageLoading] = useState({})
    const [selectedImage, setSelectedImage] = useState(0)
    const { data: productData } = useGetProductsQuery()
    const { t, i18n } = useTranslation()
    const navigate = useNavigate()

    const selectData = productData?.filter(product =>
        product?.brand?.id === data?.brand?.id &&
        product?.id !== Number(id)
    ) || []

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [id])

    useEffect(() => {
        setSelectedImage(0)
    }, [id])

    useEffect(() => {
        if (data?.images) {
            const loadingState = {}
            data.images.forEach((_, index) => {
                loadingState[index] = true
            })
            setImageLoading(loadingState)
        }
    }, [data])

    const handleImageLoad = (index) => {
        setImageLoading(prev => ({
            ...prev,
            [index]: false
        }))
    }

    const handleImageClick = (index) => {
        setSelectedImage(index)
    }

    const handleProductClick = (productId) => {
        navigate(`/singleProduct/${productId}`)
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const Spinner = () => (
        <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
        }} />
    )

    const renderTable = () => {
        const categoryNameRu = data?.brand?.category?.nameRu
        const categoryNameEn = data?.brand?.category?.nameEn

        const isMotorOil = categoryNameRu === "Моторные масла для легковой и легкой коммерческой техники" ||
            categoryNameEn === "Motor oils for passenger cars and light commercial vehicles"

        const isDieselOil = categoryNameRu === "Моторные масла для дизельных двигателей" ||
            categoryNameEn === "Motor oils for diesel engines"

        const isTransmissionOil = categoryNameRu === "Трансмиссионные масла" ||
            categoryNameEn === "Transmission oils"

        if (data?.id === 61 || !data?.sae || (!isMotorOil && !isDieselOil && !isTransmissionOil)) {
            return null
        }

        const showBaseNumber = isMotorOil || isDieselOil

        return (
            <div className="single-table">
                <div className="single-table-top">
                    <h2 className='single-table-top-title'>{t("Характеристики")}</h2>
                </div>

                <h3 className="single-table-title">{t("Основные")}</h3>

                <div className="single-table-wrapper">
                    <table className='single-table-item'>
                        <thead className='single-table-item-thead'>
                            <tr className='single-table-item-tr'>
                                <th className='single-table-item-th'>{t("индикатора")}</th>
                                <th className='single-table-item-th'>{t("Значение")}</th>
                                <th className='single-table-item-th'>{t("Метод испытания")}</th>
                            </tr>
                        </thead>

                        <tbody className='single-table-item-tbody'>
                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>{t("sae")}</td>
                                {data?.sae?.map((el, index) => (
                                    <td key={index} className='single-table-item-tbody-td'>{el}</td>
                                ))}
                            </tr>

                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>{t("Density")}</td>
                                {data?.density?.map((el, index) => (
                                    <td key={index} className='single-table-item-tbody-td'>{el}</td>
                                ))}
                            </tr>

                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>{t("viscosity")}</td>
                                {data?.kinematic_one?.map((el, index) => (
                                    <td key={index} className='single-table-item-tbody-td'>{el}</td>
                                ))}
                            </tr>

                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>{t("Kinematic")}</td>
                                {data?.kinematic_two?.map((el, index) => (
                                    <td key={index} className='single-table-item-tbody-td'>{el}</td>
                                ))}
                            </tr>

                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>{t("index")}</td>
                                {data?.viscosityIndex?.map((el, index) => (
                                    <td key={index} className='single-table-item-tbody-td'>{el}</td>
                                ))}
                            </tr>

                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>{t("Flash")}</td>
                                {data?.flash?.map((el, index) => (
                                    <td key={index} className='single-table-item-tbody-td'>{el}</td>
                                ))}
                            </tr>

                            <tr className='single-table-item-tbody-tr'>
                                <td className='single-table-item-tbody-td'>{t("Solidification")}</td>
                                {data?.temperature?.map((el, index) => (
                                    <td key={index} className='single-table-item-tbody-td'>{el}</td>
                                ))}
                            </tr>

                            {showBaseNumber && (
                                <tr className='single-table-item-tbody-tr'>
                                    <td className='single-table-item-tbody-td'>{t("Base")}</td>
                                    {data?.base?.map((el, index) => (
                                        <td key={index} className='single-table-item-tbody-td'>{el}</td>
                                    ))}
                                </tr>
                            )}

                        </tbody>

                    </table>
                </div>
            </div>
        )
    }

    return (
        <>
            <style>
                {`
                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                `}
            </style>

            <div className='singleProduct'>

                <div className="singleProduct-bg">

                    <h2 onClick={() => navigate(-1)} className='singleProduct-bg-text container'>
                        <FaArrowLeft />{
                            i18n?.language === "ru" ?
                                data?.brand?.category?.nameRu
                                :
                                data?.brand?.category?.nameEn
                        }
                    </h2>

                </div>

                <div className="container">
                    {isLoading ? (
                        <SingleLoading />
                    ) : (
                        <div className="singleProduct-top">
                            <div className="singleProduct-top-left">
                                <div className="singleProduct-top-left-big" style={{
                                    position: 'relative',
                                    minHeight: '400px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {imageLoading[selectedImage] && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            zIndex: 10
                                        }}>
                                            <Spinner />
                                        </div>
                                    )}

                                    <img
                                        src={data?.images[selectedImage]}
                                        alt="big-img"
                                        onLoad={() => handleImageLoad(selectedImage)}
                                        style={{
                                            opacity: imageLoading[selectedImage] ? 0 : 1,
                                            transition: 'opacity 0.3s ease-in-out'
                                        }}
                                    />
                                </div>

                                <div className="singleProduct-top-left-small">
                                    {data?.images?.map((el, inx) => (
                                        <div
                                            key={inx}
                                            className={`singleProduct-small-image ${selectedImage === inx ? 'active' : ''}`}
                                            style={{
                                                position: 'relative',
                                                minHeight: '80px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer'
                                            }}
                                            onClick={() => handleImageClick(inx)}
                                        >
                                            {imageLoading[inx] && (
                                                <div style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    zIndex: 10,
                                                }}>
                                                    <div style={{
                                                        width: '20px',
                                                        height: '20px',
                                                        border: '3px solid #f3f3f3',
                                                        borderTop: '3px solid #3498db',
                                                        borderRadius: '50%',
                                                        animation: 'spin 1s linear infinite',
                                                    }} />
                                                </div>
                                            )}

                                            <img
                                                src={el}
                                                alt={`small-img-${inx}`}
                                                onLoad={() => handleImageLoad(inx)}
                                                style={{
                                                    opacity: imageLoading[inx] ? 0 : 1,
                                                    transition: 'opacity 0.3s ease-in-out'
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="singleProduct-top-right">

                                <h4 className='singleProduct-top-right-title'>{data?.nameRu}</h4>

                                <p className="singleProduct-top-right-text">
                                    {i18n?.language === "ru" ? data?.descriptionRu : data?.descriptionEn}
                                </p>

                                {data?.specification && (

                                    <div className="singleProduct-top-right-spacy">

                                        <h2 className="singleProduct-top-right-spacy-title">{t("Спецификации")}</h2>

                                        <div className="singleProduct-top-right-spacy-info">
                                            {data?.specification?.map((el, index) => (
                                                <p key={index} className="singleProduct-top-right-spacy-info-text">{el}</p>
                                            ))}
                                        </div>

                                    </div>

                                )}

                            </div>

                        </div>
                    )}

                    {renderTable()}

                    <div className="single-bottom">
                        <h3 className="single-bottom-title">{t("Recommendations")}</h3>

                        {selectData.length > 0 && (
                            <div className="single-cards">

                                {selectData?.map((el) => (
                                    <div
                                        key={el.id}
                                        className="single-card"
                                        onClick={() => handleProductClick(el.id)}>

                                        <div className="single-card-img">
                                            <img
                                                src={el.images[1] || el.images[0]}
                                                alt={el.nameRu}
                                            />
                                        </div>

                                        <div className="single-card-info">
                                            <h2 className="single-card-info-title">{el.nameRu}</h2>
                                        </div>

                                    </div>
                                ))}

                            </div>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct