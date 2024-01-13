import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import "./Category.css";
import AllCategory from "../components/Our-Category/AllCategory";
// import ProductdataApi from "../components/fakedata/ProductdataApi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const filterprice = [1000, 2000, 3000, 4000, 5000, 6000, 10000];
  const [userfiltervalue, setuserfiltervalue] = useState([]);
  // console.log(userfiltervalue

  const handlefilter = (event) => {
    const filterdata = +event.target.value;
    const filteredvalues = fetchdata.filter((data) => data.price > filterdata);
    setuserfiltervalue(filteredvalues);
  };

  const [fetchdata, setfetchdata] = useState([]);
  const GetAllproductCategoryData = async (req, res) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API}/api/user/Alladdproduct `
      );
      const Apidata = res.data;
      setfetchdata(Apidata);
      // console.log(Apidata);
    } catch (error) {
      res.status(201).send({ message: "Error in fetching data" });
    }
  };

  useEffect(() => {
    GetAllproductCategoryData();
  }, []);

  const DataThroughId = (id) => {
    navigate(`/allsingle/${id}`);
    // console.log(id);
  };

  return (
    <>
      <Layout>
        <div className="main-container">
          <div className="hero-section">
            <h1>Our Products</h1>
          </div>
          <div className="container">
            <div className="filter-section">
              <h4>Our Filter</h4>
              <div className="company-filter">
                <label>Choose Company</label>
                <select name="company" id="company">
                  <option value="hp">hp</option>
                  <option value="Dell">Dell</option>
                  <option value="Lenvo">Lenvo</option>
                </select>
              </div>

              <div className="company-filter">
                <label>Price</label>
                <select name="company" id="company" onChange={handlefilter}>
                  {filterprice.map((value, index) => {
                    return (
                      <>
                        <option key={index} value={value}>
                          Greater than {value}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="all-card-products">
              <div className="card-products">
                {userfiltervalue.map((e, i) => (
                  <div onClick={() => DataThroughId(e._id)}>
                    <AllCategory
                      key={e._id}
                      title={e.title}
                      price={e.price}
                      descryption={e.descryption}
                      image={e.imageURL}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Category;
