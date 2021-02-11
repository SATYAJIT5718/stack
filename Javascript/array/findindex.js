let x=[10,5,18,22,16,29,36,40]
function major(adult){
    return(adult >= 18);
}
// console.log(x.findIndex(major)); // it find out the position value of the given condition/value
let z=x.findIndex(major);
console.log(z);
// x.findIndex(major);