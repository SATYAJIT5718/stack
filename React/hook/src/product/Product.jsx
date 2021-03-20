import React, { useState } from 'react';

let Product = () => {
    let [Product, setProduct] = useState({
        product_name: 'Suzuki Hayabusa',
        price: 2100000,
        image: "https://www.bennetts.co.uk/-/media/bikesocial/2020-october-images/suzuki-gsx1300r-hayabusa-2021-rumours/suzuki-gsx1300r-hayabusa-2021-rumours-(2).ashx?h=493&w=740&la=en&hash=CF9DE7C356D321D54A76AF73C4F689CFD50D4E8D",
        qty: 1,
        Displacement: '1340cc',

    })
    return (
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-08'>
                        <table className='table table-hover table-stripped bg-danger text-center'>
                            <thead>
                                <tr>

                                    <th> Image</th>
                                    <th> Product Name</th>
                                    <th> Displacement</th>
                                    <th> Qty</th>
                                    <th> Price</th>
                                    <th> Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td><img src={Product.image} height='100px' width='100px' /></td>
                                    <td>{Product.product_name}</td>
                                    <td>{Product.Displacement}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => { setProduct({ ...Product, qty: Product.qty > 1 ? Product.qty - 1 : 1 }) }}>-</button>
                                        {Product.qty}
                                        <button className="btn btn-primary" onClick={() => { setProduct({ ...Product, qty: Product.qty + 1 }) }}>+</button>
                                        <i class="fas fa-minus-circle"></i>
                                    </td>
                                    <td>{Product.price}</td>
                                    <td>{Product.qty * Product.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;