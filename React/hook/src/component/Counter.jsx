import React,{useState} from 'react'

function Counter() {

    let [product, setProduct]=useState({
        Product_Name:'CASIO ED439 Edifice ( EF-558SG-1AVDF ) Analog Watch',
        Image:'https://rukminim1.flixcart.com/image/603/724/jmxrwy80/watch/9/g/e/ed439-casio-original-imaf9qzzbapbgzru.jpeg?q=50',
        Price:13995,
        Qty:1

    })
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-8 '>
                        <table className='table  table-striped bg-dark'>
                            <thead className='text-danger'>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Image</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody className='text-primary'>
                                <tr>
                                    <td>{product.Product_Name}</td>
                                    <td><img src={product.Image} height='100px' width='100px'/></td>
                                    <td>{product.Price}</td>
                                    
                                    <td>
                                    <i className='fa fa-minus-circle' onClick={()=>{setProduct({...product,Qty:product.Qty>1?product.Qty - 1:1})}}></i>
                                    {product.Qty}
                                    <i className='fa fa-plus-circle' onClick={()=>{setProduct({...product,Qty:product.Qty+1})}}></i>
                                    </td>

                                    <td>{product.Qty*product.Price}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter
