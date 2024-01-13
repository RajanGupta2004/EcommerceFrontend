import React from "react";
import "./admin.css";
import axios from "axios";
import { useState } from "react";

const Admin = () => {
  const [title, setProductTitle] = useState("");
  const [price, setPrice] = useState("");
  const [descryption, setproductDescryption] = useState("");
  const [productURL, setUploadimage] = useState("");

  const handleAdmin = async (e) => {
    e.preventDefault();
    console.log("muuyyt", productURL);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("descryption", descryption);
    formData.append("productURL", productURL);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/user/addproducts`,
        formData
      );

      if (res.data.status) {
        alert(res.data.message);
      }

      // reset input field of form
      setProductTitle("");
      setPrice("");
      setproductDescryption("");
      setUploadimage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header>
        <h1>Admin Page</h1>
      </header>
      <div className="container">
        <div className="content">
          <h2>Dashboard</h2>
          <p>Welcome to the admin dashboard.</p>
          <form className="" onSubmit={handleAdmin} method="post">
            <h3>Add Home Page Products</h3>

            <div className="mb-3">
              <label className="form-label">Add Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setProductTitle(e.target.value)}
                required
                className="form-control"
                id="exampleI"
              />
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  className="form-control"
                  id="exampleIn"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampl" className="form-label">
                Add Descryption
              </label>
              <input
                type="text"
                value={descryption}
                onChange={(e) => setproductDescryption(e.target.value)}
                required
                className="form-control"
                id="examp"
              />
            </div>

            <div className="image-upload-container">
              <input
                type="file"
                // value={productURL}
                name="productURL"
                onChange={(e) => setUploadimage(e.target.files[0])}
                id="image-upload"
              />
              <label htmlFor="image-upload" className="custom-upload-button">
                Upload Image
              </label>
            </div>

            <button type="submit" className="button">
              Add Products
            </button>
          </form>
          {/* ================ */}
          <form className="" onSubmit={handleAdmin} method="post">
            <h3>Add Category Page Products</h3>

            <div className="mb-3">
              <label className="form-label">Add Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setProductTitle(e.target.value)}
                required
                className="form-control"
                id="exampleI"
              />
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                  className="form-control"
                  id="exampleIn"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampl" className="form-label">
                Add Descryption
              </label>
              <input
                type="text"
                value={descryption}
                onChange={(e) => setproductDescryption(e.target.value)}
                required
                className="form-control"
                id="examp"
              />
            </div>

            <div className="image-upload-container">
              <input
                type="file"
                // value={productURL}
                name="productURL"
                onChange={(e) => setUploadimage(e.target.files[0])}
                id="image-upload"
              />
              <label htmlFor="image-upload" className="custom-upload-button">
                Upload Image
              </label>
            </div>

            <button type="submit" className="button">
              Add Products
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Admin;
