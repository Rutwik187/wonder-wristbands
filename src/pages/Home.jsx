import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Numbers from "../components/Numbers";
import ContactUs from "../components/ContactUs";

import Testimonials from "../components/Testimonials";
import AboutUs from "../components/AboutUs";
import Blogs from "../components/Blogs";

import Products from "../components/Products";
import Instagram from "../components/Instagram";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <AboutUs />
      <Numbers />
      <Products />
      <Blogs />
      <Testimonials />
      <Instagram />
      <ContactUs />
    </div>
  );
};

export default Home;
