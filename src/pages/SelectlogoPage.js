import React from "react";
import Header from "../component/SelectLogo/Header/Header";
import SelectlogoMain from "../component/SelectLogo/SelectlogoMain";
const SelectlogoPage = ({ storedLogo, setLogo }) => {
  return (
    <div>
      <Header storedLogo={storedLogo} />
      <SelectlogoMain setLogo={setLogo} />
    </div>
  );
};

export default SelectlogoPage;
