import { useState } from "react";
import logo from "../assets/wristBandLogo.png";
import { Link } from "react-router-dom";

import React, { Fragment, lazy } from "react";
import { Menu, Transition } from "@headlessui/react";
import NavbarDropdown from "./NavbarDropdown";
import { NavHashLink } from "react-router-hash-link";

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth={1.5}
  stroke="currentColor"
  className="w-6 h-6"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
  />
</svg>;

export default function Navbar() {
  return (
    <div className="relative z-10">
      <div className="mx-auto w-[95%]">
        <div className="relative">
          <Menu>
            <div className="relative py-4">
              <nav
                className="relative flex items-center justify-between"
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <Link to="/">
                      <img
                        className="h-32 mr-3 sm:h-32"
                        src={logo}
                        alt="Comapany logo"
                      />
                    </Link>
                    <div className="flex items-center md:hidden">
                      <Menu.Button className="inline-flex items-center justify-center rounded-md  p-2 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <svg
                          className="h-8 w-8"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                          />
                        </svg>

                        {/* <MenuIcon  /> */}
                      </Menu.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden  md:ml-10 md:flex md:flex-row md:items-center md:justify-between ">
                  <div className="flex flex-row items-center space-x-8">
                    <Link
                      to="/"
                      className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0"
                      aria-current="page"
                    >
                      Home
                    </Link>
                    <NavbarDropdown />
                    <Link
                      to="/about-us"
                      className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
                      aria-current="page"
                    >
                      About-Us
                    </Link>

                    <Link
                      to="/blogs"
                      className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
                      aria-current="page"
                    >
                      Blogs
                    </Link>
                    <NavHashLink
                      smooth
                      to="/#contact-us"
                      className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
                      aria-current="page"
                    >
                      Contact Us
                    </NavHashLink>

                    <NavHashLink
                      to="/#products"
                      className="block py-2 px-4 text-center text-white font-medium bg-[#FF6B66] duration-150 hover:bg-[#FE5650] active:bg-[#FF0800] rounded-lg shadow-lg hover:shadow-none"
                    >
                      Buy Now
                    </NavHashLink>
                  </div>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="-translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="-translate-x-0"
              leaveTo="translate-x-full"
            >
              <Menu.Items className="absolute top-0 right-0 w-[60%] md:hidden bg-white">
                <div className="overflow-hidden rounded-l  shadow-md ring-1">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img className="h-8 mr-3 sm:h-10" src={logo} alt="" />
                    </div>
                    <div className="-mr-2">
                      <Menu.Button className="inline-flex items-center justify-center rounded-md p-2hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-8 w-8"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </Menu.Button>
                    </div>
                  </div>
                  <div className="flex flex-col px-2 pt-2 pb-3">
                    <div className="flex flex-col px-2 pt-2 pb-2 space-y-5">
                      <Link
                        to="/"
                        className="block py-2 pl-3 pr-4 text-black  rounded  md:hover:text-textColorYellow md:p-0"
                        aria-current="page"
                      >
                        Home
                      </Link>
                      <NavbarDropdown />
                      <Link
                        to="/about-us"
                        className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
                        aria-current="page"
                      >
                        About-Us
                      </Link>

                      <Link
                        to="/blogs"
                        className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
                        aria-current="page"
                      >
                        Blogs
                      </Link>
                      <NavHashLink
                        to="/#contact-us"
                        className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
                        aria-current="page"
                      >
                        Contact-Us
                      </NavHashLink>
                      <Link
                        to="/"
                        className="bg-textColorYellow hover:bg-yellow-400 px-4 border border-yellow-700 block py-2 pl-3 pr-4 text-black  rounded  "
                        aria-current="page"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
