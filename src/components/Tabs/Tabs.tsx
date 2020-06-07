import React from 'react';
import {
    Tabs as ToolboxTabs,
    Tab as ToolboxTab,
} from 'react-toolbox/lib/tabs';
import { useTranslation } from 'react-i18next';
import { LANG } from '../../models/lang';
import { setData } from '../../utils/idb';

import './Tabs.scss';

const languages: string[] = Object.values(LANG);

export const Tabs = () => {
    const { i18n } = useTranslation();

    const onChange = (index: number) => {
        const language = languages[index];

        i18n.changeLanguage(language);
        setData('lang', language);
    };

    return (
        <ToolboxTabs
            className="tabs"
            index={languages.indexOf(i18n.language)}
            onChange={onChange}
            fixed
        >
            {languages.map(lang => (
                <ToolboxTab
                    className="tabs__item"
                    activeClassName="tabs__item--active"
                    label={lang}
                    key={lang}
                />
            ))}
        </ToolboxTabs>
    );
};
