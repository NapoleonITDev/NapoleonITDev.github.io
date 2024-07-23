import React from "react";
import { services } from '../../Data';
import {FaArrowRight} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import shapeOne from '../../asserts/shape-1.png';
import shapeTwo from '../../asserts/shape-2.png';
import './services.css';
import { useTranslation, Trans } from 'react-i18next';


const Services = () => {
    const [ t ] = useTranslation();

    return (
        <section className="services section" id="services">
            <h2 className="section__title text-cs">{t('services.title')}</h2>
            <p className="section__subtitle">
                <Trans i18nKey="services.subtitle" components={{s: <span />}} />
            </p>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    540: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]}
                className="services__container container mySwiper">
                {services.map(({name, title, description}, index) => {
                    return (
                        <SwiperSlide className="services__item card card-one" key={index}>
                            <span className="services__subtitle text-cs">{name}</span>
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                            <a href="#pricing" className="link">
                                {t('services.pricing')}
                                <FaArrowRight className="link__icon"></FaArrowRight>
                            </a>
                            <img src={shapeTwo} alt="" className="shape c__shape" />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className='section__deco deco__right'>
                <img src={shapeOne} alt='' className='shape'/>
            </div>
            <div className="section__bg-wrapper">
                <span className="bg__title">{t('services.bg_title')}</span>
            </div>
        </section>
    );
};

export default Services;
