class office{
    constructor(emp_name,emp_code,emp_designation,emp_department,blood_group){
    this.name=emp_name;
    this.code=emp_code;
    this.designation=emp_designation;
    this.department=emp_department;
    this.bg=blood_group;
    }
    bio_data(){
        console.log("Employee name is",this.name,',','His employee code is',this.code,',','He is a',this.designation,',','He is from',this.department,'department',',','His blood group is',this.bg,'.');
    }
}

class sal extends office{
    constructor(emp_name,emp_code,emp_designation,emp_department,blood_group,employee_salary){
        super(emp_name,emp_code,emp_designation,emp_department,blood_group);
        this.emp_salary=employee_salary;
        }
        salary_add(){
            console.log(super.bio_data(),'His salary is',this.emp_salary);
    }
}




// console.log(new office());
// let x=new office('satyajit',6564,'Developer','Software','AB+ve');
// console.log(x);
// x.bio_data();
let y= new sal('satyajit',6564,'Developer','Software','AB+ve',40000);
y.salary_add();