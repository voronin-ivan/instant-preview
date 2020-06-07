import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App/App';
import store from './redux/store';

import './utils/i18n';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app'),
);
