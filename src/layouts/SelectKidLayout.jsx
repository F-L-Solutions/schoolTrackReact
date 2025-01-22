import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/Navbar";
import SelectKid from "../components/SelectKid";

const SelectKidLayout = () => {
  const [selectedKidId, setSelectedKid] = useState(null);

  const handleKidSelect = (selectedKidId) => {
    setSelectedKid(selectedKidId);
  };

  // return (
  //   <div>
  //     <Navbar />
  //     <SelectKid onKidSelect={handleKidSelect} />
  //     {selectedKidId && <Outlet kidId="253" />}
  //   </div>
  // );

  return (
    <>
      <Navbar />
      <SelectKid onKidSelect={handleKidSelect} />
      <Outlet context={{ kidId: selectedKidId }} />
    </>
  );
};

export default SelectKidLayout;
