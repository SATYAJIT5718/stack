import React from 'react';
import Test from './test';

function Zero(prop){
    return(
        <h1>Hello my is {prop.name}</h1>
    )
};

function Hello(){
    return(
        <>
            <h1>welcome to the hell</h1>
            <Zero name='king'/>
            <Test />

        </>
    )
};

export default Hello;