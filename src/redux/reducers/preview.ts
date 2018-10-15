import { ActionType, getType } from 'typesafe-actions';
import { PreviewState } from '../../models/preview';
import { setData } from '../../utils/idb';
import * as previewActions from '../actions/preview';

type PreviewAction = ActionType<typeof previewActions>;

export const previewReducer = (state: PreviewState = {}, action: PreviewAction) => {
    switch (action.type) {
        case getType(previewActions.reset):
            setData('preview', {});
            return {};

        default: return state;
    }
};
