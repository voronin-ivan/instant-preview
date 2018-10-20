import { getInitState } from './utils/idb';

getInitState()
    .then((state) => {
        const bundle = document.getElementById('bundle') as HTMLScriptElement;

        window.__INIT__ = state;
        bundle.src = bundle.dataset.src;
        bundle.removeAttribute('data-src');
    });
