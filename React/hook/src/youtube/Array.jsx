import React, { useState } from 'react'

const Array = () => {

    let bioData = [
        {
            id: 0, myName: 'satya', age: 26,
        },
        {
            id: 1, myName: 'jit', age: 27,
        }
    ]
    let [changeData, setchangeData]= useState(bioData)

    let btnHandler=()=>{
        
        setchangeData([]);
    }

    return (
        <>
            <h1>Name: satya and age: 26</h1>
            {
                changeData.map((curElm)=>{
                    return<h1 key={curElm.id}>name:{curElm.myName} and age: {curElm.age}</h1>
                })
            }
            <button className='btn btn-danger' onClick={btnHandler}>clickme</button>
        </>
    )
}

export default Array;

//key is urequire to identify all entity
