import React, { useState } from "react";
import "./main.css";
import veriler from "../data/veriler.json";
import CommentlList from "../components/CommentlList";

import product1 from "../data/image/1.png";
import product2 from "../data/image/3.png";
import product3 from "../data/image/2.png";

import product4 from "../data/image/4.png"; // Import product images
import product5 from "../data/image/5.png";
import product6 from "../data/image/1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(product1);

  const handleImageChange = (newImage) => {
    setCurrentImage(newImage);
  };

  const handleAddToCart = () => {
    alert("Product added to cart");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="main">
      <section className="product-detail">
        <div className="image-slider">
          <Slider {...settings}>
            <div>
              <img src={product1} alt="Product" />
            </div>
            <div>
              <img src={product2} alt="Product" />
            </div>
            <div>
              <img src={product3} alt="Product" />
            </div>
          </Slider>
        </div>
        <div className="product-info">
          <h2>About Product</h2>
          <div className="star-ratings">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et
            velit eu ex varius semper. Fusce vitae fermentum odio. Sed nec
            turpis nec lorem placerat congue. Nulla at justo eget augue
            ultricies facilisis.
          </p>
          <p>
            Fusce tincidunt, ante non condimentum varius, lorem orci suscipit
            leo, at condimentum arcu est in dolor. Vivamus ullamcorper, elit non
            commodo dignissim, odio risus hendrerit libero, vel consectetur orci
            massa eget nisi.
          </p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </section>
      <section className="color-options">
        <h3>Available Colors</h3>
        <div className="color-thumbnails">
          <img
            src={product4}
            alt="Color 1"
            onClick={() => handleImageChange(product1)}
          />
          <img
            src={product5}
            alt="Color 2"
            onClick={() => handleImageChange(product2)}
          />
          <img
            src={product6}
            alt="Color 3"
            onClick={() => handleImageChange(product3)}
          />
        </div>
      </section>

      <section className="comment-field">
        <h1 onClick={() => setShow(!show)}>
          Comments
          <span className="toggle-icon">
            {show ? (
              <i className="fas fa-caret-down" style={{ color: "#ff6600" }}></i>
            ) : (
              <i className="fas fa-caret-up" style={{ color: "#ff6600" }}></i>
            )}
          </span>
        </h1>
        {show && <CommentlList yorumlar={veriler.comments} />}
      </section>
    </main>
  );
};

export default Main;
