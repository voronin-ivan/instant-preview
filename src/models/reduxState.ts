import { FormStateMap } from 'redux-form';
import { PreviewModel } from './preview';

export interface ReduxStateModel {
    form?: FormStateMap;
    initialValues: PreviewModel;
    onlineMode: boolean;
}
