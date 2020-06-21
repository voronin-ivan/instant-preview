import { logError } from './logger';

export const registerSW = () => {
    if (!('serviceWorker' in navigator)) return;

    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .catch((e) => {
                logError(e);
            });
    });
};
