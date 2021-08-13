import React from 'react';
import { Link } from 'react-router-dom';

let Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary" >
        <Link className="navbar-brand" to="/">
          Pro<span style={{color:'blue'}}>Kart</span>
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/mobile">

                Mobile
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/laptop">

                Laptops
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/watches">

                Watches
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/upload">
                Upload product
              </Link>
            </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <ul className="navbar-nav"></ul>

              <li className="nav-item active text-right">
                <Link className="nav-link" to="/login">
                  Login
              </Link>
              </li>
              <li className="nav-item active text-right">
                <Link className="nav-link" to="/Signup">
                  Signup
              </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/cart">
                  <i className="fa fa-shopping-cart">
                    <span className="badge badge-success">2</span>
                  </i>
                </Link>
              </li>
              <li className="nav-item active text-right">
                <Link className="nav-link" to="/profile">
                  Profile
                  <i class="fas fa-user-circle"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;