import React from "react";
import MainLogobody from "../component/LogoBody/MainLogobody";

const LogoBodypage = ({
  iconCategories,
  icons,
  shapes,
  storedLogo,
  setLogo,
  updateRecord,
}) => {
  return (
    <div>
      <MainLogobody
        iconCategories={iconCategories}
        icons={icons}
        shapes={shapes}
        storedLogo={storedLogo}
        setLogo={setLogo}
        updateRecord={updateRecord}
      />
    </div>
  );
};

export default LogoBodypage;
