import React from 'react';
import { LangModel } from '../../models/lang';
import i18n from '../../utils/i18n';

import './Contacts.scss';

export interface ContactsProps {
    lang: LangModel,
}

export const Contacts = () => (
    <div className="contacts">
        <span>{i18n('writeUs')}&nbsp;—&nbsp;</span>
        <a
            href="mailto:hi@instant-preview.com"
            className="contacts__link"
        >
            hi@instant-preview.com
        </a>
    </div>
);
