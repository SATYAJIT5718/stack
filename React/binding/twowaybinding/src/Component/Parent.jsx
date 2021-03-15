import React, { Component } from 'react';
import Child from '../Component/Child';


class Parent extends Component {
    constructor(props){
        super(props);
        this.state={
            Parentinfo:"",
            Childinfo:"",
        };
    }

    parentchangedata =(event)=>{
        this.state.Parentinfo({Parentinfo:event.taget.value})
    }
    render() {
        return (
            <>
            <div>
              <h1 style={{color:'red'}}>Parent Component:</h1>
              <h2>Child Info:</h2>
              <form>  
              <label style={{color:'blue'}}>Parent Input data : </label>
              <input type='text' placeholder='Parent info' value={this.state.parentinfo} onchange={this.parentchangedata}></input>
              <button type='submit'>Click to render Parent info</button>
            </form>
            </div>
            <hr/>
            <Child 
                data={this.state.parentinfo}
            />
            </>
        )
    }
}

export default Parent
