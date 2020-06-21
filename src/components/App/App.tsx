import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Header } from '../Header/Header';
import { YaMetrica } from '../YaMetrica/YaMetrica';
import { PromoContainer } from '../Promo/PromoContainer';
import { Features } from '../Features/Features';
import { Editor } from '../Editor/Editor';
import { setOnlineMode } from '../../redux/actions/onlineMode';

import './App.scss';

import './assets/favicon_56.png';
import './assets/favicon_120.png';
import './assets/og_image.png';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('online', () => dispatch(setOnlineMode(true)));
        window.addEventListener('offline', () => dispatch(setOnlineMode(false)));
    }, []);

    return (
        <ErrorBoundary>
            <Header />
            <main>
                <PromoContainer />
                <Features />
                <Editor />
            </main>
            <YaMetrica />
        </ErrorBoundary>
    );
};
