import React from 'react';
import shapeOne from '../../asserts/shape-1.png';
import BlogItem from './BlogItem';
import { useTranslation, Trans } from 'react-i18next';
import './blog.css';
import { blogItems } from '../../Data';


const Blog = () => {
    const [t] = useTranslation();

    return (
        <section className="blog section" id="blog">
            <h2 className="section__title text-cs">{t('blog.title')}</h2>
            <p className="section__subtitle">
                <Trans i18nKey="blog.subtitle" components={{ s: <span /> }} />
            </p>
            <div className="blog__container container grid">
                {blogItems.map((item, index) => (
                    <BlogItem
                        key={index}
                        date={item.date}
                        title={item.title}
                        description={item.description}
                        link={item.link}
                        image={item.image}
                    />
                ))}
            </div>
            <div className='section__deco deco__right'>
                <img src={shapeOne} alt='' className='shape' />
            </div>
            <div className="section__bg-wrapper">
                <span className="bg__title">{t('blog.bg_title')}</span>
            </div>
        </section>
    );
};

export default Blog;
