import { Store, set, get } from 'idb-keyval';
import { PreviewModel } from '../models/preview';
import { LangModel } from '../models/lang';
import { RootModel } from '../models/root';

const store = new Store('insta-preview');

export const setData = (
    key: string,
    value: PreviewModel | LangModel,
): Promise<void> => set(key, value, store);

export const getInitState = async (): Promise<RootModel> => {
    const lang = await get<LangModel>('lang', store) || 'ru';
    const preview = await get<PreviewModel>('preview', store);

    return { lang, preview };
};
