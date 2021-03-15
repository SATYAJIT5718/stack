import { GOODMORNING, GOODAFTERNOON, GOODNIGHT} from './wish.action';

let initialstate={
    message:'Hello'
}

let wishReducer=(state=initialstate, action)=>{
    switch(action.type){
        case GOODMORNING:
            return{message:'Good Morning'};
        case GOODAFTERNOON:
            return{message:'Good Afternoon'};
        case GOODNIGHT:
            return{message:'Good Night'};
        default:
            return state;
    }
}

export {wishReducer};