let ages=[10,15,18,22,26,32,36];
function Adult(age){
    
    return age>=18;
}
console.log(ages.filter(Adult));
console.log(Adult());  // it show condition is false due to the 1st condition is false