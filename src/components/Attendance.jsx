import PropTypes from "prop-types";
import { FaTimesCircle } from "react-icons/fa";

const Attendance = ({ attendance }) => {
  return (
    <tr className="bg-vanilla">
      <td className="border px-4 py-2">{attendance.date}</td>
      <td className="border px-4 py-2">{attendance.attendanceStatus}</td>
      <td className="border px-4 py-2">2</td>
      <td className="border px-4 py-2">
        <FaTimesCircle className="text-red-500" />
        Odhlasit
      </td>
    </tr>
  );
};

// Define PropTypes
Attendance.propTypes = {
  attendance: PropTypes.object.isRequired, // Or change to the appropriate type (string, number, etc.)
};

export default Attendance;
