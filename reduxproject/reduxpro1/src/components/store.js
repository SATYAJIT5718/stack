import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';


let store = createStore(rootReducer, composeWithDevTools());

export default store;