import { ActionType, getType } from 'typesafe-actions';
import { LangModel } from '../../models/lang';
import { setData } from '../../utils/idb';
import * as langActions from '../actions/lang';

type LangAction = ActionType<typeof langActions>;

export const langReducer = (state: LangModel = 'eng', action: LangAction) => {
    switch (action.type) {
        case getType(langActions.change):
            setData('lang', action.payload);
            return action.payload;

        default: return state;
    }
};
