import { FaTimesCircle } from 'react-icons/fa'

const Attendance = () => {
  return (
    <tr className="bg-vanilla">
      <td className="border px-4 py-2">21.2.2024</td>
      <td className="border px-4 py-2">prihlasen</td>
      <td className="border px-4 py-2">2</td>
      <td className="border px-4 py-2">
      <FaTimesCircle className="text-red-500" />Odhlasit</td>
    </tr>
  );
};

export default Attendance;
