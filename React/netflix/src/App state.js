import React, { Component } from 'react'

class App extends Component {
  state={
    name:'satya',
    age:25
    };
  Clickme=()=>{
    this.setState({
      name:'Satyajit Mahakud',
      age:26
    });
  };
  render() {
    return (
      <div>
        <h1>Hello Mr. {this.state.name}</h1>
        <h2>Your age {this.state.age}</h2>
        <button onMouseOver={this.Clickme}>please click me</button>
      </div>
    )
  }
}

export default App;
