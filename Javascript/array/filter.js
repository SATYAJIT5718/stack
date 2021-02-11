let ages=[20];
function Adult(age){
    
    return age>=19; 
}
console.log(ages.forEach(Adult));// output ll be come by no which is >= 18.
// console.log(Adult());  // if 1st condition is false then it show false otherwise it ll reflect the value as per the condition.
