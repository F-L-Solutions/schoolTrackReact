import { useEffect, useState, useMemo } from "react";
import Attendance from "../components/Attendance.jsx";
import PropTypes from "prop-types";

const AttendanceList = ({ kidId }) => {
  const [attendances, setAttendances] = useState([]);
  // Memoize the currentDate object - otherwise it would re-render unneccessarily
  const currentDate = useMemo(() => new Date(), []);
  const months = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const res = await fetch(`/api/attendances/kid/${kidId}`);
        const data = await res.json();
        const filteredData = filterByMonth(data, currentDate.getFullYear(), currentDate.getMonth());
        setAttendances(filteredData);
      } catch (error) {
        console.log("Error fetching data " + error);
      }
    };
    fetchAttendances();
  }, [currentDate, kidId]); // Refetch when the kidId prop changes

  const filterByMonth = (data, year, month) => {
    return data.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate.getFullYear() === year && itemDate.getMonth() === month - 1;
    });
  };

  return (
    <div className="overflow-x-auto">
      <h1>{months[currentDate.getMonth()]}</h1>
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
  currentDate: PropTypes.string.isRequired
};

export default AttendanceList;
