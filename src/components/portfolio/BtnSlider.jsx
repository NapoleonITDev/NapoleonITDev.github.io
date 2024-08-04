import React from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const BtnSlider = ({ moveSlide, direction }) => {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
        >
            {direction === "next" ? <FaArrowRight /> : <FaArrowLeft />}
        </button>
    );
};

export default BtnSlider;
