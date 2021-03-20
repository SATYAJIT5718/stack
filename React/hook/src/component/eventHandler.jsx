import React, { useState } from 'react'

const EventHandler = () => {


    let [name, setName] = useState('satya')
    let btnHandler = () => {
        setName('Satyajit')

    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='card bg-dark '>
                            <div className='card-header'>
                                <h1 className='text-center text-danger'>Name:{name}</h1>
                            </div>
                            <div className='card-body '>
                                <button className='btn btn-danger ' onClick={btnHandler}>click me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default EventHandler;
