import "./singleProduct.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  add_TO_CART,
  cartTotal,
  cart_total_price,
  qtt,
} from "../../feature/CartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SingleProduct = () => {
  const params = useParams();
  const [dataById, setdataById] = useState({});
  const [quantity, setQuantity] = useState(1);
  const GetSingleData = async (req, res) => {
    try {
      // console.log(params, 78);

      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/user/addproducts/${params.id} `
      );
      // console.log(res);
      const sData = res.data;
      // console.log(sData);

      setdataById(sData);
      // console.log(dataById);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetSingleData();
    // eslint-disable-next-line
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addtocart = (image, title, price) => {
    const cdata = { img: image, t: title, P: price };
    // console.log(cdata);
    dispatch(add_TO_CART(cdata));
    dispatch(cart_total_price(cdata.P));
    dispatch(qtt(quantity));
    dispatch(cartTotal(cdata.P * quantity));
    toast.success("Product added sucessfully..");
    navigate("/cart");
  };
  // console.log(cart, 41);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
    if (quantity === 1) {
      setQuantity(1);
      toast.error("One item should be add to cart");
    }
  };

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-md-7 	col-lg-6">
            {/* <img src={"dataById.imageURL"} alt="image1" /> */}
            <img
              src={`http://localhost:8080/uploads/${dataById.imageURL}`}
              alt="image1"
              className="img-fluid"
            />
          </div>
          <div className="col-md-5 col-lg-6">
            <h2 className="productName">{dataById.title}</h2>
            <h3 className="producttitle">{dataById.title}</h3>
            <p className="rating">
              <div>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
            </p>
            <h3>
              &#8377;{dataById.price}/<sub>only</sub>
            </h3>
            <p>
              {dataById.descryption}
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
                <button type="button" className="btn " onClick={decrement}>
                  -
                </button>
                <button type="button" className="btn btn-secondary">
                  {quantity}
                </button>
                <button type="button" className="btn " onClick={increment}>
                  +
                </button>
              </div>
            </div>
            <div className="cart-btn">
              <button type="button" className="btn btn-primary BuyNow-btn">
                BUY NOW
              </button>
              <button
                onClick={() =>
                  addtocart(dataById.imageURL, dataById.title, dataById.price)
                }
                type="button"
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

export default SingleProduct;
