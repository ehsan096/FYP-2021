import React from "react";

import Banner from "../component/Banner/Banner";
import Footer from "../component/Footer/Footer";
import Logocategory from "../component/LogoCategory/Logocategory";
import Navbar from "../component/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Logocategory />
      <Footer />
    </div>
  );
};

export default HomePage;
