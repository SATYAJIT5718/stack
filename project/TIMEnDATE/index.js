let a;
let date;
let time;
const options={ weekday:'long', year:'numeric', month:'long', day:'numeric'};// for string day update

//a,date,time are specially declared above due to the time loop continuously running below by SETINTERVAL....
setInterval(()=>{
a= new Date();
date=a.toLocaleDateString(undefined, options);// undefined,options used for day string purpose
time= a.getHours()+':'+a.getMinutes()+':'+a.getSeconds();


document.getElementById('time').innerHTML=time;
document.getElementById('date').innerHTML=date;

}, 1000);


