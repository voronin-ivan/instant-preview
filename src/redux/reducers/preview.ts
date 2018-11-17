import { ActionType, getType } from 'typesafe-actions';
import { PreviewModel } from '../../models/preview';
import { setData } from '../../utils/idb';
import * as previewActions from '../actions/preview';

type PreviewAction = ActionType<typeof previewActions>;

export const previewReducer = (state: PreviewModel = {}, action: PreviewAction) => {
    switch (action.type) {
        case getType(previewActions.reset):
            setData('preview', {});
            return {};

        default: return state;
    }
};
