import React, { useState } from 'react';

let Counter = () => {
    let [count, setCount] = useState(1);
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'> {count} </div>
                            <div className='card-body'>
                                <button className='btn btn-danger' 
                                onClick={() => { setCount(count > 1 ? count - 1 : 1) }}>-</button>
                                
                                <button className='btn btn-primary ml-2' 
                                onClick={() => { setCount(count + 1) }}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Counter;