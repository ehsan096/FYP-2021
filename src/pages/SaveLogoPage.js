import React from "react";
import Savelogo from "../component/savelogo/Savelogo";

const SaveLogoPage = ({ setLogo }) => {
  return (
    <div>
      <Savelogo setLogo={setLogo} />
    </div>
  );
};

export default SaveLogoPage;
