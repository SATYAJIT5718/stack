import React from 'react';
import {sayGOODMORNINGaction,sayGOODAFTERNOONaction,sayGOODNIGHTaction} from './counter.action';
import {useSelector,useDispatch} from 'react-redux';


let Counter=()=>{
    const dispatch = useDispatch();

    const wish = useSelector((state)=>{
        return state.Counter;
    })


    let sayGM=()=>{
        dispatch(sayGOODMORNINGaction())
    }
    let sayGA=()=>{
        dispatch(sayGOODAFTERNOONaction())
    }
    let sayGN=()=>{
        dispatch(sayGOODNIGHTaction())
    }

    return(
        <>
            <h1>Counter Component</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-06'>
                        <div className='card'>
                            <div className='card-header'>
                                <pre>{JSON.stringify(wish)}</pre>
                               <h1>Wish:{wish.msg}</h1>
                            </div>
                            <div className='card-body'>
                                <button className='btn btn-danger' onClick={sayGM}>GM</button>
                                <button className='btn btn-primary ml-2' onClick={sayGA}>GA</button>
                                <button className='btn btn-success ml-2' onClick={sayGN}>GN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export {Counter};