import { FormStateMap } from 'redux-form';
import { PreviewModel } from '../models/preview';

export interface RootModel {
    form?: FormStateMap;
    initialValues: PreviewModel;
}
