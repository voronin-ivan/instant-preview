import { FormStateMap } from 'redux-form';
import { LangState } from '../models/lang';
import { PreviewState } from '../models/preview';

export interface RootState {
    form?: FormStateMap;
    lang: LangState;
    preview: PreviewState;
}
