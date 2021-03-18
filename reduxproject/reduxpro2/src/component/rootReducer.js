import {CounterReducer} from './counter/Counter.reducer';
import {combineReducers} from 'redux';

let rootReducer = combineReducers({
    Counter : CounterReducer,
})

export {rootReducer};