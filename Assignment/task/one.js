let google=[
    {name:"satya",age:26,bgroup:'A+ve'},
    {name:"alok",age:32,bgroup:'B+ve'},
    {name:"gopal",age:16,bgroup:'AB+ve'},
    {name:"sakil",age:29,bgroup:'A-ve'},
    {name:"remo",age:18,bgroup:'O+ve'}
]

let y=google.map((x)=>x.bgroup==='O+ve');// in case of map it show true/false statemnt due to the condition
console.log(y);

let z=google.filter((x)=>x.age>=20);
console.log(z); // in case of filter option it return the output in a new array(it need a function to run and it iterate all value before conslusion)

let c=google.forEach((x)=>x.bgroup==='O+ve');
console.log(c);// incase of foreach() it return undefined becoz it can't return the result in a new ARRAY VALUE.