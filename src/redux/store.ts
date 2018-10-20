import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import { langReducer } from './reducers/lang';
import { previewReducer } from './reducers/preview';
import { RootState } from '../models/root';

const reducer = combineReducers({
    form: formReducer,
    lang: langReducer,
    preview: previewReducer,
});

const initialState: RootState = window.__INIT__;
delete window.__INIT__;

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(),
);

export default store;
