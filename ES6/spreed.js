let x={
    name:'satya',
    age:26,
}
 
let y={
    address:'odisha',
    age:28,
}

let xy={
    ...x,
    ...y,
    bloodgroup:'ab+ve',
}

// console.log(xy);
// console.log(x);
xy.age=29;
x.age=25;
console.log(y);