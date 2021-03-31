const fs = require('fs');

const data = fs.readFileSync('one.txt','utf-8');
console.log(data);

const data3=fs.writeFileSync('three.txt','hi its three.txt')
console.log(data3);