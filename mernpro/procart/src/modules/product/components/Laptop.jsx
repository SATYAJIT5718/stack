import React from "react";

import laptopPIC from '../../../assets/images/laptop/macbook.jpg';


let Laptop = () => {

  return (
    <>
      <div className="container mt-4 align-content-center mb-5">
        <div className="row">
          <div className="col-md-4 ">
            <div className="card bg-primary justify-content-center">
              <h1 style={{ color: 'black' }}>Mac Book PRO</h1>
              <img src={laptopPIC} alt="ImageOne" className='bg-dark' height='300px' />
              <div className="card-body">
                <h4><b>Specification:</b></h4>
                <h6>Warp Charge 65</h6>
                <h6>120 Hz Fluid Display</h6>
                <h6>Qualcomm® Snapdragon™ 865 and 5G</h6>
                <h6>48 MP Quad Camera</h6>
                <a href="https://www.oneplus.in/" style={{ color: 'red' }}>Know More</a>
                <h2 style={{ color: 'black' }}>Price: <del>79,999</del> 77,999</h2>

                <button className="btn btn-dark"><i className="fa fa-shopping-cart" /> Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card bg-danger justify-content-center">
              <h1 style={{ color: 'black' }}>Mac Book AIR</h1>
              <img src={laptopPIC} alt="ImageOne" className='bg-dark' height='300px' />
              <div className="card-body">
                <h4><b>Specification:</b></h4>
                <h6>Hasselblad Camera for Mobile</h6>
                <h6>120 Hz Fluid Display Qualcomm®</h6>
                <h6>Snapdragon™ 888 and 5G Design</h6>
                <h6>48 MP Quad Camera</h6>
                <a href="https://www.oneplus.in/">Know More</a>
                <h2 style={{ color: 'black' }}>Price: <del>92,999</del> 90,999</h2>

                <button className="btn btn-dark"><i className="fa fa-shopping-cart" /> Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card bg-primary justify-content-center">
              <h1 style={{ color: 'black' }}>Mac Book Custom</h1>
              <img src={laptopPIC} alt="ImageOne" className='bg-dark' height='300px' />
              <div className="card-body">
                <h4 ><b >Specification:</b></h4>
                <h6>Quad camera, OIS 48 MP Sony IMX586</h6>
                <h6>32 MP & ultra wide selfie cameras</h6>
                <h6>90 Hz Fluid AMOLED display</h6>
                <h6>Snapdragon™ 765G 5G & up to 12 GB</h6>
                <a href="https://www.oneplus.in/" style={{ color: 'red' }}>Know More</a>
                <h2 style={{ color: 'black' }}>Price: <del>99,999</del> 97,999</h2>

                <button className="btn btn-dark"><i className="fa fa-shopping-cart" /> Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Laptop;