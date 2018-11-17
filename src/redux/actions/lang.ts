import { createStandardAction } from 'typesafe-actions';
import { LangModel } from '../../models/lang';

export const change = createStandardAction('LANG_CHANGE')<LangModel>();
