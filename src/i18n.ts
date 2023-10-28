import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import localeEn from './locales/en.json';
import localeHu from './locales/hu.json';
// import localeEs from './locales/es.json';
// import localeKo from './locales/ko.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {translation: localeEn},
            hu: {translation: localeHu},
            // es: {translation: localeEs},
            // ko: {translation: localeKo},
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })
    .then(() => console.info('I18N initialized.'));

export default i18n;
