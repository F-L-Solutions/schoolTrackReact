import { useEffect, useState, useMemo } from "react";
import Attendance from "../components/Attendance.jsx";
import PropTypes from "prop-types";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AttendanceList = ({ kidId }) => {
  const months = [
    "Leden",
    "Únor",
    "Březen",
    "Duben",
    "Květen",
    "Červen",
    "Červenec",
    "Srpen",
    "Září",
    "Říjen",
    "Listopad",
    "Prosinec",
  ];
  // Memoize the currentDate object - otherwise it would re-render unneccessarily
  const currentDate = useMemo(() => new Date(), []);

  const [allAttendances, setAllAttendances] = useState([]);
  const [attendances, setAttendances] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(currentDate);

  useEffect(() => {
    const fetchAttendances = async () => {
      try {
        const res = await fetch(`/api/attendances/kid/${kidId}`);
        const data = await res.json();
        // const filteredData = filterByMonth(data, selectedMonth.getFullYear(), selectedMonth.getMonth());
        // setAttendances(filteredData);
        setAllAttendances(data);
        setSelectedMonth(new Date());
        filterByMonth(data, new Date());
      } catch (error) {
        console.error("Error fetching data " + error);
      } finally {
        setLoading(false);
      }
    };
    fetchAttendances();
  }, [kidId]); // Refetch when the kidId prop changes

  useEffect(() => {
    filterByMonth(allAttendances, selectedMonth);
  }, [allAttendances, selectedMonth]);

  const filterByMonth = (data, month) => {
    if (data.length === 0) return;
    const filteredData = data.filter((item) => {
      const itemDate = new Date(item.date);
      return (
        itemDate.getFullYear() === month.getFullYear() &&
        itemDate.getMonth() === month.getMonth()
      );
    });
    setAttendances(filteredData);
  };

  const showNextMonth = () => {
    setSelectedMonth((current) => {
      const nextMonth = new Date(current); // Clone the date
      nextMonth.setDate(1); // Prevents skipping months
      nextMonth.setMonth(current.getMonth() + 1);
      return nextMonth;
    });
  };

  const showPreviousMonth = () => {
    setSelectedMonth((current) => {
      const previousMonth = new Date(current); // Clone the date
      previousMonth.setDate(1); // Prevents skipping months
      previousMonth.setMonth(current.getMonth() - 1);
      return previousMonth;
    });
  };

  if (loading) return <div>Loading...</div>;
  return (
    <div className="overflow-x-auto">
      <span>
        <FaArrowLeft onClick={showPreviousMonth} />
        <h1>{`${
          months[selectedMonth.getMonth()]
        } ${selectedMonth.getFullYear()}`}</h1>
        <FaArrowRight onClick={showNextMonth} />
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
  kidId: PropTypes.number.isRequired,
};

export default AttendanceList;
