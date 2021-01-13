var a = 35;
var sum = 0;
while(a > 0)
{
  let b = a % 10;
  sum = sum * 10 + b;
  a = parseInt(a / 10);
}
console.log(sum);

// reverse a number by using while loop.ex-if no-369 it returns-963.