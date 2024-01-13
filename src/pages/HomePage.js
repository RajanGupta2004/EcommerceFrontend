import React from "react";
import Layout from "../components/layout/Layout";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import "react-multi-carousel/lib/styles.css";
import "./homepage.css";
import Allproduct from "../components/Allproducts/Allproduct";

const HomePage = () => {
  return (
    <>
      <Layout>
        <BannerSlider />
        <Allproduct />
        <Allproduct />
        {/* <Allproduct /> */}
      </Layout>
    </>
  );
};

export default HomePage;
