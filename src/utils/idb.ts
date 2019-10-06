import { Store, set, get } from 'idb-keyval';
import { PreviewModel } from '../models/preview';
import { LangModel } from '../models/lang';
import { RootModel } from '../models/root';

const store = new Store('instant-preview');

const initState: RootModel = {
    lang: 'ru',
    preview: {},
};

export const setData = (key: string, value: PreviewModel | LangModel) => {
    if (window.indexedDB) {
        set(key, value, store);
    }
};

export const getInitState = async (): Promise<RootModel> => {
    if (!window.indexedDB) return initState;

    const lang = await get<LangModel>('lang', store);
    const preview = await get<PreviewModel>('preview', store);

    return { lang, preview };
};
