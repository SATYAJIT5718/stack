import React, { useState } from 'react';
let Message = () => {
    let [message, setMessage] = useState('hello');


return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-md-8'>
                    <div className='card'>
                        <div className='card-header'>{message}</div>
                        <div className='card-body'>
                            <button className='btn btn-success' onClick={()=>{setMessage('Good Morning')}}>GM</button>
                            <button className='btn btn-danger ml-2' onClick={()=>{setMessage('Good Afternoon')}}>GA</button>
                            <button className='btn btn-primary ml-2' onClick={()=>{setMessage('Good Night')}}>GN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
};

export default Message;