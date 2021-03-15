import React from 'react';
import './App.css';


function Hello(props){
  return(
    <h1>Welcome To Hell Mr <span style={{color:'red'}}>{props.name}</span></h1>
  )
};

function App(){
  return(
    <div style={{justifyContent:'center'}}>
      <h1>Hello sir, Now you are in your Dream place</h1>
      <Hello name='satya'/>
    </div>
  )
}


export default App;