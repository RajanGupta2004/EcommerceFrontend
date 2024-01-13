import React from "react";
import Layout from "../components/layout/Layout";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="pageNotfound">
        <div>
          <h1 className="error">404</h1>
          <h3>Oops ! Page Not Found</h3>
          <NavLink className="btn btn-danger" to="/" role="button">
            Go Back
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
