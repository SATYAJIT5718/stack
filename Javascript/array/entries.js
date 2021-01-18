let x=['hello','hi',565,'sixty','world'];
let y=x.entries();

console.log(y.next().value); // this is for printing single value

for(z of y){
    console.log(z);
}   // this for printing all value with position number