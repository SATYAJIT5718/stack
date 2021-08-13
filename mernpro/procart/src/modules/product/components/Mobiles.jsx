import React from "react";
import onePlus8T from '../../../assets/images/mobiles/8T.jpg';
import oneplus9PRO from '../../../assets/images/mobiles/9pro.jpg';
import OneplusNORD from '../../../assets/images/mobiles/nord.jpg';


let Mobiles = () => {
 
  return (
    <>
      <div className="container mt-4 align-content-center mb-5">
        <div className="row">
          <div className="col-md-4 ">
            <div className="card bg-danger justify-content-center">
            <h1 style={{color:'black'}}>OnePlus 8T</h1>
              <img src={onePlus8T} alt="ImageOne" className='bg-dark' height='300px'/>
              <div className="card-body">
                <h4><b>Specification:</b></h4>
                <h6>Warp Charge 65</h6>
                <h6>120 Hz Fluid Display</h6>
                <h6>Qualcomm® Snapdragon™ 865 and 5G</h6>
                <h6>48 MP Quad Camera</h6>
                <a href="https://www.oneplus.in/">Know More</a>
                <h2 style={{color:'black'}}>Price: <del>39,999</del> 37,999</h2>
                
                <button className="btn btn-dark"><i className="fa fa-shopping-cart"/> Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card bg-primary justify-content-center">
            <h1 style={{color:'black'}}>OnePlus 9 Pro</h1>
              <img src={oneplus9PRO} alt="ImageOne" className='bg-dark' height='300px'/>
              <div className="card-body">
                <h4><b>Specification:</b></h4>
                <h6>Hasselblad Camera for Mobile</h6>
                <h6>120 Hz Fluid Display Qualcomm®</h6>
                <h6>Snapdragon™ 888 and 5G Design</h6>
                <h6>48 MP Quad Camera</h6>
                <a href="https://www.oneplus.in/" style={{color:'red'}}>Know More</a>
                <h2 style={{color:'black'}}>Price: <del>69,999</del> 67,999</h2>
                
                <button className="btn btn-dark"><i className="fa fa-shopping-cart"/> Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card bg-danger justify-content-center">
            <h1 style={{color:'black'}}>OnePlus NORD</h1>
              <img src={OneplusNORD} alt="ImageOne" className='bg-dark' height='300px'/>
              <div className="card-body">
                <h4><b>Specification:</b></h4>
                <h6>Quad camera, OIS 48 MP Sony IMX586</h6>
                <h6>32 MP & ultra wide selfie cameras</h6>
                <h6>90 Hz Fluid AMOLED display</h6>
                <h6>Snapdragon™ 765G 5G & up to 12 GB</h6>
                <a href="https://www.oneplus.in/">Know More</a>
                <h2 style={{color:'black'}}>Price: <del>29,999</del> 27,999</h2>
                
                <button className="btn btn-dark"><i className="fa fa-shopping-cart"/> Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>);
}
export default Mobiles;