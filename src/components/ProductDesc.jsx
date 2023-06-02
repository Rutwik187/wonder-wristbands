import React, { useState } from "react";
import "./productDescStyles.css";
import productsData from "../data";
import { useParams } from "react-router-dom";

import mailIcon from "../assets/gmail.png";
import whatsAppIcon from "../assets/whatsapp.png";

const ProductDetails = () => {
  const { productId } = useParams();
  const [index, setIndex] = useState(0);
  const product = productsData[productId];

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-0  text-gray-600 md:px-8">
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              <img
                src={product.images[index]}
                className="product-detail-image"
              />
            </div>
            <div className="small-images-container">
              {product.images.map((item, i) => (
                <img
                  key={i}
                  src={item}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>

          <div className="product-detail-desc flex flex-col gap-4">
            <h1 className="text-[#5E0000] text-3xl font-semibold sm:text-4xl">
              {product.name}
            </h1>

            <p>{product.desc}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="whatsapp://send?phone=0000000000"
                className="flex gap-2 items-center justify-center border-yellow-700 border-2 w-fit p-2 rounded-lg shadow-lg shadow-red-500/40"
              >
                <img
                  style={{
                    width: "35px",
                    height: "35px",
                    padding: "3px",
                  }}
                  src={whatsAppIcon}
                  alt=""
                />
                <h3 className="text-[#5E0000] text-1xl font-semibold sm:text-xl">
                  Contact Us
                </h3>
              </a>

              <a
                target="_blank"
                href="mailto:rutwikshinde34@gmail.com"
                className="flex gap-2 items-center justify-center border-yellow-700 border-2 w-fit p-2 rounded-lg shadow-lg shadow-red-500/40"
              >
                <img
                  style={{
                    width: "35px",
                    height: "35px",
                    padding: "3px",
                  }}
                  src={mailIcon}
                  alt=""
                />
                <h3 className="text-[#5E0000] text-1xl font-semibold sm:text-xl">
                  Contact Us
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
