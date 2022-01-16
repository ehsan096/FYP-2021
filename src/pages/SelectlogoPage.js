import React from "react";
import Header from "../component/SelectLogo/Header/Header";
import SelectlogoMain from "../component/SelectLogo/SelectlogoMain";
const SelectlogoPage = ({ logos, categories, storedLogo, setLogo }) => {
  return (
    <div>
      <Header storedLogo={storedLogo} />
      <SelectlogoMain logos={logos} categories={categories} setLogo={setLogo} />
    </div>
  );
};

export default SelectlogoPage;
