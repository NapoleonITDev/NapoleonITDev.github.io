import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import translation_en from './translations/en.json';
import translation_de from './translations/de.json';
import translation_fr from './translations/fr.json';
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { BrowserRouter as Router } from 'react-router-dom';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'de', 'fr'],
    transSupportBasicHtmlNodes: true,
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
      en: translation_en,
      de: translation_de,
      fr: translation_fr
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Router basename="/">
        <App />
      </Router>
    </I18nextProvider>
  </React.StrictMode>
);
