import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const BtnSlider = ({ moveSlide, direction }) => {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "slider__side-btn next" : "slider__side-btn prev"}
        >
            {direction === "next" ? <FaArrowRight /> : <FaArrowLeft />}
        </button>
    );
};

export default BtnSlider;
