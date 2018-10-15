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

export default (initialState: RootState) => createStore(
    reducer,
    initialState,
    composeWithDevTools(),
);
