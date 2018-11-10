import { FormStateMap } from 'redux-form';
import { LangModel } from '../models/lang';
import { PreviewModel } from '../models/preview';

export interface RootModel {
    form?: FormStateMap;
    lang: LangModel;
    preview: PreviewModel;
}
