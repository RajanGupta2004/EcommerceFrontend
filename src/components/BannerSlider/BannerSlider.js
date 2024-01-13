import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./bannerSlider.css";

const BannerSlider = () => {
  return (
    <>
      <div className="banner1">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={"/images/banner1.webp"}
              alt="First slide"
              style={{ height: "50vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"/images/banner2.webp"}
              alt="Second slide"
              style={{ height: "50vh" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={"/images/banner3.webp"}
              alt="Third slide"
              style={{ height: "50vh" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default BannerSlider;
