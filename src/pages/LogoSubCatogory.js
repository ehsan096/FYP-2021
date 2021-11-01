import React from "react";
import CategoryBanner from "../component/LogoSubCategory/CategoryBanner/CategoryBanner";
import BannerLogo from "../component/LogoSubCategory/BannerLogo/BannerLogo";
import Logos from "../component/LogoSubCategory/SubCategoryLogos/Logos";
import Navbar from "../component/Navbar/Navbar";
import { categories } from "../component/LogoSubCategory/DumyData";

import { useParams } from "react-router-dom";

const LogoSubCatogory = ({ setLogo }) => {
  const { variable } = useParams();
  console.log("URL Variable > ", variable);
  return (
    <div>
      <Navbar />
      {categories.map((categry) =>
        categry.category === variable ? (
          <>
            <BannerLogo
              BannerTitle={categry.BannerTitle}
              paragraph={categry.paragraph}
            />
            <Logos setLogo={setLogo} title={categry.title} />
          </>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default LogoSubCatogory;
