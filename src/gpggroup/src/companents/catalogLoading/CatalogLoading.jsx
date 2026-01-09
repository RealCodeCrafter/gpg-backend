import React from "react";
import "./catalogLoading.scss";

const CatalogLoading = ({ count = 8 }) => {
    return (
        <div className="catalogLoading">
            <div className="catalogLoading__wrapper">
                {Array.from({ length: count }).map((_, index) => (
                    <div className="catalogLoading__item" key={index}>
                        <div className="catalogLoading__img bg__animation"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogLoading;
