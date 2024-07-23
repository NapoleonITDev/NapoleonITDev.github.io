import React from 'react';
import profileImg from '../../asserts/profile.png';
import shapeOne from '../../asserts/shape-1.png';
import shapeTwo from '../../asserts/shape-2.png';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './home.css';
import { useTranslation, Trans } from 'react-i18next';


export const Home = () => {
    const [t] = useTranslation();

    return (
        <section className='home' id='home'>
            <div className='home__wrapper'>
                <div className='home__container container'>
                    <p className='home__subtitle text-cs'>
                        <Trans i18nKey="home.subtitle" components={{ s: <span /> }} />
                    </p>
                    <h1 className='home__title text-cs'>
                        <span>Napoleon</span> IT Dev
                    </h1>
                    <div className='home__img-wrapper'>
                        <motion.img
                            src={shapeOne}
                            alt=''
                            className='shape shape__1'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        />
                        <motion.img
                            src={shapeTwo}
                            alt=''
                            className='shape shape__2'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7, duration: 1 }}
                        />
                        <motion.img
                            src={shapeTwo}
                            alt=''
                            className='shape shape__3'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9, duration: 1 }}
                        />

                        <motion.div
                            className='home__banner'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 1 }}
                        >
                            <img src={profileImg} alt='' className='home__profile' />
                        </motion.div>

                        <motion.p
                            className='home__data home__data-one'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 1 }}
                        >
                            <span className='text-lg'>
                                8 <b>+</b>
                            </span>
                            <span className='text-sm text-cs'>
                                <Trans i18nKey="home.data.one" components={{ s: <span /> }} />
                            </span>
                        </motion.p>
                        <motion.p
                            className='home__data home__data-two'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.7, duration: 1 }}
                        >
                            <span className='text-lg'>
                                50 <b>+</b>
                            </span>
                            <span className='text-sm text-cs'>
                                <Trans i18nKey="home.data.two" components={{ s: <span /> }} />
                            </span>
                        </motion.p>
                        <motion.p
                            className='home__data home__data-three'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.9, duration: 1 }}
                        >
                            <span className='text-lg'>
                                30 <b>+</b>
                            </span>
                            <span className='text-sm text-cs'>
                                <Trans i18nKey="home.data.three" components={{ s: <span /> }} />
                            </span>
                        </motion.p>
                    </div>
                    <ul className='home__text'>
                        <li>
                            <Trans i18nKey="home.text.1" components={{ b: <b /> }} />
                        </li>
                        <li>
                            <Trans i18nKey="home.text.2" components={{ b: <b /> }} />
                        </li>
                        <li>
                            <Trans i18nKey="home.text.3" components={{ b: <b /> }} />
                        </li>
                        <li>
                            {t('home.text.4')}
                        </li>
                    </ul>
                    <div className='home__socials'>
                        <a href='https://www.facebook.com/napoleon.it.dev/' className='home__social-link'>
                            <FaFacebook />
                        </a>
                        <a href='https://t.me/nikit34' className='home__social-link'>
                            <FaTelegram />
                        </a>
                    </div>
                </div>
                <div className='section__deco deco__left'>
                    <img src={shapeOne} alt='' className='shape' />
                </div>
            </div>
            <div className="section__bg-wrapper">
                <span className="bg__title">{t('home.bg_title')}</span>
            </div>
        </section>
    );
};

export default Home;
