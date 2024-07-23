import React, { useState, useRef } from 'react';
import { FaRegAddressBook, FaRegEnvelope, FaRegMap, FaRegUser } from 'react-icons/fa';
import shapeOne from '../../asserts/shape-1.png';
import './contact.css';
import Snackbar from '../snackbar/Snackbar';
import { useTranslation, Trans } from 'react-i18next';


const Contact = () => {
    const [t] = useTranslation();

    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const [snackbarType, setSnackbarType] = useState("failed");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (form.name.trim().length > 0
            && form.email.trim().length > 0
            && form.subject.trim().length > 0
            && form.email.trim().includes("@", 1)
            && form.email.trim().includes(".", 2)
        ) {
            setSnackbarType("success");
            const datetime = (new Date()).toUTCString();

            fetch(
                'https://script.google.com/macros/s/AKfycbyPtJyU5gNNyu9PdVj4NIW7MbVJDIa-6WX3CKa3Gaw9PtUdDtMJSYVadDI4L3LdZLaTUA/exec?datatime='
                + datetime
                + '&name=' + form.name
                + '&email=' + form.email
                + '&subject=' + form.subject
                + '&message=' + form.message,
                {
                    method: 'GET',
                    mode: 'no-cors'
                }
            ).then(() => {
                setForm({ name: '', email: '', subject: '', message: '' });
            }).catch(
                (error) => console.log(error)
            );
        } else {
            setSnackbarType("failed");
        }
    };

    const snackbarRef = useRef(null);

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title text-cs">{t('contacts.title')}</h2>
            <p className="section__subtitle">
                <Trans i18nKey='contacts.subtitle' components={{ s: <span /> }} />
            </p>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap />
                        </span>
                        <h3 className="contact__card-title">{t('contacts.card.address')}</h3>
                        <p className="contact__card-data">Porto, Rua da Rasa 734</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegUser />
                        </span>
                        <h3 className="contact__card-title">CEO</h3>
                        <p className="contact__card-data">Nikita Permikov</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>
                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">permikov134@yandex.ru</p>
                    </div>
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook />
                        </span>
                        <h3 className="contact__card-title">{t('contacts.card.phone')}</h3>
                        <p className="contact__card-data">+351 964-302-699</p>
                    </div>
                </div>
                <form className="contact__form" onSubmit={handleSubmit}>
                    <div className="contact__form-group grid">
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">
                                <Trans i18nKey='contacts.contact.name' components={{ b: <b /> }} />
                            </label>
                            <input
                                type="text"
                                name="name"
                                onChange={handleChange}
                                value={form.name}
                                className="contact__form-input"
                            />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">
                                <Trans i18nKey='contacts.contact.email' components={{ b: <b /> }} />
                            </label>
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                value={form.email}
                                className="contact__form-input"
                            />
                        </div>
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">
                            <Trans i18nKey='contacts.contact.offer' components={{ b: <b /> }} />
                        </label>
                        <input
                            name="subject"
                            onChange={handleChange}
                            value={form.subject}
                            className='contact__form-input'
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag text-cs">
                            <Trans i18nKey='contacts.contact.message' components={{ b: <b /> }} />
                        </label>
                        <textarea
                            name="message"
                            onChange={handleChange}
                            value={form.message}
                            className='contact__form-input'
                        />
                    </div>
                    <div className="contact__submit">
                        <button
                            type="submit"
                            className="btn text-cs"
                            onClick={() => {
                                snackbarRef.current.show();
                            }}
                        >
                            {t('contacts.contact.send')}
                        </button>
                    </div>
                </form>
                <Snackbar
                    ref={snackbarRef}
                    message={snackbarType === "success" ? t('contacts.snackbar.send') : t('contacts.snackbar.failed')}
                    type={snackbarType}
                />
            </div>
            <div className='section__deco deco__left'>
                <img src={shapeOne} alt='' className='shape' />
            </div>
            <div className="section__bg-wrapper">
                <span className="bg__title">{t('contacts.bg_title')}</span>
            </div>
        </section>
    );
};

export default Contact;
