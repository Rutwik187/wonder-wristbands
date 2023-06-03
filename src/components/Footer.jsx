import logo from "../assets/wristBandLogo.png";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import NavbarDropdown from "./NavbarDropdown";
export default () => {
  return (
    <footer className="mt-16 text-gray-500 bg-white px-4 py-5  mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img src={logo} className="w-32 sm:mx-auto" />
        <p className="leading-relaxed mt-2 text-[15px]">
          At Wonder Wristband, we create durable and waterproof identification
          wristbands for all your needs. With years of experience and a
          commitment to customer satisfaction, trust us to help you identify
          yourself in style.
        </p>
        <br />
        <p className="leading-relaxed mt-2 text-[15px]">
          267, Shaniwar Peth, Nilesh Appt. Opp omkareshwar Temple. Pune 411030
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        <li className=" hover:text-[#5E0000]">
          <Link
            to="/"
            className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <NavbarDropdown />
        </li>
        <li className=" hover:text-[#5E0000]">
          <Link
            to="/about-us"
            className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            aria-current="page"
          >
            About-Us
          </Link>
        </li>
        <li className=" hover:text-[#5E0000]">
          <Link
            to="/blogs"
            className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            aria-current="page"
          >
            Blogs
          </Link>
        </li>
        <li className=" hover:text-[#5E0000]">
          <NavHashLink
            smooth
            to="/#contact-us"
            className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:hover:text-textColorYellow md:p-0 "
            aria-current="page"
          >
            Contact Us
          </NavHashLink>
        </li>
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2023 Priyam IT Services Private Limited All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            <li className="w-15 h-15 border rounded-full flex items-center justify-center">
              <a href="https://instagram.com/wonder.wristband?igshid=MzRlODBiNWFlZA==">
                <svg
                  class="svg-icon w-10 h-10 text-red-600"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  id="instagram"
                >
                  <linearGradient
                    id="a"
                    x1="1.464"
                    x2="14.536"
                    y1="14.536"
                    y2="1.464"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#FFC107"></stop>
                    <stop offset=".507" stop-color="#F44336"></stop>
                    <stop offset=".99" stop-color="#9C27B0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
                  ></path>
                  <linearGradient
                    id="b"
                    x1="5.172"
                    x2="10.828"
                    y1="10.828"
                    y2="5.172"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#FFC107"></stop>
                    <stop offset=".507" stop-color="#F44336"></stop>
                    <stop offset=".99" stop-color="#9C27B0"></stop>
                  </linearGradient>
                  <path
                    fill="url(#b)"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
                  ></path>
                  <linearGradient
                    id="c"
                    x1="11.923"
                    x2="12.677"
                    y1="4.077"
                    y2="3.323"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#FFC107"></stop>
                    <stop offset=".507" stop-color="#F44336"></stop>
                    <stop offset=".99" stop-color="#9C27B0"></stop>
                  </linearGradient>
                  <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
};
