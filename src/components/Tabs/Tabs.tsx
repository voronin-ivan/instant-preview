import React from 'react';
import {
    Tabs as ToolboxTabs,
    Tab as ToolboxTab,
} from 'react-toolbox/lib/tabs';
import { LangModel } from '../../models/lang';
import { change } from '../../redux/actions/lang';

import './Tabs.scss';

export interface TabsProps {
    lang: LangModel,
    changeLang: typeof change
}

const languages: Array<'ru' | 'eng'> = ['ru', 'eng'];

export class Tabs extends React.PureComponent<TabsProps> {
    private onChange = (index: number) => this.props.changeLang(languages[index]);

    render() {
        return (
            <ToolboxTabs
                className="tabs"
                index={languages.indexOf(this.props.lang)}
                onChange={this.onChange}
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
    }
}
