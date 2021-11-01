import React from "react";
import Header from "../component/LogoBody/BodyHeader/Header";
import MainLogobody from "../component/LogoBody/MainLogobody";

const LogoBodypage = ({ storedLogo }) => {
  return (
    <div>
      {/* <Header /> */}
      <MainLogobody storedLogo={storedLogo} />
    </div>
  );
};

export default LogoBodypage;
