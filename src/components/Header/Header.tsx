import React from 'react';
import { Tabs } from '../Tabs/Tabs';

import './Header.scss';

export const Header = () => (
    <header className="header">
        <div className="container">
            <a className="header__logo" href="/">Instant-Preview</a>
            <Tabs />
        </div>
    </header>
);
