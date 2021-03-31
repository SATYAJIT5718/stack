const fs = require('fs');

fs.readFile('one.txt','utf-8',(error,data)=>{
    console.log(data);
    const newData=fs.writeFile('four.txt','hi I am four.txt',(error)=>{})
    console.log(newData);
})

console.log('hello man good morning');