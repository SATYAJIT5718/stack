const GOODMORNING = 'GOODMORNING';
const GOODAFTERNOON = 'GOODAFTERNOON';
const GOODNIGHT = 'GOODNIGHT';

let sayGMaction =()=>{
    return{
        type:GOODMORNING,
    }
};
let sayGAaction =()=>{
    return{
        type:GOODAFTERNOON
    }
};
let sayGNaction =()=>{
    return{
        type:GOODNIGHT
    }
};


export {GOODMORNING,GOODAFTERNOON ,GOODNIGHT, sayGMaction, sayGAaction, sayGNaction};