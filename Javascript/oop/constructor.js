class Employee{
    constructor(name,age,position){
        this.emp_name=name;
        this.emp_age=age;
        this.department=position;
    }
    // position(){
    //     console.log('yes, you are part of our company');
    // }
    biodata(){
        console.log('Employee name is',this.emp_name);
        console.log('He is',this.emp_age);
        console.log('you are in ',this.position,'position');
    }
}
let obj1=new Employee('satya',26,'developer');
let obj2=new Employee('iswar',25,'developer');
// obj1.biodata(),position();
obj1.biodata();
obj2.biodata();