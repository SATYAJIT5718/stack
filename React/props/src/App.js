import React from 'react';
import './App.css';
import Proptest from './components/proptest';


function Hello(props){
  return(
    <h1>Welcome To Hell Mr <span style={{color:'red'}}>{props.name}</span> and your age is {props.age}</h1>
  )
};

function App(){
  return(
    <div style={{justifyContent:'center'}}>
      <h1>Hello sir, Now you are in your Dream place</h1>
      <Hello name='satya' age='26'/>
      <Proptest fullname='satyajit Mahakud'/>
    </div>
  )
}


export default App;