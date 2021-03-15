import React from 'react';
import { sayGMaction, sayGAaction, sayGNaction } from './wish/wish.action';
import { useSelector, useDispatch } from 'react-redux';

let WishMessage = () => {
    const dispatch = useDispatch();

    let wish = useSelector((state) => {
        return state.wishMessage;
    });

    // let state = useSelector((state) => {
    //     return state;
    // })

    let sayGM = () => {
        dispatch(sayGMaction());
    }
    let sayGA = () => {
        dispatch(sayGAaction());
    }
    let sayGN = () => {
        dispatch(sayGNaction());
    }
    return (
        <>
            <h1 style={{ color: 'red' }}>Wish components</h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <div className='card-header'>
                                <pre>{JSON.stringify(wish)}</pre>
                                <h4>message: {wish.message}</h4>
                            </div>
                            <div className='card-body'>
                                <button className='btn btn-success ' onClick={sayGM}>GM</button>
                                <button className='btn btn-primary ml-2' onClick={sayGA}>GA</button>
                                <button className='btn btn-danger ml-2' onClick={sayGN}>GN</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export { WishMessage };