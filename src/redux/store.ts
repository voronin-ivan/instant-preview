import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import { previewReducer } from './reducers/preview';
import { RootModel } from '../models/root';

const reducer = combineReducers({
    form: formReducer,
    preview: previewReducer,
});

const initialState: RootModel = {
    preview: window.__INIT__.preview,
};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(),
);

export default store;
