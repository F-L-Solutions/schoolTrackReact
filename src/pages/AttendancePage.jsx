import { useOutletContext } from "react-router-dom";

import AttendanceList from "../components/AttendanceList";
import PropTypes from "prop-types";

const AttendancePage = () => {
  const { kidId } = useOutletContext();
  return (
    <div className="flex justify-center align-middle">
      {kidId && <AttendanceList kidId={kidId} />}
    </div>
  );
};

AttendancePage.propTypes = {
  kidId: PropTypes.string.isRequired,
};
export default AttendancePage;
