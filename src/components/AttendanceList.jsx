import { useEffect, useState } from "react";
import Attendance from "../components/Attendance.jsx";
import PropTypes from "prop-types";

const AttendanceList = ({ kidId }) => {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/attendances/kid/${kidId}`
        );
        const data = await res.json();
        setAttendances(data);
      } catch (error) {
        console.log("Error fetching data " + error);
      }
    };
    fetchAttendances();
  }, [kidId]); // Refetch when the kidId prop changes

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
          {attendances.length > 0 ? (
            attendances.map((attendance) => (
              <Attendance key={attendance.sysId} attendance={attendance} />
            ))
          ) : (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                Žádná docházka k zobrazení
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

AttendanceList.propTypes = {
  kidId: PropTypes.string.isRequired,
};

export default AttendanceList;
