import React,{useState} from 'react'

const ObjectWithSpreed = () => {
    let [user, setUser]= useState({
        userName:'satya', userAge: 26, userAddress: 'Banglore'
    })

    let changeHandler=()=>{
        setUser({...user,userName:'Satyajit Mahakud'})
        //Spreed operator helps you to get whole data of the object.
    }
    return (
        <div>
             <h1>Name:{user.userName} , Age: {user.userAge}, Address:{user.userAddress}</h1>  
             <button className='btn btn-danger' onClick={changeHandler}>Change Data</button>
        </div>
    )
}

export default ObjectWithSpreed;




