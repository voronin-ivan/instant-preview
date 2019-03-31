import { ActionType, getType } from 'typesafe-actions';
import { PreviewModel } from '../../models/preview';
import { setData } from '../../utils/idb';
import * as previewActions from '../actions/preview';

type PreviewAction = ActionType<typeof previewActions>;

type PreviewReducer = (
    state: PreviewModel,
    action: PreviewAction
) => PreviewModel;

const defaultState = {};

export const previewReducer: PreviewReducer = (state = defaultState, action) => {
    switch (action.type) {
        case getType(previewActions.reset):
            setData('preview', defaultState);
            return defaultState;

        default: return state;
    }
};
