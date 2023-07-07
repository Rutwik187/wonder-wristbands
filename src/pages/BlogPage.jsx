import React, { useState, useEffect } from "react";
import { urlFor, client } from "../client";
import { PortableText } from "@portabletext/react";

import { useParams } from "react-router-dom";
import { RichTextComponent } from "../components/RichTextComponent";
import Loader from "../components/Loader";

const BlogPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    const query = `*[_type == "post" && slug.current == '${slug}'][0]`;

    client.fetch(query).then((data) => {
      setPost(data);
    });
  }, []);
  return (
    <>
      <div>
        <div className="container py-6 md:py-10">
          <div className="mx-auto max-w-4xl">
            <div className="">
              <h1 className="pt-5 font-body text-3xl font-semibold text-primary sm:text-3xl md:text-4xl xl:text-4xl">
                {post.title}
              </h1>
              {/* <img
                  className="bg-no-repeat bg-cover  col-span-full lg:col-span-4"
                  src={urlFor(post.mainImage).width(500).height(300).url()}
                  alt={post.title}
                /> */}
              {/* <div className="flex items-center pt-5 md:pt-10">
                  <div>
                    <img
                      src="/assets/img/blog-author.jpg"
                      className="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                      alt="author image"
                    />
                  </div>
                  <div className="pl-5">
                    <span className="block font-body text-xl font-bold text-grey-10">
                      By Christy Smith
                    </span>
                    <span className="block pt-1 font-body text-xl font-bold text-grey-30">
                      February 27, 2022
                    </span>
                  </div>
                </div> */}
              <br />
              <span className="block pt-1 font-body text-xl  text-grey-30">
                {new Date(post.publishedAt).toDateString()}
              </span>
            </div>
            {/* <img
                className="bg-no-repeat bg-cover  col-span-full lg:col-span-4"
                src={urlFor(post.mainImage).url()}
                alt={post.title}
              /> */}
            <div className="prose max-w-none pt-8">
              <PortableText
                // Pass in block content straight from Sanity.io
                value={post.body}
                components={RichTextComponent}
              />
            </div>
            {/* <div className="mt-10 flex justify-between border-t border-lila py-12">
                <a href="/" className="flex items-center">
                  <i className="bx bx-left-arrow-alt text-2xl text-primary"></i>
                  <span className="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">
                    Previous Post
                  </span>
                </a>
                <a href="/" className="flex items-center">
                  <span className="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">
                    Next Post
                  </span>
                  <i className="bx bx-right-arrow-alt text-2xl text-primary"></i>
                </a>
              </div>
              <div className="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                  <img
                    src="/assets/img/blog-author.jpg"
                    className="rounded-full shadow"
                    alt="author image"
                  />
                </div>
                <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                  <h3 className="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                    Christy Smith
                  </h3>
                  <p className="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit.
                  </p>
                  <div className="flex items-center justify-center pt-5 md:justify-start">
                    <a href="/">
                      <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                      <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                      <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                      <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                    </a>
                    <a href="/" className="pl-4">
                      <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                    </a>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container flex flex-col justify-between py-6 sm:flex-row">
          <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
            <a href="/">
              <i className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-twitter text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-dribbble text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-linkedin text-2xl text-white hover:text-yellow"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-instagram text-2xl text-white hover:text-yellow"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
