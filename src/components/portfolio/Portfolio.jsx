import React, { useState } from "react";
import List from "./List";
import Items from "./Items";
import { projects } from "../../Data";
import "./portfolio.css";
import { AnimatePresence } from "framer-motion";
import shapeOne from "../../asserts/shape-1.png";
import { useTranslation, Trans } from "react-i18next";

const allNavList = [
    "all",
    ...new Set(projects.map((project) => project.category)),
];

const Portfolio = () => {
    const [ t ] = useTranslation();

    const [projectItems, setMenuItems] = useState(projects);
    const [ navList ] = useState(allNavList);
    const filterItems = (category) => {
        if (category === "all") {
            setMenuItems(projects);
            return;
        }
        const newProjectItems = projects.filter(
            (item) => item.category === category
        );
        setMenuItems(newProjectItems);
    };

    return (
        <section className="portfolio section" id="work">
            <h2 className="section__title text-cs">{t('portfolio.title')}</h2>
            <p className="section__subtitle">
                <Trans i18nKey='portfolio.subtitle' components={{s: <span />}} />
            </p>
            <List list={navList} filterItems={filterItems} />
            <div className="portfolio__container container grid">
                <AnimatePresence initial={false}>
                    <Items projectItems={projectItems} />
                </AnimatePresence>
            </div>
            <div className="section__deco deco__left">
                <img src={shapeOne} alt="" className="shape" />
            </div>
            <div className="section__bg-wrapper">
                <span className="bg__title">{t('portfolio.bg_title')}</span>
            </div>
        </section>
    );
};

export default Portfolio;
