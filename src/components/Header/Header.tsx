import React from 'react';
import { TabsContainer } from '../Tabs/TabsContainer';

import './Header.scss';

export const Header = () => (
    <header className="header">
        <div className="container">
            <a className="header__logo" href="/">Insta-Preview</a>
            <TabsContainer />
        </div>
    </header>
);
