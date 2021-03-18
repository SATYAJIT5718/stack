import {GOODMORNING,GOODAFTERNOON,GOODNIGHT} from './counter.action';

let initialstate={
    msg:'Welcome'
}

let CounterReducer=(state=initialstate,action)=>{
    switch(action.type){
        case GOODMORNING:
            return{msg:'Good Morning'}
        case GOODAFTERNOON:
            return{msg:'Good Afternoon'}
        case GOODNIGHT:
            return{msg:'Good Night'}
        default:
            return state;
    }
}

export {CounterReducer};