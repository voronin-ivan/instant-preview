import { Store, set, get } from 'idb-keyval';
import { PreviewModel } from '../models/preview';
import { LANG } from '../models/lang';
import { logError } from './logger';

export interface IdbData {
    lang: LANG;
    initialValues: PreviewModel;
}

type DataKey = keyof IdbData;
type DataValue = IdbData[DataKey];

const store = new Store('instant-preview');

// eslint-disable-next-line arrow-parens
export const getData = async <T>(key: DataKey) => {
    if (window.indexedDB && store) {
        try {
            return await get<T>(key, store);
        } catch (e) {
            logError(e);
        }
    }

    return null;
};

export const setData = (key: DataKey, value: DataValue) => {
    if (window.indexedDB && store) {
        try {
            set(key, value, store);
        } catch (e) {
            logError(e);
        }
    }
};
