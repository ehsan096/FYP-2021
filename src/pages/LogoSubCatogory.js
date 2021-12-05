import React from "react";
import CategoryBanner from "../component/LogoSubCategory/CategoryBanner/CategoryBanner";
import BannerLogo from "../component/LogoSubCategory/BannerLogo/BannerLogo";
import Logos from "../component/LogoSubCategory/SubCategoryLogos/Logos";
import Navbar from "../component/Navbar/Navbar";
// import { categories } from "../component/LogoSubCategory/DumyData";

import axios from "axios";
import { useParams } from "react-router-dom";

const LogoSubCatogory = ({ setLogo }) => {
  const { variable } = useParams();
  const [Logoos, setLogoos] = React.useState([]);
  const [categories, setCategories] = React.useState([]);

  const getCategories = () => {
    axios
      .get("http://localhost:4000/api/categories")
      .then((res) => {
        setCategories(res.data.categories);
        console.log("Response >> ", res.data.categories);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };

  const getLogos = () => {
    axios
      .get("http://localhost:4000/api/logos")
      .then((res) => {
        setLogoos(res.data);
        console.log("Response Logos>> ", res.data);
      })
      .catch((err) => {
        console.log("Error ", err);
      });
  };
  React.useEffect(() => {
    getCategories();
    getLogos();
  }, []);
  console.log("URL Variable > ", variable);
  return (
    <div>
      <Navbar />
      {categories.length > 0
        ? categories.map((categry) =>
            categry.name === variable ? (
              <>
                <BannerLogo
                  BannerTitle={categry.bannerTitle}
                  paragraph={categry.paragraph}
                />
                <Logos
                  setLogo={setLogo}
                  title={categry.logoTitle}
                  Logoos={Logoos}
                />
              </>
            ) : (
              ""
            )
          )
        : console.log("Category else ")}
    </div>
  );
};

export default LogoSubCatogory;
