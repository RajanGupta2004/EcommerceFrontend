import { useEffect, useState } from "react";
import "./CartHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeCartItem } from "../../feature/CartSlice";
const CartHeader = () => {
  const cart = useSelector((state) => state.cart.cartdata);
  const cartprice = useSelector((state) => state.cart.cartTotalPrice);
  const cart_quantity = useSelector((state) => state.cart.quantity);
  const cart_total_price = useSelector((state) => state.cart.cartTotal);
  // const [prices, setPrices] = useState([]);
  const navigate = useNavigate();

  const handleCartbtn = () => {
    navigate("/");
  };
  const dispatch = useDispatch();

  const totalAmount = () => {
    const my_tp =
      cartprice.length > 0
        ? cartprice.reduce((accum, curVal) => {
            return accum + curVal;
          })
        : "";
    // setPrices(my_tp);
  };

  useEffect(() => {
    totalAmount();
    // eslint-disable-next-line
  }, []);
  // console.log(cartprice);
  // console.log(cart_quantity, 31);

  const deleteCartItem = (index) => {
    // console.log(index);
    dispatch(removeCartItem(index));
  };

  return (
    <>
      <div className="main-cart-section">
        <div className="cart-hero">
          <h1>Cart Section</h1>
        </div>
        {cart.length > 0 ? (
          <div>
            <div className="card-container">
              <div className="card-title">
                <h5>Product </h5>
                <h5>Price</h5>
                <h5>Quantity</h5>
                <h5>Delete</h5>
              </div>
            </div>
            <div className="card_detail-container">
              {cart.map((ele, index) => (
                <>
                  <div className="card-detail">
                    <div className="first-card-data">
                      <img
                        src={`http://localhost:8080/uploads/${ele.img}`}
                        alt="img"
                      />
                      <p>{ele.t}</p>
                    </div>
                    <div className="second-card-data">
                      {ele.P * cart_quantity}
                    </div>
                    <div className="third-card-data">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic mixed styles example"
                      >
                        <button type="button" className="btn ">
                          -
                        </button>
                        <button type="button" className="btn btn-secondary">
                          {cart_quantity}
                        </button>
                        <button type="button" className="btn ">
                          +
                        </button>
                      </div>
                    </div>
                    <div
                      className="fourth-card-data"
                      onClick={() => deleteCartItem(index)}
                    >
                      <i class="fa-sharp fa-solid fa-trash"></i>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="price-main-container">
              <div className="totalprice">
                <h3>
                  Total Price : &#8377;
                  <span className="pppp">{cart_total_price}</span>
                </h3>
                <button className="btn btn-secondary">Check Out</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <h3>Our Cart is Empty</h3>
            <button className="btn btn-secondary" onClick={handleCartbtn}>
              Continue Shoping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartHeader;
