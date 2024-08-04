import React, { useState } from "react";


const Card = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div className="testimonials__item">
            <div className="testimonials__header" onClick={() => setShowInfo(!showInfo)}>
                <h3 className="testimonials__title">{props.name}</h3>
                <span className="testimonials__icon">{showInfo ? '-' : '+'}</span>
            </div>
            <div className={`${showInfo ? 'show-content' : ''} testimonials__content`}>
                <p className="testimonials__description">{props.description}</p>
                <div className="testimonials__date-author">
                    <h3 className="testimonials__author">{props.author}</h3>
                    <span className="testimonials__date text-cs">{props.date}</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
