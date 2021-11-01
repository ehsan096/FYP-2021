import React from "react";
import CategoryBanner from "../component/LogoSubCategory/CategoryBanner/CategoryBanner";
import BannerLogo from "../component/LogoSubCategory/BannerLogo/BannerLogo";
import Logos from "../component/LogoSubCategory/SubCategoryLogos/Logos";
import Navbar from "../component/Navbar/Navbar";
import { Logoos } from "../component/LogoSubCategory/DumyData";

import { useParams } from "react-router-dom";

const LogoSubCatogory = ({ setLogo }) => {
  const { variable } = useParams();
  console.log("URL Variable > ", variable);
  return (
    <div>
      <Navbar />
      {Logoos.map((logo) =>
        logo.category === variable ? (
          <>
            <BannerLogo
              BannerTitle={logo.BannerTitle}
              paragraph={logo.paragraph}
            />
            <Logos setLogo={setLogo} title={logo.title} logo={logo.logo} />
          </>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default LogoSubCatogory;
