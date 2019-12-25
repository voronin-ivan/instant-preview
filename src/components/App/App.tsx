import React from 'react';
import { ErrorBoundaryContainer } from '../ErrorBoundary/ErrorBoundaryContainer';
import { Header } from '../Header/Header';
import { YaMetrica } from '../YaMetrica/YaMetrica';
import { PromoContainer } from '../Promo/PromoContainer';
import { FeaturesContainer } from '../Features/FeaturesContainer';
import { Editor } from '../Editor/Editor';

import './App.scss';

import './assets/favicon_56.png';
import './assets/favicon_120.png';
import './assets/og_image.png';

export const App = () => (
    <ErrorBoundaryContainer>
        <Header />
        <main>
            <PromoContainer />
            <FeaturesContainer />
            <Editor />
        </main>
        <YaMetrica />
    </ErrorBoundaryContainer>
);
