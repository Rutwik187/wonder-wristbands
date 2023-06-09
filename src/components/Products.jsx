import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productsData from "../data";

import { urlFor, client } from "../client";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "products"]`;

    client.fetch(query).then((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <section className="py-14" id="products">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-[#5E0000] text-3xl font-semibold sm:text-4xl">
            Products We Make
          </h3>
          <p className="mt-3">Experience the best, every time.</p>
        </div>
        <div className="flex flex-wrap gap-6 align-middle justify-around">
          {products.map((item, index) => (
            <div key={index}>
              <div class="relative mt-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a
                  class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <img
                    class="object-cover"
                    src={urlFor(item.mainImage).url()}
                    alt="product image"
                  />
                </a>
                <div class="mt-4 px-5 pb-5">
                  <a href="#">
                    <h5 class="text-xl tracking-tight text-slate-900">
                      {item.name}
                    </h5>
                  </a>
                  <div class="mt-2 mb-5 flex items-center justify-between"></div>
                  <Link
                    to={`/${item.slug.current}/${encodeURIComponent(
                      JSON.stringify([
                        item.mainImage,
                        item.secondImage,
                        item.thirdImage,
                        item.forthImage,
                      ])
                    )}`}
                    class="flex items-center justify-center  px-5 py-2.5 text-center text-sm font-medium   text-white bg-[#FF6B66] duration-150 hover:bg-[#FE5650] active:bg-[#FF0800] rounded-lg shadow-lg hover:shadow-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
