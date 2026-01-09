import React, { useEffect, useState } from 'react'
import "./singleCatalog.scss"
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaFilter, FaImage } from 'react-icons/fa'
import { BRAND } from '../../static'
import { NavLink, useParams } from 'react-router-dom'
import { useGetCategoryByIdQuery } from '../../context/api/categoryApi'
import { useTranslation } from 'react-i18next'

const SingleCatalog = () => {
    const [data, setData] = useState()
    const [activeId, setActiveId] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [imageLoading, setImageLoading] = useState({})
    const itemsPerPage = 4
    const { id } = useParams()
    const { t, i18n } = useTranslation()

    const { data: brands } = useGetCategoryByIdQuery(id)
    console.log(brands);


    const handleBrandClick = (el) => {
        setData(el)
        setActiveId(el.id)
        setCurrentPage(1)
        setImageLoading({})
    }

    useEffect(() => {
        scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (currentProducts.length > 0) {
            const loadingState = {}
            currentProducts.forEach(product => {
                loadingState[product.id] = true
            })
            setImageLoading(loadingState)
        }
    }, [currentPage, data])

    const handleImageLoad = (productId) => {
        setImageLoading(prev => ({
            ...prev,
            [productId]: false
        }))
    }

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentProducts = data?.products?.slice(indexOfFirstItem, indexOfLastItem) || []
    const totalPages = Math.ceil((data?.products?.length || 0) / itemsPerPage)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        scrollTo(0, 0)
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

            <div className='singleCatalog'>
                <div className="singleCatalog-top">
                    <div className="singleCatalog-top-info container">
                        <NavLink to="/catalog-item">
                            <button className="singleCatalog-top-info-btn"><FaArrowLeft />{t("Категории")}</button>
                        </NavLink>
                        <p className="singleCatalog-top-info-title">{
                            i18n?.language === "ru"
                                ?
                                brands?.nameRu
                                :
                                brands?.nameEn
                        }</p>
                    </div>
                </div>

                <div className="singleCatalog-result container">
                    <div className="singleCatalog-result-left">
                        <h2 className="singleCatalog-result-left-title"><span>{t("Brend")}</span><FaFilter /></h2>
                        {
                            brands?.brands?.map(el => (
                                <ul key={el?.id} className='singleCatalog-result-left-item'>
                                    <li
                                        onClick={() => handleBrandClick(el)}
                                        className={`singleCatalog-result-left-list ${activeId === el.id ? 'active' : ''}`}
                                    >
                                        {el?.nameEn}<FaImage />
                                    </li>
                                </ul>
                            ))
                        }
                    </div>

                    <div className="singleCatalog-result-right">
                        <div className="singleCatalog-result-right-info">
                            <h2 className="singleCatalog-result-right-info-title">{t("ALL products")}</h2>
                            {
                                data
                                    ?
                                    ""
                                    :
                                    <p className='singleCatalog-result-right-info-text'>{t("товаров")}</p>
                            }
                        </div>

                        <div className="singleCatalog-result-right-cards" style={{ paddingTop: "20px" }}>
                            {
                                currentProducts?.map(el => (
                                    <div key={el?.id} className="singleCatalog-result-right-card">

                                        <NavLink to={`/singleProduct/${el?.id}`}>
                                            <div className="singleCatalog-result-right-card-imgs" style={{ position: 'relative', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {imageLoading[el?.id] && (
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
                                                    src={el?.images[1] ? el?.images[1] : el?.images[0]}
                                                    alt="singleCatalog-imgs"
                                                    onLoad={() => handleImageLoad(el?.id)}
                                                    style={{
                                                        opacity: imageLoading[el?.id] ? 0 : 1,
                                                        transition: 'opacity 0.3s ease-in-out'
                                                    }}
                                                />
                                            </div>
                                        </NavLink>

                                        <div className="singleCatalog-result-right-card-info">
                                            <span style={{ fontSize: "12px", lineHeight: "14px", color: "gray", textAlign: "center" }}>{
                                                i18n?.language === "ru"
                                                    ?
                                                    brands?.nameRu
                                                    :
                                                    brands?.nameEn
                                            }</span>
                                            <h3 className="singleCatalog-result-right-card-info-title">{el?.nameEn}</h3>
                                            <NavLink to={`/singleProduct/${el?.id}`}>
                                                <button className='singleCatalog-result-right-card-info-btn'>{t("Learn more")}</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {data && totalPages > 1 && (
                            <div className="singleCatalog-pagination">
                                <button
                                    className="singleCatalog-pagination-btn"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    <FaChevronLeft />
                                </button>

                                <div className="singleCatalog-pagination-numbers">
                                    {[...Array(totalPages)].map((_, index) => (
                                        <button
                                            key={index + 1}
                                            className={`singleCatalog-pagination-number ${currentPage === index + 1 ? 'active' : ''}`}
                                            onClick={() => handlePageChange(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    className="singleCatalog-pagination-btn"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    <FaChevronRight />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCatalog