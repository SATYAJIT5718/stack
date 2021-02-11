import React from 'react';
import './App.css';

let time=new Date(2020,5,5,15);
time=time.getHours();
let greeting=' ';
const greetclr={ };

if(time>=1 && time<12){
  greeting='Good Morning';
  greetclr.color='red';
}else if(time>=13 && time<19){
  greeting='Good Afternoon';
  greetclr.color='green';
}else{
  greeting='Good Night';
  greetclr.color='yellowgreen';
}


function App(){
  return(
    <React.Fragment>
      <h1 style={{color:'white'}}>Hello Sir, <span style={greetclr}>{greeting}</span></h1>
    </React.Fragment>

  );
}


export default App;



