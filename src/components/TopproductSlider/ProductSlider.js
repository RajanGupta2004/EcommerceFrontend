import React from "react";
import "./topproductSlider.css";

const ProductSlider = ({ url, title, price }) => {
  return (
    <>
      <div className="card" style={{ width: "14rem" }}>
        <img
          src={`http://localhost:8080/uploads/${url}`}
          className="card-img-top"
          alt="img"
        />
        {/* {console.log(url)} */}
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <h5>From &#8377; {price}</h5>
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
