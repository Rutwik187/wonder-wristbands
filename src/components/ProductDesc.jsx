import React, { useState, useEffect } from "react";
import "./productDescStyles.css";
import productsData from "../data";
import { useParams } from "react-router-dom";

import { urlFor, client } from "../client";
import { PortableText } from "@portabletext/react";

import mailIcon from "../assets/gmail.png";
import whatsAppIcon from "../assets/whatsapp.png";

import { RichTextComponent } from "../components/RichTextComponent";

const ProductDetails = () => {
  const { product_name } = useParams();
  const { product_img } = useParams();

  const [index, setIndex] = useState(0);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const query = `*[slug.current == '${product_name}'][0]`;

    client.fetch(query).then((data) => {
      setProduct(data);
    });
  }, []);

  const ImgArr = JSON.parse(decodeURIComponent([product_img]));

  const [Image, SetImage] = useState(urlFor(ImgArr[0]).url());

  console.log(ImgArr);

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-0  text-gray-600 md:px-8">
        <div className="product-detail-container flex-col md:flex-row">
          <div className="flex-1">
            <div className="image-container">
              <img src={Image} className="product-detail-image" />
            </div>
            <div className="small-images-container">
              {ImgArr?.map((item, i) => (
                <img
                  className="small-image hover:scale-110"
                  src={urlFor(item).url()}
                  key={i}
                  onClick={() => SetImage(urlFor(item).url())}
                  alt="Images"
                />
              ))}
            </div>
          </div>

          <div className="product-detail-desc flex flex-col gap-4 flex-1">
            <h1 className="text-[#5E0000] text-3xl font-semibold sm:text-4xl">
              {product.name}
            </h1>

            <p>
              {" "}
              <PortableText
                value={product.body}
                components={RichTextComponent}
              />
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="whatsapp://send?phone=7066104566"
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
                href="mailto:wonderwristband@gmail.com"
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
