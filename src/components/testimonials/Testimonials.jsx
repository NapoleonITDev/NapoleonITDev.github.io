import React from 'react';
import { testimonials } from '../../Data';
import Card from './Card';
import shapeOne from '../../asserts/shape-1.png';
import './testimonials.css';
import { useTranslation, Trans } from 'react-i18next';


const Testimonials = () => {
    const [t] = useTranslation();

    return (
        <section className="testimonials section" id="testimonials">
            <h2 className="section__title text-cs">{t('testimonials.title')}</h2>
            <p className="section__subtitle">
                <Trans i18nKey='testimonials.subtitle' components={{ s: <span /> }} />
            </p>
            <div className="testimonials__container container grid">
                {testimonials.map((val, index) => {
                    return <Card
                        key={index}
                        name={val.name}
                        author={val.author}
                        date={val.date}
                        description={val.description}
                    />;
                })}
            </div>
            <div className="section__deco deco__right">
                <img src={shapeOne} alt="" className="shape" />
            </div>
            <div className="section__bg-wrapper">
                <span className="bg__title">{t('testimonials.bg_title')}</span>
            </div>
        </section>
    )
}

export default Testimonials;
