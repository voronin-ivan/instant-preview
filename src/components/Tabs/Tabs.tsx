import React from 'react';
import {
    Tabs as ToolboxTabs,
    Tab as ToolboxTab,
} from 'react-toolbox/lib/tabs';
import { LangState } from '../../models/lang';
import { change } from '../../redux/actions/lang';

import './Tabs.scss';

export interface TabsProps {
    lang: LangState,
    changeLang: typeof change
}

const languages: Array<'ru' | 'eng'> = ['ru', 'eng'];

export const Tabs = ({ lang, changeLang }: TabsProps) => {
    const onChange = (index: number) => changeLang(languages[index]);

    return (
        <ToolboxTabs
            className="tabs"
            index={languages.indexOf(lang)}
            onChange={onChange}
            fixed
        >
            <ToolboxTab
                className="tabs__item"
                activeClassName="tabs__item--active"
                label="ru"
            />
            <ToolboxTab
                className="tabs__item"
                activeClassName="tabs__item--active"
                label="eng"
            />
        </ToolboxTabs>
    );
};
