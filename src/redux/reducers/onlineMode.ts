import { ActionType, createReducer } from 'typesafe-actions';
import { setOnlineMode } from '../actions/onlineMode';

type OnLineModeState = boolean;
type OnlineModeAction = ActionType<typeof setOnlineMode>;

const initialState: OnLineModeState = navigator.onLine;

export const onlineModeReducer = createReducer<OnLineModeState, OnlineModeAction>(initialState)
    .handleAction(setOnlineMode, (_, { payload }) => payload);
