import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initialValuesReducer } from './reducers/initialValues';
import { PreviewModel } from '../models/preview';

const reducers = combineReducers({
    form: formReducer,
    initialValues: initialValuesReducer,
});

export const getStore = (initialValues: PreviewModel) => createStore(
    reducers,
    { initialValues },
    composeWithDevTools(),
);
