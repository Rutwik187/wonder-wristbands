import React, { useState } from "react";
import "./globalStyles.css";
import productsData from "../data";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [index, setIndex] = useState(0);
  const product = productsData[productId];

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
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
            <a
              href="javascript:void(0)"
              className="w-fit my-2 py-2 px-4 text-center text-white font-medium bg-[#FF6B66] duration-150 hover:bg-[#FE5650] active:bg-[#FF0800] rounded-lg shadow-lg hover:shadow-none"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
