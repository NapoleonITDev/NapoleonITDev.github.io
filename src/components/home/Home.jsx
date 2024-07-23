import React from 'react';
import profileImg from '../../asserts/profile.png';
import shapeOne from '../../asserts/shape-1.png';
import shapeTwo from '../../asserts/shape-2.png';
import { FaFacebook, FaTelegram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import './home.css';

export const Home = () => {
    const { t } = useTranslation();

    const { ref: shapeOneRef, inView: shapeOneInView } = useInView({ triggerOnce: false });
    const { ref: shapeTwoRef, inView: shapeTwoInView } = useInView({ triggerOnce: false });
    const { ref: shapeThreeRef, inView: shapeThreeInView } = useInView({ triggerOnce: false });
    const { ref: bannerRef, inView: bannerInView } = useInView({ triggerOnce: false });
    const { ref: dataOneRef, inView: dataOneInView } = useInView({ triggerOnce: false });
    const { ref: dataTwoRef, inView: dataTwoInView } = useInView({ triggerOnce: false });
    const { ref: dataThreeRef, inView: dataThreeInView } = useInView({ triggerOnce: false });

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
                            ref={shapeOneRef}
                            src={shapeOne}
                            alt=''
                            className='shape shape__1'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={shapeOneInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0, duration: 1, ease: "easeOut" }}
                        />
                        <motion.img
                            ref={shapeTwoRef}
                            src={shapeTwo}
                            alt=''
                            className='shape shape__2'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={shapeTwoInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                        />
                        <motion.img
                            ref={shapeThreeRef}
                            src={shapeTwo}
                            alt=''
                            className='shape shape__3'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={shapeThreeInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                        />

                        <motion.div
                            ref={bannerRef}
                            className='home__banner'
                            initial={{ opacity: 0, y: 20 }}
                            animate={bannerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                        >
                            <img src={profileImg} alt='' className='home__profile' />
                        </motion.div>

                        <motion.p
                            ref={dataOneRef}
                            className='home__data home__data-one'
                            initial={{ opacity: 0, y: 20 }}
                            animate={dataOneInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                        >
                            <span className='text-lg'>
                                8 <b>+</b>
                            </span>
                            <span className='text-sm text-cs'>
                                <Trans i18nKey="home.data.one" components={{ s: <span /> }} />
                            </span>
                        </motion.p>
                        <motion.p
                            ref={dataTwoRef}
                            className='home__data home__data-two'
                            initial={{ opacity: 0, y: 20 }}
                            animate={dataTwoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
                        >
                            <span className='text-lg'>
                                50 <b>+</b>
                            </span>
                            <span className='text-sm text-cs'>
                                <Trans i18nKey="home.data.two" components={{ s: <span /> }} />
                            </span>
                        </motion.p>
                        <motion.p
                            ref={dataThreeRef}
                            className='home__data home__data-three'
                            initial={{ opacity: 0, y: 20 }}
                            animate={dataThreeInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 1.4, duration: 0.6, ease: "easeOut" }}
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
