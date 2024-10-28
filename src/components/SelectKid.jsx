import { useState, useEffect } from "react";

const SelectKid = () => {
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
        const res = await fetch("http://localhost:8080/kids/parent/2");
        const data = await res.json();     
        console.log(data);
        setKids(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };

    fetchKids();
  }, []);

  return (
    <>
      <select className="pl-4 pr-4 border border-black">
        {kids.map((kid) => (
            console.log(kid.sysId),
          <option key={kid.sysId} value={kid.sysId}>
            {kid.firstName} {kid.lastName}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectKid;