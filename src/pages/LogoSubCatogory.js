import React from "react";
// import CategoryBanner from "../component/LogoSubCategory/CategoryBanner/CategoryBanner";
import BannerLogo from "../component/LogoSubCategory/BannerLogo/BannerLogo";
import Logos from "../component/LogoSubCategory/SubCategoryLogos/Logos";
import Navbar from "../component/Navbar/Navbar";
// import { categories } from "../component/LogoSubCategory/DumyData";

// import axios from "axios";
import CategoriesService from "../services/Categories";
import LogosService from "../services/Logos";
import { useParams } from "react-router-dom";

const LogoSubCatogory = ({ logos, categories, setLogo }) => {
  const { variable } = useParams();
  // const [Logoos, setLogoos] = React.useState([]);
  // const [categories, setCategories] = React.useState([]);

  // const getCategories = () => {
  //   CategoriesService.getCategories()
  //     .then((data) => {
  //       setCategories(data.categories);
  //       console.log("Response category>> ", data.categories);
  //     })
  //     .catch((err) => {
  //       console.log("Error ", err);
  //     });
  // };

  // const getLogos = () => {
  //   LogosService.getLogos()
  //     .then((data) => {
  //       setLogoos(data);
  //       console.log("Response Logos>> ", data);
  //     })
  //     .catch((err) => {
  //       console.log("Error ", err);
  //     });
  // };
  // React.useEffect(() => {
  //   getCategories();
  //   getLogos();
  // }, []);
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
                  logos={logos}
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
