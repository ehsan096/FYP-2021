import React from "react";
import Header from "../component/SelectLogo/Header/Header";
import SelectlogoMain from "../component/SelectLogo/SelectlogoMain";
const SelectlogoPage = ({ setLogo }) => {
  return (
    <div>
      <Header />
      <SelectlogoMain setLogo={setLogo} />
    </div>
  );
};

export default SelectlogoPage;
