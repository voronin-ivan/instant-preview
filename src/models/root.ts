import { FormStateMap } from 'redux-form';
import { LangState } from '../models/lang';

export interface RootState {
    form: FormStateMap;
    lang: LangState;
}
