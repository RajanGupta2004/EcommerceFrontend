// import React from "react";
import axios from "axios";
import "./allSingleProduct.css";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
//============================================
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add_TO_CART, cart_total_price } from "../../feature/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//===========================================

const AllSingleProduct = () => {
  const [myAlldata, setmyAlldata] = useState({});
  const params = useParams();
  const AllSingleProductData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/user/Alladdproduct/${params.id} `
      );
      const allData = await res.data;

      setmyAlldata(allData);
      // console.log(myAlldata, 88);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AllSingleProductData();
    // eslint-disable-next-line
  }, []);

  //=================================
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addtocart = (image, title, price) => {
    const cdata = { img: image, t: title, P: price };
    // console.log(cdata);
    dispatch(add_TO_CART(cdata));
    dispatch(cart_total_price(cdata.P));
    toast("Product added sucessfully..");
    navigate("/cart");
  };
  ///===================================
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-md-7 	col-lg-6">
            <img
              src={`http://localhost:8080/uploads/${myAlldata.imageURL}`}
              alt="image1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-5 col-lg-6">
            <h2 className="productName">{myAlldata.title}</h2>
            <h3 className="producttitle">MY PRODUCT</h3>
            <p className="rating">
              <div>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
            </p>
            <h3>
              &#8377;{myAlldata.price}/<sub>only</sub>
            </h3>
            <p>
              {myAlldata.descryption}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              culpa excepturi perspiciatis deleniti eaque accusantium maiores
              repellat corporis, quis quia alias tempore facilis modi deserunt
              reiciendis? Est dicta sunt quae.
            </p>
            <div className="Quantity">
              <h3>Qunatity:</h3>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button type="button" className="btn ">
                  -
                </button>
                <button type="button" className="btn btn-secondary">
                  2
                </button>
                <button type="button" className="btn ">
                  +
                </button>
              </div>
            </div>
            <div className="cart-btn">
              <button type="button" className="btn btn-primary BuyNow-btn">
                BUY NOW
              </button>
              <button
                type="button"
                onClick={() =>
                  addtocart(
                    myAlldata.imageURL,
                    myAlldata.title,
                    myAlldata.price
                  )
                }
                class="btn btn-dark"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllSingleProduct;
