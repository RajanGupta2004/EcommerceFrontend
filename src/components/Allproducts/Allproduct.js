import "./Allproducts.css";
import Carousel from "react-multi-carousel";
// import data from "../fakedata/ProductdataApi";
import ProductSlider from "../TopproductSlider/ProductSlider";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Allproduct = () => {
  const [productdata, setProductdata] = useState([]);
  const navigate = useNavigate();

  const GetAllData = async (req, res) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/user/addproducts `
      );
      // console.log(res.data);
      const Apidata = res.data;

      setProductdata(Apidata);
    } catch (error) {
      console.log("erroe in fetching my friends ", error);
    }
  };

  useEffect(() => {
    GetAllData();
    // eslint-disable-next-line
  }, [Allproduct]);

  const getSingleProductId = (id) => {
    console.log(id);
    navigate(`/single/${id}`);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="carddata">
        <h2>Top Search</h2>
        <div>
          <Carousel responsive={responsive}>
            {productdata.map((e, i) => (
              <div key={e._id} onClick={() => getSingleProductId(e._id)}>
                <ProductSlider
                  key={i}
                  title={e.title}
                  url={e.imageURL}
                  price={e.price}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Allproduct;
