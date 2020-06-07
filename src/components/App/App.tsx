import React from 'react';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Header } from '../Header/Header';
import { YaMetrica } from '../YaMetrica/YaMetrica';
import { Promo } from '../Promo/Promo';
import { Features } from '../Features/Features';
import { Editor } from '../Editor/Editor';

import './App.scss';

import './assets/favicon_56.png';
import './assets/favicon_120.png';
import './assets/og_image.png';

export const App = () => (
    <ErrorBoundary>
        <Header />
        <main>
            <Promo />
            <Features />
            <Editor />
        </main>
        <YaMetrica />
    </ErrorBoundary>
);
