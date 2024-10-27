import PropTypes from "prop-types";

// import { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

const Attendance = ({ attendance }) => {
  const excused = attendance.excused;
  let attendanceStatus = setAttendanceStatus(attendance.attendanceStatus);

  return (
    <tr className="bg-vanilla">
      <td className="border px-4 py-2">{attendance.date}</td>
      <td className="border px-4 py-2">{attendanceStatus}</td>
      <td className="border px-4 py-2">2</td>
      <td className="border px-4 py-2">
        {excused ? (
          ""
        ) : (
          <>
            <FaTimesCircle className="text-red-500" />
            <h2>Odhlásit</h2>
          </>
        )}
      </td>
    </tr>
  );
};

function setAttendanceStatus(attendanceStatus) {
  let status = "";
  switch (attendanceStatus) {
    case "IDLE":
      status = "přihlášen";
      break;
    case "CANCELED_ON_TIME":
      status = "omluven";
      break;
    case "CANCELED_LATE":
      status = "odhlášen pozdě";
      break;
    default:
      break;
  }
  return status;
}

// Define PropTypes
Attendance.propTypes = {
  attendance: PropTypes.object.isRequired, // Or change to the appropriate type (string, number, etc.)
};

export default Attendance;
