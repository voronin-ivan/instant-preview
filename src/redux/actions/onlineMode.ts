import { createStandardAction } from 'typesafe-actions';

export const setOnlineMode = createStandardAction('SET_ONLINE_MODE')<boolean>();
