import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllBlogs from "./pages/AllBlogs";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDesc from "./components/ProductDesc";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <div className="bg-[#F8F4EB]">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-desc/:productId" element={<ProductDesc />} />
          <Route path="/blogs" element={<AllBlogs />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
