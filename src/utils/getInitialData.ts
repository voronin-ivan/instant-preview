import { IdbData, getData } from './idb';
import { logError } from './logger';
import { LANG } from '../models/lang';
import { PreviewModel } from '../models/preview';

const initialData: IdbData = {
    lang: LANG.EN,
    initialValues: {},
};

export const getInitialData = async () => {
    try {
        const lang = await getData<string>('lang') || initialData.lang;
        const initialValues = await getData<PreviewModel>('initialValues') || initialData.initialValues;

        return {
            lang: lang === 'eng' ? LANG.EN : lang as LANG, // fallback for old users
            initialValues,
        };
    } catch (e) {
        logError(e);

        return initialData;
    }
};
