import React,{useState} from 'react'

const WishHandler = () => {

    let [Wish, setWish]=useState('Hello')
    let wishBtnHandler =()=>{
        setWish('Good Morning')

    }
    return (
        <>
            <div className='container mt-5 '>
                <div className="row">
                    <div className="col-md-8">
                        <div className='card bg-dark'>
                            <div className="card-header">
                                <h1 className='text-danger'>{Wish}</h1>
                            </div>
                            <div className='card-body'>
                                <button className='btn btn-danger' onClick={wishBtnHandler}> GM</button>
                                <button className='btn btn-danger ml-4' onClick={()=>{setWish('Good Afternoon')}}>GA</button>
                                <button className='btn btn-danger ml-4' onClick={()=>{setWish('Good Night')}}>GN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishHandler;
