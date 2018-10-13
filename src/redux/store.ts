import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
    form: formReducer,
});

export default createStore(reducer);
