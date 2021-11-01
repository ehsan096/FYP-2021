import React from "react";
import CategoryBanner from "../CategoryBanner/CategoryBanner";

const BannerLogo = ({ BannerTitle, paragraph }) => {
  return (
    <div>
      <CategoryBanner title={BannerTitle} paragraph={paragraph} />
    </div>
  );
};

export default BannerLogo;
