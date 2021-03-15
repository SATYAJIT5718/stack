import React, { Component } from 'react'

export class EventBinding extends Component {
    state={
        message:'',
    }
    btnhandler=(value)=>{
        this.setState({
            message: value
        })
    }
    render() {
        return (
            <>
                <h1> Event Binding concept</h1>
                <h2>Hello Sir, {this.state.message}</h2>
                <button className='btn btn-danger mr-2' onClick={this.btnhandler.bind(this,'Good Moring')}>Morning</button>
                <button className='btn btn-primary mr-2' onClick={this.btnhandler.bind(this,'Good AfterNoon')}>Afternoon</button>
                <button className='btn btn-success mr-2' onClick={this.btnhandler.bind(this,'Good Night')}>Night</button>
                
            </>
        )   
    }
}

export default EventBinding
