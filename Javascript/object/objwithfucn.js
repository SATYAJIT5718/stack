let student={
    first_name:'satya',
    last_name:'xyz',
    age:26,
    blood_group:'AB +ve',
    status: function(){
        console.log("single");
    },
    f_name: function(){
        console.log(this.first_name + " " +this.last_name)
    },
    
}

// console.log(student.status());  //for fuction read it always need to add() in this
// console.log(student.age());  //it always throughing error due to it's not a fuction
// student.age=30;  // through this way u can update any key value of the mention block
// console.log(student);
student.salary=30000;  // through this way u can add new propery and value to the block
// console.log(student);
console.log(student.f_name());