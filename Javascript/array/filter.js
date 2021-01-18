let ages=[10,15,18,22,26,32,36];
function Adult(age){
    
    return age>=18;
}
console.log(ages.filter(Adult));// output is the no which is >= 18 will come.
console.log(Adult());  // it show condition is false due to the 1st condition is false
