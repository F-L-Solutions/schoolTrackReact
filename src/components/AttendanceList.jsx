import { useEffect, useState } from "react";
import Attendance from "../components/Attendance.jsx";

const AttendanceList = () => {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const res = await fetch("http://localhost:8080/attendances/kid/253");
        const data = await res.json();
        setAttendances(data);
      } catch (error) {
        console.log("Error fetching data " + error);
      }
    };
    fetchAttendances();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table-auto">
        <thead>
          <tr className="bg-yellowGreen px-4 py-2">
            <th>Datum</th>
            <th>Stav</th>
            <th>Pocet nahrad</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {attendances.map((attendance) => (
            <Attendance key={attendance.sysId} attendance={attendance} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceList;
