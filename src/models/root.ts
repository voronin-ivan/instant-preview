import { FormStateMap } from 'redux-form';
import { LANG } from '../models/lang';
import { PreviewModel } from '../models/preview';

export interface RootModel {
    form?: FormStateMap;
    lang?: LANG; // TODO: rm
    preview: PreviewModel;
}
