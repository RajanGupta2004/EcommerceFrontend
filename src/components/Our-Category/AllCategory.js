import React from "react";
import "./AllCategory.css";

const AllCategory = ({ title, price, image, descryption }) => {
  // console.log(title, price, image, descryption);
  return (
    <>
      <div className="card my-card" style={{ width: "18rem" }}>
        <img
          src={`http://localhost:8080/uploads/${image}`}
          className="card-img-top"
          alt="..."
        />
        <div className="">
          <p className="card-text">Products:{descryption}</p>
          <div className="priceandCart">
            <p className="card-text">Price $:{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCategory;
