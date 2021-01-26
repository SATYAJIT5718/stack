class student{
    name='satya';
    age=26;
    location='odisha';
    details=hello=>{
        console.log('my name:',this.name);
    }
    
}
// // console.log(new student()); 
let x=new student();
// console.log(x);
console.log(x.details());

// console.log(new student());
