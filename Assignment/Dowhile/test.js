let number = 7;
let a = 0, b = 1, nextTerm;

for (let i = 1; i <= number; i++) {
    console.log(a);
    nextTerm = a + b;
    a = b;
    b = nextTerm;
}

// fabonacci number series upto given number.