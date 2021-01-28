let hello=()=>{
    console.log('hello');
};

let hello=()=>{
    console.log('hi');
};


hello();

//output= error(it return='identifier is already defined')
// in case of FATARROW function overwriting is not allowed as same function name.
// this is the difference between the normal function and fatarrow function.

