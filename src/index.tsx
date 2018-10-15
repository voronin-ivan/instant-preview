import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import { getInitState } from './utils/idb';
import createStore from './redux/store';

getInitState()
    .then((state) => {
        ReactDOM.render(
            <Provider store={createStore(state)}>
                <App />
            </Provider>,
            document.getElementById('app'),
        );
    });
