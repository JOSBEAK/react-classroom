import { useState } from "react";
import Card from "./Card";
import Input from "./Input";
import Products from "./Products";

   const timetable = [
    {
      id: 1,
      time: "9:00 AM - 10:00 AM",
      subject: "Mathematics",
      faculty: "Dr. Sharma",
    },
    {
      id: 2,
      time: "10:00 AM - 11:00 AM",
      subject: "Physics",
      faculty: "Prof. Verma",
    },
    {
      id: 3,
      time: "11:15 AM - 12:15 PM",
      subject: "Chemistry",
      faculty: "Dr. Singh",
    },
    {
      id: 4,
      time: "1:00 PM - 2:00 PM",
      subject: "Computer Science",
      faculty: "Ms. Gupta",
    },
  ];
function App() {

  const [newStudent, setNewStudent] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingValue, setEditingValue] = useState("");


  const addLecture = () => {
    const studentToAdd = inputValue.trim();
    setNewStudent([...newStudent, studentToAdd]);
    console.log(newStudent)
  }


  return (
    <div className = 'flex flex-col flex-wrap gap-4 p-4 items-center justify-center bg-gray-100 min-h-screen'>
    <div className="flex justify-center space-x-4">
      <Input setInput={setInputValue} />
      <button onClick={addLecture} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> + Add Lecture</button>
     </div>
     {newStudent.map((student) => (
        <div key={student} className="flex items-center space-x-4 bg-white p-4 rounded shadow">
         
         {editingIndex === newStudent.indexOf(student) ? (
           <Input setInput={setEditingValue} value = {editingValue}/>
         ) : (
           <p>{student}</p>
         )}
         <button className = "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setNewStudent(newStudent.filter((s) => s !== student))}>Delete</button>
         
         {editingIndex === newStudent.indexOf(student) ? (
           <button className = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
             const updatedStudents = [...newStudent];
             updatedStudents[editingIndex] = editingValue;
             setNewStudent(updatedStudents);
             setEditingIndex(-1);
             setEditingValue("");
           }}>Save</button>
         ) : (
           <button className = "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
             setEditingIndex(newStudent.indexOf(student));
             setEditingValue(student);
           }}>Edit</button>
         )}
        </div>
   
      ))}
    </div>
  )
}

export default App
