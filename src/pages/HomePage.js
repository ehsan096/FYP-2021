import React from "react";

import Banner from "../component/Banner/Banner";
import Footer from "../component/Footer/Footer";
import Logocategory from "../component/LogoCategory/Logocategory";
import Navbar from "../component/Navbar/Navbar";

const HomePage = ({ categories }) => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Logocategory categories={categories} />
      <Footer />
    </div>
  );
};

export default HomePage;
