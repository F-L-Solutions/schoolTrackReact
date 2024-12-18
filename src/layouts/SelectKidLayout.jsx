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
  //     <SelectKid onKidSelect={handleKidSelect} />
  //     {selectedKidId && <AttendanceList kidId={selectedKidId} />}
  //   </div>
  // );

  return (
    <>
      <Navbar />
      <SelectKid onKidSelect={handleKidSelect} />
      <Outlet context={{ kidId: selectedKidId }} />{" "}
      {/* Pass kidId via context */}{" "}
    </>
  );
};

export default SelectKidLayout;
