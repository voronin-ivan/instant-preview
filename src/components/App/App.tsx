import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Header } from '../Header/Header';
import { YaMetrica } from '../YaMetrica/YaMetrica';
import { PromoContainer } from '../Promo/PromoContainer';
import { Features } from '../Features/Features';
import { Editor } from '../Editor/Editor';
import { setOnlineMode } from '../../redux/actions/onlineMode';
import { reachOfflineGoal, reachAppInstalledGoal, reachInstallPromptGoal } from '../../utils/metrics';
import { setData, getData } from '../../utils/idb';

import './App.scss';

interface BeforeInstallPromptEvent extends Event {
    userChoice: Promise<{
        outcome: string;
    }>;
}

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('online', () => {
            dispatch(setOnlineMode(true));
            reachOfflineGoal();
            setData('wasOffline', false);
        });

        window.addEventListener('offline', () => {
            dispatch(setOnlineMode(false));
            setData('wasOffline', true);
        });

        window.addEventListener('appinstalled', () => {
            reachAppInstalledGoal();
        });

        window.addEventListener('beforeinstallprompt', (event: BeforeInstallPromptEvent) => {
            event.userChoice.then(({ outcome }) => {
                reachInstallPromptGoal(outcome);
            });
        });

        if (navigator.onLine) {
            getData<boolean>('wasOffline')
                .then((wasOffline) => {
                    if (wasOffline) {
                        reachOfflineGoal();
                        setData('wasOffline', false);
                    }
                });
        } else {
            setData('wasOffline', true);
        }
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
