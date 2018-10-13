import { ActionType, getType } from 'typesafe-actions';
import { LangState } from '../../models/lang';
import * as langActions from '../actions/lang';

type LangAction = ActionType<typeof langActions>;

export const langReducer = (state: LangState = 'ru', action: LangAction) => {
    switch (action.type) {
        case getType(langActions.change): return action.payload;
        default: return state;
    }
};
