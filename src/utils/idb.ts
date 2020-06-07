import { Store, set, get } from 'idb-keyval';
import { PreviewModel } from '../models/preview';
import { LANG } from '../models/lang';
import { RootModel } from '../models/root';
import { logError } from './logger';

const store = new Store('instant-preview');

const initState: RootModel = {
    lang: LANG.EN,
    preview: {},
};

export const setData = (key: string, value: PreviewModel | string) => {
    if (window.indexedDB && store) {
        try {
            set(key, value, store);
        } catch (e) {
            logError(e);
        }
    }
};

export const getInitState = async () => {
    if (!window.indexedDB || !store) return initState;

    try {
        const lang = await get<string>('lang', store) || initState.lang;
        const preview = await get<PreviewModel>('preview', store) || initState.preview;

        return {
            lang: lang === 'eng' ? LANG.EN : lang as LANG, // fallback for old users
            preview,
        };
    } catch (e) {
        logError(e);

        return initState;
    }
};
