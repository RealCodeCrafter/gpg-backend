import React from 'react'
import "./filter.scss"

const Filter = () => {
    return (
        <div className='filter'>
            <div className="filter-container container">
                <div className="filter-info">
                    <h2 className="filter-info-title">Not sure what suits your vehicle?
                        Find the right engine oil now</h2>
                    <p className="filter-info-text">Simply select your vehicle’s make, model, year, and engine, and we’ll recommend the perfect Shell oil for peak performance.</p>
                    <p className='filter-info-text'>Please note: selecting a letter will display all available vehicle options beginning with that letter in the dropdown menus.</p>
                </div>
                <div className="filter-form">
                    <select name="Select Make" id="">
                        <option value="Select Make">Select Make</option>
                    </select>
                    <select name="" id="">
                        <option value="Select Make">Select Model</option>
                    </select>
                    <select name="" id="">
                        <option value="Select Make">Select Year</option>
                    </select>
                    <select name="" id="">
                        <option value="Select Make">Select Vehicle Mileage</option>
                    </select>
                    <button className='filter-form-clear-btn'>Clear Filters</button>
                    <button className='filter-form-show-btn'>Show Compatible Oils</button>
                </div>
            </div>
        </div>
    )
}

export default Filter