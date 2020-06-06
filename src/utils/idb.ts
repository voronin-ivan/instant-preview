import { Store, set, get } from 'idb-keyval';
import { PreviewModel } from '../models/preview';
import { LangModel } from '../models/lang';
import { RootModel } from '../models/root';
import { logError } from './logger';

let store: Store | null = null;

const initState: RootModel = {
    lang: 'ru',
    preview: {},
};

export const setData = (key: string, value: PreviewModel | LangModel) => {
    if (store) {
        try {
            set(key, value, store);
        } catch (e) {
            logError(e);
        }
    }
};

export const getInitState = async () => {
    if (!window.indexedDB) return initState;

    try {
        store = new Store('instant-preview');

        const lang = await get<LangModel>('lang', store);
        const preview = await get<PreviewModel>('preview', store);

        return { lang, preview };
    } catch (e) {
        logError(e);

        return initState;
    }
};
