import { ActionType, createReducer } from 'typesafe-actions';
import { PreviewModel } from '../../models/preview';
import { resetInitialValues } from '../actions/initialValues';

type PreviewAction = ActionType<typeof resetInitialValues>;

const initialState = {};

export const initialValuesReducer = createReducer<PreviewModel, PreviewAction>(initialState)
    .handleAction(resetInitialValues, () => initialState);
