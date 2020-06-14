import 'core-js/modules/es.promise';
import 'core-js/modules/es.object.assign';
import 'core-js/modules/es.string.starts-with';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './components/App/App';
import { getStore } from './redux/store';
import { getInitialData } from './utils/getInitialData';
import { initLogger } from './utils/logger';
import { initI18n } from './utils/i18n';

initLogger();

getInitialData()
    .then(({ lang, initialValues }) => {
        initI18n(lang);

        ReactDOM.render(
            <Provider store={getStore(initialValues)}>
                <App />
            </Provider>,
            document.getElementById('app'),
        );
    });
