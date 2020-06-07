import React from 'react';
import { useTranslation } from 'react-i18next';

import './Contacts.scss';

export const Contacts = () => {
    const { t } = useTranslation();

    return (
        <div className="contacts">
            <span>{t('writeUs')}&nbsp;—&nbsp;</span>
            <a
                href="mailto:hi@instant-preview.com"
                className="contacts__link"
            >
                hi@instant-preview.com
            </a>
        </div>
    );
};
