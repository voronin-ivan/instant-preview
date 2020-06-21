import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialValuesReducer } from './reducers/initialValues';
import { onlineModeReducer } from './reducers/onlineMode';
import { PreviewModel } from '../models/preview';

const reducers = combineReducers({
    form: formReducer,
    initialValues: initialValuesReducer,
    onlineMode: onlineModeReducer,
});

export const getStore = (initialValues: PreviewModel) => createStore(
    reducers,
    { initialValues },
    composeWithDevTools(),
);
