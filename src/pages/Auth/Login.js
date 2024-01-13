import React, { useEffect } from "react";
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  // login logout feature
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  // form handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/user/login `,
        { email, password }
      );

      if (res.data.status === "sucess") {
        console.log(res.data.status, 30);
        localStorage.setItem("user", JSON.stringify(res));
        alert(res.data.message);
        navigate("/");
      } else {
        console.log(res.data.status, 35);

        alert(res.data.status);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Layout>
        <div className="registerPage">
          <h3>Login page</h3>
          <form className="form" onSubmit={handleSubmit} id="formdata">
            <div className="mb-3">
              <label htmlFor="useremail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="form-control"
                id="useremail"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                className="form-control"
                id="userPassword"
                required
              />
            </div>

            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Login
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Login;
