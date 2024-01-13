import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const navigate = useNavigate();

  // login logout handling
  useEffect(() => {
    const auth = localStorage.getItem("user");
    // console.log(auth);
    if (auth) {
      navigate("/");
    }
  }, []);

  // form handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/user/register `,
        { name, email, password, confirm_password }
      );

      if (res && res.data.status) {
        localStorage.setItem("user", JSON.stringify(res));
        alert(res.data.message);
        navigate("/login");
      } else {
        alert(res.data.status);
      }
    } catch (error) {
      console.log(error);
    }

    // console.log(name, email, password, confirm_password);
  };
  return (
    <>
      <Layout>
        <div className="registerPage">
          <h3>Registeration page</h3>
          <form className="form" onSubmit={handleSubmit} id="formdata">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className="form-control"
                id="Username"
                aria-describedby="emailHelp"
                required
              />
            </div>
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
            <div className="mb-3">
              <label htmlFor="userConfirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirm_password}
                onChange={(e) => setconfirm_password(e.target.value)}
                className="form-control"
                id="userConfirmPassword"
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
              Submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;
