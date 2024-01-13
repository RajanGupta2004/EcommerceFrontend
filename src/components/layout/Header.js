import React from "react";
import "./header.css";
// import { NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";

const Header = () => {
  const cart = useSelector((state) => state.cart.cartdata);
  const auth = localStorage.getItem("user");
  // console.log(auth, 10);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary myheader">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand">
            Ecommerce app
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link ">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/category" className="nav-link ">
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link ">
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                {auth ? (
                  <NavLink onClick={handleLogout} to="/" className="nav-link ">
                    Logout
                  </NavLink>
                ) : (
                  <NavLink to="/login" className="nav-link ">
                    Login
                  </NavLink>
                )}
              </li>
              <li className="nav-item"></li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link ">
                  {/* Cart<span>({cart.length})</span> */}
                  <i class="fa-solid fa-cart-shopping">
                    <span>({cart.length})</span>
                  </i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
