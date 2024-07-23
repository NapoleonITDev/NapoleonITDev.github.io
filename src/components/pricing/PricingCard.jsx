import React from 'react';
import { FaCog } from 'react-icons/fa';
import './pricing.css';
import { FaArrowRight } from 'react-icons/fa';


const PricingListItem = ({ children }) => (
    <li className="list__item">
        <FaCog className='list__icon' />
        <span>{children}</span>
    </li>
);

const PricingCard = ({ title, subtitle, price, priceDetails, buttonLabel }) => (
    <div className="pricing__item card card-one">
        <span className='pricing__subtitle text-cs'>{subtitle}</span>
        <span className='pricing__title text-cs'>{title}</span>
        <h3 className="pricing__price">
            {price} <span>&euro;</span>
        </h3>
        <p>Functionality is negotiable, for example:</p>
        <ul className="pricing__list">
            {priceDetails.map((detail, index) => (
                <PricingListItem key={index}>{detail}</PricingListItem>
            ))}
        </ul>
        <a href="#contact" className="btn pricing__btn text-cs">
            {buttonLabel}
            <FaArrowRight className="pricing__btn-icon" />
        </a>
    </div>
);

export default PricingCard;
