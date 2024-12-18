import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SelectKid = ({ onKidSelect }) => {
  const [kids, setKids] = useState([]);

  //   useEffect(() => {
  //     fetch('http://localhost:8080/kids')
  //         .then(response => response.json())
  //         .then(json => console.log(json))
  //   },[]

  //   );

  useEffect(() => {
    const fetchKids = async () => {
      try {
        const res = await fetch("/api/kids/parent/2");
        const data = await res.json();
        setKids(data);
        // Automatically select the first kid
        if (data.length > 0) {
          onKidSelect(data[0].sysId); // Pass the kid ID to the parent immediately on load
        }
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };

    fetchKids();
  }, []);

  const handleSelectChange = (event) => {
    const kidId = event.target.value;
    onKidSelect(kidId);
  };

  return (
    <>
      <select
        className="pl-4 pr-4 border border-black"
        onChange={handleSelectChange}
      >
        {kids.map(
          (kid) => (
            console.log(kid.sysId),
            (
              <option key={kid.sysId} value={kid.sysId}>
                {kid.firstName} {kid.lastName}
              </option>
            )
          )
        )}
      </select>
    </>
  );
};

// Add PropTypes for props validation
SelectKid.propTypes = {
  onKidSelect: PropTypes.func.isRequired, // onKidSelect should be a required function
};

export default SelectKid;
