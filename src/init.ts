import 'core-js/modules/es.promise';
import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.string.starts-with';

import { getInitState } from './utils/idb';

getInitState()
    .then((state) => {
        const bundle = document.getElementById('bundle') as HTMLScriptElement;

        window.__INIT__ = state;
        bundle.src = bundle.dataset.src;
        bundle.removeAttribute('data-src');
    });
