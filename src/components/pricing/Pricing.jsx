import React from 'react';
import shapeOne from '../../asserts/shape-1.png';
import { useTranslation, Trans } from 'react-i18next';
import PricingCard from './PricingCard';
import { pricingData } from '../../Data';
import './pricing.css';

const Pricing = () => {
    const [t] = useTranslation();

    return (
        <section className="pricing section" id="pricing">
            <h2 className="section__title text-cs">{t('pricing.title')}</h2>
            <p className="section__subtitle">
                <Trans i18nKey='pricing.subtitle' components={{ s: <span /> }} />
            </p>
            <div className='pricing__container container grid'>
                {pricingData.map((item) => (
                    <div key={item.id} className={item.id === 2 ? "pricing__item-wrapper" : ""}>
                        {item.id === 2 && <span className='pricing__label text-cs'>{t('pricing.label')}</span>}
                        <PricingCard
                            title={item.title}
                            subtitle={item.subtitle}
                            price={item.price}
                            priceDetails={item.details}
                            buttonLabel={t('pricing.btn')}
                        />
                    </div>
                ))}
                <div className='section__deco deco__left'>
                    <img src={shapeOne} alt='' className='shape' />
                </div>
            </div>
            <div className="section__bg-wrapper">
                <span className="bg__title">{t('pricing.bg_title')}</span>
            </div>
        </section>
    );
}

export default Pricing;
