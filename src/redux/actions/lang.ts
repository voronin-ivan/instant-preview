import { createStandardAction } from 'typesafe-actions';
import { LangState } from '../../models/lang';

export const change = createStandardAction('LANG_CHANGE')<LangState>();
