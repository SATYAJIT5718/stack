import React,{useRef} from 'react';
import ImageOne from '../Image/12.jpg';
import ImageTwo from '../Image/46.jpg';



const ImageEx = () => {

   const imgRef = useRef();
    let changeImage =()=>{
        // alert('clicked')
        imgRef.current.src=ImageTwo;
    }
    
    return (
        <>
           <h1>hello</h1>
           <img src={ImageOne} height='50%' width='50%' ref={imgRef}></img>
           <button className='btn btn-danger' onClick={changeImage}>Click to Change</button>
        </>
    )
}

export default ImageEx
