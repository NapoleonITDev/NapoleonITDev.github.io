import { useRef, useState, useEffect } from 'react';
import { FaArrowRight, FaTimes } from 'react-icons/fa';
import shapeTwo from '../../asserts/shape-2.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Items = ({ projectItems }) => {
    const [t] = useTranslation();

    const dialogRef = useRef(null);
    const [activeImage, setActiveImages] = useState(null);

    useEffect(() => {
        if (!activeImage) return;
        dialogRef.current?.showModal();
        document.body.style.overflow = 'hidden';
        dialogRef.current?.addEventListener('close', closeDialog);
        return () => {
          dialogRef.current?.removeEventListener('close', closeDialog)
        }
    }, [activeImage]);

    function closeDialog() {
        dialogRef.current?.close();
        setActiveImages(null);
        document.body.style.overflow = '';
    }

    return (
        <>
            {projectItems.map((item) => {
                const { id, imgs, category, title, description } = item;
                return (
                    <motion.div
                        layout
                        animate={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0.8, scale: 0.6 }}
                        exit={{ opacity: 0.8, scale: 0.6 }}
                        transition={{ duration: 0.3 }}
                        className="portfolio__items card card-two"
                        key={id}
                    >
                        <div className="portfolio__img-wrapper" onClick={() => setActiveImages(imgs)}>
                            <img src={imgs.primary} alt="" className="portfolio__img" />
                        </div>
                        <span className="portfolio__category text-cs">{category}</span>
                        <h3 className="portfolio__title">{title}</h3>
                        <p className="portfolio__description">{description}</p>
                        <a href="#pricing" className="link">
                            {t('portfolio.items.pricing')}
                            <FaArrowRight className='link__icon' />
                        </a>
                        <img src={shapeTwo} alt="" className="shape c__shape" />
                    </motion.div>
                );
            })}
            <dialog ref={dialogRef}>
                {activeImage?.primary && (
                    <img src={activeImage.primary} alt="" />
                )}
                <button onClick={closeDialog} className="portfolio__img-close-btn">
                    <FaTimes />
                </button>
            </dialog>
        </>
    );
};

export default Items;
