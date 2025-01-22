import { useEffect, useState, useMemo } from "react";
import Attendance from "../components/Attendance.jsx";
import PropTypes from "prop-types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AttendanceList = ({ kidId }) => {
  const months = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];
  // Memoize the currentDate object - otherwise it would re-render unneccessarily
  const currentDate = useMemo(() => new Date(), []);


  const [attendances, setAttendances] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [selectedMonth, setSelectedMonth] = useState(months[currentDate.getMonth()]);
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());


  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const res = await fetch(`/api/attendances/kid/${kidId}`);
        const data = await res.json();
        const filteredData = filterByMonth(data, currentDate.getFullYear(), currentDate.getMonth());
        setAttendances(filteredData);
      } catch (error) {
        console.log("Error fetching data " + error);
      } finally {
        setLoading(false);
      }
    };
    fetchAttendances();
  }, [kidId, currentDate]); // Refetch when the kidId prop changes

  const filterByMonth = (data, year, month) => {
    return data.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate.getFullYear() === year && itemDate.getMonth() === month;
    });
  };

  const showNextMonth = () => {
    setSelectedMonth((currentlySelectedMonth) => {
      return (currentlySelectedMonth + 1) % 12; // Loop back to 0 after 11 (December)
    });
  };

  const showPreviousMonth = () => {
    setSelectedMonth((currentlySelectedMonth) => {
      return (currentlySelectedMonth - 1 + 12) % 12; // Loop back to 11 (December) after 0 (January)
    });
  };

  if (loading) return <div>Loading...</div>;
  return (
    <div className="overflow-x-auto">
      <span>
        <FaArrowLeft onClick= {showPreviousMonth}/>
      <h1>{months[selectedMonth]}</h1>
      <FaArrowRight onClick={showNextMonth}/>
      </span>
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
              <td colSpan="4" style={{ textAlign: "center" }}>
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
