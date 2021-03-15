import React, { Component } from 'react'

export class State extends Component {
    state={
        name:'Satyajit'
    }

    btnhandler=()=>{
        this.setState({
            name:'Satyajit Mahakud'
        })
    }
  
    render() {
        return (
            <div>
                <h1 style={{color:'red'}}>State component</h1>
                <h2> Welcome {this.props.name}</h2>
                <h2> your age is {this.props.age} </h2>
                <h3> your full name is {this.state.name}</h3>
                <button className='btn btn-success' onClick={this.btnhandler}>btnhandler</button>
            </div>
        )
    }
}

export default State
