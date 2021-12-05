import React from "react";
import MainLogobody from "../component/LogoBody/MainLogobody";

const LogoBodypage = ({ storedLogo }) => {
  return (
    <div>
      <MainLogobody storedLogo={storedLogo} />
    </div>
  );
};

export default LogoBodypage;
