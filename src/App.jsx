import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Numbers from "./components/Numbers";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import Blogs from "./components/Blogs";

const App = () => {
  return (
    <div className="bg-[#F8F4EB]">
      <Hero />
      <Features />
      <AboutUs />
      <Numbers />
      <Blogs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
