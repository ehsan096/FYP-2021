import React from "react";
import MainLogobody from "../component/LogoBody/MainLogobody";

const LogoBodypage = ({ storedLogo, setLogo }) => {
  return (
    <div>
      <MainLogobody storedLogo={storedLogo} setLogo={setLogo} />
    </div>
  );
};

export default LogoBodypage;
