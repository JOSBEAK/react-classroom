import { useState } from "react";
import { students } from "./constants";
function App() {
  const [attendance, setAttendance] = useState(students);

  return (
    <div className="flex flex-col flex-wrap gap-4 p-4 items-center justify-center bg-gray-100 min-h-screen">
      <table className="table-auto border-collapse border border-gray-300 w-full mb-4">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((student, index) => (
            <tr
              key={index}
              className={student.isPresent ? "bg-green-100" : "bg-red-100"}
            >
              <td className="border border-gray-300 px-4 py-2">
                {student.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <select
                  value={student.isPresent ? "Present" : "Absent"}
                  onChange={(e) => {
                    const newAttendance = [...attendance];
                    newAttendance[index].isPresent =
                      e.target.value === "Present";
                    setAttendance(newAttendance);
                  }}
                  className="border rounded px-2 py-1"
                >
                  <option value="Present">Present</option>
                  <option value="Absent">Absent</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
