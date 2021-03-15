import React, { Component } from 'react'

export class Child extends Component {
    state={
        Childinfo:"",
    }
    render() {
        return (
            <div>
                <h1 style={{color:'red'}}>Child Component:</h1>
                <pre>Parent Data: {JSON.stringify(this.props)}</pre>
                <h2>Parent Info:{this.props.data}</h2>
                <form>  
              <label style={{color:'blue'}}>Child Input data : </label>
              <input type='text' placeholder='Child info' value={this.state.Childinfo}></input>
              <button type='submit'>Click to render Child info</button>
            </form>
            </div>
        )
    }
}

export default Child
