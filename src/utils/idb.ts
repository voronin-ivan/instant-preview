import { Store as Bla, set, get } from 'idb-keyval';
import { PreviewState } from '../models/preview';
import { LangState } from '../models/lang';
import { RootState } from '../models/root';

const store = new Bla('insta-preview');

export const setData = (
    key: string,
    value: PreviewState | LangState,
): Promise<void> => set(key, value, store);

export const getInitState = async (): Promise<RootState> => {
    const lang = await get<LangState>('lang', store) || 'ru';
    const preview = await get<PreviewState>('preview', store);

    return { lang, preview };
};
