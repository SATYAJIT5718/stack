class address{
    constructor(no,city,state,pin){
        this.house_number=no;
        this.city=city;
        this.state=state;
        this.pin=pin;
    }
}

module.exports=address;     // this the method for export the data to other file in ES5.
// export address;          // this the method f`or export the data to other file in ES6.(This is not working here due to node.js doesn't support ES6)