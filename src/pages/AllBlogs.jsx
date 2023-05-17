import React, { useState, useEffect } from "react";
import { urlFor, client } from "../client";
import { Link } from "react-router-dom";
import Loader from "../components/loader";

const AllBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "post"] | order(_createdAt desc)';

    client.fetch(query).then((data) => {
      setPosts(data);
    });
  }, []);
  return (
    <div className="px-2 md:px-12">
      {posts.map ? (
        <Loader />
      ) : (
        (item, index) => (
          <div key={index} className=" text-black-50">
            <div className="container grid grid-cols-12 mx-auto py-12 border-y-2 border-gray-400">
              <img
                className="bg-no-repeat bg-cover  col-span-full lg:col-span-4"
                src={urlFor(item.mainImage).width(500).height(300).url()}
                alt={item.title}
              />

              <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                <h1 className="text-3xl font-semibold">{item.title}</h1>
                <p className="flex-1 pt-2">{item.metaData}</p>

                <div className="flex items-center justify-between pt-2 font-medium text-primary-600  hover:underline ">
                  <div className="flex space-x-2">
                    <Link
                      to={`/blogs/${item.slug.current}`}
                      rel="noopener noreferrer"
                      className="inline-flex items-center pt-2 pb-6 space-x-2 text-lg "
                    >
                      Read more
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <span className="text-xs">3 min read</span>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default AllBlogs;
