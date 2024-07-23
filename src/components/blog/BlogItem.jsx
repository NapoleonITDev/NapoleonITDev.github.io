import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BlogItem = ({ date, title, description, link, image }) => {
    return (
        <div className="blog__item card card-two">
            <span className="blog__date text-cs">{date}</span>
            <h3 className="blog__title">{title}</h3>
            <p className="blog__description">{description}</p>
            <a href={link} className="link">
                Read More
                <FaArrowRight className="link__icon" />
            </a>
            <img src={image} alt="" className="blog__img" />
        </div>
    );
};

export default BlogItem;
