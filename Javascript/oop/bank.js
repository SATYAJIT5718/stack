class Union_bank_of_india{
    constructor(name,age,address,accnumber){
        this.cust_name=name;
        this.cust_age=age;
        this.location=address;
        this.acc_no=accnumber;
    }
    position(){
        console.log('yes, you are part of our bank');
    }
    biodata(){
        console.log('customer name is',this.cust_name);
        console.log('He is',this.cust_age,'years old');
        console.log('He is from ',this.location);
        console.log('His aacount number is ',this.acc_no);
    }
}

class type extends Union_bank_of_india{
    constructor(name,age,address,accnumber,occupation){
        super(name,age,address,accnumber);
        this.cust_occupation=occupation;
    }
    occu(){
        console.log(super.biodata(),'His occupation is',this.cust_occupation);
        // console.log('His occupation is',this.cust_occupation);
    
    }
}
// let obj1=new Union_bank_of_india('satya',26,'Odisha',12345);
// let obj2=new Union_bank_of_india('iswar',25,'Karnataka',678910);
// obj1.biodata().position();
    // obj1.biodata();
// obj2.biodata();
// obj2.position().biodata();// how to execute both method at a time?
let obj3=new type('Lokesh',23,'JSg',16431,'Engineer');
let obj4=new type('Jayanta',26,'Bbsr',45861,'Doctor');
obj3.occu();
obj4.occu();