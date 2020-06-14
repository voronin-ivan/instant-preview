import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en } from './en';
import { ru } from './ru';
import { LANG } from '../../models/lang';

export const initI18n = (lng: LANG) => i18next
    .use(initReactI18next)
    .init({
        fallbackLng: LANG.EN,
        lng,
        resources: { en, ru },
    });
