let a;
let date;
let time;
let day;

//a,date,time are specially declared above due to the time loop continuously running below by SETINTERVAL....
setInterval(()=>{
a= new Date();
date=a.toLocaleDateString();
time= a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();


document.getElementById('time').innerHTML=time;
document.getElementById('date').innerHTML=date;

}, 1000);

day=a.getDay();
function myFunction() {
    // alert('hello');
    // var a = new Date();
    var weekday = new Array(7);
    weekday[0] = "SUNDAY";
    weekday[1] = "MONDAY";
    weekday[2] = "TUESDAY";
    weekday[3] = "WEDNESDAY";
    weekday[4] = "TTHURSDAY";
    weekday[5] = "FRIDAY";  
    weekday[6] = "SATURDAY";
    
    var day = weekday[a.getDay()];
    document.getElementById("day").innerHTML= day;
    
  }

