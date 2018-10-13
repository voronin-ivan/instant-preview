import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { langReducer } from './reducers/lang';

const reducer = combineReducers({
    form: formReducer,
    lang: langReducer,
});

export default createStore(reducer);
