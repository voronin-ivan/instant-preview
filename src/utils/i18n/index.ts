import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './en';
import { ru } from './ru';
import { LANG } from '../../models/lang';

i18next
    .use(initReactI18next)
    .init({
        fallbackLng: LANG.EN,
        lng: window.__INIT__.lang,
        resources: { en, ru },
    });

export default i18next;
