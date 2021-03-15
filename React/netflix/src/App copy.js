import React, { Component } from 'react'

class App extends Component {
  state={
    Name:'Satyajit',
    Empcode:6464,
    CurSalary:50000
  }
  updatesalary=(value)=>{

    this.setState({
      CurSalary:50000 + value,
      Empcode:5718
    })
  }
  render() {
    return (
      <>
        <h1>Employee name is <span style={{color:'red'}}>{this.state.Name}.</span></h1>
        <h1>His Employee Code is <span style={{color:"green"}}>{this.state.Empcode}.</span></h1>
        <h2>His Current Sallary is {this.state.CurSalary}</h2>
        <button onClick={this.updatesalary.bind(this,10000)}>add 10k</button>
      </>
    )
  }
}

export default App
