import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BlogItem = ({ date, title, description, link, image }) => {
    return (
        <a href={link} className="link">
            <div className="blog__item">
                <span className="blog__date text-cs">{date}</span>
                <h3 className="blog__title">{title}</h3>
                <p className="blog__description">{description}</p>
                <div className='blog__img-wrapper'>
                    <img src={image} alt="" className="blog__img" />
                </div>
            </div>
        </a>
    );
};

export default BlogItem;
