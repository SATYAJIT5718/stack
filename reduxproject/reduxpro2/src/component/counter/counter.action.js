const GOODMORNING='GOODMORING';
const GOODAFTERNOON='GOODAFTERNOON';
const GOODNIGHT='GOODNIGHT';

let sayGOODMORNINGaction=()=>{
    return{
        type:GOODMORNING
    }
};
let sayGOODAFTERNOONaction=()=>{
    return{
        type:GOODAFTERNOON
    }
};
let sayGOODNIGHTaction=()=>{
    return{
        type:GOODNIGHT
    }
};

export {GOODMORNING,GOODAFTERNOON,GOODNIGHT,sayGOODMORNINGaction,sayGOODAFTERNOONaction,sayGOODNIGHTaction}