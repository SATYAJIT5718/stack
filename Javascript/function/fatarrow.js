function hello(){
    console.log("hello"); // full function method
}
let hello=()=>{
    console.log("hi");
}; // this is a fat arrow function

hello();

//
//thies two are equal.
//diff- in case of fuction after returning the RESULT is again return UNDEFINED.... but in case of FAT ARRAOW function it only retun the value.