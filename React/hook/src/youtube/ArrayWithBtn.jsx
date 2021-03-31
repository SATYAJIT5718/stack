import React, { useState } from 'react'

let bioData = [{
    Id: 1, Name: 'satya', Age: 26, Address: 'Banglore',
},
{
    Id: 2, Name: 'satyajit', Age: 27, Address: 'Bbsr',
},
{
    Id: 3, Name: 'satyajit mahakud', Age: 28, Address: 'Blr',
}]

const ArrayWithBtn = () => {
    let [User, setUser] = useState(bioData)

    let btnHandler = () => {
        setUser([])
    }

    let removeElement = (Id) => {
        // alert(Id);
        const myNewArray = User.filter((currval) => {
            return currval.Id != Id
        })
        setUser(myNewArray)
    }


    return (
        <>
            {
                User.map((currval) => {
                    return (<h1 key={currval.Id}>Name:{currval.Name} Age:{currval.Age} Address:{currval.Address}
                        <button className='btn btn-dark' onClick={() => removeElement(currval.Id)}>Remove</button></h1>
                    )
                })
            }
            <button className='btn btn-danger' onClick={btnHandler}>click</button>

        </>
    )
}

export default ArrayWithBtn
