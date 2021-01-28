const address= require('./address')     //This is the ES5 method to import existing class from other file.
// import address from "./address";     //This is the ES6 method to import existing class from other file(This method is not working  here due to node.js doesn't support ES6 methods.)

class details{
    constructor(name,age,email,address){
        this.emp_name=name;
        this.emp_age=age;
        this.emp_email=email;
        this.emp_address=address;
    }
    getdetails(){
        console.log('Employee name is',this.emp_name,'His age is',this.emp_age,'His email is',this.emp_email,'His address is',this.emp_address);
    }
}

// thies are the two ways to call/mention data to the import class from other file.

// let x=new details('satya',26,'abc@gmail.com',new address('576','Bhubaneswar','odisha','15265'));
// console.log(x);
// x.getdetails();

let add=new address('576','Bhubaneswar','odisha','15265');
let z=new details('king',25,'abc@xyz.com',add);
// console.log(z);
z.getdetails();


